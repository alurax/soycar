import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | SoyCar Transport & Rentals",
  description: "Terms and Conditions for SoyCar Transport & Rentals services.",
};

export default function TermsConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: January 25, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the SoyCar Transport & Rentals website and services, you accept and agree to be bound by 
              and comply with these Terms and Conditions. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Service Description</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SoyCar Transport & Rentals provides the following services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Airport transfers between El Nido and Puerto Princesa</li>
              <li>Inland tours and sightseeing services</li>
              <li>Vehicle rentals with or without drivers</li>
              <li>Customized transport solutions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Booking and Reservations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.1 Making a Booking</h3>
                <p className="text-muted-foreground">
                  To make a booking, you must provide accurate and complete information. You are responsible for providing 
                  correct personal details, travel dates, and preferences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.2 Confirmation</h3>
                <p className="text-muted-foreground">
                  A booking is not confirmed until we send a written confirmation via email. Booking requests are subject to 
                  availability and our acceptance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">3.3 Booking Window</h3>
                <p className="text-muted-foreground">
                  We require a minimum of 24 hours notice for booking requests. For peak seasons (December, April, May), 
                  we recommend booking at least 3-7 days in advance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Pricing and Payment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.1 Pricing</h3>
                <p className="text-muted-foreground">
                  All prices are quoted in Philippine Pesos (PHP) unless otherwise stated. Prices are subject to change 
                  without notice. We provide binding quotes within 2 hours of booking request.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.2 Payment Terms</h3>
                <p className="text-muted-foreground">
                  Payment is due in full upon service completion unless a prior arrangement has been made. We accept cash, 
                  bank transfers, and credit cards where available.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">4.3 Taxes and Fees</h3>
                <p className="text-muted-foreground">
                  All applicable taxes, tolls, and fees are included in the quoted price unless otherwise specified.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cancellation Policy</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>More than 48 hours notice:</strong> Full refund or reschedule at no charge</li>
              <li><strong>24-48 hours notice:</strong> 50% cancellation fee</li>
              <li><strong>Less than 24 hours notice:</strong> 100% cancellation fee (full amount due)</li>
              <li><strong>No-show:</strong> Full amount charged, unless emergency circumstances apply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Weather and Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              SoyCar is not responsible for cancellations or delays caused by severe weather, natural disasters, typhoons, 
              traffic conditions beyond our control, or other force majeure events. In such cases, we will attempt to reschedule 
              your service or provide a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Passenger Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Arrive on time for scheduled pickups</li>
              <li>Provide accurate travel information</li>
              <li>Comply with all traffic laws and regulations</li>
              <li>Treat our vehicles and staff with respect</li>
              <li>Report any concerns immediately</li>
              <li>Not consume alcohol or use illegal substances in vehicles</li>
              <li>Not smoke inside our vehicles</li>
              <li>Not damage or deface our vehicles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Insurance and Liability</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.1 Vehicle Insurance</h3>
                <p className="text-muted-foreground">
                  All our vehicles are fully insured for passenger safety. Insurance covers liability for third-party injuries or property damage.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.2 Personal Belongings</h3>
                <p className="text-muted-foreground">
                  While we take reasonable precautions, SoyCar is not responsible for loss, theft, or damage to personal belongings. 
                  Passengers are advised to keep valuables with them at all times.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">8.3 Liability Limitation</h3>
                <p className="text-muted-foreground">
                  SoyCar's liability is limited to the amount paid for the service. We are not responsible for indirect, 
                  incidental, or consequential damages.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Driver Conduct</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our drivers are professional and trained in safe driving practices. If you have concerns about a driver's conduct, 
              please report immediately to management. We encourage customer feedback to maintain our high service standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Vehicle Rental Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">10.1 Rental Agreement</h3>
                <p className="text-muted-foreground">
                  Self-drive rentals require a valid driver's license and passport. An additional rental agreement will be provided at pickup.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">10.2 Vehicle Condition</h3>
                <p className="text-muted-foreground">
                  Rented vehicles should be returned in the same condition as received. Excessive wear and damage will be charged to the renter.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">10.3 Late Returns</h3>
                <p className="text-muted-foreground">
                  Late return charges apply at ₱500 per hour or portion thereof after the agreed return time.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Age Requirements</h2>
            <p className="text-muted-foreground leading-relaxed">
              Passengers must be at least 3 years old for safety seat requirements (infants and toddlers). 
              Self-drive renters must be at least 21 years old with a valid driver's license.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Special Requests</h2>
            <p className="text-muted-foreground leading-relaxed">
              Special requests (infant seats, wheelchair accessibility, specific routes) should be communicated at booking. 
              We will do our best to accommodate them based on availability and feasibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Prohibited Activities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Passengers are prohibited from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Consuming alcohol or using illegal substances</li>
              <li>Smoking inside vehicles</li>
              <li>Playing loud music or disturbing other passengers</li>
              <li>Damaging or defacing vehicles</li>
              <li>Engaging in illegal activities</li>
              <li>Harassing drivers or staff</li>
              <li>Exceeding passenger capacity limits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, SoyCar Transport & Rentals shall not be liable for any indirect, 
              incidental, special, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Website Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information on our website is provided "as is" without warranties of any kind. We do not guarantee the 
              accuracy, completeness, or timeliness of website content. Your use of our website is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any disputes arising from these Terms and Conditions or our services shall be resolved through:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Good faith negotiation between parties</li>
              <li>Mediation if negotiation fails</li>
              <li>Arbitration or legal proceedings if mediation is unsuccessful</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">17. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of the Philippines, 
              and you irrevocably submit to the exclusive jurisdiction of the courts located in Palawan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">18. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              SoyCar reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">19. Contact Information</h2>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <p className="text-foreground font-medium mb-2">SoyCar Transport & Rentals</p>
              <p className="text-muted-foreground mb-1">📞 +63 975 380 3735</p>
              <p className="text-muted-foreground mb-1">📍 El Nido & Puerto Princesa, Palawan, Philippines</p>
              <p className="text-muted-foreground">🌐 www.soycar.com</p>
            </div>
          </section>

          <section>
            <p className="text-sm text-muted-foreground italic">
              By using SoyCar Transport & Rentals services, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
