document.addEventListener('DOMContentLoaded',function(){
    var display = document.getElementById('cal-display');
    var buttons = document.getElementsByClassName('btn');
   let currentValue='';
   
    //%,CE are pending    
    for(let button of buttons){
        button.addEventListener('click',function(){
            
        const value=button.innerText;
        if(value=='C'){
            currentValue='';
            display.value=currentValue;
        }
        else if(value=='1/x'){
            oneByX(display.value);
        }
        else if(value=='x2'){
            xSquare(display.value);
        }
        
        else if(value=='2√x'){
            squareRootX(display.value);
        }
        else if(value=='⌫'){
            backSpace(display.value);
        }
        // else if(value=='+/-'){
        //     negate(display.value);
        // }
        else if(value=='='){
            equal(display.value);
        }
        
        else{
            currentValue=currentValue+value;
            display.value=currentValue;
            }
        
        //Functions
        function oneByX(val){
            
             let result=1/val;
             display.value=result.toString();
        }
        function xSquare(val){
            let result=val*val;
            display.value=result.toString();
        }
        function squareRootX(val){
            let result=Math.sqrt(val);
            display.value=result.toString();
        }
       
        function backSpace(val) {
            if (display.value.length > 1) {
              display.value = display.value.substring(0, display.value.length - 1);
            } else {
              currentValue = "";
              display.value = 0;
            }
        }
        // function negate(val){
        //     let result=-Math.abs(val);
        //     display.value=result;
        // }
          
        function equal(val){
          let operand1='';
          let operand2='';
            
              //Percentage Functionality
              // A + B % =, the result should be A × (1 + B/100) or A + (A × B/100) after you distribute the multiplication over the addition. Similarly, when the user enters A − B % =, the result should be A × (1 − B/100) or A − (A × B/100).
             if(val.includes('%')){
              
                var op=val.substring(0,val.indexOf('%'));
                var A,B;
                if(op.includes('+')){
                  A=Number(val.substring(0,op.indexOf('+')));
                  B=Number(val.substring(op.indexOf('+')+1,op.length));
                  currentValue=A + (A * B/100);
                  display.value=currentValue;
                  }
                else if(op.includes('-')){
                    A=Number(val.substring(0,op.indexOf('-')));
                    B=Number(val.substring(op.indexOf('-')+1,op.length));
                    currentValue=A - (A * B/100);
                    display.value=currentValue;
                  }
               
              }
              else if(val.includes('+')){
                operand1=Number(val.substring(0,val.indexOf('+')));
                operand2=Number(val.substring(val.indexOf('+')+1,val.length));
                currentValue=operand1+operand2;
                display.value=currentValue;
              }
              else if(val.includes('-')){
                  operand1=Number(val.substring(0,val.indexOf('-')));
                  operand2=Number(val.substring(val.indexOf('-')+1,val.length));
                  currentValue=operand1-operand2;
                  display.value=currentValue;
                }
              else if(val.includes('x')){
                  operand1=Number(val.substring(0,val.indexOf('x')));
                  operand2=Number(val.substring(val.indexOf('x')+1,val.length));
                  currentValue=operand1*operand2;
                  display.value=currentValue;
                }
              else if(val.includes('÷')){
                  operand1=Number(val.substring(0,val.indexOf('÷')));
                  operand2=Number(val.substring(val.indexOf('÷')+1,val.length));
                  currentValue=operand1/operand2;
                  display.value=currentValue;
                }
              else{
                display.value=currentValue;
              }
        }
       
          
            
    });
    }
    });


    


