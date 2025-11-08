// app/products/money-market-usd/page.jsx

import { Box } from "@chakra-ui/react";

// SEO Metadata
export const metadata = {
  title: "Kuza Money Market Fund (MMF) USD | Low-Risk, USD-Denominated Investment in Kenya",
  description:
    "Invest in Kuza Money Market Fund (MMF) USD — designed for investors seeking to hedge against exchange rate volatility by investing in USD-denominated short-term securities.",
  keywords: [
    "Kuza Money Market Fund USD",
    "MMF USD",
    "Kuza Asset Management",
    "Money Market Fund Kenya",
    "Low Risk USD Investment Kenya",
    "High Liquidity USD Fund",
    "Collective Investment Schemes",
    "Dollar Investment Kenya",
    "Eurobonds Kenya",
    "Corporate Bonds Kenya",
    "Passive Income Kenya",
    "Capital Preservation",
    "Kuza Investments",
    "Kuza MMF USD",
    "Kuza Money Market USD",
    "Best USD Money Market Fund in Kenya",
    "Short Term USD Investments Kenya",
    "Inflation Beating Returns USD",
    "Hedge Against Currency Depreciation",
  ].join(", "),
};

export default function MoneyMarketUSDPage() {
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
            "name": "Kuza Money Market Fund (MMF) USD",
            "description":
              "The Kuza Money Market Fund (USD) is designed for investors seeking to hedge against exchange rate volatility by investing in USD-denominated short-term securities.",
            "url": "https://www.kuza.africa/products/money-market-usd",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa",
            },
            "currenciesAccepted": "USD",
            "investmentType": "Money Market Fund",
            "fundDetails": {
              "fundName": "Kuza Money Market Fund (USD)",
              "fundStructure": "Collective Investment Schemes",
              "currency": "USD",
              "effectiveAnnualYieldAsOf30_09_2025": "5.80%",
              "minimumInvestment": "USD 100",
              "minimumTopUp": "USD 50",
              "fundManager": "Kuza Asset Management Ltd",
              "assetsUnderManagementAsOf30_09_2025": "USD 1.7M",
              "benchmark": "Kenya Commercial Bank 3-Month Average Dollar Deposit Rate",
              "annualManagementFee": "2.00%",
              "distributionFrequency": "Monthly",
              "lockInPeriod": "2 Weeks",
              "trustee": "Co-operative Bank of Kenya",
              "custodian": "Kenya Commercial Bank Limited",
              "inceptionDate": "December 2022",
            },
          }),
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
                "name": "What is the Kuza Money Market Fund (MMF) USD?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The Kuza Money Market Fund (USD) is designed for investors seeking to hedge against exchange rate volatility by investing in USD-denominated short-term securities.",
                },
              },
              {
                "@type": "Question",
                "name": "What does the Kuza Money Market Fund (MMF) USD invest in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The Kuza Money Market Fund (MMF) USD invests in short-term USD-denominated interest-bearing securities which include the following: Bank Call and Fixed deposits, Treasury bills issued, Short-Term Treasury bonds, Corporate bonds, Commercial paper, and Collective Investment Schemes.",
                },
              },
              {
                "@type": "Question",
                "name": "Why should I invest in Kuza Money Market Fund (USD)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Investing in the Kuza Money Market Fund (MMF) USD provides an inflation-beating return while only taking minimal risk. The Kuza Money Market Fund (MMF) USD appeals to investors who pursue the following: Preservation of capital, Passive Income creation, High Liquidity, Hedge against local currency depreciation, A US Dollar denominated investment, Comfort of low risk investing.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Money Market Fund (MMF) USD</h1>
        <p>
          The Kuza Money Market Fund (USD) is designed for investors seeking to hedge against exchange rate volatility by investing in USD-denominated short-term securities.
        </p>
        <img src="/images/mmf-usd.jpg" alt="Kuza Money Market Fund (MMF) USD" className="hero-image" />
        
        <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

      </section>

      {/* Securities Section */}
      <section className="bottom-margin">
        <h2>Securities that the Kuza Money Market Fund (MMF) USD invests in:</h2>
        <p>
          The Kuza Money Market Fund (MMF) USD invests in short-term USD-denominated interest-bearing securities which include the following:
        </p>
        <ul>
          <li>Bank Call and Fixed deposits.</li>
          <li>Treasury bills issued.</li>
          <li>Short-Tern Treasury bonds.</li>
          <li>Corporate bonds.</li>
          <li>Commercial paper.</li>
          <li>Collective Investment Schemes.</li>
        </ul>
      </section>

      {/* Why Invest Section */}
      <section className="bottom-margin">
        <h2>Why Invest in the Kuza Money Market Fund (MMF) USD</h2>
        <p>
          Investing in the Kuza Money Market Fund (MMF) USD provides an inflation-beating return while only taking minimal risk. The Kuza Money Market Fund (MMF) USD appeals to investors who pursue the following:
        </p>
        <ul>
          <li>Preservation of capital.</li>
          <li>Passive Income creation.</li>
          <li>High Liquidity.</li>
          <li>Hedge against local currency depreciation.</li>
          <li>A US Dollar denominated investment</li>
          <li>Comfort of low risk investing</li>
        </ul>
      </section>

      {/* Factsheet Section */}
      <section className="bottom-margin">
        <h2>Kuza Money Market Fund USD FACTSHEET</h2>
        <table>
          <tbody>
            <tr><td>Fund Structure</td><td>Collective Investment Schemes</td></tr>
            <tr><td>Currency</td><td>USD</td></tr>
            <tr><td>Effective Annual Yield as of 30/09/2025</td><td>5.80%</td></tr>
            <tr><td>Minimum Investment</td><td>USD 100</td></tr>
            <tr><td>Minimum Top-up</td><td>USD 50</td></tr>
            <tr><td>Fund Manager</td><td>Kuza Asset Management Ltd</td></tr>
            <tr><td>Assets Under Management as of 30/09/2025</td><td>USD 1.7M</td></tr>
            <tr><td>Benchmark</td><td>Kenya Commercial Bank 3-Month Average Dollar Deposit Rate</td></tr>
            <tr><td>Annual Management Fee</td><td>2.00%</td></tr>
            <tr><td>Distribution frequency</td><td>Monthly</td></tr>
            <tr><td>Lock-in Period</td><td>2 Weeks</td></tr>
            <tr><td>Trustee</td><td>Co-operative Bank of Kenya</td></tr>
            <tr><td>Custodian</td><td>Kenya Commercial Bank Limited</td></tr>
            <tr><td>Inception date</td><td>December 2022</td></tr>
          </tbody>
        </table>
      </section>

      {/* Asset Allocation Section */}
      <section className="bottom-margin">
        <h2>ASSET ALLOCATION FOR THE KUZA MMF USD</h2>
        <p>The following is a breakdown of how funds are invested for the Kuza Money Market Fund (MMF) USD as of 30/09/205:</p>
        <ul>
          <li>Eurobonds: 56%</li>
          <li>Cash and bank deposits: 36%</li>
          <li>Corporate debt: 8%</li>
        </ul>
      </section>

      {/* Investment Objective Section */}
      <section className="bottom-margin">
        <h2>Investment objective for the Kuza Money Market Fund (MMF) USD</h2>
        <p>
          The investment objective of the Kuza Money Market Fund (USD) is to offer investors short-term to medium term capital growth. This is achieved by investing in a diversified spread of fixed income securities including USD denominated:
        </p>
        <ul>
          <li>Eurobonds</li>
          <li>Fixed deposits</li>
          <li>Call deposits</li>
          <li>Corporate bonds</li>
          <li>Commercial papers</li>
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
