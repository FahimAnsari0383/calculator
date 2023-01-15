let result=document.getElementById('inputtext');

function calculate(number){
    result.value+=number; 
}
function Result() {
    try {

        result.value = eval(result.value);
    }

    catch {
        console.error("Enter the valid input");
    }

}
function clr(){
       result.value= " ";
   }

function del(){
       result.value=result.value.slice(0,-1);
}

        

    

