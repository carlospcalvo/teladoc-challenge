import inquirer, { QuestionCollection } from "inquirer";
import countPalindromicSubstrings from "./utils/palindromeCounter.js";
import findLongestRepeatedSubstring from "./utils/longestRepeatedSubstr.js";
import { FirstQuestion, InputQuestion, OPTIONS } from "./utils/types.js";

const firstQuestion: QuestionCollection<FirstQuestion> = [
	{
		name: "option",
		message: "Which function would you like to check out?",
		type: "rawlist",
		choices: Object.values(OPTIONS),
	},
];

const inputQuestion: QuestionCollection<InputQuestion> = [
	{
		name: "textInput",
		message: `Input the string you'd like to test: `,
		type: "input",
		default: "",
	},
];

async function main() {
	let exit = false;

	while (!exit) {
		const { option } = await inquirer.prompt(firstQuestion);

		if (option === OPTIONS.EXIT) {
			exit = true;
		} else {
			const { textInput } = await inquirer.prompt(inputQuestion);

			getResult(option, textInput);
		}
	}
}

function getResult(option: string, textInput: string) {
	let result: string | number;
	let resultText: string;

	if (option === OPTIONS.PALINDROMES) {
		result = countPalindromicSubstrings(textInput);
		resultText = `Result: The string '${textInput}' has ${result} palindromic substring(s).\n`;
	} else {
		result = findLongestRepeatedSubstring(textInput);
		resultText = `Result: The longest repeated substring for the string '${textInput}' is '${result}'.\n`;
	}

	console.log("\x1b[36m%s\x1b[0m", resultText);
}

main();
