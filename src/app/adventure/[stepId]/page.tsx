const PageAdventureStep = ({ params }: { params: { stepId: "string" } }) => {
	return (
		<main>
			<div>{params.stepId}</div>
		</main>
	);
};

export default PageAdventureStep;
