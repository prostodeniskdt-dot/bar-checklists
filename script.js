// ------------------------- ДАННЫЕ -------------------------
const CHECKLISTS = {
  opening: {
    id: "opening",
    title: "Чек-лист открытия смены",
    subtitle: "Выполни все пункты до начала работы бара.",
    items: [
      "Заполнить журнал здоровья сотрудников",
      "Зайти в рабочую беседу и быть в курсе последних новостей в жизни бара.",
      "Убедиться, что твой внешний вид соответствует всем стандартам.",
      "Открыть смену в iiko",
      // ← скрин обязателен
      "Проверить все позиции бара по наличию и обновить стоп/старт-лист по бару, выложить в группу (скрин поста в группе «Стоп лист Ретей»)",
      "Включить кофемашину и проверить ее на исправность (в случае неисправности сообщить в группу. \"Собрать\" кофемашину, предварительно промыв все мелкие части.",
      "Списать в iiko настройка помола, пролив молока, пролив пива (фото)",
      "Выстваить все необходимые пф в станции (проверить сроки пф; бутылки под воду и прибэтчи, соусники чистые)",
      "Ветошь для натирки и поверхностей лежит в отведённых местах, не разбросанная по бару.",
      "Принесен запас кофе на день (матчи, какао тоже - заполнены боксы с ними) (фото)",
      "Стаканы на вынос вместе с крышками в наличии и стоят аккуратно (в шкафу за баром есть запас) (фото)",
      // ← фото салфеток в шкафу — обязателен
      "Минажи заполнены салфетками (в шкафу пополнен запас салфеток) (фото салфеток в шкафу)",
      "Настройка эспрессо (выставление правильного помола и граммовки)",
      "Вся посуда натерта (без сколов) и принесена в бар, и расставлена на свои места, недостающую посуду спустили со шкафа",
      "Барные полки чистые (буылки повернуты этикеткой к гостю, стоят аккуратно)",
      // ← содержит (фото) — обязателен
      "Холодильнк пополенен фруктами (фрукты обработаны), шалфеем, цветами (фото) на смену (софт, вина в наличии)",
      "Стекла холодильников чистые",
      "Монитор iiko и принтер чистые.",
      "Термосы с мотивационным кофе принесены из Киссатен",
      "За баром и в зоне видимости гостей отсутствуют посторонние предметы и личные вещи."
    ]
  },
  day: {
    id: "day",
    title: "Чек-лист в течение дня",
    subtitle: "Поддерживаем порядок и контроль в процессе смены.",
    items: [
      "Заполнить журнал здоровья сотрудников",
      "Обязательно записывать, если чего-то мало/заканчивается, или нужно заготовить (в группу бара)",
      "Маркировать вскрываемую продукцию",
      "Заготавливать необходимые пф",
      "Принимать (сверяя со списком), распределять по зонам хранения",
      "Принимать товар в DocsInBox (ООО и ИП)",
      "Взвешивать, списывать (через iiko) и утилизировать испорченное."
    ]
  },
  closing: {
    id: "closing",
    title: "Чек-лист закрытия смены",
    subtitle: "Закрываем смену так, чтобы утро началось без боли.",
    items: [
      "Термосы для мотивационного кофе отнесены на Киссатен",
      "Работа в DocsInBoх проведена (скрин ООО, ИП)",
      "Навести порядок на полке с чаями, всё аккуратно расставить",
      "Протереть стены за кофетачкой и под полкой с алкоголем",
      "Пивная станция чистая, краны чистые, стоки промыты (фото)",
      "Все продукты убраны в холодильник или выброшены по условиям и срокам",
      "Соусники отданы в заготовочный цех для заполнения (фото)",
      "Стёкла холодильников чистые, без разводов (фото)",
      "Рельсы холодильников чистые (фото)",
      "Морозилки чистые, включая уплотнители (фото)",
      "Посуда натёртая размещена и затарена максимально",
      "Чашки/чайники/молочники принесены на бар (затарены максимально)",
      "Инвентарь отмыт и размещён по местам",
      "Отмыть раковину и кран от налёта; при засоре прочистить (фото)",
      "Станции промытые, чистые, сухие (фото)",
      "Изимилк промыт химией, ринзор чистый (фото)",
      "Кофемашина промыта, выключена; холдеры и инвентарь в химии (фото)",
      "Протереть блестящие/стеклянные/хромированные элементы",
      "На полке с алкоголем нет пустых мест (фото)",
      "Протереть бутылки влажной тряпкой",
      "Шкаф за баром в порядке (видео)",
      "Всю ветошь — на стирку; на утро — мин. одна тряпка",
      "Вынести мусор",
      "Место под ведром чистое, пакет новый",
      "Отправить стоп/старт-лист",
      "Передать важную инфу для утренней смены",
      "Закрыть смену в iiko"
    ]
  },
  prep: {
    id: "prep",
    title: "Заготовочный цех (закрытие)",
    subtitle: "Подготовка заготовочного цеха к следующему дню.",
    items: [
      "Написать старшему бармену, если чего-то мало/заканчивается",
      "Проверить заявки, по несоответствиям — в «Заявки»",
      "Акты перемещений заполнены и отправлены (фото)",
      "Работа в DocsInBoх проведена (скрин ООО, ИП)",
      "Заполнить холодильники пф, молоком, вином, софт, пивом (макс.)",
      "Тары полные, чистые, промаркированы (фото)",
      "Пюре на дефрост для завтра (промаркировано) (фото)",
      "Продукты убраны/промаркированы или утилизированы (фото)",
      "Инвентарь и оборудование чистые, разложены (фото)",
      "Су-вид и ёмкость чистые, без накипи (фото)",
      "Розетки/удлинители чистые и безопасные (фото)",
      "Холодильники чистые, без наледи (фото)",
      "Полки/поверхности чистые (фото)",
      "Холодильники в коридоре чистые, фрукты в промаркир. боксах (фото)",
      "Льдогенераторы чистые, совок отдельно, бланк замывки (фото)",
      "Раковина и место под ней чистые (фото)",
      "Ничего не лежит на полу (поддоны/стеллажи)",
      "Нет грязной посуды/соусников",
      "Полы/стены чистые",
      "Стеллажи/шкаф в насосной чистые, мусор убран",
      "Оборудование выключено",
      "Документы в накопителе аккуратно",
      "Передача смены — важная инфа и недостачи"
    ]
  }
};

