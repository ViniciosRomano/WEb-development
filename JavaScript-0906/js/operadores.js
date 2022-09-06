//sorteando números
let numeroSorteado = parseInt(Math.random()*10);
// let numeroSorteado = Math.floor(Math.random()*10);
// let numeroSorteado = Math.round(Math.random()*10);
// let numeroSorteado = Math.random()*10;
console.log(`Numero sorteado: ${numeroSorteado}`);
console.log(`${numeroSorteado} + 90 =  ${numeroSorteado + 90}`);
console.log(`${numeroSorteado} - 90 =  ${numeroSorteado - 90}`);
console.log(`${numeroSorteado} / 90 =  ${numeroSorteado / 90}`);
console.log(`${numeroSorteado} % 90 =  ${numeroSorteado % 90}`);
console.log(`${numeroSorteado} ** 3 =  ${numeroSorteado ** 3}`);
console.log(`${numeroSorteado} ** 3 =  ${Math.pow(numeroSorteado,3)}`);

//relacionais
console.log(`${numeroSorteado} > 90 =  ${numeroSorteado > 90}`);
console.log(`${numeroSorteado} < 90 =  ${numeroSorteado < 90}`);
console.log(`${numeroSorteado} >= 90 =  ${numeroSorteado >= 90}`);
console.log(`${numeroSorteado} <= 90 =  ${numeroSorteado <= 90}`);
console.log(`${numeroSorteado} != 90 =  ${numeroSorteado != 90}`);
console.log(`${numeroSorteado} == 90 =  ${numeroSorteado == 90}`);

let a = 10;
let b = `10`;
console.log(`${a} === ${b} ${a===b} `);