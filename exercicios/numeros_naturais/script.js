function contar(){
    let numeros = document.getElementById('select')

    for(var n = 1; n <=10; n++){
        let item = document.createElement('option')
        item.text = `Número ${n}`
        numeros.appendChild(item)
    }
}

// let lista = document.querySelector('select#flista')
// let item = document.createElement('option')
// item.text = `Valor  ${num.value} adicionado`