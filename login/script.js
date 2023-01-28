var users = [
    { id: 1, name: "amin", family: "amini", age: 25, email: "amin@gmail.com" },
    { id: 2, name: "amir", family: "amiri", age: 22, email: "amir@gmail.com" },
    { id: 3, name: "reza", family: "rezai", age: 25, email: "reza@gmail.com" },
]

var userName = prompt("Enter your name :")
var userFamily = prompt("Enter your family :")
var userAge = prompt("Enter your age :")
var userEmail = prompt("Enter your email :")

if (userName.length < 3 || userName.length > 10) {
    alert("نام شما حداقل 3 و نهایت 10 حرفمیتواند باشد")
} else if (userFamily.length < 3 || userFamily > 15) {
    alert("فامیلی شما کمتر از 3 و بیشتر از 15 حرف نمیتواند باشد")
} else if (isNaN(userAge) || userAge.length > 4) {
    alert("خطا سن حتما باید عدد باشد")
} else {
    var newUser =
    {
        id: 4,
        name: userName,
        family: userFamily,
        age: userAge,
        email: userEmail,
    }
    users.push(newUser)


    console.log(users)
}