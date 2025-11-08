// app/(components)/MainLayoutWrapper.jsx
"use client";

import ChakraClientProvider from "./ChakraClientProvider";
import MainLayout from "./MainLayout";

export default function MainLayoutWrapper({ children }) {
  return (
    <ChakraClientProvider>
      <MainLayout>{children}</MainLayout>
    </ChakraClientProvider>
  );
}
