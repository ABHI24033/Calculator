console.log('This is calculator console');

let buttons = document.getElementsByClassName('buttons')
//  buttons=document.querySelectorAll('button')
let screenValue = ''

for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        let text = document.getElementById('text');
        //console.log(text)
        if (buttonText !== '=') {
            //buttonText =
            screenValue += buttonText;
            text.value = screenValue;
        }
        else{
            //screenValue=''
            text.value=eval(screenValue)
            screenValue=''
        }

    })
}

//let divid=document.getElementById('divid');
//let mul=document.getElementById('mul');
//let sub=document.getElementById('sub');
//let equal=document.getElementById('equal');
//let add=document.getElementById('add');
//function divide(){
//    //let buttonText = e.target.innerText;
//    let buttonText;
//    buttonText=divid.value;
//    //screenValue+=buttonText;
//    text.value=buttonText;
//}
//function multiply(){
//    //let buttonText = e.target.innerText;
//    let buttonText;
//    buttonText=mul.value;
//    screenValue+=buttonText;
//    text.value=screenValue;
//}
//function subtract(){
//    let buttonText = e.target.innerText;
//    buttonText=sub.value;
//    screenValue+=buttonText;
//    text.value=screenValue;
//}
