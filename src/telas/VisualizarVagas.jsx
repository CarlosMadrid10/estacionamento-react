import React from 'react'
import '../../styles/directs-styles/style-visualizar-vaga.css'
import {useParams} from 'react-router-dom'
import Vagas from '../../db/db.json';


const VisualizarVagas = () => {


    let { id } = useParams();
    let atualVaga = {}

    Vagas.map(item => {
        if(item.numeroEstacionamento == id && item.status === "Indisponível"){
            atualVaga = item
        }
    })

    return (
        <main>
            <header>
                <nav className="action-nav">
                    <div className="return-div">
                        <a href="/">Voltar</a>
                    </div>
                    <div className="action-vacancy">
                        <button id="editar">Editar</button>
                        <button id="desocupar">Desocupar</button>
                    </div>
                </nav>
            </header>
            <article>
                <section>
                    <h2>Vaga</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Vaga</th>
                                <th>Bloco</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td id="numero-estacionamento">{atualVaga.numeroEstacionamento}</td>
                                <td id="bloco">{atualVaga.blocoApto}</td>
                                <td id="status">{atualVaga.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>

                    <h2>Veículo</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Placa do Veículo</th>
                                <td id="placa">{atualVaga.placa}</td>
                            </tr>
                            <tr>
                                <th>Proprietário do Veículo</th>
                                <td id="proprietario">{atualVaga.nomeProprietario}</td>
                            </tr>
                            <tr>
                                <th>Apartamento</th>
                                <td id="numero-apartamento">{atualVaga.numeroApto}</td>
                            </tr>
                            <tr>
                                <th>Modelo do Veículo</th>
                                <td id="modelo-carro">{atualVaga.modeloVeiculo}</td>
                            </tr>
                            <tr>
                                <th>Cor do veículo</th>
                                <td id="cor-carro">{atualVaga.corVeiculo}</td>
                            </tr>
                        </tbody>
                    </table>



                </section>
            </article>
        </main>

        // Aqui vai scriptVisualizar.js
    )
}

export default VisualizarVagas