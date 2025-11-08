import { Box } from "@chakra-ui/react";
// SEO Metadata
export const metadata = {
  title: "Kuza Individual Provident Plan (IPP) - Retirement Savings with Capital Growth & Tax Efficiency",
  description:
    "Secure your retirement with the Kuza Individual Provident Plan (IPP), licensed by the RBA. Designed for long-term growth, tax efficiency, and capital preservation for individual investors.",
  keywords: [
    "Kuza Individual Provident Plan",
    "Kuza IPP",
    "Kuza retirement plan",
    "Kenya provident fund",
    "RBA licensed retirement plan",
    "retirement savings Kenya",
    "tax-efficient savings Kenya",
    "long-term investment Kenya",
    "capital preservation",
    "Kuza Asset Management",
    "retirement benefits Kenya"
  ].join(", "),
};

export default function IndividualProvidentPlanPage() {
  return (
    <Box as="section" bg="blue.300" py={4} > 
    <div className="container">

      {/* Structured Data JSON-LD for Financial Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Kuza Individual Provident Plan (IPP)",
            "description":
              "Licensed by the Retirement Benefits Authority (RBA), the Kuza Individual Provident Plan provides benefits to its members and beneficiaries, offering capital preservation while targeting higher returns.",
            "url": "https://www.kuza.africa/products/individual-provident-plan",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa",
            },
            "currenciesAccepted": "KES",
            "investmentType": "Retirement Provident Plan",
            "fundDetails": {
              "minimumInvestment": "KES 1000",
              "minimumTopUp": "KES 100",
              "fundManager": "Kuza Asset Management Ltd",
              "regulator": "Retirement Benefits Authority (RBA)",
              "investmentObjective": "Long-term capital growth, capital preservation, and tax efficiency.",
              "targetClients": [
                "Individuals saving toward retirement",
                "Individuals seeking tax-efficient savings",
                "Individuals consolidating deferred benefits"
              ]
            }
          }),
        }}
      />

      {/* Structured Data JSON-LD for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Kuza Individual Provident Plan (IPP)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The Kuza Individual Provident Plan (IPP) is a licensed retirement savings solution regulated by the RBA, designed to help individuals grow and preserve capital while saving toward retirement.",
                },
              },
              {
                "@type": "Question",
                "name": "Who can invest in the Kuza Individual Provident Plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The Kuza IPP is ideal for individuals saving toward retirement, those seeking tax-efficient savings growth, and those consolidating deferred benefits into one easily monitored fund.",
                },
              },
              {
                "@type": "Question",
                "name": "What are the benefits of the Kuza Individual Provident Plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Key benefits include capital preservation, long-term growth of capital, tax savings, asset diversification, sufficient liquidity, and rider risk benefits.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Individual Provident Plan (IPP)</h1>
        <p>
          Licensed by the Retirement Benefits Authority (RBA), the Kuza Individual Provident Plan (IPP) is designed to provide benefits to its members and beneficiaries while preserving capital and targeting higher long-term returns.
        </p>
        <img
          src="/images/provident.jpg"
          alt="Kuza Individual Provident Plan"
          className="hero-image"
        />

       <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>
        
      </section>

      {/* Suitable Clients */}
      <section className="bottom-margin">
        <h2>Who Should Join the Kuza Individual Provident Plan?</h2>
        <ul>
          <li>Individuals who want to save toward retirement to maintain their standard of living post-retirement.</li>
          <li>Individuals who want to save in a tax-efficient environment to maximize growth.</li>
          <li>Individuals who want to consolidate their deferred benefits into one fund they can easily monitor.</li>
        </ul>
      </section>

      {/* Investment Objectives */}
      <section className="bottom-margin">
        <h2>Investment Objectives</h2>
        <ul>
          <li>Sufficient liquidity</li>
          <li>Real return</li>
          <li>Tax savings</li>
          <li>Long-term growth of capital</li>
          <li>Asset liability matching</li>
          <li>Asset diversification</li>
          <li>Rider risk benefits</li>
        </ul>
      </section>

      {/* Plan Factsheet */}
      <section className="bottom-margin">
        <h2>Kuza Individual Provident Plan Factsheet</h2>
        <table>
          <tbody>
            <tr><td>Fund Name</td><td>Kuza Individual Provident Plan (IPP)</td></tr>
            <tr><td>Regulator</td><td>Retirement Benefits Authority (RBA)</td></tr>
            <tr><td>Fund Manager</td><td>Kuza Asset Management Ltd</td></tr>
            <tr><td>Fund Structure</td><td>Retirement Provident Plan</td></tr>
            <tr><td>Currency</td><td>KES</td></tr>
            <tr><td>Minimum Initial Investment</td><td>KES 1000</td></tr>
            <tr><td>Minimum Top-up</td><td>KES 100</td></tr>
            <tr><td>Investment Objective</td><td>Long-term capital growth, tax efficiency, and capital preservation</td></tr>
            <tr><td>Target Clients</td><td>Individual savers, self-employed professionals, and deferred benefit holders</td></tr>
          </tbody>
        </table>
      </section>

     <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

    </div>
    </Box>
  );
}
