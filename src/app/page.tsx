'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import Button from "../app/components/Buttons";
import Head from "next/head";

export default function Home() {
  const handleClick = () => {
    alert("Du denkst auch du bist was besseres?!");
  };

  useEffect(() => {
    // Stelle sicher, dass der <model-viewer>-Script geladen wird
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>PC-Konfigurator</title>
      </Head>

      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(rgb(239, 62, 165) 0%, rgb(31, 116, 159) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Logo oben links */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <Image
            src="/images/bits-please-logo.svg"
            alt="bits-please-Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Überschriften */}
        <div
          style={{
            marginTop: "80px",
          }}
        >
          <h1>Willkommen zu unserem Handmade PC-Konfigurator.</h1>
          <h2>Hier bitte suche zunächst deinen Präferierten Modus aus.</h2>
        </div>

        {/* 3D-Modell */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          {/* <model-viewer> wird hier verwendet */}
          <model-viewer
            src="/models/gaming_desktop_pc.glb"
            alt="3D-Modell eines PC-Towers"
            rotation-per-second="2"
            auto-rotate
            camera-orbit="45deg 75deg 4m"
            interaction-policy="always"
            style={{
              width: "750px",
              height: "400px",
              borderRadius: "10px",
            }}
          ></model-viewer>
        </div>

        {/* Button */}
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <Button onClick={handleClick}>ungeführter Modus</Button>
        </div>
      </main>
    </>
  );
}
