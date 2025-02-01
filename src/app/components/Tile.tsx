import React from "react";

type TileProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const Tile: React.FC<TileProps> = ({ imageSrc, title, description }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        width: "300px", // Kachelbreite angepasst (etwas enger)
        margin: "5px", // Weniger Abstand zwischen den Kacheln
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "250px", // Feste Kachelhöhe
        boxShadow: "none", // Kein Hover-Effekt mehr
      }}
    >
      {/* Bild */}
      <div
        style={{
          height: "150px", // Bildhöhe bleibt gleich
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      {/* Textbereich (wird immer angezeigt) */}
      <div
        style={{
          padding: "5px",
          color: "black",
        }}
      >
        {/* Überschrift */}
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "5px",
            padding: "5px",
            backgroundColor: "transparent", // Keine Hintergrundfarbe
          }}
        >
          {title}
        </h3>

        {/* Beschreibung */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Tile;