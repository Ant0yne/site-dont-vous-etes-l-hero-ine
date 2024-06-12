"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SignLog = ({ path }: { path: string }) => {
	const router = useRouter();

	return (
		<div>
			<Button onClick={() => router.push(`${path}`)}>
				{path === "signup" ? "S'inscrire" : "Se connecter"}
			</Button>
		</div>
	);
};

export default SignLog;
