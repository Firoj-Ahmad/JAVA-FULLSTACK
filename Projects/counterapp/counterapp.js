let value = 0
const num = document.getElementById('Box')
num.innerHTML=value;

function inc() {
    value++;
    num.innerHTML=value;
}
function dec() {
    value--;
    num.innerHTML=value;
}
function res() {
    value=0;
    num.innerHTML=value;
}