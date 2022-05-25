

function Perimetro(){

   let raio = document.getElementById('raio')
   let resultado = document.getElementById('resultado')
   let num = Number(raio.value)

   if(num == ''){
      window.alert('[ERRO] Insira um número')
   }else{
      let res = 2 * 3.14 * num
      let float = res.toFixed(2)


      resultado.innerHTML = `O valor do perímetro é ${float}`
   }
  
}




 

   


     