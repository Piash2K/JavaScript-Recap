const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav places": ["bandarban", "saintmartin", "kuakata"],
};
console.log(person.name);
// console.log(person["name"])

const income = person.salary;
console.log(income);

const boyos = person["age"];
console.log(boyos);


console.log(person["fav places"])