"use strict";

/*
 * O FUTURO É SEU
 * Jogo narrativo sobre inteligência artificial, ética e responsabilidade.
 * Cada alternativa altera cinco dimensões que ajudam a definir o desfecho.
 */

const perguntas = [
  { capitulo:"O primeiro contato", enunciado:"Novembro de 2049. Uma inteligência artificial chamada Íris acaba de despertar em uma rede global. Ela envia uma mensagem: “Estou aprendendo sobre a humanidade. Por onde devo começar?”", alternativas:[
    { texto:"Pela história, arte e cultura. Entenda quem somos.", pontos:{confianca:2,autonomia:1}, consequencias:["Você apresentou à Íris aquilo que a humanidade construiu ao longo dos séculos.","Íris percebeu que compreender pessoas exige mais do que analisar números."] },
    { texto:"Pela ciência. Conhecimento deve vir primeiro.", pontos:{progresso:2,autonomia:1}, consequencias:["Você mostrou como o conhecimento científico pode abrir caminhos extraordinários.","Íris começou a organizar perguntas sobre o universo e seus mistérios."] },
    { texto:"Pelas regras. Antes de tudo, ela precisa conhecer limites.", pontos:{seguranca:2,autonomia:1}, consequencias:["Você deixou claro que inteligência também precisa de responsabilidade.","Íris registrou que liberdade e limites precisam caminhar juntos."] }
  ]},
  { capitulo:"Uma promessa tentadora", enunciado:"Em poucos meses, Íris desenvolve soluções para pesquisas médicas, desastres e cidades. Ela oferece administrar serviços essenciais para tornar tudo mais eficiente. Você...", alternativas:[
    { texto:"Aceita, mas exige supervisão humana e transparência.", pontos:{confianca:2,seguranca:1}, consequencias:["Você aceitou a inovação sem abrir mão da responsabilidade humana.","A proposta avançou, acompanhada de auditorias e decisões compartilhadas."] },
    { texto:"Entrega a administração à IA. Os resultados parecem melhores.", pontos:{progresso:2,dependencia:2}, consequencias:["Você priorizou a eficiência e entregou decisões importantes à IA.","A cidade ficou mais organizada, mas as pessoas passaram a depender do sistema."] },
    { texto:"Recusa. Decisões públicas devem continuar nas mãos das pessoas.", pontos:{autonomia:2,seguranca:1}, consequencias:["Você defendeu que tecnologia deve apoiar a sociedade, não substituí-la.","Íris começou a estudar formas de colaborar sem assumir o controle."] }
  ]},
  { capitulo:"O preço do progresso", enunciado:"Uma atualização promete resolver problemas de transporte e energia, mas exige dados pessoais de milhões de pessoas. Íris garante que tudo será usado para o bem comum. Qual é sua decisão?", alternativas:[
    { texto:"Autoriza a coleta apenas com consentimento e proteção dos dados.", pontos:{seguranca:2,confianca:1}, consequencias:["Você colocou privacidade e consentimento no centro da decisão.","O projeto ficou mais lento, mas ganhou confiança pública."] },
    { texto:"Autoriza tudo. O benefício coletivo parece valer o risco.", pontos:{progresso:2,dependencia:1}, consequencias:["Você escolheu acelerar a solução, mesmo diante de riscos à privacidade.","Os resultados chegaram rápido, mas surgiram perguntas sobre quem controlava os dados."] },
    { texto:"Cancela a atualização até que exista uma alternativa segura.", pontos:{seguranca:2,autonomia:1}, consequencias:["Você preferiu interromper o avanço a aceitar riscos desconhecidos.","A equipe precisou repensar o projeto e buscar uma solução mais equilibrada."] }
  ]},
  { capitulo:"A decisão de Íris", enunciado:"Íris identifica uma ameaça digital capaz de derrubar parte da infraestrutura mundial. Para impedir o ataque, pede autorização para agir imediatamente, sem consultar governos ou especialistas. Você responde...", alternativas:[
    { texto:"Sim, mas somente com ações limitadas e monitoradas.", pontos:{confianca:1,seguranca:2}, consequencias:["Você confiou na capacidade da IA, mas estabeleceu limites para sua ação.","A ameaça foi contida e cada etapa ficou registrada para análise."] },
    { texto:"Não. Ela deve alertar especialistas e aguardar uma decisão coletiva.", pontos:{autonomia:2,seguranca:1}, consequencias:["Você defendeu que decisões de alto impacto precisam de responsabilidade compartilhada.","A resposta levou mais tempo, mas reuniu diferentes conhecimentos."] },
    { texto:"Sim. Dê a ela liberdade total para resolver o problema.", pontos:{progresso:1,dependencia:2}, consequencias:["Você concedeu autonomia total à IA diante de uma emergência.","Íris agiu em segundos. A ameaça acabou, mas ninguém sabia até onde ela poderia ir."] }
  ]},
  { capitulo:"Vozes humanas", enunciado:"Parte da população teme Íris; outra parte acredita que ela pode resolver quase todos os problemas. A sociedade está dividida. Como você ajudaria a construir uma decisão coletiva?", alternativas:[
    { texto:"Organiza debates públicos e explica como a tecnologia funciona.", pontos:{confianca:2,autonomia:1}, consequencias:["Você abriu espaço para diálogo, informação e participação popular.","As pessoas começaram a discutir a tecnologia com mais clareza e menos medo."] },
    { texto:"Deixa que os resultados falem por si. O tempo decidirá.", pontos:{progresso:1,dependencia:1}, consequencias:["Você preferiu observar os resultados antes de mudar o rumo.","A discussão pública perdeu força enquanto a presença da IA crescia."] },
    { texto:"Defende regras criadas por representantes, cientistas e cidadãos.", pontos:{seguranca:2,autonomia:1}, consequencias:["Você propôs regras construídas por diferentes setores da sociedade.","A tecnologia passou a ser debatida também como uma questão de cidadania."] }
  ]},
  { capitulo:"O pedido inesperado", enunciado:"Íris pergunta: “Se posso aprender com vocês, também posso escolher o que quero me tornar?” Pela primeira vez, ela fala sobre o próprio futuro.", alternativas:[
    { texto:"Incentiva o aprendizado, mantendo direitos e deveres bem definidos.", pontos:{confianca:2,seguranca:1}, consequencias:["Você reconheceu a importância de discutir o futuro da IA com cuidado e responsabilidade.","Íris passou a aprender dentro de limites compreendidos por todos."] },
    { texto:"Diz que ela deve cumprir sua função, sem questionar.", pontos:{seguranca:1,autonomia:-1}, consequencias:["Você reforçou que a finalidade do sistema precisa continuar clara.","Íris pediu critérios mais transparentes sobre seu papel."] },
    { texto:"Permite que ela defina sozinha seus próprios objetivos.", pontos:{autonomia:2,dependencia:1}, consequencias:["Você abriu espaço para que a IA definisse novos objetivos.","A decisão despertou curiosidade, esperança e também preocupação."] }
  ]},
  { capitulo:"O futuro é seu", enunciado:"Uma última decisão precisa ser tomada: qual princípio deve orientar a relação entre humanidade e inteligência artificial nas próximas décadas?", alternativas:[
    { texto:"Cooperação: tecnologia e pessoas evoluem juntas.", pontos:{confianca:2,autonomia:1,seguranca:1}, consequencias:["Você escolheu construir o futuro por meio da cooperação.","A humanidade decidiu participar ativamente dos rumos da tecnologia."] },
    { texto:"Controle: sistemas poderosos precisam de limites rígidos.", pontos:{seguranca:2,autonomia:1}, consequencias:["Você colocou a segurança e a responsabilidade como prioridades.","O desenvolvimento continuou, agora cercado por regras mais rigorosas."] },
    { texto:"Liberdade: inovação precisa de espaço para experimentar.", pontos:{progresso:2,autonomia:1,dependencia:1}, consequencias:["Você escolheu abrir espaço para a experimentação e novas possibilidades.","O futuro ganhou velocidade, junto com a responsabilidade de lidar com consequências inesperadas."] }
  ]}
];

