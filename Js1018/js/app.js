//Get tbody
const tbody = document.querySelector('tbody');
console.log(tbody);

// pegar o Form
// passar o evento padrao para dentro de uma função
// essa função irá cancelar o envio do dados
// cancelamento do envio - os dados são exibidos na tela e so apagam  quando a tela for atualizada

document.querySelector('form').addEventListener('submit',function(e){
    //cancelar o evento
    e.preventDefault();
    
    //recuperar os campos do form
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')        
    ];
    console.log(campos);

    //criar uma tr = linha
    const tr = document.createElement('tr');

    //forEach para percorrer todo array
    campos.forEach(campo =>{

        //cria uma td = coluna
        const td = document.createElement('td');
        //colocando o conteudo digitado no campo dentro da td

        td.textContent = campo.value;

        //vinculando a td na tr
        tr.appendChild(td);
    })

    //vincular tr no tbody
    tbody.appendChild(tr);

    //limpar o formulario
    this.reset();

})