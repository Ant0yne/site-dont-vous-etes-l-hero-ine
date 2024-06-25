import type { TCharacter } from "@/lib/types";
import { Schema, model, models } from "mongoose";

const characterSchema = new Schema<TCharacter>({
	characName: {
		type: String,
		required: true,
	},
	DEX: {
		type: Number,
		required: true,
	},
});

const Character =
	models.Character || model<TCharacter>("Character", characterSchema);

export default Character;
