document.addEventListener("DOMContentLoaded", function () {
  var display = document.getElementById("cal-display");
  var buttons = document.getElementsByClassName("btn");
  let currentValue = "";
  var h1="";

  for (let button of buttons) {
    button.addEventListener("click", function () {
      const value = button.innerText;
      if (value == "C") {
        currentValue = "0";
        display.value = currentValue;
      } else if (value == "1/x") {
        oneByX(display.value);
      } else if (value == "x2") {
        xSquare(display.value);
      } else if (value == "2√x") {
        squareRootX(display.value);
      } else if (value == "⌫") {
        backSpace();
      } else if (value == "=") {
        equal(display.value);
      } else if (value == "-") {
        subtraction(display.value);
      } else if (value == "×") {
        multiplication(display.value);
      } else if (value == "÷") {
        division(display.value);
      } else if (value == "+") {
        addition(display.value);
      } else if (value == "%") {
        mod(display.value);
      } else if (
        value == "1" ||
        value == "2" ||
        value == "3" ||
        value == "4" ||
        value == "5" ||
        value == "6" ||
        value == "7" ||
        value == "8" ||
        value == "9" ||
        value == "0"
      ) {
        if (display.value == "0") {
          currentValue = value;
          display.value = currentValue;
        } else {
          currentValue = display.value + value;
          display.value = currentValue;
        }
      } else if (value == "CE") {
        ceFunctionality(display.value);
      } else if (value == ".") {
        dot(display.value);
      } else if (value == "+/-") {
        negate(display.value);
      } else {
        currentValue = currentValue + value;
        display.value = currentValue;
      }

      //Functions
      function dot(val) {
        if (val == "") {
          display.value = "0" + value;
        } else if (!display.value.includes(".")) {
          display.value = display.value + value;
        } else if (isOperator(display.value.charAt(display.value.length - 1))) {
          display.value = display.value + "0" + value;
        } else {
          display.value = val + value;
        }
      }
      function isOperator(char) {
        var operators = ["+", "-", "×", "÷", "%"];
        return operators.includes(char);
      }
      function negate(val) {
        let result = -val;
        currentValue = result;
        display.value = currentValue;
      }
      function oneByX(val) {
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        //Percentage Functionality
        // A + B % =, the result should be A × (1 + B/100) or A + (A × B/100) after you distribute the multiplication over the addition. Similarly, when the user enters A − B % =, the result should be A × (1 − B/100) or A − (A × B/100).
        var A, B;
        if (val.includes("+")) {
          A = val.substring(0, val.indexOf("+"));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("+") + 1, val.length));
          if (val.slice(-1) == "+") {
            B = A;
          }
          //currentValue=A + (A * B/100);
          display.value = A;
          B = 1 / B;
          display.value = A + "+" + B;
        } else if (val.includes("-")) {
          A = val.substring(0, val.indexOf("-"));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("-") + 1, val.length));
          if (val.slice(-1) == "-") {
            B = A;
          }
          //currentValue=A - (A * B/100);
          display.value = A;
          B = 1 / B;
          display.value = A + "-" + B;
        } else if (val.includes("×")) {
          A = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("×") + 1, val.length));
          if (val.slice(-1) == "×") {
            B = A;
          }
          //currentValue = A * (B/100);
          display.value = A;
          B = 1 / B;
          display.value = A + "×" + B;
        } else if (val.includes("÷")) {
          A = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("÷") + 1, val.length));
          if (val.slice(-1) == "÷") {
            B = A;
          }
          //currentValue = A / (B/100);
          display.value = A;
          B = 1 / B;
          display.value = A + "÷" + B;
        } else {
          if (f) {
            currentValue = (1 / val) * -1;
            display.value = currentValue;
          } else {
            currentValue = 1 / val;
            display.value = currentValue;
          }
        }
      }
      function xSquare(val) {
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        var A, B;
        if (val.includes("+")) {
          A = val.substring(0, val.indexOf("+"));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("+") + 1, val.length));
          if (val.slice(-1) == "+") {
            B = A;
          }
          //currentValue=A + (A * B/100);
          display.value = A;
          B = B * B;
          display.value = A + "+" + B;
        } else if (val.includes("-")) {
          A = val.substring(0, val.indexOf("-"));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("-") + 1, val.length));
          if (val.slice(-1) == "-") {
            B = A;
          }
          //currentValue=A - (A * B/100);
          display.value = A;
          B = B * B;
          display.value = A + "-" + B;
        } else if (val.includes("×")) {
          A = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("×") + 1, val.length));
          if (val.slice(-1) == "×") {
            B = A;
          }
          //currentValue = A * (B/100);
          display.value = A;
          B = B * B;
          display.value = A + "×" + B;
        } else if (val.includes("÷")) {
          A = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("÷") + 1, val.length));
          if (val.slice(-1) == "÷") {
            B = A;
          }
          //currentValue = A / (B/100);
          display.value = A;
          B = B * B;
          display.value = A + "÷" + B;
        } else {
          currentValue = val * val;
          display.value = currentValue;
        }
      }
      function squareRootX(val) {
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        var A, B;
        if (val.includes("+")) {
          A = val.substring(0, val.indexOf("+"));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("+") + 1, val.length));
          if (val.slice(-1) == "+") {
            B = A;
          }
          //currentValue=A + (A * B/100);
          display.value = A;
          B = Math.sqrt(B);
          display.value = A + "+" + B;
        } else if (val.includes("-")) {
          A = val.substring(0, val.indexOf("-"));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("-") + 1, val.length));
          if (val.slice(-1) == "-") {
            B = A;
          }
          //currentValue=A - (A * B/100);
          display.value = A;
          B = Math.sqrt(B);
          display.value = A + "-" + B;
        } else if (val.includes("×")) {
          A = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("×") + 1, val.length));
          if (val.slice(-1) == "×") {
            B = A;
          }
          //currentValue = A * (B/100);
          display.value = A;
          B = Math.sqrt(B);
          display.value = A + "×" + B;
        } else if (val.includes("÷")) {
          A = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("÷") + 1, val.length));
          if (val.slice(-1) == "÷") {
            B = A;
          }
          //currentValue = A / (B/100);
          display.value = A;
          B = Math.sqrt(B);
          display.value = A + "÷" + B;
        } else {
          if (f) {
            display.value = "Invalid Input";
          } else {
            currentValue = Math.sqrt(val);
            display.value = currentValue;
          }
        }
      }
      function backSpace() {
        if (display.value.length > 1) {
          display.value = display.value.substring(0, display.value.length - 1);
          currentValue = display.value;
        } else {
          currentValue = "";
          display.value = 0;
        }
      }
      function negate(val) {
        let result = -val;
        currentValue = result;
        display.value = currentValue;
      }

      function equal(val) {
        let operand1 = "";
        let operand2 = "";
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        if (val.includes("+")) {
          operand1 = Number(val.substring(0, val.indexOf("+")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("+") + 1, val.length);
          h1=operand1+"+"+operand2;
          currentValue = operand1 + Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue;
        } else if (val.includes("-")) {
          operand1 = Number(val.substring(0, val.indexOf("-")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("-") + 1, val.length);
          h1=operand1+"-"+operand2;
          currentValue = operand1 - Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue;
        } else if (val.includes("×")) {
          operand1 = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("×") + 1, val.length);
          h1=operand1+"×"+operand2;
          currentValue = operand1 * Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue;
        } else if (val.includes("÷")) {
          operand1 = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("÷") + 1, val.length);
          h1=operand1+"÷"+operand2;
          currentValue = operand1 / Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue;
        } else {
          display.value = currentValue;
        }
      }
      function subtraction(val) {
        let operand1 = "";
        let operand2 = "";
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        if (val.includes("+")) {
          operand1 = Number(val.substring(0, val.indexOf("+")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("+") + 1, val.length);
          h1=operand1+"+"+operand2;
          currentValue = operand1 + Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "-";
        } else if (val.includes("-")) {
          operand1 = Number(val.substring(0, val.indexOf("-")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("-") + 1, val.length);
          h1=operand1+"-"+operand2;
          currentValue = operand1 - Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "-";
        } else if (val.includes("×")) {
          operand1 = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("×") + 1, val.length);
          if (val.substring(val.indexOf("×") + 1, val.length) == "") {
            operand2 = 1;
          }
          h1=operand1+"×"+operand2;
          currentValue = operand1 * Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "-";
        } else if (val.includes("÷")) {
          operand1 = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("÷") + 1, val.length);
          if (val.substring(val.indexOf("÷") + 1, val.length) == "") {
            operand2 = 1;
          }
          h1=operand1+"÷"+operand2;
          currentValue = operand1 / Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "-";
        } else {
          display.value = currentValue + "-";
        }
      }
      function division(val) {
        let operand1 = "";
        let operand2 = "";
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        if (val.includes("+")) {
          operand1 = Number(val.substring(0, val.indexOf("+")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("+") + 1, val.length);
          h1=operand1+"+"+operand2;
          currentValue = operand1 + Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "÷";
        } else if (val.includes("-")) {
          operand1 = Number(val.substring(0, val.indexOf("-")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("-") + 1, val.length);
          h1=operand1+"-"+operand2;
          currentValue = operand1 - Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "÷";
        } else if (val.includes("×")) {
          operand1 = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("×") + 1, val.length);
          if (val.substring(val.indexOf("×") + 1, val.length) == "") {
            operand2 = 1;
          }
          h1=operand1+"×"+operand2;
          currentValue = operand1 * Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "÷";
        } else if (val.includes("÷")) {
          operand1 = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("÷") + 1, val.length);
          if (val.substring(val.indexOf("÷") + 1, val.length) == "") {
            operand2 = 1;
          }
          h1=operand1+"÷"+operand2;
          currentValue = operand1 / Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "÷";
        } else {
          display.value = currentValue + "÷";
        }
      }
      function multiplication(val) {
        let operand1 = "";
        let operand2 = "";
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        if (val.includes("+")) {
          operand1 = Number(val.substring(0, val.indexOf("+")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("+") + 1, val.length);
          h1=operand1+"+"+operand2;
          currentValue = operand1 + Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "×";
        } else if (val.includes("-")) {
          operand1 = Number(val.substring(0, val.indexOf("-")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("-") + 1, val.length);
          h1=operand1+"-"+operand2;
          currentValue = operand1 - Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "×";
        } else if (val.includes("×")) {
          operand1 = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("×") + 1, val.length);
          if (val.substring(val.indexOf("×") + 1, val.length) == "") {
            operand2 = 1;
          }
          h1=operand1+"×"+operand2;
          currentValue = operand1 * Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "×";
        } else if (val.includes("÷")) {
          operand1 = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("÷") + 1, val.length);
          if (val.substring(val.indexOf("÷") + 1, val.length) == "") {
            operand2 = 1;
          }
          h1=operand1+"÷"+operand2;
          currentValue = operand1 / Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "×";
        } else {
          display.value = currentValue + "×";
        }
      }
      function addition(val) {
        let operand1 = "";
        let operand2 = "";
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        if (val.includes("+")) {
          operand1 = Number(val.substring(0, val.indexOf("+")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("+") + 1, val.length);
          h1=operand1+"+"+operand2;
          currentValue = operand1 + Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "+";
        } else if (val.includes("-")) {
          operand1 = Number(val.substring(0, val.indexOf("-")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("-") + 1, val.length);
          h1=operand1+"-"+operand2;
          currentValue = operand1 - Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "+";
        } else if (val.includes("×")) {
          operand1 = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("×") + 1, val.length);
          if (val.substring(val.indexOf("×") + 1, val.length) == "") {
            operand2 = 1;
          }
          h1=operand1+"×"+operand2;
          currentValue = operand1 * Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "+";
        } else if (val.includes("÷")) {
          operand1 = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            operand1 = operand1 * -1;
          }
          operand2 = val.substring(val.indexOf("÷") + 1, val.length);
          if (val.substring(val.indexOf("÷") + 1, val.length) == "") {
            operand2 = 1;
          }
          h1=operand1+"÷"+operand2;
          currentValue = operand1 / Number(operand2);
          h1=h1+"="+currentValue;
          document.getElementById('scrolling').innerHTML+=h1+"</br>";
          display.value = currentValue + "+";
        } else {
          display.value = currentValue + "+";
        }
      }
      function mod(val) {
        let f = true;
        if (val.charAt(0) == "-") {
          f = true;
          val = val.substring(1, val.length);
        } else {
          f = false;
        }
        var A, B;
        if (val.includes("+")) {
          A = val.substring(0, val.indexOf("+"));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("+") + 1, val.length));
          if (val.slice(-1) == "+") {
            B = A;
          }
          //currentValue=A + (A * B/100);
          display.value = A;
          B = (Number(A) * B) / 100;
          display.value = A + "+" + B;
        } else if (val.includes("-")) {
          A = val.substring(0, val.indexOf("-"));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("-") + 1, val.length));
          if (val.slice(-1) == "-") {
            B = A;
          }
          //currentValue=A - (A * B/100);
          display.value = A;
          B = (Number(A) * B) / 100;
          display.value = A + "-" + B;
        } else if (val.includes("×")) {
          A = Number(val.substring(0, val.indexOf("×")));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("×") + 1, val.length));
          if (val.slice(-1) == "×") {
            B = A;
          }
          //currentValue = A * (B/100);
          display.value = A;
          B = B / 100;
          display.value = A + "×" + B;
        } else if (val.includes("÷")) {
          A = Number(val.substring(0, val.indexOf("÷")));
          if (f) {
            A = A * -1;
          }
          B = Number(val.substring(val.indexOf("÷") + 1, val.length));
          if (val.slice(-1) == "÷") {
            B = A;
          }
          //currentValue = A / (B/100);
          display.value = A;
          B = B / 100;
          display.value = A + "÷" + B;
        } else {
          currentValue = "0";
          display.value = currentValue;
        }
      }
      function ceFunctionality(val) {
        let operators = ["+", "-", "×", "÷"];
        let str = "";
        for (let i of operators) {
          if (val.includes(i)) {
            str = val.substring(0, val.indexOf(i) + 1);
          }
        }
        if (str != "") {
          display.value = str;
        } else {
          currentValue = "";
          display.value = currentValue;
        }
      }
    });
  }
});
