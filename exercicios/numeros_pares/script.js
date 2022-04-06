function contar(){
    
    let numeros = document.getElementById('select')

    for(var num = 1; num <= 1000; num++ )

        if(num % 2 == 0){
            let item = document.createElement('option')
            item.text = `Número ${num}`
            numeros.appendChild(item)
        }
}

// let item = document.createElement('option')
//         item.text = `Número ${n}`
//         numeros.appendChild(item)