// console- browser "Sysout"= log
console.log('olá, teste');
//variaveis NÃO TEM TIPO, Tipagem automatica 
// Let declara a variavel apenas uma vez
let userName = 'israel Marques';
let userEmail = 'profisrael.cop@fiap.com';
let userId = 45678;
let userlogin = true;
let userAge;
let userHeight = null;
let arr = [123, "eu",false,456.1,"tu"];

// console.log(userName,"\n",userEmail);
console.log(userName,typeof(userName));
console.log(userEmail,typeof(userEmail));
console.log(userId,typeof(userId));
console.log(userlogin,typeof(userlogin));
console.log(userAge,typeof(userAge));
console.log(userHeight, typeof(userHeight));
console.log(arr);

console.log(typeof(arr));

// let i; nao usar var
// for(i=0; i<=10; i++){
//     console.log(i);
// }
// console.log("Sem zerar");
// console.log(i);
// console.log("zerado");
// i=0;
// i+=200;
// console.log(i);
// Concatenaçao Não Use
console.log('Usuario '+ userName+' Email: '+userEmail);
// Template String juntar + Variaveis+método + Função
// Crase para iniciar e terminar o template `texto`
// placegolder para chamar variaveis + funçoes + etc... $(variavél)
console.log(`Usuário: ${userName}
Login: ${userName}`);

let mensagem = `Ola ${userName}`;
console.log(mensagem);
// constante nao altera
const dataNascimento = '18/12/2003';
console.log(dataNascimento);
