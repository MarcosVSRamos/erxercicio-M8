const form = document.getElementById('cadastro');

const numeroTelefone = [];
const nomesTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    calcularContatos();

});

function adicionarLinha(){

    const addNome = document.getElementById('nome-contato');
    const addNumero = document.getElementById('numero-contato');

    if(nomesTelefone.includes(addNome.value)){
        alert(`O nome ${addNome.value} já foi adicionado`);
    } else {

        nomesTelefone.push(addNome.value);
        numeroTelefone.push(parseFloat(addNumero.value));

        let linha = "<tr>";
        linha += `<td>${addNome.value}</td>`;
        linha += `<td>${addNumero.value}</td>`;
        linha += "</tr>";

        linhas += linha
    }

    addNome.value = '';
    addNumero.value = '';

};

function atualizarTabela(){

    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;

}