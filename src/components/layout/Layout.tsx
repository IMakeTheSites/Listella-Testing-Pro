import React from "react";
import { Box } from "@mui/material";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <>
      <Header />
      <Box component="main" sx={{ mt: 2.5 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
