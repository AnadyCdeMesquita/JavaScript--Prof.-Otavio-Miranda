function erros(x, y) {

if (typeof x !== 'number' || typeof y !== 'number'){

    throw new Error('São string');
}
 return x + y
}

try {
    console.log(erros(8,5));
    console.log(erros('8', 5));
    // try aparece quando não há erro
} catch (e) {

    console.log('error')
    //catch aparece quando HÁ ERRO
} finally{

 console.log('eu sempre vou aparecer')

}