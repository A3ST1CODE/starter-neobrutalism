import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
});

export const metadata: Metadata = {
    title: {
        default:"Starter of neobrutalism Tailwind components for React and Shadcn UI",
        template: `%s - Neobrutalism`,
    },
    description: "A Starter of neobrutalism-styled Tailwind components for React and Shadcn UI.",
    keywords: [
        "neobrutalism",
        "neobrutalism starter",
        "neobrutalism tailwind",
        "react neobrutalism",
        "react tailwind starter",
        "shadcn components",
        "shadcn neobrutalism",
    ],
    authors: [{ name: "Aesticodes", url: "https://github.com/aesticodes" }],
    openGraph: {
        type: "website",
        description: "A Starter of neobrutalism-styled Tailwind components for React and Shadcn UI.",
        images: ["https://neobruthemes.vercel.app/preview.png"],
        url: "https://neobruthemes.vercel.app/",
        title: "Neobrutalism Starter",
    },
    metadataBase: new URL("https://www.aesticodes.com/"),
    twitter: {
        card: "summary_large_image",
        title: "Neobrutalism components - Start making neobrutalism layouts",
        description:
            "A collection of neobrutalism-styled Tailwind components for React and Shadcn UI.",
        images: "https://neobruthemes.vercel.app/preview.png",
        creator: "@aesticodes",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${bricolage.className} min-h-screen flex flex-col`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
