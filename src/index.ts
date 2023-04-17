import inquirer from "inquirer";

import { firstQuestion, inputQuestion } from "./questions.js";
import getResult from "./result.js";

import { OPTIONS } from "./utils/types.js";

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

main();
