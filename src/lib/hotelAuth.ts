import { supabase } from './supabase';

export interface HotelSession {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  contact_person?: string;
}

/**
 * Register a new hotel partner
 */
export async function registerHotel(
  email: string,
  password: string,
  hotelName: string,
  phone?: string,
  address?: string,
  city?: string,
  contactPerson?: string
) {
  try {
    // Hash password using a simple approach (in production, use bcrypt)
    const passwordHash = await hashPassword(password);

    const { data, error } = await supabase
      .from('hotels')
      .insert([
        {
          email,
          password_hash: passwordHash,
          name: hotelName,
          phone,
          address,
          city,
          contact_person: contactPerson,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    // Store session in localStorage
    const session = {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      contact_person: data.contact_person,
    };
    localStorage.setItem('hotelSession', JSON.stringify(session));

    return { success: true, data: session };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error };
  }
}

/**
 * Login a hotel partner
 */
export async function loginHotel(email: string, password: string) {
  try {
    const { data, error } = await supabase
      .from('hotels')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !data) {
      throw new Error('Hotel not found');
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, data.password_hash);
    if (!isValidPassword) {
      throw new Error('Invalid password');
    }

    // Store session in localStorage
    const session: HotelSession = {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      contact_person: data.contact_person,
    };
    localStorage.setItem('hotelSession', JSON.stringify(session));

    return { success: true, data: session };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error };
  }
}

/**
 * Get current hotel session
 */
export function getHotelSession(): HotelSession | null {
  if (typeof window === 'undefined') return null;
  
  const session = localStorage.getItem('hotelSession');
  return session ? JSON.parse(session) : null;
}

/**
 * Logout hotel
 */
export function logoutHotel() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('hotelSession');
  }
}

/**
 * Check if hotel is logged in
 */
export function isHotelLoggedIn(): boolean {
  return getHotelSession() !== null;
}

/**
 * Simple password hashing (in production, use bcrypt library)
 */
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verify password against hash
 */
async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password);
  return passwordHash === hash;
}
