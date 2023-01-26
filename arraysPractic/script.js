var userNumbers = []

var userNumber = 0

var sum = 0

while (userNumber != -1) {
    userNumber = Number(prompt("please enter your number: , -1 if you dont have number", 0))
    if (userNumber != -1) {
        userNumbers.push(userNumber)
    }
}
for (i = 0; i < userNumbers.length; i++) {
    sum += userNumbers[i]
}

console.log(userNumbers)

console.log("avrage : ", sum / userNumbers.length)