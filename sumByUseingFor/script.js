var userNumber = Number(prompt("Please Enter a number: ", 10))
var sum = 0
for (i = 0; (userNumber / 10) != 0; i++) {

    sum = sum + (userNumber % 10)

    userNumber = Math.floor(userNumber / 10)
}

console.log("sum: ", sum)