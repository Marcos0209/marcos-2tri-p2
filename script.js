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
                afirmacao: "Certo"
            },
            {
                texto: "4 Copas do Brasil",
                afirmacao: "Errado"
            },
            {
                texto: "5 Copas do Brasil",
                afirmacao: "Errado"
            },
            {
                texto: "2 Copas do Brasil",
                afirmacao: "Errado"
            }
        ]
    },
    {
        enunciado: "Quem fez 21 gols, e foi o artilheiro do Corinthians em 2023?",
        alternativas: [
            {
                texto: "Romero",
                afirmacao: "Errado"
            },
            {
                texto: "Yuri Alberto",
                afirmacao: "Errado"
            },
            {
                texto: "Roger Guedes",
                afirmacao: "Certo"
            },
            {
                texto: "Wesley",
                afirmacao: "Errado"
            },

        ]
    },
    {
        enunciado: "Quem foi o autor do gol da vitória na final do mundial de 2012?",
        alternativas: [
            {
                texto: "Paulinho",
                afirmacao: "Errado"
            },
            {
                texto: "Paolo Guerrero",
                afirmacao: "Certo"
            },
            {
                texto: "Emerson Sheik",
                afirmacao: "Errado"
            }, 
            {
                texto: "Ralf",
                afirmacao: "Errado"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Sua casa é...";
    const afimMaisEscolhida = Object.keys(contagemAfirmacoes).reduce((a, b) => contagemAfirmacoes[a] > contagemAfirmacoes[b] ? a : b);
    textoResultado.textContent = afimMaisEscolhida;
    caixaAlternativas.textContent = "";
}

