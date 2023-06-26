


// function semana(){
//  if (diadasemana === 'segunda'){
//     console.log(1)
//  } else if (diadasemana === 'terça'){
//     console.log(2)
//  } else if (diadasemana === 'quarta'){
//     console.log(3)
//  } else if (diadasemana === 'quinta'){
//     console.log(4)
//  } else if (diadasemana === 'sexta'){
//     console.log(5)
//  } else if (diadasemana === 'sabado'){
//     console.log(6)
//  } else {
//     console.log(7)
//  }
// }

// semana()





let data = new Date
let diadasemana = data.getDay()
let diadomes = data.getMonth()
let datames 
let dia
let mes
let ano = data.getFullYear()

function qualdia(){

switch (diadasemana) {

    case 0:
        dia = 'Domingo'
        return dia 
        

    case 1:
        dia = 'Segunda'
        return dia 
        

    case 2:
        dia = 'Terça'
        return dia 
        

    case 3:
        dia =   'Quarta'
        return dia 
    
    case 5:
        dia = 'Quinta'
        return dia 
        
    case 6:
        dia = 'Sexta'
        return dia 
        
    case 7:
        dia = 'Sábado'
        return dia 


    default:

    dia = 'não existe'
    return dia 

    

}

}

qualdia()


///============================================================

function numeromes(){

    return datames= data.getDate()

}

numeromes()

//============================================================

function qualmes(){

switch (diadomes) {

    case 0:
        mes = 'janeiro'
        return mes 
    

    case 1:
        mes = 'fevereiro'
        return mes 
      

    case 2:
        mes = 'março'
        return mes 
    

    case 3:
        mes = 'abril'
        return mes 
    case 4:
        mes = 'maio'
        return mes 
    case 5:
        mes = 'junho'
        return mes 
    case 6:
        mes = 'julho'
        return mes 

    case 7:
        mes = 'agosto'
        return mes 

    case 8:
        mes = 'setembro'
        return mes 

    case 9:
        mes = 'outubro'
        return mes 


    case 10:
        mes = 'novembro'
        return mes 


    case 11:
        mes = 'dezembro'
        return mes 

    default:

        mes = 'não existe'
        return mes 


}

}
qualmes()

console.log(dia + ", " + datames + " de " + mes + ' de ' + ano + '.')


