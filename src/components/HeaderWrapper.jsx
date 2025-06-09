"use client";
import { useState } from "react";
import MainHeader from "./MainHeader";
import { NavBar } from "./NavBar";

const HeaderWrapper = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <MainHeader
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <NavBar isMobileOpen={isMobileOpen} />
    </>
  );
};

export default HeaderWrapper;
