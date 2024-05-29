"use client";

import { useEffect } from "react";
import { SetPathIdCookie } from "@/lib/cookiesUtils";

const CookieStepId = ({ stepId }: { stepId: string }) => {
	useEffect(() => {
		SetPathIdCookie(stepId);
	}, []);
	return null;
};

export default CookieStepId;
