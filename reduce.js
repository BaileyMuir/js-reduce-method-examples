  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const num = [0, 1, 2, 3, 4];
let sum = num.reduce((acc, curr) => {
  console.log(
    "accumulator:", acc,
    "current value:", curr,
    "total:", acc + curr
  );
  return acc + curr;
});
console.log(sum)
// or bellow is better as its provided a base value

const nums = [0, 1, 2, 3, 4];
let sums = nums.reduce((acc, curr) => {
  console.log(
    "accumulator:", acc,
    "current value:", curr,
    "total:", acc + curr
  );
  return acc + curr;
}, 10);
console.log(sums)
// short hand

const sums2 = num.reduce((acc, curr) => acc+ curr, 0);
console.log(sums2)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience)

// Grouping by a property, and totaling it too
let exsperienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(exsperienceByProfession)