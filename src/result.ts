import findLongestRepeatedSubstring from "./utils/longestRepeatedSubstr.js";
import countPalindromicSubstrings from "./utils/palindromeCounter.js";
import { OPTIONS } from "./utils/types.js";

export default function getResult(option: string, textInput: string) {
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
