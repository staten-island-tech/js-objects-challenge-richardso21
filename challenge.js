const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

// #1
democratPresidents = presidents.filter(el => el.party === "D")
console.log(democratPresidents)
// #2
republicanPresidents = presidents.filter(el => el.party === "R" && el.terms === 1)
console.log(republicanPresidents)

// #3
lastThreePresidents = presidents.slice(-3)
console.log(lastThreePresidents)

// #4
twoTermPresidents = presidents.filter(el => el.party === "D" && el.terms === 2)
console.log(twoTermPresidents)

// Bonus
lbjIndex = presidents.findIndex(x => x.name === "Lyndon Johnson")

if (presidents[lbjIndex].terms === 2) {
    alert("LBJ served two terms");
} else {
    alert("LBJ was one and done");
}