import { Box } from "@chakra-ui/react";
// app/contact/page.jsx

// SEO Metadata
export const metadata = {
  title: "Contact Kuza Asset Management Ltd - Fund Manager Licensed by CMA & RBA | Nairobi, Kenya",
  description:
    "Get in touch with Kuza Asset Management Ltd. Visit our office at Kings Prism Tower 12th Floor, Third Ngong Avenue, Nairobi, Kenya. Call (254) 705 666 444 or email info@kuza.africa for investment inquiries.",
  keywords: [
    "Kuza Asset Management contacts",
    "Kuza Asset Management Ltd",
    "contact Kuza",
    "fund manager Nairobi",
    "Kuza office Kenya",
    "Kuza address",
    "Kuza phone number",
    "Kuza email",
    "investment manager Kenya",
    "licensed fund manager CMA RBA"
  ].join(", "),
};

export default function ContactPage() {
  return (
    <Box as="section" bg="blue.300" py={4} >  
    <div className="container">

      {/* Structured Data JSON-LD - Organization Contact Info */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Kuza Asset Management Ltd",
            "url": "https://www.kuza.africa",
            "logo": "https://www.kuza.africa/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254705666444",
              "contactType": "Customer Service",
              "email": "info@kuza.africa",
              "areaServed": "KE",
              "availableLanguage": ["English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kings Prism Tower 12th Floor, Third Ngong Avenue",
              "postalCode": "00100",
              "addressLocality": "Nairobi",
              "addressCountry": "Kenya"
            },
            "sameAs": [
              "https://www.linkedin.com/company/kuza-asset-management",
              "https://www.kuza.africa"
            ]
          })
        }}
      />

      {/* Structured Data JSON-LD - ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254705666444",
                "email": "info@kuza.africa",
                "contactType": "Customer Service"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kings Prism Tower 12th Floor, Third Ngong Avenue",
                "postalCode": "00100",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Asset Management Ltd Contacts</h1>
        <p>Get in touch with Kuza Asset Management Ltd for inquiries, investments, or support.</p>
        <img src="/images/prism-tower.jpg" alt="Kuza Asset Management Office" className="hero-image" />
        
         <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

      </section>

      {/* Physical Address */}
      <section className="bottom-margin">
        <h2>Physical Address</h2>
        <p>Kings Prism Tower 12th Floor, Third Ngong Avenue</p>
        <p>P.O. Box 26180-00100</p>
        <p>Nairobi, Kenya</p>
      </section>

      {/* Contact Information */}
      <section className="bottom-margin">
        <h2>Contacts</h2>
        <p><strong>Telephone:</strong> (254) 705 666 444</p>
        <p><strong>Email:</strong> info@kuza.africa</p>
      </section>

      {/* Map (Optional for SEO Enhancement) */}
      <section className="bottom-margin">
        <h2>Find Us</h2>
        <iframe
          title="Kuza Asset Management Location Map"
          src="https://www.google.com/maps?q=Kings+Prism+Tower,+Third+Ngong+Avenue,+Nairobi,+Kenya&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* CTA */}
       <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

    </div>
    </Box>
  );
}
