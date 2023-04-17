import { QuestionCollection } from "inquirer";
import { FirstQuestion, InputQuestion, OPTIONS } from "./utils/types.js";

export const firstQuestion: QuestionCollection<FirstQuestion> = [
	{
		name: "option",
		message: "Which function would you like to check out?",
		type: "rawlist",
		choices: Object.values(OPTIONS),
	},
];

export const inputQuestion: QuestionCollection<InputQuestion> = [
	{
		name: "textInput",
		message: `Input the string you'd like to test: `,
		type: "input",
		default: "",
	},
];
