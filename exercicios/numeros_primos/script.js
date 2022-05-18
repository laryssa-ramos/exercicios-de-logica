function numerosPrimos(){
 
    res.innerHTML = ``

    for(num = 1; num <=100; num++){

      let div = 0

      for(cont = 1; cont <=num; cont++){
        
        if(num%cont == 0){
            div = div +1
        }
       
      }
     
      if(div == 2){
       res.innerHTML += `${num}\u{1F603}`
      }
      
    }
}

/*
número primo só divide por 1 e por ele mesmo, ou seja tem apenas 2 divisores, então o resto da divisão tem que ser 0

  if(num % 2 != 0){
            
            if(num % 3 != 0){
                
                if(num % 5 != 0){
                    
                    if(num % 7 != 0){
                       
                        primo = num
                    }  
                }  
            }   
        }

*/