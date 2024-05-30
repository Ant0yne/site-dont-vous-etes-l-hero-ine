import { notFound } from "next/navigation";
import dbConnect from "@/lib/mongoDB/dbConnect";
import Step from "@/lib/mongoDB/models/Step";

const PageAdventureStep = async ({
	params,
}: {
	params: { stepId: "string" };
}) => {
	try {
		await dbConnect();
		const step = await Step.findOne({ stepNum: params.stepId });
		if (!step) {
			notFound();
		}
	} catch (error: any) {
		console.error({ message: error.message });
	}

	return (
		<main>
			<div>{params.stepId}</div>
		</main>
	);
};

export default PageAdventureStep;
