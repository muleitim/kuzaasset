import { Box } from "@chakra-ui/react";
// app/products/income-drawdown/page.jsx

// SEO Metadata
export const metadata = {
  title: "Kuza Income Drawdown Fund (IDD) - Flexible Post-Retirement Income & Superior Returns",
  description: "Kuza Income Drawdown Fund (IDD) empowers you to manage your post-retirement savings with flexibility, control, and superior investment returns. Preserve your savings, draw what you need, and continue earning from your fund.",
  keywords: [
    "Kuza Income Drawdown Fund",
    "Kuza IDD",
    "Income Drawdown Kenya",
    "retirement income Kenya",
    "post-retirement fund",
    "pension drawdown",
    "flexible retirement plan",
    "Kuza Asset Management",
    "superior investment returns",
    "defer annuity Kenya"
  ].join(", ")
};

export default function IncomeDrawdownPage() {
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
            "name": "Kuza Income Drawdown Fund (IDD)",
            "description": "The Kuza Income Drawdown Fund (IDD) empowers you with unmatched alternatives for your post-retirement funds, enabling you to preserve ownership of your retirement savings, draw what you need for upkeep, and grow your balance further with superior investment returns.",
            "url": "https://www.kuza.africa/products/income-drawdown",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa"
            },
            "investmentType": "Income Drawdown Fund",
            "currenciesAccepted": "KES",
            "fundDetails": {
              "fundName": "Kuza Income Drawdown Fund",
              "fundManager": "Kuza Asset Management Ltd",
              "objectives": [
                "Empower retirees with unmatched alternatives for managing post-retirement funds",
                "Provide flexibility and control over retirement savings",
                "Enable continued growth of funds through superior investment returns"
              ],
              "targetInvestors": [
                "Individuals seeking flexibility and control over their retirement funds",
                "Those who prioritize the longevity of benefits, desiring sustained support throughout retirement",
                "Individuals wanting to actively participate in future returns generated from their money",
                "Those preferring to take some time to deliberate before committing to the purchase of an annuity"
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
                "name": "What is the Kuza Income Drawdown Fund (IDD)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Kuza Income Drawdown Fund (IDD) empowers you with unmatched alternatives for your post-retirement funds. It enables you to preserve your right to continue owning your retirement savings, draw what you need for your day-to-day upkeep, and watch your fund balance grow even further with superior investment returns."
                }
              },
              {
                "@type": "Question",
                "name": "Who should consider investing in the Kuza Income Drawdown Fund (IDD)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1. Individuals seeking flexibility and control over their retirement funds. 2. Those who prioritize the longevity of benefits, desiring sustained support throughout their retirement. 3. Individuals wanting to actively participate in future returns generated from their money. 4. Those preferring to take some time to deliberate before committing to the purchase of an annuity."
                }
              },
              {
                "@type": "Question",
                "name": "What are the benefits of the Kuza Income Drawdown Fund?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1. The Kuza Income Drawdown Fund enables you to save on Tax. 2. The Kuza Income Drawdown Fund enables you to Maintain control of your retirement savings. 3. The Kuza Income Drawdown Fund enables you to Grow your savings even as you draw down. 4. The Kuza Income Drawdown Fund enables you to Defer the annuity choice to a later date. 5. The Kuza Income Drawdown Fund enables you to Access other value-add risk benefits as riders on your drawdown balance."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">Kuza Income Drawdown Fund (IDD)</h1>
        <p>The Kuza Income Drawdown Fund (IDD) will empower you with unmatched alternatives for your post-retirement funds. It will enable you preserve your right to continue owning your retirement savings, draw what you need for your day-to-day upkeep, and watch your fund balance grow even further with superior investment returns.</p>
        <img src="/images/drawdown.jpg" alt="Kuza Income Drawdown Fund" className="hero-image" />
        
        <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

      </section>

      {/* Target Investors */}
      <section className="bottom-margin">
        <h2>Who should consider investing in the Kuza Income Drawdown Fund (IDD)?</h2>
        <ul>
          <li>Individuals seeking flexibility and control over their retirement funds.</li>
          <li>Those who prioritize the longevity of benefits, desiring sustained support throughout their retirement.</li>
          <li>Individuals wanting to actively participate in future returns generated from their money.</li>
          <li>Those preferring to take some time to deliberate before committing to the purchase of an annuity.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bottom-margin">
        <h2>Benefits of the Kuza Income Drawdown Fund</h2>
        <ul>
          <li>The Kuza Income Drawdown Fund enables you to save on Tax.</li>
          <li>The Kuza Income Drawdown Fund enables you to Maintain control of your retirement savings.</li>
          <li>The Kuza Income Drawdown Fund enables you to Grow your savings even as you draw down.</li>
          <li>The Kuza Income Drawdown Fund enables you to Defer the annuity choice to a later date.</li>
          <li>The Kuza Income Drawdown Fund enables you to Access other value-add risk benefits as riders on your drawdown balance.</li>
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
