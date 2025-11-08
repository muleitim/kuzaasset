"use client";

import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

/**
 * Aggressive SEO-enabled Products Page
 *
 * - Products are grouped into Unit Trusts, Pension Solutions, Private Wealth Solutions
 * - User-facing cards use concise descriptions (kept short for UX)
 * - Aggressive, keyword-rich product text from the uploaded ZIP is embedded in:
 *     1) meta tags (meta[name="product:<slug>"])
 *     2) JSON-LD (application/ld+json)
 *   These are hidden from the user but crawlable by search engines.
 *
 * NOTE: Image paths are placeholders (per your instruction).
 */

export default function ProductsPage() {
  // Short user-facing product summaries (concise)
  const productGroups = [
    {
      title: "Unit Trust Funds",
      description:
        "Our Unit Trust Funds provide professionally managed, diversified investment options designed for liquidity, steady returns and risk-managed growth.",
      products: [
        {
          slug: "money-market-kes",
          name: "Kuza Money Market Fund (KES)",
          shortDescription:
            "Low-risk short-term fund delivering competitive, daily-liquidity returns in KES.",
          image: "/images/mmf-kes.jpg",
          url: "/products/money-market",
        },
        {
          slug: "money-market-usd",
          name: "Kuza Money Market Fund (USD)",
          shortDescription:
            "USD-denominated money market fund offering stable short-term returns and currency diversification.",
          image: "/images/mmf-usd.jpg",
          url: "/products/money-market-usd",
        },
        {
          slug: "fixed-income",
          name: "Kuza Fixed Income Fund",
          shortDescription:
            "Medium-term, income-focused fund investing in bonds and yield-bearing instruments.",
          image: "/images/fixed-income.jpg",
          url: "/products/fixed-income",
        },
        {
          slug: "momentum-special",
          name: "Kuza Momentum Special Fund",
          shortDescription:
            "Balanced momentum strategy aiming for long-term capital appreciation with risk mitigation.",
          image: "/images/momentum-special.jpg",
          url: "/products/momentum-special",
        },
        {
          slug: "shariah-momentum-special",
          name: "Kuza Shariah Momentum Special Fund",
          shortDescription:
            "Shariah-compliant momentum fund investing only in halal businesses for long-term growth.",
          image: "/images/shariah-momentum.jpg",
          url: "/products/shariah-momentum",
        },
      ],
    },
    {
      title: "Retirement Solutions",
      description:
        "Tailored pension products for individuals and employers, designed to secure retirement income and provide compliance with regulatory frameworks.",
      products: [
        {
          slug: "individual-provident",
          name: "Kuza Individual Provident Plan",
          shortDescription:
            "RBA-licensed individual retirement plan combining capital preservation and growth.",
          image: "/images/provident.jpg",
          url: "/products/individual-provident-plan",
        },
        {
          slug: "umbrella-plan",
          name: "Kuza Umbrella Plan",
          shortDescription:
            "Employer-sponsored umbrella retirement plan leveraging economies of scale for better outcomes.",
          image: "/images/umbrella.jpg",
          url: "/products/umbrella-plan",
        },
        {
          slug: "income-drawdown",
          name: "Kuza Income Drawdown Fund",
          shortDescription:
            "Post-retirement drawdown fund offering flexible withdrawals while remaining invested for growth.",
          image: "/images/drawdown.jpg",
          url: "/products/income-drawdown",
        },
        {
          slug: "segregated-pension",
          name: "Kuza Segregated Pension Mandate",
          shortDescription:
            "Custom segregated pension mandates offering compliance, transparency and tailored investment policy.",
          image: "/images/segregated.jpg",
          url: "/products/segregated-pension",
        },
      ],
    },
    {
      title: "Other Solutions",
      description:
        "Bespoke private wealth and alternative credit strategies tailored to high-net-worth individuals and institutional clients.",
      products: [
        {
          slug: "private-wealth",
          name: "Kuza Private Wealth Management",
          shortDescription:
            "Personalized wealth management and advisory services for tailored portfolios and estate planning.",
          image: "/images/private-wealth.jpg",
          url: "/products/private-wealth",
        },
        {
          slug: "private-debt",
          name: "Kuza Private Debt Fund",
          shortDescription:
            "Alternative fixed-income opportunities via private debt strategies targeting higher yields.",
          image: "/images/private-debt.jpeg",
          url: "/products/private-debt",
        },
      ],
    },
  ];

  /**
   * The seoDescriptions object below contains the longer, keyword-rich product text pulled and refined
   * from the original .txt files you uploaded. These are used in meta tags and in the JSON-LD schema only
   * (hidden from the user-facing UI).
   *
   * If you want to edit any of these strings for tone or additional keywords, edit the matching slug key.
   */
  const seoDescriptions = {
    "money-market-kes":
      "Kuza Money Market Fund (KES) — A low-risk, KES-denominated collective investment vehicle investing primarily in high-quality short-term instruments. The fund aims to preserve capital and provide investors with daily liquidity, income, and competitive, inflation-sensitive returns through a diversified portfolio of treasury bills, certificates of deposit, commercial paper and other short-dated money market instruments. Suitable for short-term parking of funds, corporate liquidity management and conservative investors seeking capital preservation with predictable returns.",
    "money-market-usd":
      "Kuza Money Market Fund (USD) — USD-denominated money market fund offering international currency diversification and capital preservation. The fund invests in short-term USD instruments to provide liquidity, reduce FX exposure for USD holders, and deliver consistent short-term yield. Ideal for investors with USD liabilities or those seeking to reduce domestic currency risk while maintaining access to liquid, low-volatility assets.",
    "fixed-income":
      "Kuza Fixed Income Fund (FIF) — A focused, medium-term fixed income fund that targets steady income generation through investments in government securities, corporate bonds, Treasury instruments and high-quality interest-bearing assets. The Fund is managed to balance yield with credit quality and duration exposure, aiming to outperform cash while managing interest rate and credit risks. Suitable for investors seeking stable returns and downside protection relative to equities.",
    "momentum-special":
      "Kuza Momentum Special Fund — A dynamic, actively managed fund blending growth and income strategies to capitalise on market momentum and macroeconomic opportunities. The strategy leverages top-down economic analysis and bottom-up security selection across equities, fixed income and selective alternative investments. Designed for investors seeking superior long-term capital appreciation with disciplined risk management and strategic allocation through cycles such as elections, policy shifts and economic recoveries.",
    "shariah-momentum-special":
      "Kuza Shariah Momentum Special Fund (KES) — A Shariah-compliant investment fund that invests exclusively in halal business models and market sectors screened for compliance. The fund seeks long-term capital growth while adhering to Islamic investment principles, avoiding interest-bearing debt-based instruments and investing in eligible equities, sukuk and compliant money market instruments. It is tailored for investors seeking ethical investing aligned to Shariah law while pursuing competitive returns.",
    "individual-provident":
      "Kuza Individual Provident Plan — A retirement savings plan licensed by the Retirement Benefits Authority (RBA) tailored for individuals seeking disciplined, tax-efficient retirement accumulation. The plan offers professionally managed investment options, capital preservation features, flexible contribution arrangements and regulated oversight for retirement readiness. Ideal for individuals seeking predictable retirement outcomes with a structured saving vehicle and robust oversight.",
    "umbrella-plan":
      "Kuza Umbrella Retirement Benefits Fund — An employer-sponsored umbrella plan enabling companies to provide retirement benefits via a scalable, regulated structure. By pooling employer-sponsored contributions, the umbrella plan leverages economies of scale, professional governance, and reduced administrative burden for employers while delivering diversified investment options and competitive return profiles for employees. Suited to SMEs, corporates and groups seeking efficient retirement solutions without creating standalone funds.",
    "income-drawdown":
      "Kuza Income Drawdown Fund — A post-retirement investment solution designed to convert accumulated pension assets into a sustainable income stream while remaining invested for continued growth. The product provides flexible withdrawal options, lifetime or programmed income alternatives, and investment management that focuses on capital preservation and income generation. Appropriate for retirees seeking to balance ongoing income needs and capital longevity.",
    "segregated-pension":
      "Kuza Segregated Pension Mandate — A bespoke segregated pension mandate offering tailored investment mandates, full governance segregation, and transparent reporting. Designed for institutional or high-net-worth pension arrangements that require discrete investment policies, asset segregation and fiduciary-level investment oversight. The segregated mandate provides strict compliance controls and tailored asset allocation aligned to specific liability profiles and sponsor objectives.",
    "private-wealth":
      "Kuza Private Wealth Management — Comprehensive, bespoke wealth management and advisory services for high-net-worth individuals, families and institutional clients. Services include portfolio construction, discrete asset allocation, estate and succession planning, tax-aware investing strategies, and access to exclusive investment opportunities. The offering is centered on personalized investment policy statements, active risk management and long-term wealth preservation.",
    "private-debt":
      "Kuza Private Debt Fund — An alternative credit strategy providing access to private debt instruments, structured credit and direct lending opportunities. The fund targets enhanced yield versus public fixed income while applying rigorous credit underwriting and portfolio diversification to manage risk. Suitable for investors seeking higher income, reduced correlation to public markets, and exposure to private market opportunities across corporate lending, real-estate backed debt and structured credit."
  };

  // Build JSON-LD for product group (using the SEO descriptions)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: "Kuza Investment Products",
    description:
      "Kuza Asset Management offers a suite of investment products including Unit Trusts, Pension Solutions and Private Wealth products tailored to diverse investor needs.",
    brand: {
      "@type": "Organization",
      name: "Kuza Asset Management",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kuza Product Catalog",
      itemListElement: [
        // Flatten all products into the offer list with SEO description
        ...productGroups.flatMap((g) =>
          g.products.map((p) => ({
            "@type": "Product",
            name: p.name,
            description: seoDescriptions[p.slug] || p.shortDescription,
            url: `https://yourdomain.com${p.url}`,
            image: `https://yourdomain.com${p.image}`,
            brand: {
              "@type": "Brand",
              name: "Kuza Asset Management"
            },
            category: g.title
          }))
        ),
      ],
    },
  };

  // Meta keywords consolidated for the page
  const pageKeywords =
    "Kuza, Kuza Asset Management, money market fund, fixed income, private debt, pension, retirement, RBA, Shariah, wealth management, Kenya investments";

  // Build per-product meta tags (meta[name="product:<slug>"] with long SEO copy).
  // We'll output these meta tags in Head so crawlers can read these rich strings.
  return (
    <>
      <Head>
        <title>Kuza Products | Unit Trusts, Pensions & Private Wealth</title>

        {/* Primary page metadata */}
        <meta
          name="description"
          content="Explore Kuza's Unit Trusts, Pension Solutions and Private Wealth products — professionally managed funds, tailored pension plans and bespoke wealth strategies to grow and protect your capital."
        />
        <meta name="keywords" content={pageKeywords} />
        <meta name="author" content="Kuza Asset Management Limited" />

        {/* Open Graph / Social metadata */}
        <meta property="og:title" content="Kuza Products | Investment, Pension & Wealth Solutions" />
        <meta property="og:description" content="Explore Kuza's professionally managed Unit Trusts, Pension Solutions and Private Wealth offerings for individuals and institutions." />
        <meta property="og:type" content="website" />
        {/* Placeholder image used for OG preview — replace with real image URL */}
        <meta property="og:image" content="https://yourdomain.com/images/kuza-products-og.jpeg" />
        <meta property="og:url" content="https://yourdomain.com/products" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kuza Products | Unit Trusts, Pension & Private Wealth" />
        <meta name="twitter:description" content="Discover Kuza's funds & retirement solutions — money market, fixed income, shariah funds, pension plans, private wealth & private debt." />
        <meta name="twitter:image" content="https://yourdomain.com/images/kuza-products-og.jpeg" />

        {/* Per-product SEO meta tags (hidden from UI but present in page head for crawlers) */}
        {Object.entries(seoDescriptions).map(([slug, text]) => (
          <meta key={slug} name={`product:${slug}`} content={text} />
        ))}

        {/* JSON-LD structured data (product group) */}
        <script
          type="application/ld+json"
          // dangerouslySetInnerHTML requires a string; JSON.stringify ensures proper escaping
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Box as="section" id="products" py={20} bg="blue.300"
   
      >
        <Container className="container" >
          <Heading textAlign="center" mb={12}>
            Our Investment Products
          </Heading>

          {productGroups.map((group) => (
            <Box key={group.title} mb={16}>
              <Heading as="h2" size="lg" mb={4} color="#001F3F" textTransform="uppercase">
                {group.title}
              </Heading>
              <Text mb={8} color="black">
                {group.description}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {group.products.map((p) => (
                  <Box
                    as="article"
                    key={p.slug}
                    bg="white"
                    shadow="md"
                    borderRadius="lg"
                    overflow="hidden"
                    transition="transform 0.3s"
                    _hover={{ transform: "translateY(-5px)", shadow: "lg" }}

                    mx={ {base: 0, sm: 0, md: 4, lg: 6} } 
                    my={ {base: 4, sm: 4, md: 4, lg: 6} }

                  >
                    <Image src={p.image} alt={`${p.name} investment product`} h="200px" w="full" objectFit="cover" />
                    <Box p={6}>
                      <Heading fontSize="xl" mb={3}>
                        {p.name}
                      </Heading>
                      <Text mb={4} color="gray.600">
                        {p.shortDescription}
                      </Text>

                      <Button
                        as="a"
                        href={p.url}
                        bg="#001F3F"
                        color="#FFD700"
                        _hover={{ bg: "#002B5B", transform: "translateY(-2px)", boxShadow: "lg" }}
                        _active={{ bg: "#001830", transform: "translateY(0)" }}
                        size="lg"
                        borderRadius="full"
                        fontWeight="semibold"
                        boxShadow="md"
                        transition="all 0.2s ease-in-out"
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}