// Состояние
let checklistState = {};
let currentChecklistId = "opening";
let currentUser = null; // {name, role}
let timers = {};        // { [clid]: { startedAt, finishedAt, deadline, tick } }

// ------------------------- УТИЛЫ -------------------------
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function showToast(message) {
  const toast = $("#toast");
  $("#toast-message").textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("visible");
  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("hidden");
  }, 2500);
}

function escapeHtml(text) {
  if (!text) return "";
  return text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}
function fmtTime(ts){ if(!ts) return "—"; return new Date(ts).toLocaleString("ru-RU"); }
function pad(n){ return n<10?("0"+n):(""+n); }
function formatCountdown(ms){ const s=Math.max(0,Math.floor(ms/1000)); const hh=Math.floor(s/3600), mm=Math.floor((s%3600)/60), ss=s%60; return `${pad(hh)}:${pad(mm)}:${pad(ss)}`; }

// ------------------------- ФОТО: когда требуется -------------------------
const SPECIAL_REQUIRED_SUBSTRINGS = [
  "скрин поста в группе",          // из пункта про стоп/старт-лист
  "стоп лист ретей",               // чтобы не зависеть от кавычек
  "фото салфеток в шкафу"          // из пункта про минажи/салфетки
];

function isPhotoRequired(textRaw) {
  const t = (textRaw || "").toLowerCase();
  // Любое упоминание (фото...) или (скрин...)
  if (t.includes("(фото") || t.includes("(скрин")) return true;
  // Защитный механизм на конкретики из ТЗ
  return SPECIAL_REQUIRED_SUBSTRINGS.some(s => t.includes(s));
}

