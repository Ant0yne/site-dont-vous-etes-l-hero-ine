// cSpell: words charac

import { notFound } from "next/navigation";
import Link from "next/link";

import dbConnect from "@/lib/mongoDB/dbConnect";
import Step from "@/lib/mongoDB/models/Step";
import { stepZod } from "@/lib/validations";

import { Button } from "@/components/ui/button";
import CharacTest from "@/components/CharacTest";
import { TStep, TStepSteps } from "@/lib/types";

const PageAdventureStep = async ({
	params,
}: {
	params: { stepId: "string" };
}) => {
	let step: TStep | null = null;
	// FIXME: type should be TVal<TStep> but error "ts(2454) Variable 'stepValidate' is used before being assigned"
	// let stepValidate: any;
	try {
		await dbConnect();
		step = await Step.findOne({ stepNum: params.stepId });
		console.log("====>", step?.nextSteps);
	} catch (error: any) {
		console.error({ message: error.message });
	}

	if (!step) {
		notFound();
	}
	// FIXME: Zod return key with undefined that doesn't exist in the MongoDB document
	// else {
	// 	const temp = stepZod.safeParse(step);

	// 	if (!temp.success) {
	// 		console.error(temp.error);
	// 	} else {
	// 		stepValidate = temp;
	// 		console.log("=========>", stepValidate.data.nextSteps);
	// 	}
	// }

	return (
		<main>
			<div>
				<p>{step?.description}</p>
			</div>
			<div>
				{step.nextSteps?.steps
					? step.nextSteps.steps.map((next: TStepSteps) => {
							return (
								<Link
									key={next.nextStepNum}
									href={`/adventure/${next.nextStepNum}`}>
									<Button>{next.description}</Button>
								</Link>
							);
					  })
					: null}
			</div>
			{/* FIXME: return all the nextSteps key even when not existing in the document*/}
			{step.nextSteps.test?.type ? (
				<CharacTest
					objectif={step.nextSteps.test.objectif}
					type={step.nextSteps.test.type}
					successStep={step.nextSteps.test.successStep}
					failStep={step.nextSteps.test.failStep}
				/>
			) : null}
		</main>
	);
};

export default PageAdventureStep;
