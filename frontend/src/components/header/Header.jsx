import React, { useState } from "react";
import Ad from "@/components/header/ad/Ad";
import Navbar from "@/components/header/navbar/Navbar";

export default function Header() {
  
  const [adVisible, setAdVisible] = useState(true);

  return (
    <>
      {adVisible && <Ad onClose={() => setAdVisible(false)} />}
      <Navbar adVisible={adVisible} />
    </>
  );
}