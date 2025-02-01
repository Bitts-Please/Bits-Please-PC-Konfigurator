"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tile from "../components/Tile";

export default function UnguidedMode() {
  const tilesData = [
    {
      imageSrc: "/images/gaming-pc.jpg",
      title: "Gaming PC",
      description: `Für die besten Spielerlebnisse:
                    Starke Grafikkarten,
                    Leistungsstarke Prozessoren und 
                    Schnelle SSDs`,
    },
    {
      imageSrc: "/images/streaming-pc.svg",
      title: "Alltags PC",
      description: "Ideal für den täglichen Gebrauch. Leistungsstarker und effizienter Computer.",
    },
    {
      imageSrc: "/images/office-pc.jpeg",
      title: "Office PC",
      description: "Perfekt für Bürotätigkeiten, leicht und leise.",
    },
    {
      imageSrc: "/images/workstation.jpeg",
      title: "Workstation",
      description: "Für professionelle Anwendungen, hohe Leistung für Design und Rendering.",
    },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        background:
          "radial-gradient(circle, rgba(226, 43, 217, 0.88), rgb(7, 7, 100))",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
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
        <Link href="/" passHref>
          <Image
            src="/images/bits-please-logo.svg"
            alt="bits-please-Logo"
            width={150}
            height={150}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      <h1 style={{ fontSize: "50px", marginBottom: "20px" }} >
        Geführter Modus
      </h1>
      
      <p style={{ fontSize: "30px", marginBottom: "5px" }}>
        Willkommen im geführten Modus!
      </p>
      
      <p style={{ fontSize: "25px", marginBottom: "20px" }}>
        Dann lass uns mal beginnen, was möchtest du mit deinem neuen Rechner machen?
      </p>

      {/* Kachel-Grid mit 5px Abstand und nebeneinander */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 2x2 Layout
          gap: "10px", // Verringert den Abstand zwischen den Kacheln
          padding: "50px", // Padding für das Grid
          justifyContent: "center",
        }}
      >
        {tilesData.map((tile, index) => (
          <Tile
            key={index}
            imageSrc={tile.imageSrc}
            title={tile.title}
            description={tile.description}
          />
        ))}
      </div>
    </div>
  );
};