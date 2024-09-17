function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOm dia
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = "#c6804d"
        msg.innerHTML += ', bom dia!'
    } else if (hora >=12 && hora<18){
        // Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#fce28c'
        msg.innerHTML += ', boa tarde!'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        msg.innerHTML += ', boa noite!'
        document.body.style.backgroundColor = '#493b60'
    }





}