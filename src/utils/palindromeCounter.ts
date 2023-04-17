/**
 * Helper function to check if a string is a palindrome.
 * @param str String to be checked.
 * @returns Whether it's a palindrome or not.
 */
function isPalindrome(str: string): boolean {
	const length: number = str.length;

	// Iterate through the string from both ends
	for (let i = 0; i < Math.floor(length / 2); i++) {
		if (str[i] !== str[length - 1 - i]) {
			return false; // If any pair of characters are not equal it's not a palindrome
		}
	}
	return true; // All pairs of characters are equal
}

/**
 * Function to check how many palindrome substrings a string has.
 * @param str String to be checked.
 * @returns The number of palindrome substrings.
 */
export default function countPalindromicSubstrings(str: string): number {
	const cleanStr: string = str?.split(" ").join(""); // Remove spaces

	// If there are no valid characters, return 0
	if (cleanStr.length === 0) {
		return 0;
	}

	// Used an array to make debugging easier
	const palindromes: Array<string> = [];

	// Loop through all possible substrings
	for (let i = 0; i < cleanStr?.length; i++) {
		for (let j = i; j < cleanStr?.length; j++) {
			const substring = cleanStr?.substring(i, j + 1);
			if (isPalindrome(substring)) {
				palindromes.push(substring); // If the substring is a palindrome add it to the palindrome array
			}
		}
	}

	// Left this for debugging
	console.debug("\x1b[35m%s\x1b[0m", `Palindromes for ${str}: `, palindromes);

	return palindromes.length; // Return the total count of palindromic substrings
}
