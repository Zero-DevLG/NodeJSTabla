const { createFile } = require('./helpers/createFile');
const argv = require('./config/yargs');
 


createFile( argv.b,argv.l,argv.h )
.then(nameFile =>console.log(nameFile,' creado'))
.catch(err => console.log(err));
