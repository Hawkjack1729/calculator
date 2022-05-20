let icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.src = "light.png";
    }
    else {
        icon.src = "dark.png";
    }
}
let textbox=document.getElementById('textbox');
let back =document.getElementById('backspace');
back.onclick = function(){
    textbox.value=textbox.value.slice(0,-1);
}
function num(hola){
    textbox.value += hola;
}
function percent(){
    textbox.value /= '100';
}
function div(){
    textbox.value += '/';
}
function mul(){
    textbox.value += '*';
}
function del(){
    textbox.value = '';
}
function equal(){
    try{
        textbox.value = eval(textbox.value);
    }
    catch(err){
        alert("Invalid!!!!");
    }
}
let brak = document.getElementById("bracket");
brak.onclick = function(){
    if(textbox.innerHTML === (")")){
        textbox.innerHTML += "(";
    }
    else{
        textbox.innerHTML += ")";
    }
}