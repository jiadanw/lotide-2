const mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"]  = 22;
const spam = "spam";
mary["dislikes"] = { food: spam, "e-mail": "spam" };
console.log(mary)
console.log(mary["key"])
console.log(Object.keys(mary))
console.log(mary.name)