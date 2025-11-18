// const obj ={
//     nextLevel: {courseId: "Level2"},
//     "Programming Hero": {courseId : "Level2"}
// }
// console.log(obj["Programming Hero"])

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const obj = {};

// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };
// console.log(obj);

// const courses = [
//   ["Programming Hero", "Level1"],
//   ["Next Level", "Level2"],
// ];
const courses = [
  [course1, "Level1"],
  [course2, "Level2"],
];

const map = new Map(courses);
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });

// map.clear()
// console.log(map.size)
// map.delete(course1)
// console.log(map.has(course1))
// console.log(map);
// map.forEach((value, key)=> console.log("Key",key, "Value",value))
// map.forEach((value, key) => (key.name = "Shohoz Shorol Simple " + key.name));

// console.log(map)
// console.log(map.keys())
// console.log(map.values())

// for (let key of map.keys()) {
//   key.name = "Shohoz Shorol Simple " + key.name;
// }
// console.log(map)
console.log(map);
