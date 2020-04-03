// const Riya = {
//     name: "Riya",
//     dob: 2003,
//     graduated: false,
//     age: function () {
//         console.log(this);
//         return 2020 - this.dob;
//     }
// };
// console.log(Riya.age())

// const Homer = {
//     name: "Homer",
//     age: 32,
//     family: {
//         wife: {
//             name: "Marge",
//             age: 32
//         },
//         son: {
//             name: "Bart",
//             age: 10
//         }
//     },
//     pets: ['cat', 'dog']
// };

// Homer.family.daughter = {
//     name: "Lisa",
//     age: 8
// };

const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age: function () {
        console.log(this);
        return 2020 - this.dob;
    }
};

const { name, age } = Riya

// const calc = {
//     add: function (x, y) {
//         return x + y;
//     }
// }

// const { add } = calc

// console.log(add(2, 2))

const Angel = Riya
Angel.name = "Angel" // Don't do this!!

console.log()