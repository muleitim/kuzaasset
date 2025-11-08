import { Box } from "@chakra-ui/react";
// app/products/private-wealth-management/page.jsx

// SEO Metadata
export const metadata = {
  title: "Kuza Private Wealth Management Fund - Tailored Investment Solutions for High-Value Investors",
  description:
    "The Kuza Private Wealth Management Fund is designed for investors with unique investment requirements who require customized solutions. Ideal for accredited individual investors or high-value families seeking a diversified portfolio, optimized risk-adjusted returns, and full transparency.",
  keywords: [
    "Kuza Private Wealth Management Fund",
    "Private Wealth Management Kenya",
    "Kuza Asset Management",
    "High net worth investors Kenya",
    "Customized investment solutions Kenya",
    "Private investment fund Kenya",
    "Offshore investments Kenya",
    "Local equities Kenya",
    "Fixed income Kenya",
    "Eurobonds Kenya",
    "Treasury bills Kenya",
    "Treasury bonds Kenya",
    "Infrastructure bonds Kenya",
    "Active fixed income trading Kenya",
    "Primary bond market Kenya",
    "Secondary bond trading Kenya",
    "Private wealth portfolio management",
    "Accredited investors Kenya",
    "High value families investment Kenya"
  ].join(", "),
};

export default function PrivateWealthManagementPage() {
  return (
    <Box as="section" bg="blue.300" py={4} >
    <div className="container">

      {/* Structured Data JSON-LD: Financial Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Kuza Private Wealth Management Fund",
            "description":
              "The Kuza Private Wealth Management Fund is designed as a Private Wealth Management package perfectly suited to those for whom a generic off-the-shelf solution would simply not do. The Kuza Private Wealth Management Fund is ideal for Investors with unique investment requirements who require unique solutions.",
            "url": "https://www.kuza.africa/products/private-wealth-management",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa"
            },
            "investmentType": "Private Wealth Management Fund",
            "currenciesAccepted": "KES",
            "fundDetails": {
              "minimumInvestment": "KES 10000000",
              "annualManagementFee": "1.00% p.a.",
              "otherManagementFees": "80/20 share of outperformance",
              "targetHurdleRate": "12% to 13% p.a. for Kenya Shilling Portfolios",
              "investmentContract": "2-year renewable investment contract",
              "custodyAccount": "Client funds and investments are always held in a bank custody account owned by the client."
            },
            "assetFocus": [
              "Offshore equities",
              "Local equities",
              "Local fixed income",
              "Offshore fixed income"
            ],
            "features": [
              "Treasury bills",
              "Treasury bonds",
              "Infrastructure bonds",
              "Eurobonds",
              "Bank deposits"
            ]
          }),
        }}
      />

      {/* Structured Data JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Kuza Private Wealth Management Fund?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The Kuza Private Wealth Management Fund is designed as a Private Wealth Management package perfectly suited to those for whom a generic off-the-shelf solution would simply not do. The Kuza Private Wealth Management Fund is ideal for Investors with unique investment requirements who require unique solutions. With the Kuza Private Wealth Management Fund, our wealth of experience allows us to design an interactive investment process that will bring your financial dreams to life. We are confident in our ability to satisfy even the most demanding accredited individual investor or high-value families. Our client-obsessed focus ensures that we execute a diversified portfolio to optimize your risk-adjusted return at the lowest charge possible."
                }
              },
              {
                "@type": "Question",
                "name": "What are the key milestones of the Kuza Private Wealth journey?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "1. Determination of your individual or family’s total financial objectives and needs. 2. Creation of investment strategy and action plans documented in an Investment Policy Statement. 3. Implementation and periodic review."
                }
              },
              {
                "@type": "Question",
                "name": "What are the features of the Kuza Private Wealth Management Fund?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The focus is on low risk fixed income securities which include Treasury bills, Treasury bonds, Infrastructure bonds, Eurobonds, and Bank deposits. Kuza Asset Management Ltd brings in its expertise in active fixed-income trading through Primary bond market participation via competitive bidding and Secondary bond market trading."
                }
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Private Wealth Management Fund</h1>
        <p>The Kuza Private Wealth Management Fund is designed as a Private Wealth Management package perfectly suited to those for whom a generic off-the-shelf solution would simply not do. The Kuza Private Wealth Management Fund is ideal for Investors with unique investment requirements who require unique solutions. With the Kuza Private Wealth Management Fund, our wealth of experience allows us to design an interactive investment process that will bring your financial dreams to life. We are confident in our ability to satisfy even the most demanding accredited individual investor or high-value families. Our client-obsessed focus ensures that we execute a diversified portfolio to optimize your risk-adjusted return at the lowest charge possible. <br />
        <br />
        Your entire Kuza Private Wealth journey spans three key milestones as captured below:</p>
        <ul>
          <li>Determination of your individual or family&apos;s total financial objectives and needs.</li>
          <li>Creation of investment strategy and action plans documented in an Investment Policy Statement.</li>
          <li>Implementation and periodic review.</li>
        </ul>
        <img src="/images/private-wealth.jpg" alt="Kuza Private Wealth Management Fund" className="hero-image" />

        <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bottom-margin">
        <h2>Kuza&apos;s Private Wealth Management Value Proposition</h2>
        <p>Kuza&apos;s Private Wealth Management value proposition is to provide an unrivaled complete and customizable solution to satisfy any investment goals and ensuring cost and tax efficiency which are the cornerstones of our portfolio construction. With the Kuza Private Wealth Management Fund, We actualize your Investment Policy Statement through a wide variety of Investment classes. With a particular focus on your unique requirements, we draft an optimal asset mix of:</p>
        <ul>
          <li>Offshore equities.</li>
          <li>Local equities.</li>
          <li>Local fixed income.</li>
          <li>Offshore fixed income.</li>
        </ul>
      </section>

      {/* Fund Factsheet */}
      <section className="bottom-margin">
        <h2>Kuza Private Wealth Management Fund Factsheet</h2>
        <table>
          <tbody>
            <tr><td>Fund Name</td><td>Kuza Private Wealth Management Fund</td></tr>
            <tr><td>Minimum Investment Amount</td><td>KES 10000000</td></tr>
            <tr><td>Annual Management Fee</td><td>1.00% p.a.</td></tr>
            <tr><td>Other Management Fees</td><td>80/20 share of outperformance</td></tr>
            <tr><td>Investment Contract</td><td>2-year renewable investment contract</td></tr>
            <tr><td>Target Hurdle Rate</td><td>12% to 13% p.a. for Kenya Shilling Portfolios</td></tr>
          </tbody>
        </table>
      </section>

      {/* Features */}
      <section className="bottom-margin">
        <h2>Features of Private Wealth Management Fund</h2>
        <p>The focus is on low risk fixed income securities which include the following:</p>
        <ul>
          <li>Treasury bills</li>
          <li>Treasury bonds</li>
          <li>Infrastructure bonds</li>
          <li>Eurobonds</li>
          <li>Bank deposits</li>
        </ul>
      </section>

      {/* Expertise */}
      <section className="bottom-margin">
        <h2>Kuza Asset Management Ltd Expertise in Fixed Income Trading</h2>
        <p>For the kuza private wealth management fund, Kuza Asset Management Ltd brings in its expertise in active fixed-income trading through the following:</p>
        <ul>
          <li>Primary bond market participation through competitive bidding</li>
          <li>Secondary bond market trading</li>
        </ul>
      </section>

      {/* Custody & Oversight */}
      <section className="bottom-margin">
        <h2>Custody and Oversight</h2>
        <p>With the kuza private wealth management fund, for full disclosure and oversight, client funds and investments are always held in a bank custody account owned by the client.</p>
      </section>

      {/* Call to Action */}

      <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

    </div>
   </Box>
  );
}
