import { Box } from "@chakra-ui/react";
// app/company-profile/page.jsx

// SEO Metadata
export const metadata = {
  title: "Kuza Asset Management Ltd - Licensed Fund Manager in Kenya | Trusted Investment Partner",
  description:
    "Kuza Asset Management Ltd is an Asset Management Company located in Nairobi, Kenya. Founded in October 2021, licensed by the Capital Markets Authority and Retirement Benefits Authority. Offering bespoke investment solutions built on Thought Leadership, Innovation, Competitiveness, and Trust.",
  keywords: [
    "Kuza Asset Management",
    "Fund Manager Kenya",
    "investment company Nairobi",
    "CMA licensed fund manager",
    "RBA licensed fund manager",
    "asset management Kenya",
    "Kuza investments",
    "retirement funds Kenya",
    "Kuza Money Market Fund",
    "Kuza Fixed Income Fund",
    "Kuza Pension Fund"
  ].join(", "),
};

export default function CompanyProfilePage() {
  return (
    <Box as="section" bg="blue.300" py={4} >  
    <div className="container">

      {/* Structured Data JSON-LD - Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Kuza Asset Management Ltd",
            "url": "https://www.kuza.africa",
            "logo": "https://www.kuza.africa/images/logo.png",
            "description":
              "Kuza Asset Management is an Asset Management Company, located in Nairobi, Kenya. Founded in October 2021 to offer bespoke investment solutions. We are licensed as a Fund Manager by the Capital Markets Authority and Retirement Benefits Authority.",
            "foundingDate": "2021-10",
            "founder": {
              "@type": "Person",
              "name": "James Mose, CFA"
            },
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              }
            },
            "sameAs": [
              "https://www.linkedin.com/company/kuza-asset-management",
              "https://www.kuza.africa"
            ],
            "memberOf": [
              "Capital Markets Authority",
              "Retirement Benefits Authority"
            ],
            "knowsAbout": [
              "Asset Management",
              "Investment Funds",
              "Pension Funds",
              "Collective Investment Schemes"
            ]
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
                "name": "Who is Kuza Asset Management Ltd?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kuza Asset Management is an Asset Management Company, located in Nairobi, Kenya. Founded in October 2021 to offer bespoke investment solutions. We are licensed as a Fund Manager by the Capital Markets Authority and Retirement Benefits Authority."
                }
              },
              {
                "@type": "Question",
                "name": "What are the key pillars of Kuza Asset Management Ltd?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Thought leadership, Innovation, Competitiveness, and Trust."
                }
              },
              {
                "@type": "Question",
                "name": "Who are the board members of Kuza Asset Management Ltd?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chairman: Mr. Mohamed Hussein; Chief Executive Officer: James Mose, CFA; Non-executive Directors: Ms. Sarah Nyamache, CPA; Mr. Jack Maina; Mr. Dhaval Shah, CFA, CPA."
                }
              },
              {
                "@type": "Question",
                "name": "Who are the management team of Kuza Asset Management Ltd?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "James Mose, CFA (Chief Executive Officer); Mohamed Hilal (Director, Strategy and Business Development); FA George Oyuga (Director, Retirement Solutions); Francis Ogero (Chief Operating Officer); Natalie Ida (Risk and Compliance Officer)."
                }
              },
              {
                "@type": "Question",
                "name": "What products does Kuza Asset Management offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kuza specializes in offering various investment options expertly crafted to address different client profiles. Products include: Kuza Money Market Fund (KES & USD), Kuza Fixed Income Fund, Kuza Momentum Special Fund, Kuza Private Debt Fund, Kuza Shariah Momentum Special Fund, Kuza Private Wealth Management Fund, Kuza Individual Pension Plan (IPP), Kuza Income Drawdown Fund (IDD), Kuza Segregated Pension Mandate, and Kuza Umbrella Retirement Benefits Fund."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bottom-margin">
        <h1 className="hero">About Kuza Asset Management Ltd</h1>
        <p>Kuza Asset Management is an Asset Management Company, located in Nairobi, Kenya. Founded in October 2021 to offer bespoke investment solutions. We are licensed as a Fund Manager by the Capital Markets Authority and Retirement Benefits Authority.</p>
        <p>We understand the value of building a long-lasting, trustworthy relationship with a partner who is committed to walk with you through your entire investment journey.</p>
        <img src="/images/prism-tower.jpg" alt="Kuza Asset Management Office" className="hero-image" />
        
        <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

      </section>

      {/* Key Pillars */}
      <section className="bottom-margin">
        <h2>Our Key Pillars</h2>
        <ul>
          <li>Thought leadership</li>
          <li>Innovation</li>
          <li>Competitiveness</li>
          <li>Trust</li>
        </ul>
      </section>

      {/* Board of Directors */}
      <section className="bottom-margin">
        <h2>The Board of Kuza Asset Management Ltd</h2>
        <ul>
          <li><strong>Chairman of the Board: Mr. Mohamed Hussein:</strong> Mohammed currently heads Business Development for DP World in Sub-Saharan Africa. Prior to DP World, Mohamed established General Electric’s first office in Ethiopia, was the Head of Strategy and Business Development at Dubai Mercantile Exchange, and was a Consultant at McKinsey. He holds an undergraduate degree and a Masters Degree from King’s College: Cambridge. He also holds a Masters degree in Development Economics from the University of Bristol and an MBA from Insead.</li>
          <li><strong>Chief Executive Officer: James Mose, CFA:</strong> James has over 16 years of experience in the East African investments industry. His most recent role was Chief Investment Officer at Britam Asset Managers. He has also previously worked as a Portfolio Manager at Old Mutual Investment Group, as an Investment Analyst at Standard Bank Securities (SBG) and as an Investment Planner at Dyer and Blair Investment Bank. James holds a Bachelor of Commerce degree in Finance from the University of Nairobi and is a CFA Charterholder.</li>
          <li><strong>Non-executive Director: Ms. Sarah Nyamache, CPA:</strong> Sarah is an accomplished Finance and Administration Manager at Rentworks East Africa Limited, bringing over 15 years of experience in leasing, finance and law. As a corporate lawyer she has specialized in commercial law and corporate governance. Sarah also has expertise in financial management, strategic, legal due diligence, transaction contracting, regulatory compliance and engaging with regulators to secure approvals. She holds a Bachelor of Laws degree from the University of Nairobi, an MBA in Finance from USIU A, and is a Certified Public Accountant.</li>
          <li><strong>Non-executive Director: Mr. Jack Maina:</strong> Jack Maina has over 20 years of experience driving Technology Transformation in East Africa. His most recent role was Group Chief Operating Officer at Britam Holdings. He previously worked as the Head of IT Innovations at Safaricom PLC. Jack holds a Bachelor of Science and a Masters in Business Administration from the University of Nairobi and is currently pursuing a Doctorate in Business Administration from George Washington University of Business.</li>
          <li><strong>Non-executive Director: Mr. Dhaval Shah, CFA, CPA:</strong> Dhaval Shah is a globally-minded executive with investing, finance and investing experience acquired at leading Fortune 500 companies in North America. He is currently the Head of Wealth Management and Retail for Zamara. Dhaval graduated from the University of Texas at Austin with a B.Sc. in Computer Science and holds both the Chartered Financial Analyst (CFA) and Chartered Professional Accountant (CPA) designations.</li>
        </ul>
      </section>

      {/* Management Team */}
      <section className="bottom-margin">
        <h2>The Management Team of Kuza Asset Management Ltd</h2>
        <ul>
          <li><strong>James Mose, CFA: Chief Executive Officer:</strong> Over 16 years investment experience.</li>
          <li><strong>Mohamed Hilal: Director, Strategy and Business Development:</strong> Over 15 years investment experience.</li>
          <li><strong>FA George Oyuga: Director, Retirement Solutions:</strong> Pension Expert with over 17 years experience.</li>
          <li><strong>Francis Ogero: Chief Operating Officer:</strong> Over 10 years investment experience.</li>
          <li><strong>Natalie Ida: Risk and Compliance Officer:</strong> Over 5 years investment experience.</li>
        </ul>
      </section>

      {/* Products */}
      <section className="bottom-margin">
        <h2>Kuza Asset Management Ltd Products</h2>
        <p>Kuza specializes in offering various investment options expertly crafted to address different client profiles. We take our time to understand your key needs, such as liquidity, regular income, capital preservation, capital growth, diversification, etc. Through Kuza, your hard-earned money will find a perfect home in one or many of our well-thought-out and customized solutions.</p>
        <ul>
          <li>Kuza Money Market Fund (MMF) KES</li>
          <li>Kuza Money Market Fund (MMF) USD</li>
          <li>Kuza Fixed Income Fund (FIF)</li>
          <li>Kuza Momentum Special Fund</li>
          <li>Kuza Private Debt Fund</li>
          <li>Kuza Shariah Momentum Special Fund</li>
          <li>Kuza Private Wealth Management Fund</li>
          <li>Kuza Individual Pension Plan (IPP)</li>
          <li>Kuza Income Drawdown Fund (IDD)</li>
          <li>Kuza Segregated Pension Mandate</li>
          <li>Kuza Umbrella Retirement Benefits Fund</li>
        </ul>
      </section>

      {/* CTA */}
      
      <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>
        
    </div>
    </Box>
  );
}
