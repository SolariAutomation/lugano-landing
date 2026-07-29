import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lugano Automation — AI-powered lead follow-up for car dealerships",
  description: "Automatically follow up with leads who go cold. AI-written emails, timed sequences, reply monitoring — so your team focuses on closing, not chasing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
