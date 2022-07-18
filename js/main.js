let button = document.querySelector('button');

button.onclick = function () {

    let inputName = document.getElementById("inp-name");
    console.log(inputName.value);

    let paragraph = document.getElementById("name");
    console.log(paragraph);

    paragraph.innerText = (inputName.value);



    let inputSurname = document.getElementById("inp-surname");
    console.log(inputSurname);

    let paragraph2 = document.getElementById("surname");
    console.log(paragraph2);

    paragraph2.innerText = (inputSurname.value);

    let inputPhone = document.getElementById("inp-tel");
    console.log(inputPhone);

    let paragraph3 = document.getElementById("phone");
    console.log(paragraph3);

    paragraph3.innerText = (inputPhone.value);


}












/* document.getElementById("paragraph").innerText = ""; */








