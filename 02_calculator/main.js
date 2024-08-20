const display = document.getElementById("display");

const toDisplay=(input)=>{
    display.value += input;
}
const calculate=()=>{

    try {
        display.value=eval(display.value)

    } catch (error) {
        display.value="error"
    }
}   
const clearDisplay = ()=>{
    display.value="";
   
}