import React, {useState} from "react";
import Ad from "@/components/ad/Ad";
import Navbar from "@/components/navbar/Navbar";

export default function Header() {

  const [adVisible, setAdVisible] = useState(true);
  
  return (
    <>
      {adVisible && <Ad onClose={() => setAdVisible(false)} />}
      <Navbar adVisible={adVisible} />
      <div className={`headerContainer ${adVisible ? "withAd" : ""}`}>
            <h1>ADIDAS X OASIS</h1>
            <h3>Celebrating 30 years of originality</h3>
      </div>
    </>
  );
}