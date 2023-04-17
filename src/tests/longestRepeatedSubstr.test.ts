import { describe, expect, test } from "@jest/globals";
import findLongestRepeatedSubstring from "../utils/longestRepeatedSubstr.js";

describe("Return the longest repeated substring in a given string", () => {
	test("Test Case 01 - Input: empty string ('')", () => {
		const inputString = "";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("");
	});

	test("Test Case 02 - Input: 'aa'", () => {
		const inputString = "aa";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("a");
	});

	test("Test Case 03 - Input: 'abab'", () => {
		const inputString = "abab";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("ab");
	});

	test("Test Case 04 - Input: 'ababa'", () => {
		const inputString = "ababa";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("aba");
	});

	test("Test Case 05 - Input: 'nick'", () => {
		const inputString = "nick";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("");
	});

	test("Test Case 06 - Input: 'Mississippi'", () => {
		const inputString = "Mississippi";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("issi");
	});

	test("Test Case 07 - Input: 'stuff'", () => {
		const inputString = "stuff";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("f");
	});

	test("Test Case 08 - Input: 'abcabcabc'", () => {
		const inputString = "abcabcabc";
		const result = findLongestRepeatedSubstring(inputString);
		expect(result).toBe("abcabc");
	});

	test("Test Case 09 - Input: 'abcdefghi'", () => {
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