// ------------------------- АВТОРИЗАЦИЯ -------------------------
function loadUser(){ try{ const raw=localStorage.getItem("barctrl.user"); if(raw) currentUser=JSON.parse(raw);}catch{} updateUserBadge(); }
function saveUser(){ localStorage.setItem("barctrl.user", JSON.stringify(currentUser)); updateUserBadge(); }
function updateUserBadge(){ $("#user-badge").textContent = currentUser ? `${currentUser.name} • ${currentUser.role}` : "Гость"; }
function openAuthModal(){ $("#auth-modal").classList.remove("hidden"); $("#auth-name").focus(); }
function closeAuthModal(){ $("#auth-modal").classList.add("hidden"); }
function setupAuth(){
  $("#login-btn").addEventListener("click", ()=>{
    if (currentUser){ currentUser=null; localStorage.removeItem("barctrl.user"); updateUserBadge(); $("#login-btn").textContent="Войти"; showToast("Вы вышли из системы."); }
    else openAuthModal();
  });
  $("#auth-cancel").addEventListener("click", closeAuthModal);
  $("#auth-ok").addEventListener("click", ()=>{
    const name=$("#auth-name").value.trim(); const role=$("#auth-role").value;
    if(!name) return showToast("Введите имя.");
    currentUser={name, role}; saveUser(); closeAuthModal(); $("#login-btn").textContent="Выйти"; showToast(`Вошли как ${name}`);
  });
  if(currentUser) $("#login-btn").textContent="Выйти";
}

// ------------------------- ТАЙМЕРЫ -------------------------
function ensureTimer(clid){ if(!timers[clid]) timers[clid]={startedAt:null, finishedAt:null, deadline:null, tick:null}; return timers[clid]; }
function loadTimers(){ try{ const raw=localStorage.getItem("barctrl.timers"); if(raw) timers=JSON.parse(raw);}catch{} }
function persistTimers(){ localStorage.setItem("barctrl.timers", JSON.stringify(timers)); }

function startChecklistTimer(){
  const t=ensureTimer(currentChecklistId);
  if(t.startedAt) return;
  t.startedAt=Date.now();
  t.deadline=t.startedAt+60*60*1000;
  t.finishedAt=null;
  persistTimers();
  renderSessionInfo();
  runTicker();
  $("#start-btn").disabled = true; // после старта сброс недоступен (кнопки сброса у нас и так нет)
  showToast("Таймер на 1 час запущен.");
}
function finishChecklistNow(){
  const t=ensureTimer(currentChecklistId);
  if(!t.startedAt) return false;
  if(!t.finishedAt){ t.finishedAt=Date.now(); persistTimers(); renderSessionInfo(); }
  return true;
}
function runTicker(){
  const timerEl=$("#timer"); const t=ensureTimer(currentChecklistId);
  if(!t.startedAt){ timerEl.classList.add("hidden"); return; }
  timerEl.classList.remove("hidden");
  if(t.tick){ clearInterval(t.tick); t.tick=null; }
  const update=()=>{ const now=Date.now(); const left=(t.deadline||now)-now; timerEl.textContent=formatCountdown(left); if(left<=0){ timerEl.textContent="00:00:00"; clearInterval(t.tick); t.tick=null; } };
  update(); t.tick=setInterval(update,1000);
}
function renderSessionInfo(){
  const t=ensureTimer(currentChecklistId);
  $("#session-info").textContent=(t.startedAt?`Начато: ${fmtTime(t.startedAt)}; `:"")+(t.finishedAt?`Завершено: ${fmtTime(t.finishedAt)}`:"");
}

// ------------------------- РЕНДЕР -------------------------
function initState(){
  checklistState={};
  for(const key in CHECKLISTS){
    const cl=CHECKLISTS[key];
    checklistState[key]={ items: cl.items.map(text=>({text, done:false, photoDataUrl:null})) };
  }
}
function setupSidebar(){
  $$(".nav-item").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const id=btn.dataset.checklist;
      if(id===currentChecklistId) return;
      currentChecklistId=id;
      $$(".nav-item").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderChecklist(); renderSessionInfo(); runTicker();
    });
  });
}

