import React from "react";

export default function Header({adVisible}) {
  
  return (
    <>
      <div className={`headerContainer ${adVisible ? "withAd" : ""}`}>
            <h1>ADIDAS X OASIS</h1>
            <h3>Celebrating 30 years of originality</h3>
      </div>
    </>
  );
}