const address = "andorkilla";
const part = address.slice(2, 5); //(2,5) means start at 2 and end before 5
// console.log(part);

const sentence = "I am a good and hardworking person";
// const individualWord= sentence.split(" ")
const individualWord = sentence.split("a");
// console.log(individualWord);

const friendsStr = "Rahim,Kahim,dahim,lahim,fahim,sahim";
const friends = friendsStr.split(",");
console.log(friends);

const realFriend = ["Rahim", "Kahim", "dahim", "lahim", "fahim", "sahim"];

console.log(realFriend.join("->"));
