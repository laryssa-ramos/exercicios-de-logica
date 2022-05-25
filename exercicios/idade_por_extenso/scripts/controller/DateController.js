class DateController{

    constructor(){
        this.locale = 'pt-BR'
        this.date = document.querySelector("#date");
        this.currentDate;
        this.initialize();

    }

    initialize(){

        this.setDisplayDateTime();
        
       } 
   

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year:"numeric"
        });
    
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    
       }

    get displayDate(){
        return this._ate.innerHTML;
   }

   set displayDate(value){
       
        return this.date.innerHTML = value;
   }

    get currentDate(){

        return new Date();
    }

    set currentDate(date){

        this.currentDate = date;
    }

}