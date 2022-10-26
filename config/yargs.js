const { options } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias:          'base',
        type:           'number',
        demandOption:   true,
        describe:       'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:      'Listar',
        type:       'boolean',
        default:    'false',
        describe:   'Muestra en pantalla la lista creada'
    })
    .option('h',{
        alias:          'Limite',
        type:           'number',
        default:        10,
        demandOption:   'true',
        describe:       'Limite maximo de iteración de la operación (max:100)'
    })
    .check( (argv, options)=>{
        if( isNaN( argv.b ) ){
            throw 'La base debe de ser unicamente numerica';
        }
        if(argv.h > 100)
        {
            throw 'El limite maximo es 100';
        }
        return true;
    })
    .argv;

    module.exports = argv;