import { Box, Container, Flex, Text, Link, Icon, Stack } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,  
  FaGlobeAfrica,
  FaRegQuestionCircle,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

export default function FooterPage() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", href: "https://web.facebook.com/p/Kuza-Asset-Management-100083938681868/?_rdc=1&_rdr#" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/kuza.africa/" },
    { icon: FaTwitter, label: "Twitter", href: "https://x.com/Kuza_Asset/status/1843911188947841493" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "https://ke.linkedin.com/company/kuza-asset-management-ltd" },
    { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@kuza.africa" },
    { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@kuza.africa" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=254705666444&text&type=phone_number&app_absent=0" },    
    { icon: FaGlobeAfrica, label: "Website", href: "/" },
    { icon: FaRegQuestionCircle, label: "FAQs", href: "/products/faqs" },
  ];

  return (
    <Box bg="blue.800" color="gray.200" py={10}>
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "center" }}
          gap={8}
        >
          {/* Left Section */}
          <Stack spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              © {year} Kuza
            </Text>

            <Link
              href="https://client.kuza.africa/"
              fontSize="sm"
              _hover={{ color: "white", textDecoration: "underline" }}
            >
              Client Portal
            </Link>
          </Stack>

          {/* Center - App Downloads */}
          <Stack spacing={3}>
            <Text fontWeight="bold" fontSize="md">Download Kuza App</Text>

            <Flex gap={3} wrap="wrap">
              <Link
                href="https://play.google.com/store/apps/details?id=kuza.africa.kuza&hl=en"
                display="flex"
                alignItems="center"
                fontSize="sm"
                _hover={{ color: "white" }}
              >
                <Icon as={FaGooglePlay} mr={2} /> Android App
              </Link>

              <Link
                href="https://apps.apple.com/ke/app/kuza-africa/id1662784344"
                display="flex"
                alignItems="center"
                fontSize="sm"
                _hover={{ color: "white" }}
              >
                <Icon as={FaApple} mr={2} /> iPhone App
              </Link>
            </Flex>
          </Stack>

          {/* Right Section - Social */}
          <Stack spacing={3}>
            <Text fontWeight="bold" fontSize="md">Follow Us</Text>

            <Flex wrap="wrap" gap={4}>
              {socialLinks.map(({ icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  display="flex"
                  alignItems="center"
                  fontSize="sm"
                  _hover={{ color: "white" }}
                >
                  <Icon as={icon} mr={2} /> {label}
                </Link>
              ))}
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
