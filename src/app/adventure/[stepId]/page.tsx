import CookieStepId from "@/components/CookieStepId";

const PageAdventureStep = ({ params }: { params: { stepId: "string" } }) => {
	return (
		<main>
			<CookieStepId stepId={params.stepId} />
			<div>{params.stepId}</div>
		</main>
	);
};

export default PageAdventureStep;
