"use client"; // Required because we use useState()

import React, { useState } from "react";
import { Box, Flex, Heading, VStack, HStack, Button, Link, Drawer, Portal } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaChartPie, FaInfoCircle, FaEnvelope, FaQuestionCircle, } from "react-icons/fa";
import FooterPage from "@/components/Footer";

function NavItem({ icon: IconComp, label, href, onClick }) {
  return (
    <Link href={href} onClick={onClick} style={{ textDecoration: "none" }}>
      <HStack spacing={3} px={4} py={2} borderRadius="md" _hover={{ bg: "gray.100" }}>
        <IconComp />
        <Heading as="span" size="sm">{label}</Heading>
      </HStack>
    </Link>
  );
}

export default function LayoutWrapper({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Flex minH="100vh" bg="gray.50" color="gray.800">
      {/* Desktop Sidebar */}
      <Box
        as="nav"
        w={{ base: "0", md: "260px" }}
        bg="white"
        borderRightWidth="1px"
        position="fixed"
        h="100vh"
        py={8}
        px={4}
        display={{ base: "none", md: "block" }}
      >
        <Heading fontSize="xl" mb={10} textAlign="center">Kuza Asset Management</Heading>
        <VStack align="stretch" spacing={4}>
          <NavItem icon={FaHome} label="Home" href="/" />
          <NavItem icon={FaChartPie} label="Products" href="/products" />
          <NavItem icon={FaInfoCircle} label="About" href="/about" />
          <NavItem icon={FaEnvelope} label="Contact" href="/contact" />
          <NavItem icon={FaQuestionCircle} label="FAQs" href="/products/faqs" />
        </VStack>
        <Box mt="auto" textAlign="center" fontSize="sm" color="gray.500">© {new Date().getFullYear()}</Box>
      </Box>

      {/* Mobile Header + Drawer */}
      <Flex
        as="header"
        bg="blue.800"
        color="white"
        px={2}
        py={0.1}
        align="center"
        justify="space-between"
        position="fixed"
        top="0"
        left="0"
        w="full"
        display={{ base: "flex", md: "none" }}
        zIndex="overlay"
      >
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(Boolean(e.open))} placement="start">
          <Drawer.Trigger asChild>
            <Button variant="ghost" color="white" _hover={{ bg: "whiteAlpha.200" }} px={2} py={1}>
              <GiHamburgerMenu size={24} />
            </Button>
          </Drawer.Trigger>

          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header><Heading size="sm">Kuza Asset Management</Heading></Drawer.Header>
                <Drawer.Body>
                  <VStack align="stretch" spacing={4} mt={4}>
                    <NavItem icon={FaHome} label="Home" href="/" onClick={() => setOpen(false)} />
                    <NavItem icon={FaChartPie} label="Products" href="/products" onClick={() => setOpen(false)} />
                    <NavItem icon={FaInfoCircle} label="About" href="/about" onClick={() => setOpen(false)} />
                    <NavItem icon={FaEnvelope} label="Contact" href="/contact" onClick={() => setOpen(false)} />
                    <NavItem icon={FaQuestionCircle} label="FAQs" href="/products/faqs" onClick={() => setOpen(false)} />
                  </VStack>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>

        <Heading size="sm" color="white" fontWeight="semibold">Kuza Asset Management</Heading>
        <Box w="40px" />
      </Flex>

      {/* Main Content + Footer */}
      <Flex direction="column" flex="1" ml={{ base: 0, md: "260px" }} minH="100vh" w="full">
        <Box h={{ base: "20px", md: "0" }} />
        <Box as="main" flex="1" mx={1}>
          {children} {/* Server-rendered pages go here */}
        </Box>
        <FooterPage />
      </Flex>
    </Flex>
  );
}
