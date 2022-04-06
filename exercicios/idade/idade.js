function verificar() {

   
    let number =  document.getElementById('input_number')
    let res = document.getElementById('res')

    let idade = Number(number.value)

       if(number.value.length == 0){
        window.alert('[ERRO] Favor informar a idade')

       } else if (Number(number.value) < 0){
        window.alert('[ERRO] Idade inválida')

       }else{

            if(idade < 12){
                res.innerHTML = `É uma criança de ${idade} anos`
    
            }else if(idade >= 12 && idade < 18){
                res.innerHTML = `É um adolescente de ${idade} anos`
    
            }else if(idade >= 18 && idade < 60){
                res.innerHTML = `É um adulto de ${idade} anos`

            }else{
                res.innerHTML = `É um idoso de ${idade} anos`
            }
 
       }
      

}