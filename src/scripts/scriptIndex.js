

const capturaDados = async () => {
    const res = await fetch("../../db/db.json");

    const data = await res.json();

    return data;
}

export default capturaDados;

const listagemDados = () => {
    const dados = capturaDados().then((res) => {

        const filtroVagas = document.querySelector("#filtro-vagas")
        const listaVagas = document.querySelector("#lista-vagas")

        capturaSessionStorage()


        //Todas as Vagas

        if(filtroVagas.value === 'todas'){

            res.map((item) => {

                if(item.status == "Disponível"){
                    listaVagas.innerHTML +=
                    `
                    <tr>
                        <td>${item.numeroEstacionamento}</td>
                        <td>${item.status}</td>
                        <td class="acoes-styles">
                            <button onclick="OcuparVaga(${item.numeroEstacionamento})">Ocupar</button>
                        </td>
                    </tr>
                    `
                }
                
                else if(item.status == "Indisponível"){
                    listaVagas.innerHTML +=
                    `
                    <tr id="vaga-${item.numeroEstacionamento}">
                        <td name="estacionamento">${item.numeroEstacionamento}</td>
                        <td name="status">${item.status}</td>
                        <td class="acoes-styles">
                            <select onchange="DefinidorAcoes(${item.numeroEstacionamento}, 'visualizar')" class="acoes" name="acoes" id="acoes-${item.numeroEstacionamento}">
                                <option selected value="definir-acao">Definir Ação</option>
                                <option value="visualizar">Visualizar</option>
                                <option value="desocupar" disabled>Desocupar</option>
                            </select>
                        </td>
                    </tr>
                    `

                }


            })

        }

        //Vagas Indisponíveis


        if(filtroVagas.value === 'nao-disponiveis'){

            res.map((item) => {
                
                if(item.status == "Indisponível"){
                    listaVagas.innerHTML +=
                    `
                    <tr id="vaga-${item.numeroEstacionamento}">
                        <td name="estacionamento">${item.numeroEstacionamento}</td>
                        <td name="status">${item.status}</td>
                        <td class="acoes-styles">
                        <select onchange="DefinidorAcoes(${item.numeroEstacionamento}, 'visualizar')" class="acoes" name="acoes" id="acoes-${item.numeroEstacionamento}">
                                <option selected value="definir-acao">Definir Ação</option>
                                <option value="visualizar">Visualizar</option>
                                <option value="desocupar" disabled>Desocupar</option>
                        </select>
                        </td>
                    </tr>
                    `

                }


            })

        }


        //Vagas Disponíveis

        if(filtroVagas.value === 'disponiveis'){

            res.map((item) => {
                if(item.status == "Disponível"){

                    listaVagas.innerHTML +=
                    `
                    <tr>
                        <td>${item.numeroEstacionamento}</td>
                        <td>${item.status}</td>
                        <td class="acoes-styles">
                            <button onclick="OcuparVaga(${item.numeroEstacionamento})">Ocupar</button>
                        </td>
                    </tr>
                    `
                }

            })

            

        }



    }).catch((err) => {
        alert("Erro Inesperado")
    });

    
}


const filtroVagas = () => {
    const filtroVagas = document.querySelector("#filtro-vagas")

    filtroVagas.addEventListener('change', function () {
        const selecionada = this.options[this.selectedIndex].value;

        if(sessionStorage.setItem("filtro", selecionada) == "todas" || selecionada == "todas"){
            sessionStorage.clear()
        };

        sessionStorage.setItem("filtro", selecionada)

        window.location.reload(true)

    });
    
}


const capturaSessionStorage = () => {
    const optionsFiltro = document.querySelector("#filtro-vagas")
    const filtroSs = sessionStorage.getItem("filtro")
    
    for(i = 0; i < optionsFiltro.options.length; i++){
        
        if(optionsFiltro.options[i].value == filtroSs){
            optionsFiltro.selectedIndex = i;
        }
        
    }
}



listagemDados()
filtroVagas()






const OcuparVaga = (numeroEstacionamento) => {

    const confirmOcupacao = confirm("Deseja apontar a vaga para a ocupação?")

    if(confirmOcupacao){

        sessionStorage.setItem("ocupar", numeroEstacionamento)


        window.location.href = "cadastro-reserva.html"
        
    }

    
}



const DefinidorAcoes = (numeroEstacionamento, acao) => {

    if(acao == "visualizar"){
        sessionStorage.setItem("visualizar", numeroEstacionamento)

        window.location.href = "visualizar-vaga.html"
    }
}

