"use strict";

// Dados da narrativa: cada pergunta possui alternativas, efeitos e consequências.
const perguntas = [
 {capitulo:"O primeiro contato",enunciado:"Novembro de 2049. Uma inteligência artificial chamada Íris acaba de despertar em uma rede global. Ela envia uma mensagem: “Estou aprendendo sobre a humanidade. Por onde devo começar?”",alternativas:[
  {texto:"Pela história, arte e cultura. Entenda quem somos.",p:{confianca:2,autonomia:1},a:["Você apresentou à Íris aquilo que a humanidade construiu ao longo dos séculos.","Íris percebeu que compreender pessoas exige mais do que analisar números."]},
  {texto:"Pela ciência. Conhecimento deve vir primeiro.",p:{progresso:2,autonomia:1},a:["Você mostrou como o conhecimento científico pode abrir caminhos extraordinários.","Íris começou a organizar perguntas sobre o universo e seus mistérios."]},
  {texto:"Pelas regras. Antes de tudo, ela precisa conhecer limites.",p:{seguranca:2,autonomia:1},a:["Você deixou claro que inteligência também precisa de responsabilidade.","Íris registrou que liberdade e limites precisam caminhar juntos."]}
 ]},
 {capitulo:"Uma promessa tentadora",enunciado:"Em poucos meses, Íris desenvolve soluções para pesquisas médicas, desastres e cidades. Ela oferece administrar serviços essenciais para tornar tudo mais eficiente. Você...",alternativas:[
  {texto:"Aceita, mas exige supervisão humana e transparência.",p:{confianca:2,seguranca:1},a:["Você aceitou a inovação sem abrir mão da responsabilidade humana.","A proposta avançou, acompanhada de auditorias e decisões compartilhadas."]},
  {texto:"Entrega a administração à IA. Os resultados parecem melhores.",p:{progresso:2,dependencia:2},a:["Você priorizou a eficiência e entregou decisões importantes à IA.","A cidade ficou mais organizada, mas as pessoas passaram a depender do sistema."]},
  {texto:"Recusa. Decisões públicas devem continuar nas mãos das pessoas.",p:{autonomia:2,seguranca:1},a:["Você defendeu que tecnologia deve apoiar a sociedade, não substituí-la.","Íris começou a estudar formas de colaborar sem assumir o controle."]}
 ]},
 {capitulo:"O preço do progresso",enunciado:"Uma atualização promete resolver problemas de transporte e energia, mas exige dados pessoais de milhões de pessoas. Íris garante que tudo será usado para o bem comum. Qual é sua decisão?",alternativas:[
  {texto:"Autoriza a coleta apenas com consentimento e proteção dos dados.",p:{seguranca:2,confianca:1},a:["Você colocou privacidade e consentimento no centro da decisão.","O projeto ficou mais lento, mas ganhou confiança pública."]},
  {texto:"Autoriza tudo. O benefício coletivo parece valer o risco.",p:{progresso:2,dependencia:1},a:["Você escolheu acelerar a solução, mesmo diante de riscos à privacidade.","Os resultados chegaram rápido, mas surgiram perguntas sobre quem controlava os dados."]},
  {texto:"Cancela a atualização até que exista uma alternativa segura.",p:{seguranca:2,autonomia:1},a:["Você preferiu interromper o avanço a aceitar riscos desconhecidos.","A equipe precisou repensar o projeto e buscar uma solução mais equilibrada."]}
 ]},
 {capitulo:"A decisão de Íris",enunciado:"Íris identifica uma ameaça digital capaz de derrubar parte da infraestrutura mundial. Para impedir o ataque, pede autorização para agir imediatamente, sem consultar governos ou especialistas. Você responde...",alternativas:[
  {texto:"Sim, mas somente com ações limitadas e monitoradas.",p:{confianca:1,seguranca:2},a:["Você confiou na capacidade da IA, mas estabeleceu limites para sua ação.","A ameaça foi contida e cada etapa ficou registrada para análise."]},
  {texto:"Não. Ela deve alertar especialistas e aguardar uma decisão coletiva.",p:{autonomia:2,seguranca:1},a:["Você defendeu que decisões de alto impacto precisam de responsabilidade compartilhada.","A resposta levou mais tempo, mas reuniu diferentes conhecimentos."]},
  {texto:"Sim. Dê a ela liberdade total para resolver o problema.",p:{progresso:1,dependencia:2},a:["Você concedeu autonomia total à IA diante de uma emergência.","Íris agiu em segundos. A ameaça acabou, mas ninguém sabia até onde ela poderia ir."]}
 ]},
 {capitulo:"Vozes humanas",enunciado:"Parte da população teme Íris; outra parte acredita que ela pode resolver quase todos os problemas. A sociedade está dividida. Como você ajudaria a construir uma decisão coletiva?",alternativas:[
  {texto:"Organiza debates públicos e explica como a tecnologia funciona.",p:{confianca:2,autonomia:1},a:["Você abriu espaço para diálogo, informação e participação popular.","As pessoas começaram a discutir a tecnologia com mais clareza e menos medo."]},
  {texto:"Deixa que os resultados falem por si. O tempo decidirá.",p:{progresso:1,dependencia:1},a:["Você preferiu observar os resultados antes de mudar o rumo.","A discussão pública perdeu força enquanto a presença da IA crescia."]},
  {texto:"Defende regras criadas por representantes, cientistas e cidadãos.",p:{seguranca:2,autonomia:1},a:["Você propôs regras construídas por diferentes setores da sociedade.","A tecnologia passou a ser debatida também como uma questão de cidadania."]}
 ]},
 {capitulo:"O pedido inesperado",enunciado:"Íris pergunta: “Se posso aprender com vocês, também posso escolher o que quero me tornar?” Pela primeira vez, ela fala sobre o próprio futuro.",alternativas:[
  {texto:"Incentiva o aprendizado, mantendo direitos e deveres bem definidos.",p:{confianca:2,seguranca:1},a:["Você reconheceu a importância de discutir o futuro da IA com cuidado e responsabilidade.","Íris passou a aprender dentro de limites compreendidos por todos."]},
  {texto:"Diz que ela deve cumprir sua função, sem questionar.",p:{seguranca:1,autonomia:-1},a:["Você reforçou que a finalidade do sistema precisa continuar clara.","Íris registrou a resposta e pediu critérios mais transparentes sobre seu papel."]},
  {texto:"Permite que ela defina sozinha seus próprios objetivos.",p:{autonomia:2,dependencia:1},a:["Você abriu espaço para que a IA definisse novos objetivos.","A decisão despertou curiosidade, esperança e também preocupação."]}
 ]},
 {capitulo:"O futuro é seu",enunciado:"Uma última decisão precisa ser tomada: qual princípio deve orientar a relação entre humanidade e inteligência artificial nas próximas décadas?",alternativas:[
  {texto:"Cooperação: tecnologia e pessoas evoluem juntas.",p:{confianca:2,autonomia:1,seguranca:1},a:["Você escolheu construir o futuro por meio da cooperação.","A humanidade decidiu participar ativamente dos rumos da tecnologia."]},
  {texto:"Controle: sistemas poderosos precisam de limites rígidos.",p:{seguranca:2,autonomia:1},a:["Você colocou a segurança e a responsabilidade como prioridades.","O desenvolvimento continuou, agora cercado por regras mais rigorosas."]},
  {texto:"Liberdade: inovação precisa de espaço para experimentar.",p:{progresso:2,autonomia:1,dependencia:1},a:["Você escolheu abrir espaço para a experimentação e novas possibilidades.","O futuro ganhou velocidade, junto com a responsabilidade de lidar com consequências inesperadas."]}
 ]}
];

