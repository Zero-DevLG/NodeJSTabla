const fs = require('fs');
const colors = require('colors');

 const createFile = async( base = 5, listar, limite ) =>{
        

    try {
        console.clear();
        let salida = '';


        for(i = 1; i<=limite; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar == true){
            console.log('====================================='.green);
            console.log('Lista de multiplicar del:', colors.blue( base ));
            console.log('====================================='.green);
            console.log(colors.bgMagenta(salida));
        }
        

        fs.writeFileSync(`./files/tabla-${base}.txt`,salida);

        return(`Tabla-${base}.txt`.yellow);
    } catch (err) {
        throw err;
    }
 };

module.exports = {
   createFile
}
