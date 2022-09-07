//Basketball Points
//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

//Examples
//points(1, 1) ➞ 5
//points(7, 5) ➞ 29
//points(38, 8) ➞ 100

// Equations
// 2-pointers: number of pointers * 2 
// 3-pointers: number of pointers * 3

console.log("======== Basketball Points =========")
twoPoint = 2
threePoint = 3
twoPrompt = Number(prompt("How many 2-pointers were made?"))
threePrompt = Number(prompt("How many 3-pointers were made?"))
// Calculations for 2 pointer total
twoPcalc = twoPrompt * twoPoint
// Calculations for 3 pointer total
threePcalc = threePrompt * threePoint
// Calcalations for point total
finPoint = twoPcalc + threePcalc

console.log("Final Points(", twoPrompt, ",", threePrompt, ") ==> ", finPoint);

