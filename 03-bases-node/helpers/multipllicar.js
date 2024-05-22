const fs = require('fs');


const crearArchivo = async (base, lista ) => {
try {
   

    let salida = '';


    for (let i = 1; i <= 10; i++) {
       
       salida += `${base} x ${i} = ${base *1}\n`
    }
    
    if (lista) {
        console.log('=================================');
        console.log('   Talba del ', base);
        console.log('=================================');    
        console.log(salida);
    }
    
    fs.writeFileSync( `Tabladel${base}.txt`, salida);
    
    return(`tabla${base}`)
} catch (err) {
    throw err;
}
   
    

}
 
module.exports = {
    crearArchivo: crearArchivo
}