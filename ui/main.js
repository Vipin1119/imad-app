var button= document.getElementById('counter');
var counter =0;
button.onclick=function(){
  //  make the req to the counter end point 
//    capture the response and store it in a variable 
    // render the the variable in the correct span

counter = counter +1;    
var span = document.getElementById('count');
span.innerhtml = counter.toString();
    
};