// app/products/momentum-special/page.jsx
import { Box } from "@chakra-ui/react";
// Aggressive SEO Metadata
export const metadata = {
  title: "Kuza Momentum Special Fund KES | High-Return Dynamic Asset Allocation Fund | Invest in Kenya’s Momentum Fund",
  description: "The Kuza Momentum Special Fund is designed for risk-ready investors seeking medium to long-term capital growth by leveraging seasonal market swings, macroeconomic trends, and diversified asset allocations across equities, bonds, offshore securities, and alternative investments.",
  keywords: [
    "Kuza Momentum Special Fund",
    "Momentum Fund KES",
    "Kenya investment fund",
    "long-term capital growth",
    "dynamic asset allocation",
    "Kuza Asset Management",
    "Kuza Africa",
    "equities Kenya",
    "fixed income Kenya",
    "offshore investments",
    "alternative investments Kenya",
    "unit trust Kenya",
    "high return investment fund Kenya",
    "capital growth fund Kenya",
    "Kuza fund performance",
    "Kuza Momentum Special Fund Kenya",
    "Kuza investment opportunities",
    "Kuza client portal",
    "Kuza mobile app",
    "M-Pesa investment Kenya",
    "KCB investment account Kuza"
  ].join(", "),
  alternates: {
    canonical: "https://www.kuza.africa/products/momentum-special"
  },
  openGraph: {
    title: "Kuza Momentum Special Fund KES | Dynamic Asset Allocation & Capital Growth",
    description: "Invest in the Kuza Momentum Special Fund KES for exceptional long-term capital growth through active management, diversification, and dynamic asset allocation.",
    url: "https://www.kuza.africa/products/momentum-special",
    siteName: "Kuza Asset Management",
    images: [
      {
        url: "/images/momentum-special.jpg",
        width: 1200,
        height: 630,
        alt: "Kuza Momentum Special Fund"
      }
    ],
    locale: "en_KE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuza Momentum Special Fund KES | Invest for Long-Term Capital Growth",
    description: "Take advantage of market cycles and economic opportunities with the Kuza Momentum Special Fund. Medium to long-term capital growth for the risk-ready investor.",
    images: ["/images/momentum-special.jpg"]
  }
};

