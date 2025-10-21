import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaziCare - Φροντίδα Ηλικιωμένων στην Ελλάδα",
  description: "Η πρώτη ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα. Συνδέουμε οικογένειες με επαληθευμένους φροντιστές.",
  keywords: ["φροντίδα ηλικιωμένων", "caregiver", "elderly care", "Ελλάδα", "Greece"],
  authors: [{ name: "MaziCare" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ttgmb3w4ly");
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

