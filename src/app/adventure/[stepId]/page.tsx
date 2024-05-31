import { notFound } from "next/navigation";
import dbConnect from "@/lib/mongoDB/dbConnect";
import Step from "@/lib/mongoDB/models/Step";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stepZod } from "@/lib/validations";

const PageAdventureStep = async ({
	params,
}: {
	params: { stepId: "string" };
}) => {
	let step: unknown;
	// FIXME: type should be TVal<TStep> but error "ts(2454) Variable 'stepValidate' is used before being assigned"
	let stepValidate: any;
	try {
		await dbConnect();
		step = await Step.findOne({ stepNum: params.stepId });
	} catch (error: any) {
		console.error({ message: error.message });
	}

	if (!step) {
		notFound();
	} else {
		const temp = stepZod.safeParse(step);

		if (!temp.success) {
			console.error(temp.error);
		} else {
			stepValidate = temp;
		}
	}

	return (
		<main>
			<div>
				<p>{stepValidate.data.description}</p>
				<p>{stepValidate.data.stepNum}</p>
			</div>
			<div>
				{stepValidate.data?.nextSteps?.map(
					(next: { description: string; stepNum: number }) => {
						return (
							<Link key={next.stepNum} href={`/adventure/${next.stepNum}`}>
								<Button>{next.description}</Button>
							</Link>
						);
					}
				)}
			</div>
		</main>
	);
};

export default PageAdventureStep;
