import { describe, expect, test } from "@jest/globals";
import findLongestRepeatedSubstring from "../utils/longestRepeatedSubstr.js";

describe("Return the longest repeated substring in a given string", () => {
	test("Test Case 1 - Input: empty string ('')", () => {
		const inputString = "";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("");
	});

	test("Test Case 2 - Input: 'aa'", () => {
		const inputString = "aa";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("a");
	});

	test("Test Case 3 - Input: 'abab'", () => {
		const inputString = "abab";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("ab");
	});

	test("Test Case 4 - Input: 'ababa'", () => {
		const inputString = "ababa";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("aba");
	});

	test("Test Case 5 Input: 'nick'", () => {
		const inputString = "nick";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("");
	});

	test("Test Case 6 - Input: 'Mississippi'", () => {
		const inputString = "Mississippi";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("issi");
	});

	test("Test Case 7 - Input: 'stuff'", () => {
		const inputString = "stuff";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("f");
	});

	test("Test Case 8 - Input: 'abcabcabc'", () => {
		const inputString = "abcabcabc";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("abcabc");
	});

	test("Test Case 9 - Input: 'abcdefghi'", () => {
		const inputString = "abcdefghi";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("");
	});

	test("Test Case 10 - Input: 'aabbccddee'", () => {
		const inputString = "aabbccddee";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("a");
	});

	test("Test Case 11 - Input: 'ababababab'", () => {
		const inputString = "ababababab";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("abababab");
	});

	test("Test Case 12 - Input: 'abcdefgabcdefg'", () => {
		const inputString = "abcdefgabcdefg";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("abcdefg");
	});

	test("Test Case 13 - Input: '123123123'", () => {
		const inputString = "123123123";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("123123");
	});
});
