import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaziCare - Φροντίδα Ηλικιωμένων στην Ελλάδα",
  description: "Η πρώτη ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα. Συνδέουμε οικογένειες με επαληθευμένους φροντιστές.",
  keywords: ["φροντίδα ηλικιωμένων", "caregiver", "elderly care", "Ελλάδα", "Greece"],
  authors: [{ name: "MaziCare" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://mazicare.com",
    title: "MaziCare - Φροντίδα Ηλικιωμένων",
    description: "Η πρώτη ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα.",
    siteName: "MaziCare",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030213",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

