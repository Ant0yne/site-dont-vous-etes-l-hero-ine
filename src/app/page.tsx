import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cookies } from "next/headers";

export default function Home() {
	// throw new Error("test");
	const cookieStore = cookies();

	return (
		<main>
			<h1 className="text-center text-xl font-black">
				Un portfolio dont vous êtes (presque) l'héro-ïne
			</h1>
			<p className="text-center">
				Si ce n'est pas déjà fait, allez lire les règles avant de commencer.
			</p>
			<Link href="/rules" className="flex flex-col items-center">
				<Button className="w-min">Règles de l'aventure</Button>
			</Link>
			<p className="text-center">
				Que vous vous soyez perdu-es ou que vous soyez ici de votre plein gré,
				bienvenu-e !
			</p>
			<Link
				href={`/adventure/${cookieStore.get("step_id")?.value || "1"}`}
				className="flex flex-col items-center">
				<Button>Commencer l'aventure</Button>
			</Link>
		</main>
	);
}
