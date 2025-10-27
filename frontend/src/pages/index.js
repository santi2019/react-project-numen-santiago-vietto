import React, { useState } from 'react';
import Head from "next/head";
import Ad from "@/components/ad/Ad";
import Navbar from "@/components/navbar/Navbar";
import Header from '@/components/header/Header';

export default function Home() {

    const [adVisible, setAdVisible] = useState(true);
  
  return (
    <>
      <Head>
        <title>ADIDAS ORIGINALS X OASIS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/adidasLogo.ico" />
      </Head>
      
      {adVisible && <Ad onClose={() => setAdVisible(false)} />}
      <Navbar adVisible={adVisible} />
      <Header adVisible={adVisible} />

     
      <main>

          
      </main>
    </>
  );
}
