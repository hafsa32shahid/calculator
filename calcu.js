let displayvalue ='';

function appendtodisplay(value){
   displayvalue+= value;
   document.getElementById('display').value = displayvalue;
}

function clearvalue(){
   displayvalue='';
   document.getElementById('display').value = '';
}


function calculate(){
   try{document.getElementById("display").value = eval(displayvalue)}
   catch(error){
      document.getElementById("display").value = 'Error'
   }
}

function deleteonevalue(){
   displayvalue = displayvalue.substring(0, displayvalue.length-1);
   document.getElementById("display").value= displayvalue;
}