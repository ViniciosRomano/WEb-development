//exemplo1
function calcular1(n1,n2){
    let resultado = (n1 + n2);
    document.querySelector('#exemplo1').textContent += `${resultado} ` ;
}
//+=resultado checkpoint
calcular1(4,6);
calcular1(5,6);
calcular1(3,9);
calcular1(10,3);

//exemplo 02
function calcular2(fn,sn){
    //let resultado = (fn * sn);
    //return resultado
    return fn*sn
}
const firstNumber = Math.round(Math.random()*10);
const secondNumber = Math.round(Math.random()*10);
//chamando a funçao e armazenando o resultado de uma variavel
const resultado = calcular2(firstNumber,secondNumber)
document.querySelector('#exemplo2').textContent = `${firstNumber} * ${secondNumber} = ${resultado}`;

//exemplo 3 - Manipulaçao de Array
const people = ['Eu', 'Tu','Ele','Vós','Eles'];
document.querySelector('#exemplo3').textContent = people;

//exemplo 4 - inserindo array - ultima posiçao
people.push('Darth Vader')
document.querySelector('#exemplo4').textContent = people;

//excluindo o ultimo indice
const excludedPeople =[];
excludedPeople.push(people.pop());
document.querySelector('#exemplo5').textContent = excludedPeople;

//inserir no inicio do array
people.unshift('Mestre Yoda');
document.querySelector('#exemplo6').textContent = people;

//excluir o primeiro indice do array
excludedPeople.push(people.shift());
document.querySelector('#exemplo7').textContent = excludedPeople;

//excluir em qualquer posiçao array
//nesse exemplo começa no indice 2 e exclui o inicial e a quantidade, ou seja  2 e 3
people.splice(2,2);
document.querySelector('#exemplo8').textContent = people;

//inserir em qualquer posição do array, ... separa o elementos para nao ficar um so
people.splice(2,0,'Ele','Nós',...excludedPeople);
document.querySelector('#exemplo9').textContent = people;

//aplicando um estilo ao array de pessoas usando o forEach()
people.forEach(pessoa =>{
    //criar o paragrafo
    const paragrafo = document.createElement('p');
    //colocar o conteúdo no parágrado
    paragrafo.textContent = pessoa;
    //aplicar um estilo
    paragrafo.classList.add('bg-danger','text-light');
    //inserindo o novo p na div
    document.querySelector('#exemplo10').appendChild(paragrafo)
});


