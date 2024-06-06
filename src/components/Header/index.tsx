import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { BookOpenText, TableProperties, Waypoints } from "lucide-react";

const RootHeader = () => {
	return (
		<header className="flex border-b p-2 mb-1">
			<Link href="/">
				<Image
					src="https://res.cloudinary.com/dxyptix0d/image/upload/v1716718047/portfolioHero/Logo.png"
					width={50}
					height={50}
					alt="Logo"
				/>
			</Link>

			<nav>
				<Link href="/path">
					<Button variant="outline">
						<Waypoints strokeWidth="1" className="mr-2" /> Chemins suivis
					</Button>
				</Link>
				<Link href="/progress">
					<Button variant="outline">
						<BookOpenText strokeWidth="1" className="mr-2" /> Progression
					</Button>
				</Link>
				<Link href="/character">
					<Button variant="outline">
						<TableProperties strokeWidth="1" className="mr-2" />
						Fiche de Personnage
					</Button>
				</Link>

				<div>
					<Link href="/login">
						<Button>Se connecter</Button>
					</Link>
					<Button variant="secondary">S'inscrire</Button>
				</div>
			</nav>
		</header>
	);
};

export default RootHeader;
