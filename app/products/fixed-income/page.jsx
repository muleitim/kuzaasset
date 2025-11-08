// app/products/fixed-income/page.jsx
import { Box } from "@chakra-ui/react";
// SEO Metadata
export const metadata = {
  title: "Kuza Fixed Income Fund (FIF) KES | Medium-Term, Low-to-Medium Risk Investment in Kenya",
  description:
    "Invest in Kuza Fixed Income Fund (FIF) KES — tailor-made for low-to-medium-risk investors with a medium-term investment horizon who prefer frequent income-generating securities. Enjoy growth and periodic income through stable, diversified investments.",
  keywords: [
    "Kuza Fixed Income Fund",
    "FIF KES",
    "Kuza Asset Management",
    "Fixed Income Fund Kenya",
    "Low to Medium Risk Investment",
    "Medium Term Investment Kenya",
    "Collective Investment Schemes",
    "Treasury Bonds Kenya",
    "Corporate Bonds Kenya",
    "Commercial Papers Kenya",
    "Passive Income Kenya",
    "Capital Preservation",
    "Kuza Investments",
    "Kuza FIF KES",
    "Kuza Fixed Income",
    "Best Fixed Income Fund in Kenya",
    "Short to Medium Term Investments Kenya",
    "Inflation Beating Returns Kenya",
    "High Yield Bond Fund Kenya",
  ].join(", "),
};

