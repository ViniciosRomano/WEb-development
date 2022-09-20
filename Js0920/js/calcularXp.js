//pegar botão
const btnCalcular = document.querySelector('#btnCalcular')

console.log(btnCalcular);
// atribuir um evento ao botão
//btnCalcular.addEventListener('mouseover', mensagem);
//btnCalcular.addEventListener('click', mensagem);
// btnCalcular.addEventListener('click', function(){
//     alert("Executar sozinha");
// });
btnCalcular.addEventListener('click',()=>{
    //get herois
    const herois = document.querySelectorAll('.heroi');
    //montar for, percorrer o array
//    for(let i=0;i<herois.length;i++){
//         //pegando força,velocidade e agilidade
//         let forca = Number(herois[i].querySelector('.forca').textContent);

//         let velocidade = Number(herois[i].querySelector('.velocidade').textContent);
//         let agilidade = Number(herois[i].querySelector('.agilidade').textContent);
//         let xpFinal = (forca + velocidade + agilidade)/3;
//         //exibir na pagina
//         //to fizexd casa decimal
//         herois[i].querySelector('.xp').textContent = xpFinal.toFixed(1);
//         //analizando o xp dos heoris
//         if(xpFinal <90){
//             herois[i].classList.add('bg-danger','text-light');
//         //herois[i].style.backgroundColor ='#900';
//         //herois[i].style.color ='#fff';
//         }
//     }
// })

herois.forEach((heroi) =>{
    let forca = Number(heroi.querySelector('.forca').textContent);
    let velocidade = Number(heroi.querySelector('.velocidade').textContent);
    let agilidade = Number(heroi.querySelector('.agilidade').textContent);
    let xpFinal = (forca + velocidade + agilidade)/3;
    heroi.querySelector('.xp').textContent = xpFinal.toFixed(1);
    if(xpFinal <90){
        heroi.classList.add('bg-danger','text-light');
    }
})
})
// function mensagem(){
    //     alert('Calculando')
    // }
    //mensagem()