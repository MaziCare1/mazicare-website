import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MerimnaCare - Φροντίδα Ηλικιωμένων στην Ελλάδα",
  description: "Η πρώτη ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα. Συνδέουμε οικογένειες με επαληθευμένους φροντιστές.",
  keywords: ["φροντίδα ηλικιωμένων", "caregiver", "elderly care", "Ελλάδα", "Greece"],
  authors: [{ name: "MerimnaCare" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://merimnacare.com",
    title: "MerimnaCare - Φροντίδα Ηλικιωμένων",
    description: "Η πρώτη ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα.",
    siteName: "MerimnaCare",
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

