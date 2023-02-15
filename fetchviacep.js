let cep = document.getElementById('input-cep');
let botaoCep = document.getElementById('botao-cep')

async function buscaEndereco(cep, event) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try {
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCepJson = await consultaCep.json();
        if (consultaCepJson.erro) {
            throw Error;
        }
        let cepInput = document.getElementById('cep');
        let endereco = document.getElementById('endereco');
        let complemento = document.getElementById('complemento');
        let bairro = document.getElementById('bairro');
        let cidade = document.getElementById('cidade');
        let uf = document.getElementById('estado');

        cepInput.value = consultaCepJson.cep;
        endereco.value = consultaCepJson.logradouro;
        complemento.value = consultaCepJson.complemento;
        bairro.value = consultaCepJson.bairro;
        cidade.value = consultaCepJson.localidade;
        uf.value = consultaCepJson.uf;



        console.log(consultaCepJson);
        return consultaCepJson;
    } catch (erro) {
        mensagemErro.innerHTML = '<p> CEP inválido! Tente novamente.</p>';
        console.log(erro);
    }
}

botaoCep.addEventListener('click', () => buscaEndereco(cep.value));