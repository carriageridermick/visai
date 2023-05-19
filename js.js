'use strict';
//mano nuomone apie sita darba
let dalykai = document.querySelectorAll(".langelis");
let dalykaio = [];
let localdalykas = undefined;
let xloc = undefined;
let x = "";
let y = "";
let rdr = new FileReader();
let [inpt] = document.getElementById("fl").files;
function naujdb(){
    dalykaio = [];
    dalykai.forEach(dalykas => {
        dalykaio.push({darbuotojas: dalykas.innerHTML});
    });
    x = URL.createObjectURL(
        new Blob([JSON.stringify(dalykaio)])
    );
    window.open(x)
}

function check() {
    var xy = rdr.readAsText(inpt);
    console.log(xy);
}
console.log(dalykai);
function atnaujinti(){
    dalykai.forEach(dalykas => {
        if(dalykas.innerHTML == "" || dalykas.innerHTML == "Tuscia"){
            dalykas.innerHTML = "Tuscia";
            dalykas.classList.add("plk");
        } else {
            dalykas.classList.remove("plk");
        }
    });
};
function localst(){
    dalykaio = [];
    dalykai.forEach(dalykas => {
        dalykaio.push({darbuotojas: dalykas.innerHTML});
    });
    var x = JSON.stringify(dalykaio);
    localStorage.setItem("localDb", x);
    alert('Išsaugota');
}
function irasyti(){
    var x = 0;
    localdalykas.forEach(dalykas => {
        dalykai[x].innerHTML = dalykas.darbuotojas;
        x++;
    })
    atnaujinti();
}
function localstr(){
    localdalykas = JSON.parse(localStorage.getItem("localDb"));
    irasyti();
}
dalykai.forEach(dalykas => {
    dalykas.addEventListener("dragstart", e => {
        dragStr(dalykas);
        xloc = e.target;
    });
    dalykas.addEventListener("dragend", e => {
        dragPab(dalykas);
    });
    dalykas.addEventListener("dragenter", e => {
        e.preventDefault();
        dragPo(dalykas);
    });
    dalykas.addEventListener("dragover", e => {
        e.preventDefault();
    });
    dalykas.addEventListener("drop", e => {
        e.preventDefault();
        dragUps(dalykas);
    });
    dalykas.addEventListener("dragleave", e => {
        e.preventDefault();
        dragNe(dalykas);
    });
});
function dragStr(vuz){
    xloc = vuz;
    x = vuz.innerHTML;
    vuz.classList.add("jaud");
}
function dragPab(vuz){
    vuz.classList.remove("jaud");
}
function dragPo(vuz){
    vuz.classList.add("jaud");
}
function dragNe(vuz){
    vuz.classList.remove("jaud");
}
function dragUps(vuz){
    y = vuz.innerHTML;
    vuz.innerHTML = x;
    xloc.innerHTML = y;
    vuz.classList.remove("jaud");
    atnaujinti();
}
atnaujinti();
localstr();