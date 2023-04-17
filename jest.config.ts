export default {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["<rootDir>/src/tests/*.test.ts"],
	testPathIgnorePatterns: ["/node_modules/"],
	extensionsToTreatAsEsm: [".ts"],
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
};
