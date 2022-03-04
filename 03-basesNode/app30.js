// import { writeFile } from 'fs';
// import { Buffer } from 'buffer';

const fs = require('fs')

console.clear()
console.log('==============================')
console.log('tabla del 5')
console.log('==============================')


const base = 5;
let salida = '';

for (let i= 0; i<10; i++){
     salida += `${base} x ${i+1} = ${base*(i+1)}\n`
}

console.log(salida);


// fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
//     if (err) throw err;
//     console.log(`tabla-${base}.txt - Creado`);
// })

fs.writeFileSync(`tabla-${base}.txt`, salida)
console.log(`tabla-${base}.txt - Creado`)