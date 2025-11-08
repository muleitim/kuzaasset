// app/home/page.jsx
"use client";

import React, { useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle, FaShieldAlt, FaChartLine, FaUserTie } from "react-icons/fa";
import NextLink from "next/link";

export default function HomePage() {
  const highlights = [
    { icon: FaShieldAlt, title: "Licensed & Trusted", text: "Regulated by the Capital Markets Authority (CMA) and Retirement Benefits Authority (RBA)." },
    { icon: FaUserTie, title: "Expert Leadership", text: "Led by seasoned professionals with decades of investment experience across East Africa and beyond." },
    { icon: FaChartLine, title: "Tailored Solutions", text: "We craft investment strategies that align with your goals, risk profile, and financial journey." },
    { icon: FaCheckCircle, title: "Integrity & Innovation", text: "Driven by transparency, trust, and continuous improvement to help you achieve lasting financial success." },
  ];

  const products = [
    { name: "Kuza Money Market Fund KES", description: "Secure, steady growth with daily liquidity. Ideal for short-term investors seeking safety and income.", image: "/images/mmf-kes.jpg", url: "/products/money-market" },
    { name: "Kuza Fixed Income Fund", description: "Medium-term stability and attractive returns through government and corporate bonds.", image: "/images/fixed-income.jpg", url: "/products/fixed-income" },
    { name: "Kuza Momentum Special Fund", description: "Balanced growth through a mix of equities and fixed income instruments for consistent long-term performance.", image: "/images/momentum-special.jpg", url: "/products/momentum-special" },
  ];

  useEffect(() => {
    fetch("/api/log-visit", { method: "POST" })
      .then(res => res.json())
      .then(data => console.log("Visit logged:", data))
      .catch(err => console.error("Error logging visit:", err));
  }, []);

  return (
    <Box my={{ base: 4, sm: 4, md: 6, lg: 8 }}>

      {/* Hero */}
      <Box as="section" textAlign="center" pt={4} pb={{ base: 4, md: 6 }} bg="blue.200" borderRadius="md" mt={{ base: 10, md: 8 }}>
        <Container>
          <img src="/images/kuza_logo.jpg" alt="Kuza" className="hero-image" />
          <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={6}>Empowering Your Financial Future</Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="black" mb={4}>
            We provide customized investment solutions blending local insight with global expertise.
          </Text>
          <a className="link_button bottom-margin" href="/products">Explore our products</a>
        </Container>
      </Box>

      {/* Highlights */}
      <Box as="section" mt={12} py={4} bg="red.200" borderRadius="md">
        <Container>
          <Heading textAlign="center" mb={4}>Why Invest with Kuza?</Heading>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 4 }} >
            {highlights.map((item) => (
              <VStack key={item.title} 
              bg="gray.50" borderRadius="lg" shadow="md" 
              textAlign="center" _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
              mx={ {base: 0, sm: 0, md: 4, lg: 6} } 
              my={ {base: 1, sm: 1, md: 4, lg: 6} }
              p={ {base: 1, sm: 1, md: 4, lg: 6} }            
              >
                <Icon as={item.icon} boxSize={10} color="teal.500" />
                <Heading size="md">{item.title}</Heading>
                <Text fontSize="sm" color="gray.600">{item.text}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Products */}
      <Box as="section" bg="green.200" mt={12} py={4} borderRadius="md">
        <Container>
          <Heading textAlign="center" mb={4}>Our Investment Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {products.map((p) => (
              <Box key={p.name} bg="white" shadow="md" borderRadius="lg" overflow="hidden" _hover={{ transform: "translateY(-5px)" }}
              mx={ {base: 0, sm: 0, md: 4, lg: 6} } 
              my={ {base: 4, sm: 4, md: 4, lg: 6} }
              >
                <Image src={p.image} alt={p.name} h="200px" w="full" objectFit="cover" />
                <Box p={6}>
                  <Heading fontSize="xl" mb={3}>{p.name}</Heading>
                  <Text mb={4} color="gray.600">{p.description}</Text>
                  <Button as={NextLink} href={p.url} bg="#001F3F" color="#FFD700" _hover={{ bg: "#002B5B" }} size="lg" borderRadius="full">Learn More</Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
