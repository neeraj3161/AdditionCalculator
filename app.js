//document is full body of html page
//querSelector is selection of the element in the html page
//addEventListener --- checks for the mentioned event 

document.querySelector(".sub-btn").addEventListener("click",function(){
   var number1 = document.querySelector(".box1").value; //23
   var number2 = document.querySelector(".box2").value; //2



   if(number1=="" || number2==""){
    alert("Number in the input cannot be empty!!");
   }else{

    var result = parseInt(number1) + parseInt(number2);

    console.log(result);
 
 
    alert("The addition of "+number1+" and "+number2+" is "+result);
 
   }

})