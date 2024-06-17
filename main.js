


let inpName = document.querySelector('.inpName');
let inpAgrmnt = document.querySelector('.inpAgrmnt');
let btn = document.querySelector('.btn');
let warning = document.querySelector('.warning');


inpName.addEventListener('focus', () => {
    inpName.value = "";
    inpName.classList.add('inpName_active');
});

