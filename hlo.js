let val='23';
function ceFunctionality(val){
    let operators=['+','-','x','÷'];
    let i;
    var k="";
    for(i of operators){
    if(val.includes(i))
    {
     //console.log(val.substring(0,val.indexOf(i)+1));
     k=val.substring(0,val.indexOf(i)+1);
     break;
    }
}
if(k!="")
{
    console.log(k);
}
else{
    console.log('empty');
}
    
  }
  ceFunctionality(val);