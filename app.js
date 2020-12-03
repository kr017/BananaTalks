

// var name=prompt("Please enter your name");

// alert("Hi "+name);

var btnTranslate = document.querySelector("#btn-translate");
var inputTextarea= document.querySelector("#input_textarea");
var outputDiv=document.querySelector("#outputDiv");

btnTranslate.addEventListener("click",handleInputTextareaChange);

// function handleTranslateButtonClick() {
    
//     alert("Hello Moto")
// }

// inputTextarea.addEventListener("change",handleInputTextareaChange)


function handleInputTextareaChange() {
    alert("contents changed to "+inputTextarea.value);
}


outputDiv.innerHTML="Kiran"