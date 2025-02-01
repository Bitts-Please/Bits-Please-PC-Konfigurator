"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importiere Link von Next.js

export default function UnguidedMode() {
  // Zustände für jede Kategorie, ob sie aufgeklappt ist
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Funktion, um eine Kategorie umzuschalten
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        background: "radial-gradient(circle, rgba(226, 43, 217, 0.88),rgb(7, 7, 100))",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      {/* Logo oben links, klickbar und zurück zur Hauptseite */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      >
        <Link href="/" passHref>
          <Image
            src="/images/bits-please-logo.svg"
            alt="bits-please-Logo"
            width={150}
            height={150}
            style={{ cursor: "pointer" }} // Fügt einen Zeiger-Cursor hinzu, um anzuzeigen, dass es klickbar ist
          />
        </Link>
      </div>

      <h1>Geführter Modus</h1>
      <p>Willkommen im geführten Modus!</p>
   
    </div>
  );
}
