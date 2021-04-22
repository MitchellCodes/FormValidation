// run tsc in terminal to start watch mode
// after reopening vs code
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required")
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
