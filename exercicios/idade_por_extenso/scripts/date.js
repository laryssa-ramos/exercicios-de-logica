//let date = new DateController();


function verificar(){


       
    function DataExtenso(extenso) { //recebe o valor

        meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
        //array com os meses (de 0 ao 11)

        var dia_informado = extenso.split('/')[0];
        var mes_informado = extenso.split('/')[1];
        var ano_informado = extenso.split('/')[2];
        //transforma a variável 'extenso' em um array, divide-a tirando as barras, encaixa as partes dentro do array de acordo com o índice

        var data = ano_informado + '-' + mes_informado + '-' + dia_informado;
        //formata a data de forma que a função new Date reconheça

        var dataInfo = new Date(data); 
        //a variável dataInfo recebe  a função new Date com a data que foi informada + a formatação que foi feita

        var dia = dataInfo.getDate();
        var mes = dataInfo.getMonth();
        var ano = dataInfo.getFullYear();
        //o dia, o mês e o ano vão ser informados de acordo com o que está na variável dataInfo que  contém a função new Date

        var diaext = `Você nasceu em ${dia} de ${meses[mes]} de ${ano}`
        //a reposta com a informação da data. No caso do mês, ele irá pegar o número do índice do array da função get.Month que se refere ao mês que foi informado na função dataInfo.getMonth e iŕa buscar no array 'meses' o número do índice que corresponde ao mesmo valor do número e irá passar o elemento com o nome do mês

        return diaext;
        //retorna o valor que está na variável diaext

        
        }

    let nascimento = document.getElementById('date').value //converte a data para string
    let res = document.getElementById('res')
                    

    res.innerHTML = `<br>${DataExtenso(nascimento)}`; 
    // irá usar a função DataExtenso na variável nascimento
   
} 


/*function DataExtenso(data_informada) {
    meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
    semana = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");
    var dia_informado = data_informada.split('/')[0];
    var mes_informado = data_informada.split('/')[1];
    var ano_informado = data_informada.split('/')[2];
    var data = ano_informado + '-' + mes_informado + '-' + dia_informado + " 00:00:00";
    var dataInfo = new Date(data);
    
   
    var dia = dataInfo.getDate();
    var dias = dataInfo.getDay();
    var mes = dataInfo.getMonth();
    var ano = dataInfo.getFullYear();
    var diaext = semana[dias] + ", " + dia + " de " + meses[mes] + " de " + ano;
    return diaext;
    }
   console.log(DataExtenso("30/10/2019")); */

