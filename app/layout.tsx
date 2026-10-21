import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portafolio Personal",
  description: "Portafolio personal de Enrique Sandoval, Web Developer",
  icons: { icon: "/images/logo-sanca.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Los estilos usan <ion-icon>, por eso cargamos Ionicons como web component */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
