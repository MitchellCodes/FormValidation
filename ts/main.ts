// run tsc in terminal to start watch mode
// after reopening vs code
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required")

    // validate date
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if(!isValidDate(dob)){
        dobBox.nextElementSibling.innerHTML = "Format should be mm/dd/yyyy";
    }
}

function isValidDate(input:string):boolean{
    // validating mm/dd/yyyy and m/d/yyyy
    // using regular expressions
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);
}

/**
 * Resets every span back to the default text
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the text box with the given id
 * has text inside it
 * @param id The id of the input element to validate
 * @param errorMsg The message to display in the sibling span of the textbox
 * @returns 
 */
function isTextPresent(id:string, errorMsg:string):boolean{
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;
    if (textBoxValue == "") {
        let errorSpan = <HTMLSpanElement>textBox.nextElementSibling;
        errorSpan.innerText = errorMsg;
        return false;
    }
    return true;
}
