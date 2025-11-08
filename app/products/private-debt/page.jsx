import { Box } from "@chakra-ui/react";
// app/products/private-debt/page.jsx

// SEO Metadata
export const metadata = {
  title: "Kuza Private Debt Fund - Alternative Fixed Income Investment | High Yield Private Credit Kenya",
  description: "Invest in the Kuza Private Debt Fund through Kuza Private Debt 001 LLP. Participate in a fast-growing global asset class offering competitive risk-weighted returns, quarterly interest payouts, and diversification beyond government bonds, real estate, and listed equities.",
  keywords: [
    "Kuza Private Debt Fund",
    "private debt Kenya",
    "Kuza Private Debt 001 LLP",
    "alternative investments Kenya",
    "corporate bonds Kenya",
    "commercial papers Kenya",
    "fixed income Kenya",
    "Kuza Asset Management",
    "CMA regulated investment manager",
    "high yield investments Kenya",
    "private credit Kenya",
    "unlisted securities Kenya",
    "microfinance investments Kenya",
    "quarterly interest payments",
    "Kuza investments",
    "private investment funds Kenya"
  ].join(", ")
};

export default function PrivateDebtPage() {
  return (
    <Box as="section" bg="blue.300" py={4} > 
    <div className="container">

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          "name": "Kuza Private Debt Fund",
          "description": "The Kuza private debt fund is made to allow clients to participate in one of the fastest-growing asset classes globally as investors scout for investment opportunities to enhance their overall portfolio returns.",
          "url": "https://www.kuza.africa/products/private-debt",
          "provider": {
            "@type": "Organization",
            "name": "Kuza Asset Management Ltd",
            "url": "https://www.kuza.africa"
          },
          "currenciesAccepted": "KES",
          "investmentType": "Private Debt Fund",
          "fundDetails": {
            "minimumInvestment": "KES 1,000,000",
            "minimumTopUp": "KES 100,000",
            "fundManager": "Kuza Asset Management Ltd",
            "custodian": "Kenya Commercial Bank",
            "offerSize": "KES 500 million for 500 million units at KES 1.00 per unit",
            "benchmark": "Government of Kenya one-year T-Bill rate (9.53% as of 26th September 2025)",
            "hurdleRate": "13.0% per annum",
            "annualManagementFee": "2.00% per annum",
            "otherFees": "80/20 share of outperformance",
            "investmentPeriod": "1 year (option to roll over)",
            "payments": "Interest payable quarterly; principal payable at maturity",
            "segment": "Micro-Finance (Best in class)",
            "reporting": "Quarterly performance reporting and fund fact sheets"
          }
        })}}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Kuza Private Debt Fund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Kuza private debt fund is made to allow clients to participate in one of the fastest-growing asset classes globally as investors scout for investment opportunities to enhance their overall portfolio returns."
              }
            },
            {
              "@type": "Question",
              "name": "What does the Kuza Private Debt Fund invest in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Kuza Private Debt Fund invests in unlisted securities including Commercial Papers and Corporate Bonds."
              }
            },
            {
              "@type": "Question",
              "name": "Who manages the Kuza Private Debt Fund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The fund is managed by Kuza Asset Management Ltd, a CMA-regulated Investment Manager based in Nairobi, Kenya. LLP Managers include James Mose, CFA (Chief Investment Officer and Chief Executive Officer) and Ian Wangai (Portfolio Manager)."
              }
            }
          ]
        })}}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Private Debt Fund</h1>
        <p>The Kuza private debt fund is made to allow clients to participate in one of the fastest-growing asset classes globally as investors scout for investment opportunities to enhance their overall portfolio returns. The asset class offers a strong value proposition for investors looking for alternatives to government bonds and bills, illiquid real estate investments, and listed equities. Kuza has created a private debt offering to give investors access to this fast-growing asset class and offer investors competitive risk-weighted returns. This is available to investors through the Kuza Private Debt 001 LLP.</p>
        <img src="/images/private-debt.jpeg" alt="Kuza Private Debt Fund" className="hero-image"/>
        
         <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

      </section>

      {/* Securities Invested In */}
      <section className="bottom-margin">
        <h2>Securities Invested In</h2>
        <ul>
          <li>Commercial Papers.</li>
          <li>Corporate Bonds.</li>
        </ul>
      </section>

      {/* Key Fund Terms */}
      <section className="bottom-margin">
        <h2>Key Terms for the Kuza Private Debt Fund</h2>
        <table>
          <tbody>
            <tr><td>Offer Size</td><td>KES 500 million for 500 million units at KES 1.00 per unit.</td></tr>
            <tr><td>Minimum Initial Investment Amount</td><td>KES 1,000,000.</td></tr>
            <tr><td>Minimum Top-up Amount</td><td>KES 100,000.</td></tr>
            <tr><td>Hurdle Rate</td><td>Net return starting from 13.0% per annum, based on the chosen investment duration.</td></tr>
            <tr><td>Benchmark</td><td>Government of Kenya one-year T-Bill rate. (9.53% as of 26th September 2025).</td></tr>
            <tr><td>Annual Management Fee</td><td>2.00% p.a.</td></tr>
            <tr><td>Other Management Fees</td><td>80/20 share of outperformance.</td></tr>
            <tr><td>Investment Period</td><td>1 year with the option to roll over the investment.</td></tr>
            <tr><td>Asset Class</td><td>Private Debt.</td></tr>
            <tr><td>Payments / Distribution</td><td>Interest payable quarterly; principal payable at maturity.</td></tr>
            <tr><td>Segment</td><td>Micro-Finance (Best in class).</td></tr>
            <tr><td>Reporting</td><td>Quarterly performance reporting and fund fact sheets available quarterly.</td></tr>
            <tr><td>Fund Manager</td><td>Kuza Asset Management Ltd (CMA-regulated Investment Manager based in Nairobi, Kenya).</td></tr>
            <tr><td>LLP Managers</td><td>James Mose, CFA (Chief Investment Officer and Chief Executive Officer); Ian Wangai (Portfolio Manager).</td></tr>
            <tr><td>Custodian</td><td>Kenya Commercial Bank.</td></tr>
          </tbody>
        </table>
      </section>

      {/* Investment Proposition */}
      <section className="bottom-margin">
        <h2>Why Invest in the Kuza Private Debt Fund</h2>
        <p>The asset class offers a strong value proposition for investors looking for alternatives to government bonds and bills, illiquid real estate investments, and listed equities. The Kuza Private Debt Fund offers competitive risk-weighted returns and quarterly interest distributions while maintaining a professional fund management structure through Kuza Asset Management Ltd.</p>
      </section>

      <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

    </div>
    </Box>
  );
}
