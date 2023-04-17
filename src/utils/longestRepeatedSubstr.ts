/**
 * Function that finds the longest repeated substring in a given string.
 * @param str String to be checked.
 * @returns The longest repeated substring.
 */
export default function findLongestRepeatedSubstring(str: string): string {
	const length: number = str.length;
	const occurrences: Record<string, number> = {};
	let longestSubstring: string = "";

	// Iterate through all possible substrings
	for (let i = 0; i < length; i++) {
		for (let j = i; j < length; j++) {
			const substring = str.substring(i, j + 1);

			const count = occurrences[substring] || 0;
			occurrences[substring] = count + 1;

			// If the substring is repeated and longer than the current longest substring,
			// update the longestSubstring variable
			if (count + 1 > 1 && substring.length > longestSubstring.length) {
				longestSubstring = substring;
			}
		}
	}

	// Left this for debugging
	console.debug("\x1b[35m%s\x1b[0m", `Occurrences for ${str}: `, occurrences);

	return longestSubstring;
}
