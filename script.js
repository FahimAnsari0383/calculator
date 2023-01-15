let result=document.getElementById('inputtext');

function calculate(number){
    result.value+=number; 
}
function Result() {
    try {
        if (eval(result.value)<0) { 
            result.style.color = 'red';
        }
        result.value = eval(result.value);
    }

    catch {
        console.error("Enter the valid input");
    }

}
function clr(){
       result.value= " ";
       result.style.color = 'black';
   }

function del(){
       result.value=result.value.slice(0,-1);
       result.style.color = 'black';
}

        

    

