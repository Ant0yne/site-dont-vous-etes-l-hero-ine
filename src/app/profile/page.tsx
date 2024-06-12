import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const PageProfile = () => {
	return (
		<div>
			<Profile />
			<Link href="/profile/character">
				<Button>Fiche de personnage</Button>
			</Link>
			<Link href="/profile/progress">
				<Button>Progression</Button>
			</Link>
			<Link href="/profile/path">
				<Button>Chemin parcouru</Button>
			</Link>
		</div>
	);
};

export default PageProfile;
