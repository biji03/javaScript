var enterNumber = +(prompt("please enter your number", 0))
var counter = 0


if (enterNumber === 0) {
    counter = 1
}
else {
    for (var i = 0; enterNumber / 10 != 0; i++) {
        counter++
        enterNumber = Math.floor(enterNumber / 10)

    }
}

console.log("count of digits : " + counter)