export default function FixedIncomePage() {
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
            "name": "Kuza Fixed Income Fund (FIF) KES",
            "description":
              "The Kuza Fixed Income Fund (FIF) KES is tailor-made for low-to-medium-risk investors with a medium-term investment horizon and who prefer frequent income-generating securities. Investing in the Fixed Income Fund exposes you to reasonable interest rate risks but provides growth on top of your periodic income.",
            "url": "https://www.kuza.africa/products/fixed-income",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa",
            },
            "currenciesAccepted": "KES",
            "investmentType": "Fixed Income Fund",
            "fundDetails": {
              "fundStructure": "Collective Investment Schemes",
              "currency": "KES",
              "effectiveAnnualYieldAsOf30_09_2025": "11.76%",
              "minimumInvestment": "KES 1000",
              "minimumTopUp": "KES 100",
              "fundManager": "Kuza Asset Management Ltd",
              "assetsUnderManagementAsOf30_09_2025": "KES 602.03M",
              "benchmark": "GOK 5-year Treasury Bond",
              "annualManagementFee": "2.00%",
              "distributionFrequency": "Monthly",
              "lockInPeriod": "3 Months",
              "investmentPeriod": "2 to 3 years",
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
                "name": "What is the Kuza Fixed Income Fund (FIF) KES?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The Kuza Fixed Income Fund (FIF) KES is tailor-made for low-to-medium-risk investors with a medium-term investment horizon and who prefer frequent income-generating securities. Investing in the Fixed Income Fund exposes you to reasonable interest rate risks but provides growth on top of your periodic income.",
                },
              },
              {
                "@type": "Question",
                "name": "What does the Kuza Fixed Income Fund (FIF) invest in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The fund prioritizes short-to-medium-term quality interest-bearing securities that have the potential to provide stable growth and income at moderate risk which include Government Bonds, Government Treasury Bills, Corporate bonds, Commercial papers, Collective Investment Schemes, Fixed and call bank deposits.",
                },
              },
              {
                "@type": "Question",
                "name": "Why should I invest in Kuza Fixed Income Fund (FIF)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "To store your asset’s value as you wait for other investment opportunities to arise, To execute a 2 to 3 year goal-based investment such as savings & education funds, Earn economies of scale offered by the Fund’s diversified investment pool, To improve the interest you earn from your fixed-deposit and money market fund account, To complement the uncertain income from a business or employment.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Fixed Income Fund (FIF) KES</h1>
        <p>
          The Kuza Fixed Income Fund (FIF) KES is tailor-made for low-to-medium-risk investors with a medium-term investment horizon and who prefer frequent income-generating securities. Investing in the Fixed Income Fund exposes you to reasonable interest rate risks but provides growth on top of your periodic income.
        </p>
        
        <div >
          <img src="/images/fixed-income.jpg" alt="Kuza Fixed Income Fund (FIF) KES" className="hero-image centerElement" />
        </div>

        <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
      </div>

      </section>

      {/* Allowable Securities Section */}
      <section className="bottom-margin">
        <h2>Allowable securities for Kuza Fixed Income Fund (FIF)</h2>
        <p>
          The fund prioritizes short-to-medium-term quality interest-bearing securities that have the potential to provide stable growth and income at moderate risk which include:
        </p>
        <ul>
          <li>Government Bonds</li>
          <li>Government Treasury Bills.</li>
          <li>Corporate bonds.</li>
          <li>Commercial papers.</li>
          <li>Collective Investment Schemes.</li>
          <li>Fixed and call bank deposits</li>
        </ul>
      </section>

      {/* Investment Strategies Section */}
      <section className="bottom-margin">
        <h2>Investment Strategies for the Kuza Fixed Income Fund (FIF)</h2>
        <p>
          The Kuza Fixed Income Fund’s investments aim to generate unrivaled returns by investing in the right mix of income and capital growth by employing tactical, diversified, strict rules-based, consistent periodic credit reviews and effective liquidity management.
        </p>
        <p>The Kuza Fixed Income Fund (FIF) is suitable for clients with the following needs:</p>
        <ul>
          <li>Capital preservation.</li>
          <li>Attainment of a 2–3 year goal.</li>
          <li>Generation of a stable income source.</li>
          <li>Diversification.</li>
        </ul>
      </section>

      {/* Why Invest Section */}
      <section className="bottom-margin">
        <h2>Why invest in the Kuza Fixed Income Fund (FIF)</h2>
        <ul>
          <li>To store your asset’s value as you wait for other investment opportunities to arise</li>
          <li>To execute a 2 to 3 year goal-based investment such as savings & education funds</li>
          <li>Earn economies of scale offered by the Fund’s diversified investment pool</li>
          <li>To improve the interest you earn from your fixed-deposit and money market fund account</li>
          <li>To complement the uncertain income from a business or employment</li>
        </ul>
      </section>

      {/* Factsheet Section */}
      <section className="bottom-margin">
        <h2>Kuza Fixed Income Fund (FIF) FACTSHEET</h2>
        <table>
          <tbody>
            <tr><td>Fund Structure</td><td>Collective Investment Schemes</td></tr>
            <tr><td>Currency</td><td>KES</td></tr>
            <tr><td>Effective Annual Yield as of 30/09/2025</td><td>11.76%</td></tr>
            <tr><td>Minimum Investment</td><td>KES 1000</td></tr>
            <tr><td>Minimum Top-up</td><td>KES 100</td></tr>
            <tr><td>Fund Manager</td><td>Kuza Asset Management Ltd</td></tr>
            <tr><td>Assets Under Management as of 30/09/2025</td><td>KES 602.03M</td></tr>
            <tr><td>Benchmark</td><td>GOK 5-year Treasury Bond</td></tr>
            <tr><td>Annual Management Fee</td><td>2.00%</td></tr>
            <tr><td>Distribution frequency</td><td>Monthly</td></tr>
            <tr><td>Lock-in Period</td><td>3 Months</td></tr>
            <tr><td>Investment Period</td><td>2 to 3 years</td></tr>
            <tr><td>Trustee</td><td>Co-operative Bank of Kenya</td></tr>
            <tr><td>Custodian</td><td>Kenya Commercial Bank Limited</td></tr>
            <tr><td>Inception date</td><td>December 2022</td></tr>
          </tbody>
        </table>
      </section>

      {/* Asset Allocation Section */}
      <section className="bottom-margin">
        <h2>ASSET ALLOCATION FOR THE KUZA FIXED INCOME FUND AS OF 30/09/2025</h2>
        <p>The following is how assets are allocated for the Kuza Fixed Income Fund KES as of 30/09/2025:</p>
        <ul>
          <li>Government securities: 49%</li>
          <li>Cash and bank deposits: 33%</li>
          <li>Corporate debt: 9%</li>
          <li>Collective investment schemes: 9%</li>
        </ul>
      </section>

      {/* Investment Objective Section */}
      <section className="bottom-margin">
        <h2>Investment Objective for the Kuza Fixed Income Fund</h2>
        <p>
          The investment objective of the Kuza Fixed Income Fund is to generate competitive short to medium returns translating to steady capital growth. To achieve this, the Kuza Fixed Income Fund invests in primarily high yielding interest bearing securities including:
        </p>
        <ul>
          <li>Government bonds</li>
          <li>Government treasury bills</li>
          <li>Fixed and call bank deposits</li>
          <li>Corporate bonds</li>
          <li>Commercial papers</li>
          <li>Collective investments schemes</li>
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
