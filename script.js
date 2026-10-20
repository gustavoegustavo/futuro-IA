const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat capaz de responder praticamente qualquer dúvida, além de gerar imagens e áudios hiper-realistas. Qual é seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Você ficou preocupado com os riscos dessa nova tecnologia e decidiu que era importante entender seus limites antes de utilizá-la."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você ficou animado com as possibilidades da nova tecnologia e quis descobrir tudo o que ela poderia fazer."
            }
        ]
    },

    {
        enunciado: "Com a descoberta dessa tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia decidiu fazer uma sequência de aulas sobre o assunto. No fim de uma aula, ela pede que você escreva um trabalho sobre o uso da tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca que utiliza IA para encontrar informações relevantes e ajudar a compreender o assunto.",
                afirmacao: "Durante a pesquisa, você percebeu que a IA poderia ser uma ótima ferramenta de aprendizado, desde que as informações fossem verificadas e você realmente entendesse o conteúdo."
            },
            {
                texto: "Escrever o trabalho com base nas conversas com colegas, pesquisas na internet e conhecimentos próprios.",
                afirmacao: "Você preferiu realizar a pesquisa de maneira mais tradicional, consultando diferentes fontes e construindo suas próprias ideias sobre o assunto."
            }
        ]
    },

    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate para entender como a pesquisa e a escrita foram feitas. Durante a conversa, surgiu uma questão importante: como a IA pode impactar o trabalho no futuro? Como você se posiciona?",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: "No debate, você destacou que a evolução da IA poderia substituir algumas funções e defendeu a necessidade de preparar e proteger os trabalhadores para essas mudanças."
            },
            {
                texto: "Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Você argumentou que a IA também poderia criar novas profissões e ajudar as pessoas a desenvolver novas habilidades, desde que fosse utilizada de maneira responsável."
            }
        ]
    },

    {
        enunciado: "Ao final da discussão, você precisa criar uma imagem no computador que represente o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Você decidiu criar a imagem manualmente, valorizando sua criatividade e mostrando que a tecnologia tradicional ainda poderia ser uma forma importante de expressão."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagens de IA.",
                afirmacao: "Você utilizou um gerador de imagens de IA e percebeu como a ferramenta poderia transformar uma ideia em uma imagem em poucos segundos."
            }
        ]
    },

    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte. O grupo está atrasado e uma pessoa decidiu fazer o trabalho com ajuda de uma IA. O problema é que o texto ficou totalmente igual ao produzido pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "Revisar o trabalho, verificar as informações e acrescentar as perspectivas pessoais do grupo.",
                afirmacao: "Você explicou ao grupo que a IA poderia ajudar, mas não deveria substituir o pensamento das pessoas. Todos revisaram o texto, verificaram as informações e acrescentaram suas próprias ideias."
            },
            {
                texto: "Utilizar o texto inteiro, pois escrever comandos para a IA também é uma forma de contribuir.",
                afirmacao: "O grupo decidiu utilizar o texto produzido pela IA praticamente sem alterações. Apesar de economizar tempo, vocês perceberam que nem sempre era possível ter certeza de que todas as informações estavam corretas."
            }
        ]
    }
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + "\n\n";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent =
        "Vinte e três anos se passaram desde aquele primeiro encontro com a Inteligência Artificial.\n\n" +
        historiaFinal +
        "Ao olhar para trás, você percebeu que a IA havia transformado profundamente a sociedade. " +
        "Mas também descobriu que o futuro não dependia apenas das máquinas. " +
        "As escolhas feitas pelas pessoas, a criatividade, o pensamento crítico e a responsabilidade continuavam sendo fundamentais.\n\n" +
        "Em 2049, a pergunta já não era se a Inteligência Artificial faria parte da vida humana. " +
        "Ela já fazia. A verdadeira questão era como as pessoas escolheriam utilizá-la.";

    caixaAlternativas.textContent = "";
}

mostraPergunta();