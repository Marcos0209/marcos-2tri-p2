const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " O Sport Club Corinthians Paulista atualmente ele ganhou quantas Copas do Brasil?",
        alternativas: [
            {
                texto: "3 Copas do Brasil",
                afirmacao: "é um corinthiano de verdade!!!"
            },
            {
                texto: "4 Copas do Brasil",
                afirmacao: "você não é um corinthiano kkkk"
            },
            {
                texto: "5 Copas do Brasil",
                afirmacao: "você não é um corinthiano kkkk"
            },
            {
                texto: "2 Copas do Brasil",
                afirmacao: "você não é um corinthiano kkkk"
            }
        ]
    },
    {
        enunciado: "Quem fez 21 gols, e foi o artilheiro do Corinthians em 2023?",
        alternativas: [
            {
                texto: "Romero",
                afirmacao: "não é um corinthiano kkkk"
            },
            {
                texto: "Yuri Alberto",
                afirmacao: "não é um corinthiano kkkk"
            },
            {
                texto: "Roger Guedes",
                afirmacao: "é um corinthiano de verdade!!!"
            },
            {
                texto: "Wesley",
                afirmacao: "não é um corinthiano kkkk"
            },

        ]
    },
    {
        enunciado: "Quem foi o autor do gol da vitória na final do mundial de 2012?",
        alternativas: [
            {
                texto: "Paulinho",
                afirmacao: "não é um corinthiano kkkk"
            },
            {
                texto: "Paolo Guerrero",
                afirmacao: "é um corinthiano de verdade!!!"
            },
            {
                texto: "Emerson Sheik",
                afirmacao: "não é um corinthiano kkkk"
            }, 
            {
                texto: "Ralf",
                afirmacao: "não é um corinthiano kkkk"
            }
        ]
    },
    {
        enunciado: "Quem foi o time adversário que perdeu a final do Mundial de 2012 contra o Corinthians?",
        alternativas: [
            {
                texto: "Vasco",
                afirmacao: "não é um corinthiano kkkk"
            },
            {
                texto: "Arseno",
                afirmacao: "não é um corinthiano kkkk"
            },
            {
                texto: "Argentinos Juniors",
                afirmacao: "não é um corinthiano kkkk"
            },
            {
                texto: "Chelsea",
                afirmacao: "é um corinthiano de verdade!!!"
            }
        ]
    },
    {
        enunciado: "Qual foi o último título do Corinthians?",
        alternativas: [
            {
                texto: "Campeonato Paulista",
                afirmacao: "não é um corinthiano kkkk"
            },
            {
                texto: "Campeonato Brasileiro",
                afirmacao: "é um corinthiano de verdade!!!"
            },
            {
                texto: "Copa do Brasil",
                afirmacao: "não é um corinthiano kkkk"
            },
            {
                texto: "Libertadores",
                afirmacao: "não é um corinthiano kkkk"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Parabéns, você...";
    const afimMaisEscolhida = Object.keys(contagemAfirmacoes).reduce((a, b) => contagemAfirmacoes[a] > contagemAfirmacoes[b] ? a : b);
    textoResultado.textContent = afimMaisEscolhida;
    caixaAlternativas.textContent = "";
}

