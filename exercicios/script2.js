function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('Verifique seus dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <11) {
                //criança
                img.setAttribute('src','homem_criança.png')
            } else if(idade >=11 && idade < 23){
                //jovem
                img.setAttribute('src','homem_ado.png')
            } else if(idade >= 23 && idade < 60){
                // adulto
                img.setAttribute('src','homem_adulto.png')
            } else {
                // idoso
                img.setAttribute('src','homem_idoso.png')
            }
        } else if(fsex[1].checked){
                gênero = 'Mulher'
                if(idade >= 0 && idade <11) {
                    //criança
                    img.setAttribute('src','mulher_criança.png')
                } else if(idade >=11 && idade < 23){
                    //jovem
                    img.setAttribute('src', 'mulher_ado.png')
                } else if(idade >= 23 && idade < 60){
                    // adulto
                    img.setAttribute('src','mulher_adulta.png')
                } else {
                    // idoso
                    img.setAttribute('src','mulher_idosa.png')
                }
        }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }

