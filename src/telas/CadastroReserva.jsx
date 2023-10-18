import React from 'react'
import "../../styles/directs-styles/style-cadastro-reserva.css"

const CadastroReserva = () => {
  return (
    <main>
        <header>
            <nav>
                <ul>
                    <li><a href="/">Vagas</a></li>
                    <li><a href="/cadastro-reserva">Cadastrar Reserva</a></li>
                </ul>
            </nav>
        </header>
        <article>
            <section>
                <h2>Cadastrar Reserva</h2>
                <fieldset>
                    <div className="campo-capt-infos">
                        <label htmlFor="nome-proprietario">Nome do Proprietário</label>
                        <input type="text" id="nome-proprietario"/>
                    </div>

                    <div className="campo-capt-infos">
                        <label htmlFor="numero-apartamento">Número do Apartamento</label>
                        <input type="number" id="numero-apartamento"/>
                    </div>

                    <div className="campo-capt-infos">
                        <label htmlFor="bloco-apartamento">Bloco do Apartamento</label>
                        <input type="text" id="bloco-apartamento"/>
                    </div>

                    <div className="campo-capt-infos">
                        <label htmlFor="nome-proprietario">Modelo do Veículo</label>
                        <input type="text" id="modelo-veiculo"/>
                    </div>

                    <div className="campo-capt-infos">
                        <label htmlFor="cor-veiculo">Cor do Veículo</label>
                        <input type="text" id="cor-veiculo"/>
                    </div>

                    <div className="campo-capt-infos">
                        <label htmlFor="placa-veiculo">Placa do Veículo</label>
                        <input type="text" id="placa-veiculo"/>
                    </div>

                    <div className="campo-select-infos">
                        <label htmlFor="vagas-disponiveis">Selecionar Vaga</label>
                        <select name="vagas-disponiveis" id="vagas-disponiveis">
                        </select>
                    </div>

                    <div className="campo-submit-infos">
                        <button disabled>Concluir</button>
                    </div>
                </fieldset>
            </section>
        </article>
    </main>

    // aqui vai scriptCadastroReserva.js

  )
}

export default CadastroReserva