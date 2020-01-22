let text;
let search;

document.addEventListener('keydown', (e) => {

    if(e.keyCode == 13){
    open( `https://www.google.pl/search?q=${document.querySelector('.input').value}` , '_blank');

}});