import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

/**
 * Font Configuration
 * Using Inter for a modern, clean, and highly readable interface
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

/**
 * Metadata Configuration
 * SEO and social media optimization
 */
export const metadata: Metadata = {
  title: {
    default: "Civic Issues - Report & Track Community Problems",
    template: "%s | Civic Issues",
  },
  description:
    "Report, track, and resolve civic issues in your community. A platform for citizens to voice concerns and collaborate with local authorities for a better neighborhood.",
  keywords: [
    "civic issues",
    "community problems",
    "report issues",
    "local government",
    "civic engagement",
    "neighborhood",
    "public services",
    "complaints",
  ],
  authors: [{ name: "Civic Issues Team" }],
  creator: "Civic Issues Platform",
  publisher: "Civic Issues Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Civic Issues - Report & Track Community Problems",
    description:
      "Report, track, and resolve civic issues in your community. A platform for citizens to voice concerns and collaborate with local authorities.",
    siteName: "Civic Issues",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Civic Issues Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civic Issues - Report & Track Community Problems",
    description:
      "Report, track, and resolve civic issues in your community. A platform for citizens to voice concerns and collaborate with local authorities.",
    images: ["/og-image.png"],
    creator: "@civicissues",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

/**
 * Viewport Configuration
 * Responsive design settings
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/**
 * Root Layout Component
 * Main layout wrapper for the entire application
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        {/* Main Application Content */}
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Default options
            duration: 5000,
            style: {
              background: "#ffffff",
              color: "#171717",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            },
            // Success toast style
            success: {
              duration: 4000,
              style: {
                background: "#10b981",
                color: "#ffffff",
              },
              iconTheme: {
                primary: "#ffffff",
                secondary: "#10b981",
              },
            },
            // Error toast style
            error: {
              duration: 6000,
              style: {
                background: "#ef4444",
                color: "#ffffff",
              },
              iconTheme: {
                primary: "#ffffff",
                secondary: "#ef4444",
              },
            },
            // Loading toast style
            loading: {
              style: {
                background: "#3b82f6",
                color: "#ffffff",
              },
              iconTheme: {
                primary: "#ffffff",
                secondary: "#3b82f6",
              },
            },
          }}
        />
      </body>
    </html>
  );
}

