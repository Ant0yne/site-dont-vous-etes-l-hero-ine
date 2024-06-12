"use client";

import { usePathStore } from "@/lib/stores/path-store";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const path = usePathStore((state) => state.lastPath);
	const dialogRef = useRef<React.ElementRef<"dialog">>(null);

	useEffect(() => {
		dialogRef.current?.showModal();
	}, []);

	const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
		// return e.target === dialogRef.current && router.push(path);
		if (e.target === dialogRef.current) {
			router.push(path);
			router.refresh();
		}
	};

	return (
		<>
			<dialog
				ref={dialogRef}
				onClick={closeModal}
				onClose={router.back}
				className="backdrop:bg-black backdrop:backdrop-blur-sm">
				<div>{children}</div>
			</dialog>
		</>
	);
};

export default Modal;
