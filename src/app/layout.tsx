import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import StickyNavbar from "@/components/sticky-navbar";
import Footer from "@/components/footer";
import {AnimatedGridPattern} from "@/components/animated-grid-pattern";
import {HeroUIProvider} from "@heroui/system";
import {AnimationLayout} from "@/components/page-transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gadget Gallery",
  description: "A collection of gadgets built with React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background dark:bg-background`}>
        <HeroUIProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <StickyNavbar />
            <AnimatedGridPattern
              numSquares={50}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              }
            />
            <AnimationLayout>{children}</AnimationLayout>
            <Footer />
          </ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
