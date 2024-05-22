const {crearArchivo } = require(`./helpers/multipllicar`); 
const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                                 })
                    .option('l', {
                        alias: "lista",
                        type: "boolean",
                        defaultOption: false
                                })
                    .check((argv, options) =>{
                        if(isNaN(argv.b)){
                            throw `La base tiene que ser un numero`
                                        }
                            return true;
                                        })
                    .argv
                    



const { number, options, alias, boolean } = require('yargs');


console.clear();


console.log(argv)


crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado'))
    .catch(err => console.log(err));
