import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const RootHeader = () => {
	return (
		<header>
			<Link href="/">
				<Image
					src="https://res.cloudinary.com/dxyptix0d/image/upload/v1716718047/portfolioHero/Logo.png"
					width={50}
					height={50}
					alt="Logo"
				/>
			</Link>
			<nav>
				<Button variant="outline">Progression</Button>
				<Button variant="outline">Fiche de Personnage</Button>
				<div>
					<Button>Se connecter</Button>
					<Button variant="secondary">S'inscrire</Button>
				</div>
			</nav>
		</header>
	);
};

export default RootHeader;
