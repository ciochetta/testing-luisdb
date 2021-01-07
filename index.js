const LuisDB = require("learndb");

LuisDB.evalObject({
	type: "using",
	params: "test",
});

LuisDB.evalObject({
	type: "create table",
	params: {
		table: "students",
		columns: ["name", "grade"],
	},
});

console.time("regular insert");

for (let index = 0; index < 1000; index++) {
	LuisDB.evalObject({
		type: "INSERT",
		params: {
			table: "students",
			document: [
				Math.random().toString(36).substring(7),
				Math.round(Math.random() * 10),
			],
		},
	});
}

console.timeEnd("regular insert");

commandObj = {
	type: "BULK INSERT",
	params: {
		table: "students",
		documents: [],
	},
};

console.time("bulk insert");

for (let index = 0; index < 1000; index++) {
	commandObj.params.documents.push({
		name: Math.random().toString(36).substring(7),
		grade: Math.round(Math.random() * 10),
	});
}

LuisDB.evalObject(commandObj);

console.timeEnd("bulk insert");

let selectAll = {
	type: "select",
	params: {
		table: "students",
		columns: "star",
	},
};

//LuisDB.evalObject(selectAll);
