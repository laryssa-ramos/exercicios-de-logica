function somar(){

    let res = document.getElementById('res')
    let soma = 0

    for(var cont = 1; cont <= 100; cont ++){
        
       soma = soma + cont
    }

    res.innerHTML = `O resultado é ${soma}`
}