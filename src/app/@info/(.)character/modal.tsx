"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const ModalC = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const dialogRef = useRef<React.ElementRef<"dialog">>(null);

	useEffect(() => {
		dialogRef.current?.showModal();
	}, []);

	const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
		return e.target === dialogRef.current && router.back();
	};

	return (
		<>
			<dialog
				ref={dialogRef}
				onClick={closeModal}
				onClose={router.back}
				className="backdrop:bg-black backdrop:backdrop-blur-sm">
				<div>{children}</div>
				{/* <Link href="/">
					<Button>Fermer</Button>
				</Link> */}
			</dialog>
			<p>salut</p>
		</>
	);
};

export default ModalC;