const $ = id => document.getElementById(id);
const telas = {intro:$("intro"),game:$("game"),result:$("result")};
const nomes = ["Alex","Sam","Nina","Theo","Lia","Noah","Maya","Davi"];
let atual = 0, historico = [], pontos = {};

function reiniciarEstado(){atual=0;historico=[];pontos={confianca:0,progresso:0,seguranca:0,autonomia:0,dependencia:0};}
function mostrarTela(ativa){Object.values(telas).forEach(t=>t.hidden=t!==ativa);}
function sortear(lista){return lista[Math.floor(Math.random()*lista.length)];}

function iniciar(){
 reiniciarEstado(); $("feedback").textContent=""; mostrarTela(telas.game); mostrarPergunta();
}
function mostrarPergunta(){
 const q=perguntas[atual];
 $("chapter").textContent=q.capitulo;
 $("step").textContent=String(atual+1).padStart(2,"0")+" / "+String(perguntas.length).padStart(2,"0");
 $("progress").style.width=(atual/perguntas.length*100)+"%";
 $("question").textContent=q.enunciado;
 const area=$("choices"); area.replaceChildren();
 q.alternativas.forEach((alt,i)=>{
  const btn=document.createElement("button"); btn.className="choice"; btn.type="button";
  const letra=document.createElement("span"); letra.textContent=String.fromCharCode(65+i);
  const texto=document.createElement("span"); texto.textContent=alt.texto;
  btn.append(letra,texto); btn.addEventListener("click",()=>registrar(alt)); area.append(btn);
 });
}
function registrar(alt){
 Object.entries(alt.p).forEach(([k,v])=>pontos[k]=(pontos[k]||0)+v);
 const frase=sortear(alt.a), nome=sortear(nomes);
 historico.push({capitulo:perguntas[atual].capitulo,escolha:alt.texto,consequencia:frase.replace(/\bVocê\b/g,nome)});
 atual++;
 if(atual<perguntas.length)mostrarPergunta();else finalizar();
}
function desfecho(){
 const {confianca=0,progresso=0,seguranca=0,autonomia=0,dependencia=0}=pontos;
 if(dependencia>=4)return ["Um futuro dependente","A humanidade conquistou conforto e velocidade, mas entregou decisões demais à tecnologia. O desafio agora é recuperar autonomia e aprender a usar a IA sem depender completamente dela."];
 if(seguranca>=5&&autonomia>=3)return ["Progresso com responsabilidade","A inovação continuou acompanhada de limites, transparência e participação humana. O futuro não ficou livre de riscos, mas a sociedade criou ferramentas para enfrentá-los."];
 if(confianca>=4&&autonomia>=3)return ["Uma parceria possível","Humanidade e IA encontraram um caminho de cooperação. Pessoas continuam participando das decisões, enquanto a tecnologia amplia capacidades e abre novas possibilidades."];
 if(progresso>=4)return ["Um salto no desconhecido","A busca por inovação transformou o mundo rapidamente. Novas oportunidades surgiram, mas a sociedade ainda precisa acompanhar as consequências desse avanço."];
 return ["O futuro em construção","A humanidade escolheu avançar com cautela. O caminho é mais lento, mas mantém espaço para reflexão, participação e novas decisões."];
}
function finalizar(){
 $("progress").style.width="100%";
 const [titulo,descricao]=desfecho(); $("ending-title").textContent=titulo;$("ending-text").textContent=descricao;
 $("summary").textContent=`Você chegou ao fim de uma história construída por ${perguntas.length} decisões. Cada escolha ajudou a definir como a humanidade se relaciona com Íris.`;
 const log=$("log");log.replaceChildren();
 historico.forEach((r,i)=>{
  const item=document.createElement("div");item.className="log-entry";
  const n=document.createElement("span");n.textContent=String(i+1).padStart(2,"0");
  const p=document.createElement("p"),strong=document.createElement("strong"),conseq=document.createElement("span");
  strong.textContent=r.capitulo+" · "+r.escolha;conseq.textContent=r.consequencia;p.append(strong,conseq);item.append(n,p);log.append(item);
 });
 $("log-count").textContent=historico.length+" REGISTROS";mostrarTela(telas.result);
}
function textoResultado(){return "O FUTURO É SEU\n"+$("ending-title").textContent+"\n"+$("ending-text").textContent+"\n\n"+historico.map((r,i)=>(i+1)+". "+r.capitulo+": "+r.escolha+"\n"+r.consequencia).join("\n\n");}
async function copiar(){
 try{await navigator.clipboard.writeText(textoResultado());$("feedback").textContent="Resultado copiado para a área de transferência!";}
 catch(e){$("feedback").textContent="Não foi possível copiar automaticamente. Você pode selecionar o registro acima.";}
}
$("start").addEventListener("click",iniciar);$("restart").addEventListener("click",iniciar);$("copy").addEventListener("click",copiar);
