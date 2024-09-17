const lamp = window.document.getElementById('lamp')
const ligar = window.document.getElementById('turnOn')
const desligar = window.document.getElementById('turnOff')

function lampOn(){
    if( !isLampBroken ()){
    lamp.src = './img/ligada.jpg';
    }
}
function lampOff(){
    if( !isLampBroken ()){
    lamp.src = './img/desligada.jpg'
    }
}
function lampBroken(){
    lamp.src = './img/quebrada.jpg'
}
function isLampBroken(){
    return lamp.indexOf ('quebrada') > -1
    //indexOf procura a o nome dentro da string, -1 é o resultado booleano do sim ou não para verificar se a lâmpada esta quebrada
    /*return vai parar o evento*/
    /*antes de ligar ou desligar, ele vai verificar se a lâmpada esta quebrada*/
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover',lampOn)
lamp.addEventListener('mouseout', lampOff)
lamp.addEventListener('dblclick', lampBroken)