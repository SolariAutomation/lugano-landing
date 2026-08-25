import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lugano Automation — AI-Powered Lead Response for HVAC, Plumbing & Electrical Companies",
  description: "Never lose a job to a slow callback. AI answers every lead by text and email in minutes — day, night, or weekend — so your team focuses on the work, not the phone.",
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
