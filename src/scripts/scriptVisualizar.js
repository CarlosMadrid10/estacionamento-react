const capturaDados = async () => {
    const res = await fetch("../db/db.json");

    const data = await res.json();

    return data;
}

const listagemDados = () => {
    const dados = capturaDados().then((res) => {
        const visualizar =  sessionStorage.getItem("visualizar")

        res.map((item) => {
            if(item.numeroEstacionamento == visualizar){
                const numeroEstacionamentoElemento = document.querySelector("#numero-estacionamento")
                const bloco = document.querySelector("#bloco")
                const status = document.querySelector("#status")
                const placa = document.querySelector("#placa")
                const proprietario = document.querySelector("#proprietario")
                const numeroApto = document.querySelector("#numero-apartamento")
                const modeloCarro = document.querySelector("#modelo-carro")
                const corCarro = document.querySelector("#cor-carro")

                numeroEstacionamentoElemento.innerHTML = item.numeroEstacionamento
                bloco.innerHTML = item.blocoApto
                status.innerHTML = item.status
                placa.innerHTML = item.placa
                proprietario.innerHTML = item.nomeProprietario
                numeroApto.innerHTML = item.numeroApto
                modeloCarro.innerHTML = item.modeloVeiculo
                corCarro.innerHTML = item.corVeiculo

                sessionStorage.clear()

            }
        })


    }).catch((err) => {
        alert("Ocorreu um erro.")
    })



}

listagemDados()