import { describe, expect, test } from "@jest/globals";
import countPalindromicSubstrings from "../utils/palindromeCounter.js";

describe("Given a string s, return the number of palindromic substrings in it.", () => {
	test("Test case 1 - Input: empty string ('')", () => {
		const inputString = "";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(0);
	});

	test("Test case 2 - Input: 'abc'", () => {
		const inputString = "abc";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(3);
	});

	test("Test case 3 - Input: 'aaa'", () => {
		const inputString = "aaa";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(6);
	});

	test("Test case 4 - Input: 'a'", () => {
		const inputString = "a";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(1);
	});

	test("Test case 5 - Input: 'ababa'", () => {
		const inputString = "ababa";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(9);
	});

	test("Test case 6 - Input: 'abcdefg'", () => {
		const inputString = "abcdefg";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(7);
	});

	test("Test case 7 - Input: 'aaaaa'", () => {
		const inputString = "aaaaa";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(15);
	});

	test("Test case 8 - Input: 'ab cba  c'", () => {
		const inputString = "ab cba  c";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(8);
	});

	test("Test case 9 - Input: 'madam'", () => {
		const inputString = "madam";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(7);
	});

	test("Test case 10 - Input: 'a#b*c@b*a'", () => {
		const inputString = "a#b*c@b*a";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(9);
	});

	test("Test case 11 - Input: '121121'", () => {
		const inputString = "121121";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(11);
	});

	test("Test case 12 - Input: 'AbCba'", () => {
		const inputString = "AbCba";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(6);
	});

	test("Test case 13 - Input: 'madam arora level radar'", () => {
		const inputString = "madam arora level radar";
		const result = countPalindromicSubstrings(inputString);
		expect(result).toBe(29);
	});
});
