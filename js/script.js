let expand = document.getElementById("bar");
let collapse = document.getElementById("bar-1");

function line(){
    expand.style.display="none";
    collapse.style.display="block";
}

function cross(){
    collapse.style.display="none";
    expand.style.display="block";
}