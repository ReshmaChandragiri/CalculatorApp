document.addEventListener('DOMContentLoaded',function(){
    var display = document.getElementById('cal-display');
    var buttons = document.getElementsByClassName('btn');
   let currentValue="";
   let value1=display.value;
           
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
        else if(value=='÷'){
          button.addEventListener('click',function(){
          currentValue=currentValue+value1+value+display.value;})
          if(value=='='){
            divide(currentValue);
          }
        }

        else{
            currentValue=currentValue+value;
            display.value=currentValue;
            }
       
       // elseif(value=='÷'){
    //     else if(value){
    //     button.addEventListener('click',function(){
    //         currentValue=currentValue+value1+value+display.value;
    //     })
    //       divide(currentValue);
        
    // }
           
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
        function divide(expression){
            let res=expression.split('÷');
            let result=parseInt(res[0]) / parseInt(res[1]);
            display.value=result.toString();
            
        }
        


    
    });
    }
    


    



});


    


