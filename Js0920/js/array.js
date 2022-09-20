const pessoas = ['Eu','Tu','nos','ele','vos','eles'];
console.log(pessoas);

//Manipular array
//inserir uma nova pessoa no fim do array
pessoas.push('antipunultimo','Ultimo')
console.log(pessoas);
//Excluir uma nova pessoa no fim do array
pessoas.pop();
console.log(pessoas);
//inserir uma nova pessoa no inicio do array
pessoas.unshift('primeiro')
console.log(pessoas);
//excluir uma nova pessoa no inicio do array
pessoas.shift('segundo')
console.log(pessoas);
//exclui em qualquer possiçao do array
pessoas.splice(2,2)
console.log(pessoas);
//inserir em qualquer possiçao do array 2 inicia, exclui
pessoas.splice(0,4,'Primeiro','Segundo')
console.log(pessoas);
