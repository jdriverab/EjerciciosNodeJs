const fs = require('fs')

const crearArchivo = async(base) => {

    let salida = '';
    for (let i = 0; i < 10; i++) {
        salida += `${base} x ${i+1} = ${base*(i+1)}\n`
    }
    
    console.log('==============================')
    console.log('tabla del', base)
    console.log('==============================')
    console.log(salida);

    try {
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return `tabla-${base}.txt - Creado`
    } catch (error) {
        throw error
        // return error
    }
}

module.exports = { crearArchivo }