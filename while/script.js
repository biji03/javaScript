var userNumber = null
var i = 0
var sum = 0

while (i < 3) {
    userNumber = Number(prompt("Enter The Number"))
    sum += userNumber
    i++
}
alert("Avrage : " + sum / 3)