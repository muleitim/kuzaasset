// components/ClientButton.jsx
"use client";

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ClientButton({ href, children }) {
  return (
    <Button
      as={NextLink}
      href={href}
      bg="#001F3F"
      color="#FFD700"
      _hover={{ bg: "#002B5B", transform: "translateY(-2px)", boxShadow: "lg" }}
      _active={{ bg: "#001830", transform: "translateY(0)" }}
      size="lg"
      borderRadius="full"
      px={{ base: 2, sm: 2, md: 3, lg: 4 }}
      fontWeight="semibold"
      boxShadow="md"
      transition="all 0.2s ease-in-out"
    >
      {children}
    </Button>
  );
}