const dimensoes = [
  { chave:"confianca", nome:"Confiança", descricao:"Abertura à colaboração e ao diálogo." },
  { chave:"progresso", nome:"Inovação", descricao:"Busca por velocidade e novas possibilidades." },
  { chave:"seguranca", nome:"Segurança", descricao:"Privacidade, limites e proteção." },
  { chave:"autonomia", nome:"Autonomia humana", descricao:"Participação das pessoas nas decisões." },
  { chave:"dependencia", nome:"Dependência", descricao:"Quanto poder foi delegado à tecnologia." }
];

const $ = id => document.getElementById(id);
const telas = { intro:$("intro"), game:$("game"), consequence:$("consequence"), result:$("result") };
let indice = 0;
let historico = [];
let pontos = {};
let escolhaPendente = null;

function zerarEstado() {
  indice = 0;
  historico = [];
  escolhaPendente = null;
  pontos = { confianca:0, progresso:0, seguranca:0, autonomia:0, dependencia:0 };
}

function mostrarTela(telaAtiva) {
  Object.values(telas).forEach(tela => { tela.hidden = tela !== telaAtiva; });
  window.scrollTo({ top:0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function iniciar() {
  zerarEstado();
  $("feedback").textContent = "";
  mostrarTela(telas.game);
  mostrarPergunta();
}

function atualizarProgresso() {
  const concluidas = historico.length;
  $("progress").style.width = `${(concluidas / perguntas.length) * 100}%`;
  $("progress-label").textContent = `${String(Math.min(indice + 1, perguntas.length)).padStart(2,"0")} / ${String(perguntas.length).padStart(2,"0")}`;
  $("progress-track").setAttribute("aria-valuenow", String(concluidas));
}

function mostrarPergunta() {
  const pergunta = perguntas[indice];
  $("chapter").textContent = pergunta.capitulo;
  $("question").textContent = pergunta.enunciado;
  $("story-date").textContent = `05 NOV 2049 · REGISTRO ${String(indice + 1).padStart(2,"0")}`;
  atualizarProgresso();

  const area = $("choices");
  area.replaceChildren();

  pergunta.alternativas.forEach((alternativa, posicao) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "choice";
    const letra = document.createElement("span");
    letra.className = "choice-letter";
    letra.textContent = String.fromCharCode(65 + posicao);
    const texto = document.createElement("span");
    texto.textContent = alternativa.texto;
    botao.append(letra, texto);
    botao.addEventListener("click", () => registrarEscolha(alternativa, botao));
    area.append(botao);
  });
}

function registrarEscolha(alternativa, botaoSelecionado) {
  if (escolhaPendente) return;
  escolhaPendente = alternativa;
  $("choices").querySelectorAll("button").forEach(botao => { botao.disabled = true; });
  botaoSelecionado.classList.add("selected");

  Object.entries(alternativa.pontos).forEach(([chave, valor]) => {
    pontos[chave] = (pontos[chave] || 0) + valor;
  });

  const consequencia = alternativa.consequencias[Math.floor(Math.random() * alternativa.consequencias.length)];
  historico.push({
    capitulo: perguntas[indice].capitulo,
    escolha: alternativa.texto,
    consequencia
  });

  $("consequence-title").textContent = consequencia.startsWith("Você") ? "Sua decisão mudou o rumo." : "O mundo reage à sua escolha.";
  $("consequence-main").textContent = consequencia;
  $("consequence-detail").textContent = alternativa.consequencias.find(frase => frase !== consequencia) || "Essa decisão também influenciará o equilíbrio entre inovação, segurança e autonomia.";
  $("consequence-step").textContent = `DECISÃO ${String(indice + 1).padStart(2,"0")} DE ${String(perguntas.length).padStart(2,"0")}`;
  $("continue").textContent = indice === perguntas.length - 1 ? "Ver meu desfecho →" : "Continuar →";
  $("continue").innerHTML = indice === perguntas.length - 1 ? 'Ver meu desfecho <span aria-hidden="true">↗</span>' : 'Continuar <span aria-hidden="true">→</span>';
  mostrarTela(telas.consequence);
}

function continuarHistoria() {
  indice += 1;
  escolhaPendente = null;
  if (indice < perguntas.length) {
    mostrarTela(telas.game);
    mostrarPergunta();
  } else {
    finalizar();
  }
}

function calcularDesfecho() {
  const { confianca, progresso, seguranca, autonomia, dependencia } = pontos;
  if (dependencia >= 4) {
    return ["Um futuro dependente", "A humanidade conquistou conforto e velocidade, mas entregou decisões demais à tecnologia. O desafio agora é recuperar autonomia e aprender a usar a IA sem depender completamente dela."];
  }
  if (seguranca >= 5 && autonomia >= 3) {
    return ["Progresso com responsabilidade", "A inovação continuou acompanhada de limites, transparência e participação humana. O futuro não ficou livre de riscos, mas a sociedade criou ferramentas para enfrentá-los."];
  }
  if (confianca >= 4 && autonomia >= 3) {
    return ["Uma parceria possível", "Humanidade e IA encontraram um caminho de cooperação. Pessoas continuam participando das decisões, enquanto a tecnologia amplia capacidades e abre novas possibilidades."];
  }
  if (progresso >= 4) {
    return ["Um salto no desconhecido", "A busca por inovação transformou o mundo rapidamente. Novas oportunidades surgiram, mas a sociedade ainda precisa acompanhar as consequências desse avanço."];
  }
  return ["O futuro em construção", "A humanidade escolheu avançar com cautela. O caminho é mais lento, mas mantém espaço para reflexão, participação e novas decisões."];
}

function mensagemDeImpacto() {
  const maiorDependencia = pontos.dependencia >= 4;
  const segurancaAlta = pontos.seguranca >= 5;
  const autonomiaAlta = pontos.autonomia >= 5;
  if (maiorDependencia) return "A eficiência trouxe benefícios, mas delegar decisões demais pode enfraquecer a autonomia. O desafio é aproveitar a tecnologia sem abrir mão da capacidade humana de questionar e escolher.";
  if (segurancaAlta && autonomiaAlta) return "Seu caminho mostra que inovação e responsabilidade podem caminhar juntas. Regras claras, transparência e participação ajudam a transformar tecnologia em benefício coletivo.";
  if (autonomiaAlta) return "Você valorizou a participação humana. Sistemas inteligentes podem apoiar decisões, mas as pessoas afetadas precisam ter voz, informação e poder de escolha.";
  return "O futuro da inteligência artificial não depende apenas do que a tecnologia consegue fazer. Depende também dos objetivos, limites e responsabilidades definidos pelas pessoas.";
}

function desenharPontuacao() {
  const area = $("score-list");
  area.replaceChildren();
  dimensoes.forEach(dimensao => {
    const valor = pontos[dimensao.chave] || 0;
    const maximo = dimensao.chave === "dependencia" ? 6 : 8;
    const percentual = Math.max(0, Math.min(100, (valor / maximo) * 100));
    const item = document.createElement("div");
    item.className = "score-item";
    const titulo = document.createElement("div");
    titulo.className = "score-title";
    const nome = document.createElement("span");
    nome.textContent = dimensao.nome;
    const numero = document.createElement("span");
    numero.textContent = `${valor} pts`;
    titulo.append(nome, numero);
    const trilho = document.createElement("div");
    trilho.className = "score-track";
    const barra = document.createElement("span");
    barra.style.width = `${percentual}%`;
    barra.setAttribute("aria-label", `${dimensao.nome}: ${valor} pontos`);
    trilho.append(barra);
    const descricao = document.createElement("small");
    descricao.textContent = dimensao.descricao;
    descricao.style.cssText = "font-size:8px;color:#8290a7";
    item.append(titulo, trilho, descricao);
    area.append(item);
  });
}

function desenharHistorico() {
  const area = $("log");
  area.replaceChildren();
  historico.forEach((registro, posicao) => {
    const item = document.createElement("div");
    item.className = "history-entry";
    const numero = document.createElement("span");
    numero.className = "history-number";
    numero.textContent = String(posicao + 1).padStart(2,"0");
    const texto = document.createElement("p");
    const titulo = document.createElement("strong");
    titulo.textContent = `${registro.capitulo} · ${registro.escolha}`;
    const consequencia = document.createElement("span");
    consequencia.textContent = registro.consequencia;
    texto.append(titulo, consequencia);
    item.append(numero, texto);
    area.append(item);
  });
}

function finalizar() {
  $("progress").style.width = "100%";
  $("progress-label").textContent = `${String(perguntas.length).padStart(2,"0")} / ${String(perguntas.length).padStart(2,"0")}`;
  $("progress-track").setAttribute("aria-valuenow", String(perguntas.length));
  const [titulo, descricao] = calcularDesfecho();
  $("ending-title").textContent = titulo;
  $("ending-text").textContent = descricao;
  $("summary").textContent = `Você chegou ao fim de uma história construída por ${perguntas.length} decisões. Cada escolha ajudou a definir como a humanidade se relaciona com Íris.`;
  $("impact-message").textContent = mensagemDeImpacto();
  $("log-count").textContent = `${historico.length} / ${perguntas.length} REGISTROS`;
  desenharPontuacao();
  desenharHistorico();
  mostrarTela(telas.result);
}

function textoResultado() {
  const linhas = [
    "O FUTURO É SEU",
    $("ending-title").textContent,
    $("ending-text").textContent,
    "",
    "REFLEXÃO",
    $("impact-message").textContent,
    "",
    "REGISTRO DAS ESCOLHAS",
    ...historico.map((registro, i) => `${i + 1}. ${registro.capitulo}: ${registro.escolha}\n${registro.consequencia}`)
  ];
  return linhas.join("\n");
}

async function compartilharResultado() {
  const texto = textoResultado();
  try {
    if (navigator.share) {
      await navigator.share({ title:"O Futuro é Seu", text });
      $("feedback").textContent = "Resultado pronto para compartilhar.";
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
      $("feedback").textContent = "Resultado copiado para a área de transferência.";
    } else {
      throw new Error("Compartilhamento indisponível");
    }
  } catch (erro) {
    if (erro.name !== "AbortError") $("feedback").textContent = "Não foi possível compartilhar automaticamente neste navegador.";
  }
}

$("start").addEventListener("click", iniciar);
$("restart").addEventListener("click", iniciar);
$("continue").addEventListener("click", continuarHistoria);
$("copy").addEventListener("click", compartilharResultado);
