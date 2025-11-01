// Recebe o clique do botão
const botaoBuscar = document.getElementById("buscar");
botaoBuscar.addEventListener("click", buscarCEP);


// busca o CEP informado
function buscarCEP() {

    // Recebe o cep informado
   const cepInformado = document.getElementById("cep");
   const link = `https://viacep.com.br/ws/${cepInformado.value}/json`;

    // Validar o CEP

    if (cepInformado.value == "") {
        cepInformado.focus();
        cepInformado.style.borderColor = "red"; /* Muda a cor da borda*/
        cepInformado.style.outline = "none"; /* remove o outline (linha ao redor) */
        
        return;
    }
    
    if (cepInformado.value.length != 8){

    }
      
    // Buscar o CEP

    //  fetch("https://viacep.com.br/ws/01001000/json/") - link original
    
    fetch(link)
        .then((response) => response.json())
            // Exibe os dados
        .then((dados) => {
            // console.log(dados);
        
        document.getElementById("dados").innerHTML = `
            <p>CEP: ${dados.cep}</p>
            <p>logradouro: ${dados.logradouro}</p>
            <p>CEP: ${dados.complemento}</p>
            <p>complemento: ${dados.bairro}</p>
            <p>localicade: ${dados.localicade}</p>
            <p>uf: ${dados.uf}</p>
            <p>regiao: ${dados.regiao}</p>
            <p>ddd: ${dados.ddd}</p>

        `;

    // se der erro
   

        });


}