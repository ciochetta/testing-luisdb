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

commandObj = {
	type: "BULK INSERT",
	params: {
		table: "students",
		documents: [],
	},
};

console.time("insert");

for (let index = 0; index < 10000; index++) {
	commandObj.params.documents.push({
		name: Math.random().toString(36).substring(7),
		grade: Math.round(Math.random() * 10),
	});
}

LuisDB.evalObject(commandObj);

console.timeEnd("insert");

let selectAll = {
	type: "select",
	params: {
		table: "students",
		columns: "star",
	},
};

//LuisDB.evalObject(selectAll);
