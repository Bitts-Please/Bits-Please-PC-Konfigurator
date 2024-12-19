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
        background: "linear-gradient(rgb(239, 62, 165) 0%, rgb(31, 116, 159) 100%)",
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

      <h1>Ungeführter Modus</h1>
      <p>Willkommen im ungeführten Modus!</p>

      {/* Aufklappbare Liste */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          marginTop: "20px",
          background: "white",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ color: "black" }}>Wähle deine Komponenten</h2>

        {/* Gehäuse */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "Gehäuse" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("Gehäuse")}
          >
            Gehäuse
          </button>
          {openCategory === "Gehäuse" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle ein Gehäuse für deinen PC.</p>
            </div>
          )}
        </div>

        {/* CPU */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "CPU" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("CPU")}
          >
            CPU
          </button>
          {openCategory === "CPU" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle eine CPU für deinen PC.</p>
            </div>
          )}
        </div>

        {/* Mainboard */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "Mainboard" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("Mainboard")}
          >
            Mainboard
          </button>
          {openCategory === "Mainboard" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle ein Mainboard für deinen PC.</p>
            </div>
          )}
        </div>

        {/* GPU */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "GPU" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("GPU")}
          >
            GPU
          </button>
          {openCategory === "GPU" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle eine GPU für deinen PC.</p>
            </div>
          )}
        </div>

        {/* RAM */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "RAM" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("RAM")}
          >
            RAM
          </button>
          {openCategory === "RAM" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle RAM für deinen PC.</p>
            </div>
          )}
        </div>

        {/* SSD */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "SSD" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("SSD")}
          >
            SSD
          </button>
          {openCategory === "SSD" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle eine SSD für deinen PC.</p>
            </div>
          )}
        </div>

        {/* Festplatte */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "Festplatte" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("Festplatte")}
          >
            Festplatte
          </button>
          {openCategory === "Festplatte" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle eine Festplatte für deinen PC.</p>
            </div>
          )}
        </div>

        {/* Netzteil/PSU */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "Netzteil/PSU" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("Netzteil/PSU")}
          >
            Netzteil/PSU
          </button>
          {openCategory === "Netzteil/PSU" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle ein Netzteil für deinen PC.</p>
            </div>
          )}
        </div>

        {/* CPU Kühler */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "CPU Kühler" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("CPU Kühler")}
          >
            CPU Kühler
          </button>
          {openCategory === "CPU Kühler" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle einen CPU Kühler für deinen PC.</p>
            </div>
          )}
        </div>

        {/* Gehäuselüfter */}
        <div style={{ marginBottom: "10px" }}>
          <button
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              backgroundColor: openCategory === "Gehäuselüfter" ? "#ef6292" : "#31A59E",
              color: "black", // Schriftfarbe auf schwarz geändert
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => toggleCategory("Gehäuselüfter")}
          >
            Gehäuselüfter
          </button>
          {openCategory === "Gehäuselüfter" && (
            <div style={{ padding: "10px", background: "#f1f1f1", borderRadius: "5px", marginTop: "5px" }}>
              <p style={{ color: "black" }}>Wähle einen Gehäuselüfter für deinen PC.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
