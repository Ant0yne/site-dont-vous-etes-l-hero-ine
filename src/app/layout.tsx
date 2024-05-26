import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import RootHeader from "@/components/Header";
import RootFooter from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Un site dont vous êtes l'héro-ine",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen flex flex-col mx-auto`}>
				<RootHeader />
				{children}
				<RootFooter />
			</body>
		</html>
	);
}
