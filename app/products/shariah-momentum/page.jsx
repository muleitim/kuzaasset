// app/products/shariah-momentum-special/page.jsx
import { Box } from "@chakra-ui/react";
// ✅ SEO Metadata
export const metadata = {
  title: "Kuza Shariah Momentum Special Fund (KES) - Ethical Islamic Investment | Kuza Asset Management",
  description:
    "Invest ethically with the Kuza Shariah Momentum Special Fund (KES). A Shariah-compliant investment fund offering medium to long-term capital growth through halal investments in equities, Sukuk, REITs, and IPOs. Ideal for investors seeking Islamic, ethical, and growth-oriented opportunities.",
  keywords: [
    "Kuza Shariah Momentum Special Fund",
    "Islamic investment Kenya",
    "Shariah-compliant fund",
    "ethical investing",
    "Sukuk investments Kenya",
    "halal investment fund",
    "REITs Kenya",
    "Islamic finance Kenya",
    "Shariah mutual fund",
    "long-term capital growth",
    "Kuza Asset Management",
    "Collective Investment Schemes Kenya",
  ].join(", "),
};

export default function ShariahMomentumPage() {
  return (
    <Box as="section" bg="blue.300" py={4} >  
    <div className="container">

      {/* ✅ Structured Data: FinancialProduct JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Kuza Shariah Momentum Special Fund (KES)",
            "description":
              "The Kuza Shariah Momentum Special Fund is a Shariah-compliant investment fund designed to deliver sustained long-term capital growth through diversified halal investments in equities, REITs, Sukuk, and IPOs across local and offshore markets.",
            "url": "https://www.kuza.africa/products/shariah-momentum-special",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa",
              "sameAs": [
                "https://www.linkedin.com/company/kuza-asset-management",
                "https://twitter.com/KuzaAfrica",
              ],
            },
            "currenciesAccepted": "KES",
            "investmentType": "Shariah-Compliant Momentum Fund",
            "fundDetails": {
              "minimumInvestment": "KES 100,000",
              "minimumTopUp": "KES 50,000",
              "fundManager": "Kuza Asset Management Ltd",
              "assetsUnderManagement": "KES 2.46 Million",
              "benchmark": "Absolute benchmark of 12.0%",
              "profitRate": "8.79%",
              "annualManagementFee": "2.00%",
              "lockInPeriod": "6 Months",
              "trustee": "Co-operative Bank of Kenya",
              "custodian": "Kenya Commercial Bank Limited",
              "fundStructure": "Collective Investment Scheme",
              "currency": "KES",
              "inceptionDate": "September 2023",
            },
            "audience": {
              "@type": "Audience",
              "audienceType": [
                "Retail investors",
                "Institutional investors",
                "Islamic finance investors",
                "Ethical investors",
              ],
            },
          }),
        }}
      />

      {/* ✅ Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Kuza Shariah Momentum Special Fund?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The Kuza Shariah Momentum Special Fund (KES) is a Shariah-compliant investment vehicle offering long-term capital growth through halal investments in equities, Sukuk, REITs, and IPOs.",
                },
              },
              {
                "@type": "Question",
                "name": "Who can invest in the Kuza Shariah Momentum Special Fund?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "The fund is ideal for medium to long-term investors — including individuals, institutions, pension funds, and retail investors — seeking ethical and Shariah-compliant growth opportunities.",
                },
              },
              {
                "@type": "Question",
                "name": "What are the benefits of investing in this fund?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Benefits include medium to long-term capital growth, ethical and Shariah-compliant investing, exposure to diversified halal securities, and professional fund management by Kuza Asset Management Ltd.",
                },
              },
            ],
          }),
        }}
      />

      {/* ✅ Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Shariah Momentum Special Fund (KES)</h1>
        <p>
          The Kuza Shariah Momentum Special Fund (KES) aims to provide investors
          with sustained long-term capital growth through exclusive investments
          adhering to <strong>Shariah principles</strong>. The fund allocates
          capital into diversified halal businesses and securities including
          equities, IPOs, REITs, and Sukuk. It reflects Kuza Asset Management&apos;s
          commitment to <strong>ethical and responsible investing</strong>,
          offering investors a unique Islamic-compliant avenue for sustainable
          growth.
        </p>
        <img
          src="/images/shariah-momentum.jpg"
          alt="Kuza Shariah Momentum Special Fund"
          className="hero-image"
        />

       <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

      </section>

      {/* ✅ Why Invest Section */}
      <section className="bottom-margin">
        <h2>Why Invest in the Kuza Shariah Momentum Special Fund</h2>
        <ul>
          <li>Medium to long-term capital growth potential.</li>
          <li>Exposure to both equity and fixed-income halal investments.</li>
          <li>Fully adheres to Islamic principles and ethical investment guidelines.</li>
        </ul>
      </section>

      {/* ✅ Ideal Investor Section */}
      <section className="bottom-margin">
        <h2>Who Should Invest in This Fund</h2>
        <ul>
          <li>Investors seeking medium to long-term capital appreciation.</li>
          <li>Investors looking for diversified halal investment portfolios.</li>
          <li>
            Individuals and institutions willing to commit to a 3 - 5 year
            investment horizon.
          </li>
          <li>Institutional investors such as pension funds.</li>
          <li>
            Retail investors with above-average risk appetite seeking
            Shariah-compliant growth opportunities.
          </li>
          <li>
            Investors aiming for wealth creation aligned with Islamic finance
            principles.
          </li>
        </ul>
      </section>

      {/* ✅ Investment Objective */}
      <section className="bottom-margin">
        <h2>Investment Objective</h2>
        <p>
          The investment objective of the Kuza Shariah Momentum Special Fund is
          to deliver <strong>long-term capital growth</strong> by investing in
          diversified, <strong>Shariah-compliant assets</strong>. These include
          halal businesses and securities across local and offshore equities,
          initial public offerings (IPOs), real estate investment trusts
          (REITs), and Sukuk instruments, ensuring all investments comply with
          Islamic financial principles.
        </p>
      </section>

      {/* ✅ Fund Factsheet */}
      <section className="bottom-margin">
        <h2>Kuza Shariah Momentum Special Fund Factsheet</h2>
        <table>
          <tbody>
            <tr><td>Fund Name</td><td>Shariah Momentum Special Fund</td></tr>
            <tr><td>Fund Structure</td><td>Collective Investment Scheme</td></tr>
            <tr><td>Currency</td><td>KES</td></tr>
            <tr><td>Profit Rate (as of 30/09/2025)</td><td>8.79%</td></tr>
            <tr><td>Minimum Investment</td><td>KES 100,000</td></tr>
            <tr><td>Minimum Top-up</td><td>KES 50,000</td></tr>
            <tr><td>Fund Manager</td><td>Kuza Asset Management Ltd</td></tr>
            <tr><td>Assets Under Management (as of 30/09/2025)</td><td>KES 2.46 Million</td></tr>
            <tr><td>Benchmark</td><td>Absolute benchmark of 12.0%</td></tr>
            <tr><td>Annual Management Fee</td><td>2.00%</td></tr>
            <tr><td>Lock-in Period</td><td>6 Months</td></tr>
            <tr><td>Trustee</td><td>Co-operative Bank of Kenya</td></tr>
            <tr><td>Custodian</td><td>Kenya Commercial Bank Limited</td></tr>
            <tr><td>Inception Date</td><td>September 2023</td></tr>
          </tbody>
        </table>
      </section>

      {/* ✅ Securities Invested In */}
      <section className="bottom-margin">
        <h2>Securities Invested In</h2>
        <ul>
          <li>Local and offshore equities</li>
          <li>Initial Public Offerings (IPOs)</li>
          <li>Real Estate Investment Trusts (REITs)</li>
          <li>Sukuk investments</li>
        </ul>
      </section>

      {/* ✅ Asset Allocation */}
      <section className="bottom-margin">
        <h2>Asset Allocation (as of 30/09/2025)</h2>
        <ul>
          <li>Cash and bank placements: 100%</li>
        </ul>
      </section>

      <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

    </div>
    </Box>
  );
}
