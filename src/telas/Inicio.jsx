import React, { useState } from 'react';
import Vagas from '../../db/db.json';
import '../../styles/directs-styles/style-index.css';

const Inicio = () => {
    const [valorSelecionado, definirValorFiltroSelecionado] = useState('todas');
    const [acoesSelecionadas, definirAcoesSelecionadas] = useState({});

    const modificacaoFiltroValor = (event) => {
        definirValorFiltroSelecionado(event.target.value);
    };

    const modificarAcoes = (event, numeroEstacionamento) => {
        const novaAcaoSelecionada = {
            acao: event.target.value,
            vaga: numeroEstacionamento
        };
        definirAcoesSelecionadas(novaAcaoSelecionada);
    };

    let vagasFiltradas = [];

    Vagas.map(item => {
        if (valorSelecionado === "todas") {
            vagasFiltradas.push(item);
        }

        if (valorSelecionado === "disponiveis" && item.status === "Disponível") {
            vagasFiltradas.push(item);
        }
        if (valorSelecionado === "nao-disponiveis" && item.status === "Indisponível") {
            vagasFiltradas.push(item);
        }

    });

    if(acoesSelecionadas.acao === 'visualizar'){
        window.location.replace(`/visualizar-vaga/${acoesSelecionadas.vaga}`)
    }


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
                    <h2>Vagas</h2>
                    <div className="select">
                        <label htmlFor="filtro-vagas">Filtro: </label>
                        <select name="filtro-vagas" id="filtro-vagas" value={valorSelecionado} onChange={modificacaoFiltroValor}>
                            <option value="todas">Todas</option>
                            <option value="disponiveis">Disponíveis</option>
                            <option value="nao-disponiveis">Não Disponíveis</option>
                        </select>
                    </div>
                    <table id="lista-vagas">
                        <thead>
                            <tr>
                                <th>Vaga</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vagasFiltradas.map((item) => (
                                <tr key={item.numeroEstacionamento}>
                                    <td>{item.numeroEstacionamento}</td>
                                    <td>{item.status}</td>
                                    {item.status === 'Disponível' ? (
                                        <td className='acoes-styles'>
                                            <button>Ocupar</button>
                                        </td>
                                    ) : (
                                        <td>
                                            <select
                                                className="acoes"
                                                name="acoes"
                                                id={`acoes-${item.numeroEstacionamento}`}
                                                value={acoesSelecionadas[item.numeroEstacionamento] || 'definir-acao'}
                                                onChange={(event) => modificarAcoes(event, item.numeroEstacionamento)}
                                            >
                                                <option value="definir-acao">Definir Ação</option>
                                                <option value="visualizar">Visualizar</option>
                                                <option value="desocupar" disabled>Desocupar</option>
                                            </select>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </article>
        </main>
    );
};

export default Inicio;
