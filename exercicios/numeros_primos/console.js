function numeroPrimo(){
    for(num = 1; num <=100; num++){
        for(cont = 1; cont <= num; cont++){
            let res = num % cont
            if(res == 0){
                let primo = 0
                primo = primo + 1
            }
        }

        if(primo == 2){
            console.log(`${num}`)
        }
    }
}