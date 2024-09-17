function contar(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
    
    //teste para não deixar as casas vazias
    if(inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        window.alert('Erro. Faltam dados')
    } else{
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F60D}`
            }    
    //ao fim, o contador vai receber ele mesmo mais o passo

        }else {
            for(let c = i; c >= f; c =- p){
                res.innerHTML += ` ${c} `

            }
        }        
        res.innerHTML += ` ${c} \u{1F60D}`  

    }
}