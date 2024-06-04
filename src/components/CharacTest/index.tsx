// cSpell: words charac
"use client";

import { useCharacterStore } from "@/lib/stores/character-store";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CharacTest = ({
	type,
	objectif,
	successStep,
	failStep,
}: {
	type: string;
	objectif: number;
	successStep: number;
	failStep: number;
}) => {
	const characStat = useCharacterStore((state) => state.DEX);
	const router = useRouter();

	const handleTest = (): void => {
		const diceRoll = Math.floor(Math.random() * 6 + 1);
		console.log(diceRoll);

		if (characStat + diceRoll > objectif) {
			router.push(`${successStep}`);
		} else {
			router.push(`${failStep}`);
		}
	};

	return (
		<div>
			<Button onClick={handleTest}>Faire un test de {type}</Button>
		</div>
	);
};

export default CharacTest;