function renderChecklist(){
  const cl=CHECKLISTS[currentChecklistId];
  const state=checklistState[currentChecklistId];

  $("#checklist-title").textContent=cl.title;
  $("#checklist-subtitle").textContent=cl.subtitle;

  const container=$("#checklist-container"); container.innerHTML="";
  state.items.forEach(item=>{
    const itemEl=document.createElement("div"); itemEl.className="checklist-item";

    const left=document.createElement("div"); left.className="checklist-item-left";

    const checkbox=document.createElement("input"); checkbox.type="checkbox"; checkbox.checked=item.done;
    checkbox.addEventListener("change",()=>{ item.done=checkbox.checked; textSpan.classList.toggle("done", item.done); });

    const textSpan=document.createElement("span"); textSpan.className="checklist-text"; textSpan.textContent=item.text;
    if(item.done) textSpan.classList.add("done");

    left.appendChild(checkbox); left.appendChild(textSpan);

    const photoBlock=document.createElement("div"); photoBlock.className="photo-block";

    const label=document.createElement("div"); label.className="photo-label";
    const required = isPhotoRequired(item.text);
    label.textContent = required ? "Фото/скрин выполнения (обязательно):" : "Фото (необязательно):";

    const actions=document.createElement("div"); actions.className="photo-actions";

    const fileInput=document.createElement("input"); fileInput.type="file"; fileInput.accept="image/*"; fileInput.className="photo-input";

    const photoBtn=document.createElement("button"); photoBtn.type="button"; photoBtn.className="photo-btn"; photoBtn.textContent=item.photoDataUrl?"Изменить фото":"Добавить фото";

    const preview=document.createElement("img"); preview.className="photo-preview"; preview.style.display=item.photoDataUrl?"block":"none"; if(item.photoDataUrl) preview.src=item.photoDataUrl;

    photoBtn.addEventListener("click",()=>fileInput.click());
    fileInput.addEventListener("change",()=>{
      const file=fileInput.files[0]; if(!file) return;
      const reader=new FileReader();
      reader.onload=e=>{
        item.photoDataUrl=e.target.result;
        preview.src=item.photoDataUrl; preview.style.display="block";
        photoBtn.textContent="Изменить фото";
        // автогалочка только добавляет удобство — но не обязательна для НЕобязательных фото
        if(required){ item.done=true; checkbox.checked=true; textSpan.classList.add("done"); }
        itemEl.classList.remove("error");
      };
      reader.readAsDataURL(file);
    });

    actions.appendChild(photoBtn); actions.appendChild(preview);
    photoBlock.appendChild(label); photoBlock.appendChild(actions);

    itemEl.appendChild(left); itemEl.appendChild(photoBlock);
    container.appendChild(itemEl);
  });
}

// ------------------------- ВАЛИДАЦИЯ ПЕРЕД ОТЧЁТОМ -------------------------
function validateBeforeShare(){
  const state=checklistState[currentChecklistId];
  const t=ensureTimer(currentChecklistId);

  if(!t.startedAt){
    showToast("Сначала нажмите «Начать» для фиксации времени.");
    return false;
  }

  let missing=0;
  const container=$("#checklist-container");
  const itemEls=[...container.querySelectorAll(".checklist-item")];

  state.items.forEach((item, idx)=>{
    const must = isPhotoRequired(item.text);
    const ok = must ? !!item.photoDataUrl : true;
    if(!ok){ missing++; itemEls[idx].classList.add("error"); }
    else { itemEls[idx].classList.remove("error"); }
  });

  if(missing>0){
    showToast(`Не прикреплены фото/скрин по ${missing} обязательным пункт(ам).`);
    return false;
  }
  return true;
}

// ------------------------- ПЕЧАТНАЯ ВЕРСТКА + PDF/SHARE -------------------------
function buildPrintHtml(){
  const cl=CHECKLISTS[currentChecklistId];
  const state=checklistState[currentChecklistId];
  const t=ensureTimer(currentChecklistId);

  const dateStr=new Date().toLocaleDateString("ru-RU");
  const author=currentUser?`${currentUser.name} • ${currentUser.role}`:"Гость";

  let statusHtml="";
  if(t.startedAt){
    const finishedAt = t.finishedAt || Date.now();
    const ok = finishedAt <= t.deadline;
    statusHtml = `<div class="status ${ok ? "ok" : "bad"}">${
      ok ? "Чек-лист выполнен согласно нормам" : "Чек-лист не выполнен в срок"
    }</div>`;
  }

  const itemsHtml=state.items.map(item=>{
    const prefix=item.done?"☑":"☐";
    const photoHtml=item.photoDataUrl?`<div class="print-photo"><img src="${item.photoDataUrl}" alt="Фото"/></div>`:"";
    const req = isPhotoRequired(item.text) ? ' <span style="color:#c81e1e">(фото/скрин обяз.)</span>' : '';
    return `<li><div class="print-item-text">${prefix} ${escapeHtml(item.text)}${req}</div>${photoHtml}</li>`;
  }).join("");

  return `
    <div class="print-wrapper">
      <h1 class="print-title">${escapeHtml(cl.title)}</h1>
      <p class="print-subtitle">${escapeHtml(cl.subtitle)}</p>
      <div class="print-grid">
        <div><b>Автор:</b> ${escapeHtml(author)}</div>
        <div><b>Дата:</b> ${dateStr}</div>
        <div><b>Начато:</b> ${fmtTime(t.startedAt)}</div>
        <div><b>Завершено:</b> ${fmtTime(t.finishedAt)}</div>
        <div><b>Длительность:</b> ${t.startedAt && (t.finishedAt||Date.now()) ? formatCountdown((t.finishedAt||Date.now()) - t.startedAt) : "—"}</div>
      </div>
      <ol class="print-list">${itemsHtml}</ol>
      ${statusHtml}
    </div>`;
}

