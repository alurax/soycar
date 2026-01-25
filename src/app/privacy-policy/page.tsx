import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | SoyCar Transport & Rentals",
  description: "Privacy Policy for SoyCar Transport & Rentals. Learn how we protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="outline" className="mb-6">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: January 25, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              SoyCar Transport & Rentals ("we," "us," "our," or "Company") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Personal Information:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Pickup and drop-off locations</li>
                  <li>Travel dates and times</li>
                  <li>Number of passengers</li>
                  <li>Flight information (if applicable)</li>
                  <li>Special requests or requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Automatic Information:</h3>
                <p className="text-muted-foreground">
                  When you visit our website, we automatically collect certain information including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Device type and identifiers</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Process and fulfill your booking requests</li>
              <li>Provide customer service and support</li>
              <li>Send booking confirmations and updates</li>
              <li>Communicate about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Service Providers:</strong> Third parties who assist us in providing services (payment processors, hosting providers)</li>
              <li><strong>Legal Compliance:</strong> When required by law or legal process</li>
              <li><strong>Business Partners:</strong> With your consent for specific services</li>
              <li><strong>Hotels/Tour Operators:</strong> When necessary to fulfill your booking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Lodge a complaint with relevant authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your experience, analyze site traffic, 
              and personalize content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices 
              of these external sites. Please review their privacy policies independently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children. If we become aware of such collection, we will delete the information and notify the responsible party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. 
              Booking information is typically retained for 3 years for tax and legal compliance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. International Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to, stored in, and processed in the Philippines and other countries. 
              By using our services, you consent to the transfer of your information to countries outside your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting to the website. 
              Your continued use of our services following the posting of revised Privacy Policy means that you accept and agree to 
              the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <p className="text-foreground font-medium mb-2">SoyCar Transport & Rentals</p>
              <p className="text-muted-foreground mb-1">📞 +63 975 380 3735</p>
              <p className="text-muted-foreground mb-1">📍 El Nido & Puerto Princesa, Palawan, Philippines</p>
              <p className="text-muted-foreground">🌐 www.soycar.com</p>
            </div>
          </section>

          <section>
            <p className="text-sm text-muted-foreground italic">
              This Privacy Policy is provided as-is for legal compliance purposes. SoyCar Transport & Rentals reserves the right 
              to modify this policy at any time. Please review this policy periodically for updates.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
