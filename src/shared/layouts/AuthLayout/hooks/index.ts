import { heroOptions } from "../constants";

type Position = "normal" | "inverted";

const useInvertedPosition = (position: Position) => {
	const isInverted = position === "inverted";

	const formX = isInverted ? 40 : -40;
	const imageX = isInverted ? -40 : 40;

	const hero = isInverted ? heroOptions[0] : heroOptions[1];

	return { formX, imageX, hero, isInverted };
};

export { useInvertedPosition };
