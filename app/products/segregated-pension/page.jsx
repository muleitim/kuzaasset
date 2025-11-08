import { Box } from "@chakra-ui/react";
// app/products/segregated-pension-mandate/page.jsx

// SEO Metadata
export const metadata = {
  title: "Kuza Segregated Pension Mandate - Retirement Investment Solution by Kuza Asset Management Ltd",
  description: "Kuza Segregated Pension Mandate is a retirement investment solution offered by Kuza Asset Management Limited, a fund manager registered with both the Capital Markets Authority (CMA) and Retirement Benefits Authority (RBA). Experience fiducial peace, unmatched investment strategies, and superior returns.",
  keywords: [
    "Kuza Segregated Pension Mandate",
    "Kuza Asset Management",
    "Retirement Investment Solution Kenya",
    "Segregated Mandate Fund Kenya",
    "Pension Investment Kenya",
    "Fixed Income Mandates",
    "Offshore Investment Mandates",
    "RBA Registered Fund Manager",
    "CMA Registered Fund Manager",
    "Kuza Pension Fund"
  ].join(", ")
};

export default function SegregatedPensionMandatePage() {
  return (
    <Box as="section" bg="blue.300" py={4} > 
    <div className="container">

      {/* Structured Data JSON-LD - Financial Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Kuza Segregated Pension Mandate",
            "description": "Kuza Segregated Pension Mandate is a retirement investment solution offered by Kuza Asset Management Limited which is a fund manager registered with both the Capital Markets Authority (CMA) and Retirement Benefits Authority (RBA). This solid regulatory foundation speaks to our commitment to compliance and accountability.",
            "url": "https://www.kuza.africa/products/segregated-pension-mandate",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa"
            },
            "investmentType": "Segregated Pension Mandate",
            "currenciesAccepted": "KES",
            "fundDetails": {
              "fundName": "Kuza Segregated Pension Mandate",
              "fundManager": "Kuza Asset Management Ltd",
              "regulatoryRegistration": [
                "Capital Markets Authority (CMA)",
                "Retirement Benefits Authority (RBA)"
              ],
              "objectives": [
                "Deliver fiducial peace through unmatched investment strategies and superior returns",
                "Offer focused asset-specific mandates or complete investment management functions"
              ],
              "expertiseAreas": [
                "Segregated Mandates",
                "Fixed Income Mandates",
                "Offshore Investment Mandates",
                "Shared Mandates"
              ]
            }
          })
        }}
      />

      {/* Structured Data JSON-LD - FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Kuza Segregated Pension Mandate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kuza Segregated Pension Mandate is a retirement investment solution offered by Kuza Asset Management Limited which is a fund manager registered with both the Capital Markets Authority (CMA) and Retirement Benefits Authority (RBA). This solid regulatory foundation speaks to our commitment to compliance and accountability. With Kuza Segregated Pension Mandate, Kuza asset management Ltd gives the promise of fiducial peace through unmatched investment strategies and superior returns. Whether you want us to have a focused, asset-specific mandate or prefer to hand over the reins for the entire investment function of your fund, we are well-equipped to handle both scenarios."
                }
              },
              {
                "@type": "Question",
                "name": "Why invest in Kuza Segregated Pension Mandate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1. Extensive expertise in Segregated Mandates. 2. Expertise in Fixed Income Mandates. 3. Expertise in Offshore Investment Mandates. 4. Shared Mandate to dilute single-sourcing risks."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of Kuza Segregated Pension Mandate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1. Unique investment value proposition only available with Kuza. 2. Benefit from competitive performance based outcomes. 3. Leverage asset specific expertise for accelerated growth and returns. 4. Create competitive platform for your investment management function."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Segregated Pension Mandate</h1>
        <p>Kuza Segregated Pension Mandate is a retirement investment solution offered by Kuza Asset Management Limited which is a fund manager registered with both the Capital Markets Authority (CMA) and Retirement Benefits Authority (RBA). This solid regulatory foundation speaks to our commitment to compliance and accountability. </p>
        <p>With Kuza Segregated Pension Mandate, Kuza asset management Ltd gives the promise of fiducial peace through unmatched investment strategies and superior returns. Whether you want us to have a focused, asset-specific mandate or prefer to hand over the reins for the entire investment function of your fund, we are well-equipped to handle both scenarios.</p>
        <img src="/images/segregated.jpg" alt="Kuza Segregated Pension Mandate" className="hero-image" />

        <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

      </section>

      {/* Reasons to Invest */}
      <section className="bottom-margin">
        <h2>Reasons for Investing in the Kuza Pension Segregated Mandate</h2>
        <ul>
          <li>Extensive expertise in Segregated Mandates.</li>
          <li>Expertise in Fixed Income Mandates.</li>
          <li>Expertise in Offshore Investment Mandates.</li>
          <li>Shared Mandate to dilute single-sourcing risks.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bottom-margin">
        <h2>Benefits of the Kuza Segregated Pension Mandate</h2>
        <ul>
          <li>Unique investment value proposition only available with Kuza.</li>
          <li>Benefit from competitive performance based outcomes.</li>
          <li>Leverage asset specific expertise for accelerated growth and returns.</li>
          <li>Create competitive platform for your investment management function.</li>
        </ul>
      </section>

      {/* Expertise */}
      <section className="bottom-margin">
        <h2>Kuza Segregated Pension Mandate Expertise</h2>

        <h3>Expertise in Segregated Mandates</h3>
        <p>The Kuza Segregated Pension Mandate wields Expertise in Segregated Mandates: our license with the Retirement Benefits Authority and Capital Markets Authority allows us to be appointed as Fund Managers for retirement Benefit Schemes in Kenya. Our aggregated experience of over 100 years of managing segregated mandates including pension schemes will deliver value to your fund.</p>

        <h3>Expertise in Fixed Income Mandates</h3>
        <p>The Kuza Segregated Pension Mandate wields Expertise in Fixed Income Mandates: we have a unique strategy of managing actively traded fixed income portfolios and this sets us apart from other fund managers who invest passively in fixed income opportunities. Our bold approach has enabled us to evade the negative impacts of rising interest rates for portfolios with legacy bonds.</p>

        <h3>Expertise in Offshore Investment Mandates</h3>
        <p>The Kuza Segregated Pension Mandate wields Expertise in Offshore Investment Mandates: we have a unique strategy of exploring and mining value in offshore opportunities where other fund managers shy away and end up getting stuck with traditional assets. We are also exploring a vast array of alternative investments for more value addition.</p>
      </section>

      {/* Call to Action */}
      
      <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

    </div>
    </Box>
  );
}
