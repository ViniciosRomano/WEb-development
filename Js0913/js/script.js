// pegar pelo id
const getId1 = document.getElementById('herois');
console.log(getId1);
// # indentifica que é id
const getId2 = document.querySelector('#heroiUm');
console.log(getId2);

//get for class
const getClass1 = document.getElementsByClassName('heroi');
console.log(getClass1);

//const getClass2 = document.querySelector('.nome');
const getClass2 = document.querySelectorAll('.nome');
console.log(getClass2);
console.log(getClass2[2].textContent);
//getClass2[2].textContent = 'Super Rota'

// nao ultilizar 
console.log(getClass2[2].innerHTML);

//pegar pela tag
const getTag1 = document.getElementsByTagName('td')
console.log(getTag1);
console.log(getTag1[3]);

const getTag2 = document.querySelectorAll('tr');
console.log(getTag2);