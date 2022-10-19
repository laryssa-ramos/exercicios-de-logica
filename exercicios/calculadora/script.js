
function Somar(){

    let soma1 = document.getElementById('soma1')
    let soma2 = document.getElementById('soma2')
    let n1 =    Number(soma1.value)
    let n2 =    Number(soma2.value)
    let soma = document.getElementById('soma')

    if(soma1.value.length == 0 || soma2.value.length == 0){

        window.alert('Favor informar um número')

    } else{

        res = n1 + n2

        soma.innerHTML =`${res}`

    } 
   
}


function Subtrair(){

    let subt1 = document.getElementById('subt1')
    let subt2 = document.getElementById('subt2')
    let n3 =    Number(subt1.value)
    let n4 =    Number(subt2.value)
    let subt = document.getElementById('subt')

    if(subt1.value.length == 0 || subt2.value.length == 0){

        window.alert('Favor informar um número')

    } else{

        res = n3 - n4

        subt.innerHTML =`${res}`
    }
   
}


function Multiplicar(){

    let mult1 = document.getElementById('mult1')
    let mult2 = document.getElementById('mult2')
    let n5 =    Number(mult1.value)
    let n6 =    Number(mult2.value)
    let mult = document.getElementById('mult')

    if(mult1.value.length == 0 || mult2.value.length == 0){

        window.alert('Favor informar um número')

    } else{

        res = n5 * n6

        mult.innerHTML =`${res}`
    }
   
}


function Dividir(){

    let divi1 = document.getElementById('divi1')
    let divi2 = document.getElementById('divi2')
    let n7 =    Number(divi1.value)
    let n8 =    Number(divi2.value)
    let divi = document.getElementById('divi')

    if(divi1.value.length == 0 || divi2.value.length == 0){

        window.alert('Favor informar um número')

    } else{

        res = n7 / n8

        divi.innerHTML =`${res.toFixed(2)}`

    }
}
