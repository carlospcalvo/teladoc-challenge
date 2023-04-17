import { Answers } from "inquirer";

export enum OPTIONS {
	PALINDROMES = "Count the palindroms in a string",
	SUBSTRINGS = "Get the longest repeated substring in a string",
	EXIT = "Exit",
}

export interface FirstQuestion extends Answers {
	option: OPTIONS;
}

export interface InputQuestion extends Answers {
	textInput: string;
}
