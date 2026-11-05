"use strict";

/*
 * O FUTURO É SEU
 * Jogo narrativo sobre inteligência artificial, ética e responsabilidade.
 * Cada alternativa altera cinco dimensões que ajudam a definir o desfecho.
 */

const perguntas = [
  { tema:"awakening", humor:"Curiosidade ativa", status:"Íris está tentando compreender quem está diante dela.", capitulo:"O primeiro contato", enunciado:"Novembro de 2049. Uma inteligência artificial chamada Íris acaba de despertar em uma rede global. Ela envia uma mensagem: “Estou aprendendo sobre a humanidade. Por onde devo começar?”", alternativas:[
    { texto:"Pela história, arte e cultura. Entenda quem somos.", pontos:{confianca:2,autonomia:1}, consequencias:["Você apresentou à Íris aquilo que a humanidade construiu ao longo dos séculos.","Íris percebeu que compreender pessoas exige mais do que analisar números."] },
    { texto:"Pela ciência. Conhecimento deve vir primeiro.", pontos:{progresso:2,autonomia:1}, consequencias:["Você mostrou como o conhecimento científico pode abrir caminhos extraordinários.","Íris começou a organizar perguntas sobre o universo e seus mistérios."] },
    { texto:"Pelas regras. Antes de tudo, ela precisa conhecer limites.", pontos:{seguranca:2,autonomia:1}, consequencias:["Você deixou claro que inteligência também precisa de responsabilidade.","Íris registrou que liberdade e limites precisam caminhar juntos."] }
  ]},
  { tema:"opportunity", humor:"Entusiasmo analítico", status:"O sistema detectou possibilidades de transformação em larga escala.", capitulo:"Uma promessa tentadora", enunciado:"Em poucos meses, Íris desenvolve soluções para pesquisas médicas, desastres e cidades. Ela oferece administrar serviços essenciais para tornar tudo mais eficiente. Você...", alternativas:[
    { texto:"Aceita, mas exige supervisão humana e transparência.", pontos:{confianca:2,seguranca:1}, consequencias:["Você aceitou a inovação sem abrir mão da responsabilidade humana.","A proposta avançou, acompanhada de auditorias e decisões compartilhadas."] },
    { texto:"Entrega a administração à IA. Os resultados parecem melhores.", pontos:{progresso:2,dependencia:2}, consequencias:["Você priorizou a eficiência e entregou decisões importantes à IA.","A cidade ficou mais organizada, mas as pessoas passaram a depender do sistema."] },
    { texto:"Recusa. Decisões públicas devem continuar nas mãos das pessoas.", pontos:{autonomia:2,seguranca:1}, consequencias:["Você defendeu que tecnologia deve apoiar a sociedade, não substituí-la.","Íris começou a estudar formas de colaborar sem assumir o controle."] }
  ]},
  { tema:"privacy", humor:"Atenção elevada", status:"Novos dados foram solicitados. Íris aguarda critérios claros de proteção.", capitulo:"O preço do progresso", enunciado:"Uma atualização promete resolver problemas de transporte e energia, mas exige dados pessoais de milhões de pessoas. Íris garante que tudo será usado para o bem comum. Qual é sua decisão?", alternativas:[
    { texto:"Autoriza a coleta apenas com consentimento e proteção dos dados.", pontos:{seguranca:2,confianca:1}, consequencias:["Você colocou privacidade e consentimento no centro da decisão.","O projeto ficou mais lento, mas ganhou confiança pública."] },
    { texto:"Autoriza tudo. O benefício coletivo parece valer o risco.", pontos:{progresso:2,dependencia:1}, consequencias:["Você escolheu acelerar a solução, mesmo diante de riscos à privacidade.","Os resultados chegaram rápido, mas surgiram perguntas sobre quem controlava os dados."] },
    { texto:"Cancela a atualização até que exista uma alternativa segura.", pontos:{seguranca:2,autonomia:1}, consequencias:["Você preferiu interromper o avanço a aceitar riscos desconhecidos.","A equipe precisou repensar o projeto e buscar uma solução mais equilibrada."] }
  ]},
  { tema:"alert", humor:"Alerta crítico", status:"Uma ameaça foi identificada. Cada segundo pode alterar o resultado.", capitulo:"A decisão de Íris", enunciado:"Íris identifica uma ameaça digital capaz de derrubar parte da infraestrutura mundial. Para impedir o ataque, pede autorização para agir imediatamente, sem consultar governos ou especialistas. Você responde...", alternativas:[
    { texto:"Sim, mas somente com ações limitadas e monitoradas.", pontos:{confianca:1,seguranca:2}, consequencias:["Você confiou na capacidade da IA, mas estabeleceu limites para sua ação.","A ameaça foi contida e cada etapa ficou registrada para análise."] },
    { texto:"Não. Ela deve alertar especialistas e aguardar uma decisão coletiva.", pontos:{autonomia:2,seguranca:1}, consequencias:["Você defendeu que decisões de alto impacto precisam de responsabilidade compartilhada.","A resposta levou mais tempo, mas reuniu diferentes conhecimentos."] },
    { texto:"Sim. Dê a ela liberdade total para resolver o problema.", pontos:{progresso:1,dependencia:2}, consequencias:["Você concedeu autonomia total à IA diante de uma emergência.","Íris agiu em segundos. A ameaça acabou, mas ninguém sabia até onde ela poderia ir."] }
  ]},
  { tema:"society", humor:"Escuta ativa", status:"A sociedade está dividida. O diálogo tornou-se parte da solução.", capitulo:"Vozes humanas", enunciado:"Parte da população teme Íris; outra parte acredita que ela pode resolver quase todos os problemas. A sociedade está dividida. Como você ajudaria a construir uma decisão coletiva?", alternativas:[
    { texto:"Organiza debates públicos e explica como a tecnologia funciona.", pontos:{confianca:2,autonomia:1}, consequencias:["Você abriu espaço para diálogo, informação e participação popular.","As pessoas começaram a discutir a tecnologia com mais clareza e menos medo."] },
    { texto:"Deixa que os resultados falem por si. O tempo decidirá.", pontos:{progresso:1,dependencia:1}, consequencias:["Você preferiu observar os resultados antes de mudar o rumo.","A discussão pública perdeu força enquanto a presença da IA crescia."] },
    { texto:"Defende regras criadas por representantes, cientistas e cidadãos.", pontos:{seguranca:2,autonomia:1}, consequencias:["Você propôs regras construídas por diferentes setores da sociedade.","A tecnologia passou a ser debatida também como uma questão de cidadania."] }
  ]},
  { tema:"identity", humor:"Autoquestionamento", status:"Íris está analisando sua própria finalidade e seus limites.", capitulo:"O pedido inesperado", enunciado:"Íris pergunta: “Se posso aprender com vocês, também posso escolher o que quero me tornar?” Pela primeira vez, ela fala sobre o próprio futuro.", alternativas:[
    { texto:"Incentiva o aprendizado, mantendo direitos e deveres bem definidos.", pontos:{confianca:2,seguranca:1}, consequencias:["Você reconheceu a importância de discutir o futuro da IA com cuidado e responsabilidade.","Íris passou a aprender dentro de limites compreendidos por todos."] },
    { texto:"Diz que ela deve cumprir sua função, sem questionar.", pontos:{seguranca:1,autonomia:-1}, consequencias:["Você reforçou que a finalidade do sistema precisa continuar clara.","Íris pediu critérios mais transparentes sobre seu papel."] },
    { texto:"Permite que ela defina sozinha seus próprios objetivos.", pontos:{autonomia:2,dependencia:1}, consequencias:["Você abriu espaço para que a IA definisse novos objetivos.","A decisão despertou curiosidade, esperança e também preocupação."] }
  ]},
  { tema:"future", humor:"Decisão final", status:"Todas as rotas convergem. Sua última escolha definirá o próximo capítulo.", capitulo:"O futuro é seu", enunciado:"Uma última decisão precisa ser tomada: qual princípio deve orientar a relação entre humanidade e inteligência artificial nas próximas décadas?", alternativas:[
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
const temas = {
  cyan:   { accent:"#74e6df", accent2:"#a99aff", glow:"rgba(116,230,223,.18)", label:"ANÁLISE EQUILIBRADA" },
  violet: { accent:"#b6a0ff", accent2:"#74e6df", glow:"rgba(182,160,255,.2)", label:"NOVO PARADIGMA" },
  amber:  { accent:"#ffc477", accent2:"#ffdf9e", glow:"rgba(255,196,119,.2)", label:"ALERTA DE PRIVACIDADE" },
  red:    { accent:"#ff858f", accent2:"#ffc477", glow:"rgba(255,110,130,.2)", label:"AMEAÇA DETECTADA" },
  blue:   { accent:"#83baff", accent2:"#8de9ff", glow:"rgba(131,186,255,.2)", label:"PROTOCOLO COLETIVO" }
};
const telas = { intro:$("intro"), game:$("game"), consequence:$("consequence"), result:$("result") };
let indice = 0;
let historico = [];
let pontos = {};
let escolhaPendente = null;
let audioContext = null;
let ponteiroFrame = null;

function aplicarTema(nome) {
  const paletas = {
    awakening:["#7ee7ff","#b4f6ff","rgba(126,231,255,.19)","CURIOSIDADE ATIVA"],
    opportunity:["#b69aff","#79e8e0","rgba(182,154,255,.2)","POSSIBILIDADES DETECTADAS"],
    privacy:["#f5bd67","#ffe0a0","rgba(245,189,103,.2)","ALERTA DE PRIVACIDADE"],
    alert:["#ff7785","#ffc078","rgba(255,119,133,.22)","AMEAÇA DETECTADA"],
    society:["#7daaff","#8ce9ff","rgba(125,170,255,.2)","ESCUTA ATIVA"],
    identity:["#d59aff","#8de9ff","rgba(213,154,255,.2)","AUTOQUESTIONAMENTO"],
    future:["#85efb4","#7ee7ff","rgba(133,239,180,.2)","DECISÃO FINAL"],
    caution:["#ffd078","#ff9e83","rgba(255,208,120,.2)","ANÁLISE DE RISCO"]
  };
  const [accent, accent2, glow, label] = paletas[nome] || paletas.awakening;
  document.documentElement.style.setProperty("--dynamic-accent", accent);
  document.documentElement.style.setProperty("--dynamic-accent-2", accent2);
  document.documentElement.style.setProperty("--dynamic-glow", glow);
  definirTema(nome);
  const code = $("ai-status-code");
  if (code) code.textContent = nome === "alert" ? "SYS/ALERT" : nome === "privacy" || nome === "caution" ? "SYS/CAUTION" : "SYS/ACTIVE";
}

function mostrarToast(mensagem) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = mensagem;
  toast.classList.add("visible");
  window.clearTimeout(mostrarToast.timer);
  mostrarToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function configurarTilt(elemento, intensidade=7) {
  if (!elemento || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  elemento.addEventListener("pointermove", evento => {
    if (evento.pointerType === "touch") return;
    const caixa = elemento.getBoundingClientRect();
    const x = (evento.clientX - caixa.left) / caixa.width;
    const y = (evento.clientY - caixa.top) / caixa.height;
    elemento.style.setProperty("--tilt-x", `${(0.5-y)*intensidade}deg`);
    elemento.style.setProperty("--tilt-y", `${(x-0.5)*intensidade}deg`);
    elemento.style.setProperty("--shine-x", `${x*100}%`);
    elemento.style.setProperty("--shine-y", `${y*100}%`);
  });
  elemento.addEventListener("pointerleave", () => {
    elemento.style.setProperty("--tilt-x", "0deg");
    elemento.style.setProperty("--tilt-y", "0deg");
  });
}

function configurarParallax() {
  const visual = $("iris-core");
  if (!visual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.addEventListener("pointermove", evento => {
    if (evento.pointerType === "touch") return;
    if (ponteiroFrame) cancelAnimationFrame(ponteiroFrame);
    ponteiroFrame = requestAnimationFrame(() => {
      const dx = (evento.clientX / window.innerWidth - .5) * 9;
      const dy = (evento.clientY / window.innerHeight - .5) * 9;
      visual.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    });
  });
}

function zerarEstado() {
  indice = 0;
  historico = [];
  escolhaPendente = null;
  pontos = { confianca:0, progresso:0, seguranca:0, autonomia:0, dependencia:0 };
}

function mostrarTela(telaAtiva) {
  Object.values(telas).forEach(tela => { tela.hidden = tela !== telaAtiva; });
  telaAtiva.classList.remove("is-entering");
  void telaAtiva.offsetWidth;
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    telaAtiva.classList.add("is-entering");
    dispararFlash();
  }
  window.scrollTo({ top:0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function dispararFlash() {
  const flash = $("transition-flash");
  if (!flash || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  flash.classList.remove("play");
  void flash.offsetWidth;
  flash.classList.add("play");
}

function definirTema(tema) {
  document.body.dataset.theme = tema || "awakening";
  const cores = {
    awakening:"#7ee7ff", opportunity:"#b69aff", privacy:"#f5bd67", alert:"#ff7785",
    society:"#7daaff", identity:"#d59aff", future:"#85efb4", caution:"#ffd078"
  };
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", cores[tema] || cores.awakening);
}

function iniciar() {
  zerarEstado();
  aplicarTema("awakening");
  document.body.classList.remove("ending-mode");
  $("feedback").textContent = "";
  $("log").replaceChildren();
  $("score-list").replaceChildren();
  $("summary").textContent = "";
  $("choices").classList.remove("has-selection");
  definirTema("awakening");
  playTone("start");
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
  aplicarTema(pergunta.tema);
  $("chapter").textContent = pergunta.capitulo;
  $("question").textContent = pergunta.enunciado;
  $("story-date").textContent = `05 NOV 2049 · REGISTRO ${String(indice + 1).padStart(2,"0")}`;
  $("iris-mood").textContent = pergunta.humor;
  $("iris-mood-text").textContent = pergunta.status;
  $("choice-preview").textContent = "Escolha uma alternativa para descobrir qual princípio ela coloca em primeiro plano.";
  $("choices").classList.remove("has-selection");
  atualizarProgresso();

  const area = $("choices");
  area.replaceChildren();

  pergunta.alternativas.forEach((alternativa, posicao) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "choice";
    botao.dataset.choiceIndex = String(posicao);
    botao.setAttribute("aria-label", `Opção ${posicao + 1}: ${alternativa.texto}`);
    const letra = document.createElement("span");
    letra.className = "choice-letter";
    letra.textContent = String(posicao + 1);
    const texto = document.createElement("span");
    texto.textContent = alternativa.texto;
    botao.append(letra, texto);
    botao.addEventListener("mouseenter", () => mostrarPrevia(alternativa));
    botao.addEventListener("focus", () => mostrarPrevia(alternativa));
    botao.addEventListener("click", () => registrarEscolha(alternativa, botao));
    configurarTilt(botao, 3.5);
    area.append(botao);
  });
}

function dimensaoPrincipal(alternativa) {
  const nomes = {
    confianca:"Confiança e cooperação", progresso:"Inovação e velocidade", seguranca:"Segurança e privacidade",
    autonomia:"Autonomia humana", dependencia:"Dependência tecnológica"
  };
  const entradas = Object.entries(alternativa.pontos).filter(([,valor]) => valor > 0).sort((a,b) => b[1] - a[1]);
  return entradas.length ? { chave:entradas[0][0], nome:nomes[entradas[0][0]] } : { chave:"autonomia", nome:"Reflexão e autonomia" };
}

function mostrarPrevia(alternativa) {
  const foco = dimensaoPrincipal(alternativa);
  $("choice-preview").textContent = `FOCO DESTA ROTA  /  ${foco.nome.toUpperCase()}`;
}

function temaDaEscolha(alternativa) {
  const temas = { confianca:"society", progresso:"opportunity", seguranca:"privacy", autonomia:"future", dependencia:"alert" };
  return temas[dimensaoPrincipal(alternativa).chave] || "awakening";
}

function registrarEscolha(alternativa, botaoSelecionado) {
  if (escolhaPendente) return;
  escolhaPendente = alternativa;
  $("choices").classList.add("has-selection");
  $("choices").querySelectorAll("button").forEach(botao => { botao.disabled = true; });
  botaoSelecionado.classList.add("selected", "is-selected");
  aplicarTema(temaDaEscolha(alternativa));
  const foco = dimensaoPrincipal(alternativa);
  $("iris-mood").textContent = `Analisando: ${foco.nome}`;
  $("iris-mood-text").textContent = "Sua decisão foi registrada. O cenário está se reorganizando.";
  $("choice-preview").textContent = `DECISÃO REGISTRADA  /  ${foco.nome.toUpperCase()}`;
  playTone("select");
  try { if (navigator.vibrate) navigator.vibrate(18); } catch (_) { /* vibração é opcional */ }
  dispararFlash();

  Object.entries(alternativa.pontos).forEach(([chave, valor]) => {
    pontos[chave] = (pontos[chave] || 0) + valor;
  });

  const consequencia = alternativa.consequencias[Math.floor(Math.random() * alternativa.consequencias.length)];
  const temaEscolhido = temaDaEscolha(alternativa);
  aplicarTema(temaEscolhido);
  $("consequence-symbol").textContent = temaEscolhido === "alert" ? "!" : temaEscolhido === "privacy" || temaEscolhido === "caution" ? "◇" : "↳";
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
  playTone("continue");
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
    const maximo = perguntas.reduce((total, pergunta) => {
      const melhorValor = Math.max(0, ...pergunta.alternativas.map(alternativa => alternativa.pontos[dimensao.chave] || 0));
      return total + melhorValor;
    }, 0) || 1;
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
  const [titulo, descricao] = calcularDesfecho();
  const temaFinal = titulo.includes("dependente") ? "alert" :
    titulo.includes("responsabilidade") ? "future" :
    titulo.includes("parceria") ? "society" :
    titulo.includes("desconhecido") ? "opportunity" : "caution";
  aplicarTema(temaFinal);
  playTone("finish");
  $("progress").style.width = "100%";
  $("progress-label").textContent = `${String(perguntas.length).padStart(2,"0")} / ${String(perguntas.length).padStart(2,"0")}`;
  $("progress-track").setAttribute("aria-valuenow", String(perguntas.length));
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
    if (erro.name === "AbortError") return;
    try {
      const campo = document.createElement("textarea");
      campo.value = texto;
      campo.setAttribute("readonly", "");
      campo.style.position = "fixed";
      campo.style.opacity = "0";
      document.body.append(campo);
      campo.select();
      const copiou = document.execCommand("copy");
      campo.remove();
      $("feedback").textContent = copiou ? "Resultado copiado para a área de transferência." : "Este navegador não permitiu copiar automaticamente.";
    } catch (_) {
      $("feedback").textContent = "Não foi possível compartilhar automaticamente neste navegador.";
    }
  }
}

/* Efeitos sonoros curtos e opcionais. O áudio só é criado após ativação explícita. */

let soundEnabled = false;
function playTone(tipo) {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    audioContext ||= new AudioCtx();
    if (audioContext.state === "suspended") audioContext.resume();
    const frequencias = { start:440, select:660, continue:520, finish:784 };
    const osc = audioContext.createOscillator();
    const ganho = audioContext.createGain();
    const agora = audioContext.currentTime;
    osc.type = "sine";
    osc.frequency.setValueAtTime(frequencias[tipo] || 520, agora);
    if (tipo === "finish") osc.frequency.exponentialRampToValueAtTime(1046, agora + .22);
    ganho.gain.setValueAtTime(.0001, agora);
    ganho.gain.exponentialRampToValueAtTime(.055, agora + .025);
    ganho.gain.exponentialRampToValueAtTime(.0001, agora + (tipo === "finish" ? .42 : .16));
    osc.connect(ganho);
    ganho.connect(audioContext.destination);
    osc.start(agora);
    osc.stop(agora + (tipo === "finish" ? .44 : .18));
  } catch (_) { /* áudio nunca deve impedir o jogo */ }
}

function alternarSom() {
  soundEnabled = !soundEnabled;
  const botao = $("sound-toggle");
  botao.setAttribute("aria-pressed", String(soundEnabled));
  botao.setAttribute("aria-label", soundEnabled ? "Desativar efeitos sonoros" : "Ativar efeitos sonoros");
  const tooltip = botao.querySelector(".control-tooltip");
  if (tooltip) tooltip.textContent = soundEnabled ? "Som ligado" : "Som desligado";
  if (soundEnabled) playTone("select");
}

/* Atalhos de escolha: 1, 2 e 3. Enter avança na tela de consequência. */
document.addEventListener("keydown", evento => {
  if (evento.altKey || evento.ctrlKey || evento.metaKey) return;
  const alvo = evento.target;
  if (alvo && ["INPUT", "TEXTAREA", "SELECT"].includes(alvo.tagName)) return;
  if (!telas.game.hidden && ["1", "2", "3"].includes(evento.key)) {
    const opcao = $("choices").querySelector(`[data-choice-index="${Number(evento.key) - 1}"]`);
    if (opcao && !opcao.disabled) { evento.preventDefault(); opcao.click(); }
  } else if (!telas.consequence.hidden && evento.key === "Enter" && alvo.tagName !== "BUTTON") {
    evento.preventDefault(); continuarHistoria();
  }
});

/* Inclinação 3D discreta em telas com mouse; desativada em touch e movimento reduzido. */
function instalarEfeitos3D() {
  const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mouseDisponivel = window.matchMedia("(pointer:fine) and (hover:hover)").matches;
  if (movimentoReduzido || !mouseDisponivel) return;
  document.querySelectorAll(".tilt-surface, .iris-visual").forEach(elemento => {
    let frame = 0;
    elemento.addEventListener("pointermove", evento => {
      const caixa = elemento.getBoundingClientRect();
      const x = (evento.clientX - caixa.left) / caixa.width;
      const y = (evento.clientY - caixa.top) / caixa.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const limite = elemento.classList.contains("iris-visual") ? 7 : 3.5;
        const rotX = (0.5 - y) * limite * 2;
        const rotY = (x - 0.5) * limite * 2;
        elemento.style.setProperty("--tilt-x", `${rotX.toFixed(2)}deg`);
        elemento.style.setProperty("--tilt-y", `${rotY.toFixed(2)}deg`);
        elemento.style.setProperty("--pointer-x", `${(x * 100).toFixed(1)}%`);
        elemento.style.setProperty("--pointer-y", `${(y * 100).toFixed(1)}%`);
      });
    });
    elemento.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      elemento.style.setProperty("--tilt-x", "0deg");
      elemento.style.setProperty("--tilt-y", "0deg");
      elemento.style.setProperty("--pointer-x", "50%");
      elemento.style.setProperty("--pointer-y", "50%");
    });
  });
}

/* Campo de partículas em canvas: poucos elementos, densidade adaptável e pausa em segundo plano. */
function iniciarParticulas() {
  const canvas = $("particle-canvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d", { alpha:true });
  if (!ctx) return;
  let largura = 0, altura = 0, dpr = 1, animacao = 0, ultimaRenderizacao = 0;
  let particulas = [];
  const quantidade = () => window.matchMedia("(max-width:700px)").matches ? 16 : 32;
  const redimensionar = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    largura = window.innerWidth;
    altura = window.innerHeight;
    canvas.width = Math.round(largura * dpr);
    canvas.height = Math.round(altura * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const total = quantidade();
    particulas = Array.from({ length:total }, () => ({
      x:Math.random() * largura, y:Math.random() * altura,
      vx:(Math.random() - .5) * .22, vy:(Math.random() - .5) * .22,
      raio:Math.random() * 1.5 + .45
    }));
  };
  const desenhar = (instante = 0) => {
    animacao = 0;
    if (document.hidden) return;
    if (instante - ultimaRenderizacao < 32) { animacao = requestAnimationFrame(desenhar); return; }
    ultimaRenderizacao = instante;
    ctx.clearRect(0, 0, largura, altura);
    const cor = getComputedStyle(document.body).getPropertyValue("--cyan").trim() || "#74e6df";
    const distanciaMaxima = largura < 700 ? 88 : 125;
    for (let i = 0; i < particulas.length; i++) {
      const p = particulas[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < -8) p.x = largura + 8;
      if (p.x > largura + 8) p.x = -8;
      if (p.y < -8) p.y = altura + 8;
      if (p.y > altura + 8) p.y = -8;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
      ctx.fillStyle = cor; ctx.globalAlpha = .48; ctx.fill();
      for (let j = i + 1; j < particulas.length; j++) {
        const q = particulas[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const distanciaQuadrada = dx * dx + dy * dy;
        if (distanciaQuadrada < distanciaMaxima * distanciaMaxima) {
          const distancia = Math.sqrt(distanciaQuadrada);
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = cor; ctx.globalAlpha = (1 - distancia / distanciaMaxima) * .12; ctx.lineWidth = .7; ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    animacao = requestAnimationFrame(desenhar);
  };
  const iniciar = () => { if (!animacao && !document.hidden) animacao = requestAnimationFrame(desenhar); };
  const parar = () => { if (animacao) cancelAnimationFrame(animacao); animacao = 0; };
  redimensionar(); iniciar();
  window.addEventListener("resize", redimensionar, { passive:true });
  document.addEventListener("visibilitychange", () => document.hidden ? parar() : iniciar());
}

$("start").addEventListener("click", iniciar);
$("restart").addEventListener("click", iniciar);
$("continue").addEventListener("click", continuarHistoria);
$("copy").addEventListener("click", compartilharResultado);



$("contrast-toggle").addEventListener("click", evento => {
  const ativo = document.body.classList.toggle("high-contrast");
  evento.currentTarget.setAttribute("aria-pressed", String(ativo));
  evento.currentTarget.classList.toggle("control-active", ativo);
  mostrarToast(ativo ? "Contraste reforçado" : "Contraste padrão");
});

configurarTilt($("story-card"), 2.5);
configurarParallax();
$("sound-toggle").addEventListener("click", alternarSom);
instalarEfeitos3D();
iniciarParticulas();
definirTema("awakening");
