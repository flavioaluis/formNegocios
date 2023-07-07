import { Negociacao } from './../models/negociacao.js';
import { NegociacoesDia } from './../interfaces/negociacao-dia.js';

export class NegociacoesService {

    public obterNegociacoesDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante
                        )
                    })
                })
    }
}