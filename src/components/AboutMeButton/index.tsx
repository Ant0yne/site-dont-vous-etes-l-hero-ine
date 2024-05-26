"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const AboutMeButton = () => {
	const pathname = usePathname();

	return (
		<>
			{pathname !== "/about" && (
				<Link href="/about">
					<Button className="w-min mx-auto">About Me</Button>
				</Link>
			)}
		</>
	);
};

export default AboutMeButton;