export default function MomentumSpecialPage() {
  return (
    <Box as="section" bg="blue.300" py={4} >  
    <div className="container" >

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InvestmentFund",
            "name": "Kuza Momentum Special Fund KES",
            "description": "The Kuza Momentum Special Fund is designed to take advantage of seasonal market swings, macroeconomic trends, and business cycles to deliver long-term capital growth through diversified investments across equities, bonds, offshore securities, and alternative investments.",
            "url": "https://www.kuza.africa/products/momentum-special",
            "provider": {
              "@type": "Organization",
              "name": "Kuza Asset Management Ltd",
              "url": "https://www.kuza.africa"
            },
            "currenciesAccepted": "KES",
            "minimumInvestment": "KES 100000",
            "minimumTopUp": "KES 50000",
            "managementFee": "2%",
            "lockInPeriod": "6 Months",
            "investmentHorizon": "3 to 5 years",
            "investmentStrategy": "Dynamic Asset Allocation (DAA) leveraging quality research and macroeconomic analysis to capture short-term and long-term opportunities."
          })
        }}
      />

      {/* HERO SECTION */}
      <section className="bottom-margin"  >
        <h1 className="hero">THE KUZA MOMENTUM SPECIAL FUND</h1>
        <p>
          The kuza momentum special fund is an innovation designed to take advantage of seasonal market swings that create undervalued yet fundamentally stable opportunities, e.g. election cycles and economic recessions. This fund is ideal for risk-ready and opportunistic investors. The fund is meant for clients who pursue the following:
        </p>
        <ul>
          <li>Investors seeking medium to long-term capital growth in their portfolio</li>
          <li>Investors who want to gain exposure to both equity and fixed-income investments</li>
          <li>Investors willing to commit to a 3 to 5 year investment horizon</li>
        </ul>

        <br />
        <p>
          Basically, the Kuza momentum special fund leverages quality research, well-proven investment strategies, and a flexible Dynamic Asset Allocation (DAA) to take advantage of short-term and long-term capital markets inefficiencies stemming from macroeconomic trends and business cycles which provide high-yielding investment opportunities to deliver high returns to the aggressive and risk-tolerant longer-term horizon investor who wishes for capital growth.
        </p>               

        <img src="/images/momentum-special.jpg" alt="Kuza Momentum Special Fund" className="hero-image" />
        
        <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

      </section>

      {/* WHY INVEST */}
      <section className="bottom-margin">
        <h2>Why invest in the Kuza momentum special fund:</h2>
        <p>The following are reasons to invest in the Kuza momentum special fund:</p>
        <ul>
          <li>Investing in the Fund provides exceptional long-term capital growth</li>
          <li>Portfolio diversification i.e. different investments react differently to market swings</li>
          <li>To take advantage of the seasonal investment opportunities offered by capital markets</li>
          <li>Earn economies of scale offered by the Fund&apos;s diversified investment pool</li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section className="bottom-margin">
        <h2>FREQUENTLY ASKED QUESTIONS FOR THE KUZA MOMENTUM SPECIAL FUND:</h2>

        <h3 className="question">1. What is the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          The Kuza Momentum Special Fund is an actively managed trading fund designed to capitalize on market opportunities that arise from events like elections, tariff changes, or other economic shifts. It focuses on identifying undervalued assets with strong growth potential, aiming to generate returns through unit price appreciation, rather than fixed interest payments. The Kuza Momentum Special Fund is suitable for investors seeking long-term capital growth with the ability to tolerate short-term market fluctuations.
        </p>

        <h3 className="question">2. Where does the Kuza Momentum Special Fund invest?</h3>
        <p className="answer">
          The Kuza Momentum Special Fund invests across a broad and diversified range of assets to spread risk and capture growth opportunities, and these assets include the following
        </p>
        <ul>
          <li>Equities: Shares listed on the Nairobi Securities Exchange (NSE)</li>
          <li>Fixed Income: Government Treasury bonds, corporate bonds, and commercial papers</li>
          <li>Collective Investment Schemes (CISs) for additional market exposure</li>
          <li>Bank Deposits: Fixed and call deposits with local banks</li>
          <li>Offshore Securities: Global equities and Exchange-Traded Funds (ETFs)</li>
          <li>Alternative Investments: Foreign exchange, futures, options, and commodities</li>
        </ul>
        <p className="answer">
          This diversified approach taken by the Kuza Momentum Special Fund allows investors to benefit from multiple markets and asset classes, increasing the potential for long-term returns.
        </p>

        <h3 className="question">3. Who should invest in the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          The Kuza Momentum Special Fund is ideal for investors who meet the following criteria:
        </p>
        <ul>
          <li>Are comfortable with moderate to high risk and market volatility</li>
          <li>Have a medium to long-term investment horizon (typically 1 year or more)</li>
          <li>Are seeking capital growth rather than regular income</li>
          <li>Want to diversify their investment portfolio beyond traditional fixed-income instruments</li>
        </ul>
        <p className="answer">
          It is very important to note that the Kuza Momentum Special Fund is not suitable for investors looking for guaranteed returns or short-term capital preservation as is the case with the Kuza Money market fund.
        </p>

        <h3 className="question">4. What makes the Kuza Momentum Special Fund different from other Kuza funds such as the Money market fund and the fixed income fund?</h3>
        <p className="answer">
          The Kuza Momentum Special Fund is price-based, with returns derived from changes in the unit price rather than fixed interest. It is actively managed, enabling the team to respond quickly to market shifts and opportunities, and is focused on long-term growth, offering potential for higher returns while providing diversified exposure across multiple asset classes.
        </p>

        <h3 className="question">5. Is my capital guaranteed with the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          No. While the Kuza Momentum Special Fund is carefully managed with an emphasis on capital preservation, there is no guarantee on returns or principal. The Kuza Momentum Special Fund's strategy prioritizes long-term growth, which may involve short-term fluctuations in value.
        </p>

        <h3 className="question">6. What is the minimum investment amount for the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          Minimum Initial Investment amount for the Kuza Momentum Special Fund: KES 100000<br />
          Minimum Top-Up amount: KES 50000<br />
          This structure allows investors to start small and increase their position gradually as they grow more comfortable with the fund.
        </p>

        <h3 className="question">7. What is the management fee for the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          The Kuza Momentum Special Fund charges an annual management fee of 2%, already included in the published unit price. Capital gains with the Kuza Momentum Special Fund are not subject to additional deductions, allowing investors to fully benefit from asset appreciation.
        </p>

        <h3 className="question">8. What is the lock-in period for the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          The Kuza Momentum Special Fund has a 6-month lock-in period from the date of the initial deposit, during which any contributions are also locked in. After this period, withdrawals can be processed within up to 2 business days, providing liquidity while supporting long-term investment.
        </p>

        <h3 className="question">9. How are returns earned with the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          Returns for the Kuza Momentum Special Fund are generated through growth in the unit price as the underlying assets appreciate in value. Investors in the Kuza Momentum Special Fund realize gains when they redeem their units, making it a capital appreciation-focused fund rather than a fixed-income or dividend-yielding investment.
        </p>

        <h3 className="question">10. Benefits of the Kuza Momentum Special Fund</h3>
        <ul >
          <li>Potential for higher returns compared to traditional fixed-income or savings options</li>
          <li>Diversified portfolio spanning equities, bonds, and alternative investments</li>
          <li>Active management ensures the fund captures opportunities as market conditions change</li>
          <li>Suited for investors aiming for long-term capital growth and portfolio resilience</li>
        </ul>

        <h3 className="question">11. How can I monitor my investment in the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          If you have invested in the Kuza Momentum Special Fund you will receive monthly account statements showing unit prices, accumulated gains, and current portfolio value. You can also track your investment in real time via the Kuza Client Portal available at <a href="https://client.kuza.africa/">https://client.kuza.africa/</a> or the Kuza.Africa mobile app available at <a href="https://play.google.com/store/apps/details?id=kuza.africa.kuza&hl=en&pli=1">Google Play Store</a> for Android devices and at <a href="https://apps.apple.com/ke/app/kuza-africa/id1662784344">Apple App Store</a> for iPhones, allowing full transparency and easy monitoring.
        </p>

        <h3 className="question">12. How do I invest or make deposits for the Kuza Momentum Special Fund?</h3>
        <p className="answer">
          There are 2 options to make payments or deposit funds into your Kuza Momentum Special Fund account: M-Pesa payment and Bank transfer. These two options are explained as follows:
        </p>
        <p className="answer">
          <strong>With the M-Pesa option:</strong><br />
          Paybill for the Kuza Momentum Special Fund: 522522<br />
          M-Pesa account number for the Kuza Momentum Special Fund: 1305718240
        </p>
        <p className="answer">
          <strong>With the Bank Transfer option:</strong><br />
          Bank account name for the Kuza Momentum Special Fund: Kuza Momentum Fund Collection<br />
          Bank account number for the Kuza Momentum Special Fund: 1305718240<br />
          Bank: KCB Bank Kenya Ltd, Head Office<br />
          Swift code for the Kuza Momentum Special Fund: KCBLKENXXXX<br />
          Important notice when paying with the bank transfer option: Please include your Full Name and member number or National ID Number in the reference to ensure timely allocation of funds.
        </p>
      </section>

      <div className="centerButton" >
          <a className="link_button" href="https://client.kuza.africa/self_registration?agent_no=00150">Create Account to Invest</a>
        </div>

    </div>
    </Box>
  );
}
