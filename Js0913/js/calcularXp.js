//pegar botão
const btnCalcular = document.querySelector('#btnCalcular')

console.log(btnCalcular);
// atribuir um evento ao botão
btnCalcular.addEventListener('click', mensagem);
btnCalcular.addEventListener('mouseover', mensagem);

function mensagem(){
    alert('Calculando')
}
//mensagem()