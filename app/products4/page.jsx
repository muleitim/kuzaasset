'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Stack,
  Image,
  Flex,
  Link,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaArrowRight, FaChartLine, FaShieldAlt, FaUserTie } from "react-icons/fa";

export default function HomePage() {
  const products = [
    {
      name: "Kuza Money Market Fund",
      description:
        "A low-risk investment vehicle that delivers consistent returns with daily liquidity. Ideal for short-term investors seeking stability and steady growth.",
      image: "/images/money-market.jpeg",
    },
    {
      name: "Kuza Fixed Income Fund",
      description:
        "A professionally managed portfolio of government and corporate bonds designed to generate predictable medium-term returns.",
      image: "/images/fixed-income.jpeg",
    },
    {
      name: "Kuza Momentum Special Fund",
      description:
        "A dynamic growth-oriented fund blending equities and fixed income instruments to achieve balanced long-term performance.",
      image: "/images/momentum.jpeg",
    },
  ];

  return (
    <Box bg="gray.50" color="gray.800">
      {/* Navbar */}
      <Box as="header" bg="white" boxShadow="sm" py={4} position="sticky" top="0" zIndex="10">
        <Container
          maxW="6xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size="md" fontWeight="700">
            Kuza Asset Management Ltd
          </Heading>
          <Stack direction="row" spacing={8} fontWeight="500" fontSize="sm">
            <Link href="#about" _hover={{ color: "teal.600" }}>About</Link>
            <Link href="#products" _hover={{ color: "teal.600" }}>Products</Link>
            <Link href="#team" _hover={{ color: "teal.600" }}>Our Team</Link>
            <Link href="#contact" _hover={{ color: "teal.600" }}>Contact</Link>
          </Stack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        as="section"
        bgImage="url('/images/hero-office.jpeg')"
        bgSize="cover"
        bgPos="center"
        position="relative"
        color="white"
        py={{ base: 24, md: 32 }}
        textAlign="center"
      >
        <Box position="absolute" inset="0" bg="rgba(0, 0, 0, 0.55)" />
        <Container position="relative" zIndex="1" maxW="5xl">
          <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={4}>
            Smart Investments for a Secure Future
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} maxW="2xl" mx="auto" mb={8}>
            Kuza Asset Management Ltd provides tailored financial solutions to help you
            achieve your investment goals with confidence.
          </Text>
          <Button
            size="lg"
            bg="teal.600"
            color="white"
            rightIcon={<FaArrowRight />}
            _hover={{ bg: "teal.700" }}
          >
            Explore Our Funds
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" id="about" py={20} bg="white">
        <Container maxW="6xl">
          <Heading textAlign="center" mb={10}>
            About Us
          </Heading>
          <Text textAlign="center" fontSize="lg" maxW="3xl" mx="auto" color="gray.600">
            Kuza Asset Management Ltd is a leading investment firm committed to providing
            innovative, transparent, and effective fund management services. We help
            individuals and institutions grow wealth through strategic investment
            solutions designed for both stability and performance.
          </Text>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box as="section" py={20} bg="gray.50">
        <Container maxW="6xl">
          <Heading textAlign="center" mb={12}>
            Why Choose Kuza
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={FaChartLine}
              title="Consistent Performance"
              text="Our funds have a proven record of stable returns across diverse market cycles."
            />
            <Feature
              icon={FaShieldAlt}
              title="Strong Governance"
              text="We uphold the highest standards of transparency and regulatory compliance."
            />
            <Feature
              icon={FaUserTie}
              title="Expert Management"
              text="Our seasoned fund managers apply deep financial expertise and market insight."
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Products Section */}
      <Box as="section" id="products" py={20} bg="white">
        <Container maxW="6xl">
          <Heading textAlign="center" mb={12}>
            Our Investment Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {products.map((product) => (
              <Box
                key={product.name}
                bg="gray.50"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="md"
                transition="transform 0.3s ease"
                _hover={{ transform: "translateY(-6px)" }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  h="220px"
                  w="full"
                  objectFit="cover"
                />
                <Box p={6}>
                  <Heading fontSize="xl" mb={3}>
                    {product.name}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {product.description}
                  </Text>
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    size="sm"
                    rightIcon={<FaArrowRight />}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box as="section" id="team" py={20} bg="gray.50">
        <Container maxW="6xl">
          <Heading textAlign="center" mb={10}>
            Meet Our Team
          </Heading>
          <Text textAlign="center" maxW="3xl" mx="auto" mb={12} color="gray.600">
            Our leadership team combines decades of experience in fund management,
            financial analysis, and client advisory.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <TeamMember
              name="James K. Mwangi"
              role="Chief Executive Officer"
              image="/images/team-ceo.jpeg"
            />
            <TeamMember
              name="Catherine Njeri"
              role="Head of Investments"
              image="/images/team-investments.jpeg"
            />
            <TeamMember
              name="David Otieno"
              role="Portfolio Manager"
              image="/images/team-portfolio.jpeg"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact / CTA Section */}
      <Box as="section" id="contact" py={24} bg="teal.600" color="white" textAlign="center">
        <Container maxW="4xl">
          <Heading mb={4}>Start Your Investment Journey Today</Heading>
          <Text fontSize="lg" mb={8}>
            Get in touch with our team to open an account or learn more about our
            investment products.
          </Text>
          <Button
            size="lg"
            bg="white"
            color="teal.700"
            _hover={{ bg: "gray.100" }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="gray.300" py={10}>
        <Container maxW="6xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
          >
            <Text mb={{ base: 4, md: 0 }}>
              © {new Date().getFullYear()} Kuza Asset Management Ltd. All rights reserved.
            </Text>
            <Stack direction="row" spacing={6}>
              <Link href="#" _hover={{ color: "white" }}>Privacy Policy</Link>
              <Link href="#" _hover={{ color: "white" }}>Terms</Link>
              <Link href="#" _hover={{ color: "white" }}>Contact</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

/* Feature Component */
function Feature({ icon, title, text }) {
  return (
    <Box textAlign="center" p={6} bg="white" borderRadius="xl" boxShadow="md">
      <Icon as={icon} w={10} h={10} color="teal.600" mb={4} />
      <Heading fontSize="lg" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{text}</Text>
    </Box>
  );
}

/* Team Member Component */
function TeamMember({ name, role, image }) {
  return (
    <Box textAlign="center" bg="white" borderRadius="xl" boxShadow="md" overflow="hidden">
      <Image src={image} alt={name} h="280px" w="full" objectFit="cover" />
      <Box p={5}>
        <Heading fontSize="lg" mb={1}>
          {name}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {role}
        </Text>
      </Box>
    </Box>
  );
}
