function tocaSom(idElementoAudio){
    document querySelector(idElementoAudio).Play()
}
const listaDeTeclas = document.querySelectorAll('.tecla');
for(let contador < listaDeTeclas.length;contador++){
const tecla = listaDeTeclas[contador];
const instrumento = tecla.classlist[1];
const idAudio = '#som $ (instrumento)';
tecla.onclick = function (){
tocaSom(idAudio);
}
}