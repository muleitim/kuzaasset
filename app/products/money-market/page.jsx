// app/products/money-market/page.jsx
import { Box } from "@chakra-ui/react";
// SEO Metadata
export const metadata = {
  title: "Kuza Money Market Fund (MMF) KES | Low-Risk, High Liquidity Investment in Kenya",
  description: "Invest in Kuza Money Market Fund (MMF) KES — a low-risk, short-term-oriented investment designed to deliver inflation-beating returns with minimum risk exposure. Start investing today.",
  keywords: [
    "Kuza Money Market Fund",
    "MMF KES",
    "Kuza Asset Management",
    "Money Market Fund Kenya",
    "Low Risk Investment Kenya",
    "High Liquidity Investment",
    "Collective Investment Schemes",
    "Treasury Bills Kenya",
    "Corporate Bonds Kenya",
    "Passive Income Kenya",
    "Capital Preservation",
    "Investment Funds Kenya",
    "Kuza Investments",
    "Kuza MMF KES",
    "Kuza Money Market",
    "Best Money Market Fund in Kenya",
    "Short Term Investments Kenya",
    "Inflation Beating Returns Kenya",
  ].join(", ")
};

export default function MoneyMarketPage() {
  return (
    <Box as="section" bg="blue.300" py={4} >  
    <div className="container">

      {/* Structured Data JSON-LD for FinancialProduct */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Kuza Money Market Fund (MMF) KES",
            "description": "The Kuza Money Market Fund (MMF) KES is designed with low-risk short-term-oriented investors in mind to provide them with an inflation-beating return with minimum risk exposure.",
            "url": "https://www.kuza.africa/products/money-market",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa"
            },
            "currenciesAccepted": "KES",
            "investmentType": "Money Market Fund",
            "fundDetails": {
              "fundName": "Kuza Money Market Fund (KES)",
              "fundStructure": "Collective Investment Schemes",
              "currency": "KES",
              "effectiveAnnualYieldAsOf30_09_2025": "11.29%",
              "minimumInvestment": "KES 1000",
              "minimumTopUp": "KES 100",
              "fundManager": "Kuza Asset Management Ltd",
              "assetsUnderManagementAsOf30_09_2025": "KES 2.18 Bn",
              "benchmark": "GOK 91-day T-Bill",
              "annualManagementFee": "2.00%",
              "distributionFrequency": "Monthly",
              "lockInPeriod": "2 Weeks",
              "trustee": "Co-operative Bank of Kenya",
              "custodian": "Kenya Commercial Bank Limited",
              "inceptionDate": "December 2022"
            }
          })
        }}
      />

      {/* Structured Data JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Kuza Money Market Fund (MMF) KES?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Kuza Money Market Fund (MMF) KES is designed with low-risk short-term-oriented investors in mind to provide them with an inflation-beating return with minimum risk exposure."
                }
              },
              {
                "@type": "Question",
                "name": "What does the Kuza Money Market Fund (MMF) KES invest in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Kuza Money Market Fund (MMF) KES invests in short-term KES-denominated interest-bearing securities which include Bank Call and Fixed deposits, Treasury bills issued by the Government of Kenya, Short-Term Treasury bonds issued by the Government of Kenya, Corporate bonds, Commercial paper, and Collective Investment Schemes."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I invest in Kuza Money Market Fund (KES)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Preservation of capital, Passive Income creation, and High Liquidity."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Money Market Fund (MMF) KES</h1>
        <p>The Kuza Money Market Fund (MMF) KES is designed with low-risk short-term-oriented investors in mind to provide them with an inflation-beating return with minimum risk exposure.</p>
        <img src="/images/mmf-kes.jpg" alt="Kuza Money Market Fund (MMF) KES" className="hero-image" />

        <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>
        
      </section>

      {/* Securities Section */}
      <section className="bottom-margin">
        <h2>Securities that the Kuza Money Market Fund (MMF) KES invests in:</h2>
        <p>The Kuza Money Market Fund (MMF) KES invests in short-term KES-denominated interest-bearing securities which include:</p>
        <ul>
          <li>Bank Call and Fixed deposits.</li>
          <li>Treasury bills issued by the Government of Kenya.</li>
          <li>Short-Term Treasury bonds issued by the Government of Kenya.</li>
          <li>Corporate bonds.</li>
          <li>Commercial paper.</li>
          <li>Collective Investment Schemes.</li>
        </ul>
      </section>

      {/* Why Invest Section */}
      <section className="bottom-margin">
        <h2>Why Invest in Kuza Money Market Fund (KES)</h2>
        <ul>
          <li>Preservation of capital.</li>
          <li>Passive Income creation.</li>
          <li>High Liquidity.</li>
        </ul>
      </section>

      {/* Factsheet Section */}
      <section className="bottom-margin">
        <h2>Kuza Money Market Fund KES FACTSHEET</h2>
        
        <table>
          <tbody>
            <tr><td>Fund Name</td><td>Kuza Money Market Fund (KES)</td></tr>
            <tr><td>Fund Structure</td><td>Collective Investment Schemes</td></tr>
            <tr><td>Currency</td><td>KES</td></tr>
            <tr><td>Effective Annual Yield as of 30/09/2025</td><td>11.29%</td></tr>
            <tr><td>Minimum Investment</td><td>KES 1000</td></tr>
            <tr><td>Minimum Top-up</td><td>KES 100</td></tr>
            <tr><td>Fund Manager</td><td>Kuza Asset Management Ltd</td></tr>
            <tr><td>Assets Under Management as of 30/09/2025</td><td>KES 2.18 Bn</td></tr>
            <tr><td>Benchmark</td><td>GOK 91-day T-Bill</td></tr>
            <tr><td>Annual Management Fee</td><td>2.00%</td></tr>
            <tr><td>Distribution frequency</td><td>Monthly</td></tr>
            <tr><td>Lock-in Period</td><td>2 Weeks</td></tr>
            <tr><td>Trustee</td><td>Co-operative Bank of Kenya</td></tr>
            <tr><td>Custodian</td><td>Kenya Commercial Bank Limited</td></tr>
            <tr><td>Inception date</td><td>December 2022</td></tr>
          </tbody>
        </table>
      </section>

      {/* Investment Breakdown Section */}
      <section className="bottom-margin">
        <h2>THE FOLLOWING IS A BREAKDOWN OF HOW THE FUNDS ARE INVESTED for the Kuza Money Market Fund (MMF) KES AS OF 30/09/2025:</h2>
        <ul>
          <li>Cash and bank deposits: 64%</li>
          <li>Government securities: 17%</li>
          <li>Corporate debt: 10%</li>
          <li>Collective investment schemes: 8%</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
      </div>

    </div>
    </Box>
  );
}