async function shareCurrentChecklistPDF(){
  if(!validateBeforeShare()) return;
  if(!window.jspdf || !window.jspdf.jsPDF){ alert("Ошибка: jsPDF не загружен."); return; }
  if(typeof html2canvas==="undefined"){ alert("Ошибка: html2canvas не загружен."); return; }

  finishChecklistNow();

  const printArea=document.getElementById("print-area");
  printArea.innerHTML=buildPrintHtml();

  const { jsPDF }=window.jspdf;
  const pdf=new jsPDF("p","mm","a4");
  const pageWidth=pdf.internal.pageSize.getWidth();
  const pageHeight=pdf.internal.pageSize.getHeight();
  const margin=10;

  const canvas=await html2canvas(printArea,{scale:2, backgroundColor:"#ffffff"});
  const imgData=canvas.toDataURL("image/png");
  const imgWidth=pageWidth - margin*2;
  const imgHeight=(canvas.height*imgWidth)/canvas.width;

  let heightLeft=imgHeight; let position=margin;
  pdf.addImage(imgData,"PNG",margin,position,imgWidth,imgHeight);
  heightLeft -= (pageHeight - margin*2);
  while(heightLeft>0){
    pdf.addPage();
    position = margin - (imgHeight - heightLeft);
    pdf.addImage(imgData,"PNG",margin,position,imgWidth,imgHeight);
    heightLeft -= (pageHeight - margin*2);
  }

  const cl=CHECKLISTS[currentChecklistId];
  const fileName=`checklist-${cl.id}-${new Date().toISOString().slice(0,10)}.pdf`;
  const blob=pdf.output("blob");
  const file=new File([blob], fileName, {type:"application/pdf"});

  if(navigator.canShare && navigator.canShare({files:[file]})){
    try{
      await navigator.share({ title:"Отчёт чек-листа", text:"PDF-отчёт по чек-листу", files:[file] });
      showToast("Отчёт отправлен.");
      autoResetAfterShare();
      return;
    }catch(e){ console.warn("Share canceled/failed", e); }
  }

  const url=URL.createObjectURL(blob);
  const a=document.createElement("a"); a.href=url; a.download=fileName; document.body.appendChild(a); a.click(); a.remove();
  window.open(url,"_blank");
  showToast("Скачай/перешли PDF вручную.");
  autoResetAfterShare();
}

function autoResetAfterShare(){
  const state=checklistState[currentChecklistId];
  state.items.forEach(i=>{ i.done=false; i.photoDataUrl=null; });
  const t=ensureTimer(currentChecklistId);
  if(t.tick) clearInterval(t.tick);
  timers[currentChecklistId]={startedAt:null, finishedAt:null, deadline:null, tick:null};
  localStorage.setItem("barctrl.timers", JSON.stringify(timers));
  renderChecklist(); renderSessionInfo(); runTicker();
}

// ------------------------- ИНИТ -------------------------
window.addEventListener("DOMContentLoaded",()=>{
  loadUser(); loadTimers();
  initState(); setupSidebar(); renderChecklist(); renderSessionInfo(); runTicker();
  document.getElementById("start-btn").addEventListener("click", startChecklistTimer);
  document.getElementById("export-btn").addEventListener("click", shareCurrentChecklistPDF);
  setupAuth();
});
