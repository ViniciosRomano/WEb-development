//recuperar o id e a foto
let novaFoto = document.querySelector('#foto');
let novoNome = document.querySelector('#nome');

// array de nomes
const nomes = ['Zico','Pelé','Maradona','Casagrande','Roger Guedes','Mosquito','Socrates','Yuri Alberto','Cassio','Sheik']
//sortear um numero para pegar a imagem
let sorteio = Math.floor(Math.random()*10);
//atribuir o nome
novoNome.textContent = nomes[sorteio];
//atribuir uma cor ao nome pelo sorteio
if(sorteio<4){
    novoNome.classList.add('bg-success','text-light');
}
else{
    novoNome.classList.add('bg-dark','text-light');
}
let foto = document.createElement('img');
foto.src = './images/' + sorteio + '.png';
// vinculando a foto
novaFoto.appendChild(foto);