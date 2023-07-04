document.addEventListener("DOMContentLoaded", function () {
  var display = document.getElementById("cal-display");
  var buttons = document.getElementsByClassName("btn");
  let currentValue = "";

  for (let button of buttons) {
    button.addEventListener("click", function () {
      const value = button.innerText;
      if (value == "C") {
        currentValue = "";
        display.value = currentValue;
      } else if (value == "1/x"){
        oneByX(display.value);
      } else if (value == "x2") {
        xSquare(display.value);
      } else if (value == "2√x") {
        squareRootX(display.value);
      } else if (value == "⌫") {
        backSpace(display.value);
      }else if (value == "=") {
        equal(display.value);
      }else if(value=='-'){
        subtraction(display.value);
      }else if(value=='×'){
        multiplication(display.value);
      }else if(value=='÷'){
        division(display.value);
      }else if(value=='+'){
        addition(display.value);
      }else if(value=='%'){
        mod(display.value);
      }else if(value=='1'||value=='2'||value=='3'||value=='4'||value=='5'||value=='6'||value=='7'||value=='8'||value=='9'){
        currentValue=display.value+value;
        display.value=currentValue;
      }else if (value == "CE"){
        ceFunctionality(display.value);
      } 
      // else if(value=='+/-'){
      //     negate(display.value);
      // }
      else {
        currentValue = currentValue + value;
        display.value = currentValue;
      }

      //Functions
      function oneByX(val) {
        let result = 1 / val;
        currentValue = result.toString();
        display.value=currentValue;
      }
      function xSquare(val) {
        let result = val * val;
        currentValue = result.toString();
        display.value=currentValue;
      }
      function squareRootX(val) {
        let result = Math.sqrt(val);
        currentValue= result.toString();
        display.value=currentValue;
      }
      function backSpace(val) {
        if (display.value.length > 1) {
          display.value = display.value.substring(0, display.value.length - 1);
          currentValue = display.value;
        } else {
          currentValue = "";
          display.value = 0;
        }
      }
      function negate(val){
          let result=-val;
          currentValue=result;
          display.value=currentValue;
      }

      function equal(val) {
        let operand1 = "";
        let operand2 = "";

        //Percentage Functionality
        // A + B % =, the result should be A × (1 + B/100) or A + (A × B/100) after you distribute the multiplication over the addition. Similarly, when the user enters A − B % =, the result should be A × (1 − B/100) or A − (A × B/100).
        if (val.includes("%")) {
          var op = val.substring(0, val.indexOf("%"));
          var A, B;
          if (op.includes("+")) {
            A = Number(val.substring(0, op.indexOf("+")));
            B = Number(val.substring(op.indexOf("+") + 1, op.length));
            currentValue = A + (A * B) / 100;
            display.value = currentValue;
          } else if (op.includes("-")) {
            A = Number(val.substring(0, op.indexOf("-")));
            B = Number(val.substring(op.indexOf("-") + 1, op.length));
            currentValue = A - (A * B) / 100;
            display.value = currentValue;
          }
        } else if (val.includes("+")) {
          operand1 = Number(val.substring(0, val.indexOf("+")));
          operand2 = Number(val.substring(val.indexOf("+") + 1, val.length));
          currentValue = operand1 + operand2;
          display.value = currentValue;
        } else if (val.includes("-")) {
          operand1 = Number(val.substring(0, val.indexOf("-")));
          operand2 = Number(val.substring(val.indexOf("-") + 1, val.length));
          currentValue = operand1 - operand2;
          display.value = currentValue;
        } else if (val.includes("×")) {
          operand1 = Number(val.substring(0, val.indexOf("×")));
          operand2 = Number(val.substring(val.indexOf("×") + 1, val.length));
          currentValue = operand1 * operand2;
          display.value = currentValue;
        } else if (val.includes("÷")) {
          operand1 = Number(val.substring(0, val.indexOf("÷")));
          operand2 = Number(val.substring(val.indexOf("÷") + 1, val.length));
          currentValue = operand1 / operand2;
          display.value = currentValue;
        } else {
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
