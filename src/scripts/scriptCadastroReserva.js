const capturaDados = async () => {
    const res = await fetch("../db/db.json");

    const data = await res.json();

    return data;
}




window.addEventListener("load", () => {
    const ocuparResultado = sessionStorage.getItem("ocupar")
    const vagaSelectElemento = document.querySelector("#vagas-disponiveis")

    if(ocuparResultado){
        vagaSelectElemento.innerHTML = 
        `
            <option value="${ocuparResultado}">Vaga ${ocuparResultado}</option>
        `
        
    }else{
        const dadosRecebidos = capturaDados();

        dadosRecebidos.then((res) => {
            res.map((item => {
                if(item.status == "Disponível"){
                    vagaSelectElemento.innerHTML += 
                    `
                        <option value="${item.numeroEstacionamento}">Vaga ${item.numeroEstacionamento}</option>
                    `
                }
            }))
        }).catch((err) => {
            console.log(`Erro inesperado... ${err}`)
            alert("Ocorreu algum erro.")
        })
    }
})





const btnCadastro = document.querySelector(".campo-submit-infos>button").onclick = () => {

    const nomeProprietario = document.querySelector("#nome-proprietario")
    const numeroApartamento = document.querySelector("#numero-apartamento")
    const blocoApartamento = document.querySelector("#bloco-apartamento")
    const modeloVeiculo = document.querySelector("#modelo-veiculo")
    const corVeiculo = document.querySelector("#cor-veiculo")
    const placaVeiculo = document.querySelector("#placa-veiculo")
    const vagasDisponiveis = document.querySelector("#vagas-disponiveis").options.length

    if(vagasDisponiveis > 0){
        if(nomeProprietario.value &&
            numeroApartamento.value &&
            blocoApartamento.value &&
            modeloVeiculo.value &&
            corVeiculo.value &&
            placaVeiculo.value){



            
            //Modulo FS necessário...


    
        }else{
            alert("Por favor, preencha todos os campos.")
        }


    }else{
        alert("Não há vagas disponíveis.")
    }





}

