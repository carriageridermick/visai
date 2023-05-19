'use strict';
let dalykai = document.querySelectorAll(".langelis");
let dalykaio = [];
let localdalykas = undefined;
function naujdb(){
    dalykaio = [];
    dalykai.forEach(dalykas => {
        dalykaio.push({darbuotojas: dalykas.innerHTML});
    });
    var x = new File(dalykaio, "eiksvlipt.txt");
    alert(`tipo atsiuncia :) \n\n\n${x}`);
    browser.downloads.download(x); //!!!!!!!!!!!!!!!!!!!!!!!!!!
}

console.log(dalykai);

let xloc = undefined;
let x = "";
let y = "";

function atnaujinti(){
    dalykai.forEach(dalykas => {
        if(dalykas.innerHTML == "" || dalykas.innerHTML == "Tuščia"){
            dalykas.innerHTML = "Tuščia";
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
});
dalykai.forEach(dalykas => {
    dalykas.addEventListener("dragend", e => {
        dragPab(dalykas);
    });
});
dalykai.forEach(dalykas => {
    dalykas.addEventListener("dragenter", e => {
        e.preventDefault();
        dragPo(dalykas);
    });
});
dalykai.forEach(dalykas => {
    dalykas.addEventListener("dragover", e => {
        e.preventDefault();
    });
});
dalykai.forEach(dalykas => {
    dalykas.addEventListener("dragleave", e => {
        e.preventDefault();
        dragNe(dalykas);
    });
});
dalykai.forEach(dalykas => {
    dalykas.addEventListener("drop", e => {
        e.preventDefault();
        dragUps(dalykas);
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