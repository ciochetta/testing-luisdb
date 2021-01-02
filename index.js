const LuisDB = require("learndb");

LuisDB.evalObject({
	type: "using",
	params: "test",
});

LuisDB.evalObject({
	type: "create",
	params: {
		table: "students",
		columns: ["name", "grade"],
	},
});

for (let index = 0; index < 100; index++) {
	LuisDB.evalObject({
		type: "insert",
		params: {
			table: "students",
			document: [
				Math.random().toString(36).substring(7),
				Math.round(Math.random() * 10),
			],
		},
	});
}
