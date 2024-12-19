import Link from "next/link";
import React from "react";

type ButtonProps = {
  onClick?: () => void; // Optional: Funktion für Interaktionen
  href?: string;        // Optional: Navigation mit Link
  children: React.ReactNode; // Erforderlich: Inhalt des Buttons
};

const Button: React.FC<ButtonProps> = ({ onClick, href, children }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
