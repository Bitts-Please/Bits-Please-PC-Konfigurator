"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../app/components/Buttons";
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Stelle sicher, dass der <model-viewer>-Script geladen wird
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.onload = () => {
      setTimeout(() => setIsLoading(false), 1000); // Verzögerung für bessere UX
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>PC-Konfigurator</title>
      </Head>

      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: "linear-gradient(rgb(239, 62, 165) 0%, rgb(31, 116, 159) 100%)",
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Lade Inhalte...
        </div>
      ) : (
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
          <div>
            <h1>Willkommen zu unserem Handmade PC-Konfigurator.</h1>
            <h2>Bitte wähle zunächst deinen präferierten Modus aus.</h2>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center", // Zentriert die Buttons horizontal
              alignItems: "center", // Vertikale Zentrierung (sinnvoll falls Container-Höhe angepasst wird)
              gap: "20px", // Abstand zwischen Buttons
              marginTop: "20px",
            }}
          >
            <Button href="/unguided_mode">Ungeführter Modus</Button>
            <Button href="/guided_mode">Geführter Modus</Button>
          </div>

          {/* 3D-Modell */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <model-viewer
              src="/models/gaming_desktop_pc.glb"
              alt="3D-Modell eines PC-Towers"
              auto-rotate
              auto-rotate-delay="0"
              camera-orbit="150deg 75deg 3m"
              rotation-per-second="5"
              interaction-policy="allow-when-focused"
              style={{
                width: "750px",
                height: "350px",
                borderRadius: "10px",
              }}
            ></model-viewer>
          </div>
        </main>
      )}
    </>
  );
}
