import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { BookOpenText, TableProperties } from "lucide-react";

const RootHeader = () => {
	return (
		<header className="flex">
			<Link href="/">
				<Image
					src="https://res.cloudinary.com/dxyptix0d/image/upload/v1716718047/portfolioHero/Logo.png"
					width={50}
					height={50}
					alt="Logo"
				/>
			</Link>

			<nav>
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
					<Button>Se connecter</Button>
					<Button variant="secondary">S'inscrire</Button>
				</div>
			</nav>
		</header>
	);
};

export default RootHeader;
