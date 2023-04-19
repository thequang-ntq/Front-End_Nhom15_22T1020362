const PI = 3.14;
function getArea() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let Area1 = num1 * num1 * PI;
    let Area2 = num2 * num2 * PI;
    alert("The Area of " + num1 + " is " + Area1);
    alert("The Area of " + num2 + " is " + Area2);
}
function getCV() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let cv1 = num1 * PI;
    let cv2 = num2 * PI;
    alert("The CV of " + num1 + " is " + cv1);
    alert("The CV of " + num2 + " is " + cv2);
}
function add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1 + num2;

    alert("The sum of " + num1 + " and " + num2 + " is " + sum);
}
function subtract() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let diff = num1 - num2;

    alert("The difference between " + num1 + " and " + num2 + " is " + diff);
}
function multiply() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let product = num1 * num2;

    alert("The product of " + num1 + " and " + num2 + " is " + product);
}
function divide() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let quotient = num1 / num2;

    alert("The quotient of " + num1 + " divided by " + num2 + " is " + quotient);
}
function getValue(){
    let myInput = document.getElementById("myName");
    let r = myInput.value;
    alert("Giá trị radius: " + r);
    getCV(r);
    getArea(r);
}
