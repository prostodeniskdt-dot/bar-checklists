/** ================== ДАННЫЕ (с орфографией и п/ф) ================== */
const CHECKLISTS = {
  opening: {
    id: "opening",
    title: "Чек-лист открытия смены",
    subtitle: "Выполни все пункты до начала работы бара.",
    items: [
      "Заполнить журнал здоровья сотрудников",
      "Зайти в рабочую беседу и быть в курсе последних новостей в жизни бара",
      "Убедиться, что внешний вид соответствует стандартам",
      "Открыть смену в iiko",
      "Проверить все позиции бара по наличию и обновить стоп/старт-лист по бару; выложить в группу (скрин поста в группе «Стоп лист Ретей»)",
      "Включить кофемашину и проверить её исправность (в случае неисправности сообщить в группу). «Собрать» кофемашину, предварительно промыв все мелкие части",
      "Списать в iiko: настройка помола, пролив молока, пролив пива (фото)",
      "Выставить все необходимые п/ф на станции (проверить сроки п/ф; бутылки под воду и прибатчи; соусники чистые)",
      "Ветошь для натирки и поверхностей лежит в отведённых местах; не разбросана по бару",
      "Принесён запас кофе на день (матча, какао — заполнены боксы) (фото)",
      "Стаканы на вынос с крышками в наличии и стоят аккуратно (в шкафу за баром есть запас) (фото)",
      "Минажи заполнены салфетками; в шкафу пополнен запас (фото салфеток в шкафу)",
      "Настройка эспрессо (правильный помол и граммовка)",
      "Вся посуда натёрта (без сколов), принесена в бар и расставлена по местам; недостающую посуду спустили со шкафа",
      "Барные полки чистые (бутылки повернуты этикеткой к гостю, стоят аккуратно)",
      "Холодильник пополнен фруктами (фрукты обработаны), шалфеем, цветами на смену; софт и вина в наличии (фото)",
      "Стёкла холодильников чистые",
      "Монитор iiko и принтер чистые",
      "Термосы с мотивационным кофе принесены из «Киссатен»",
      "В зоне видимости гостей отсутствуют посторонние предметы и личные вещи"
    ]
  },

  day: {
    id: "day",
    title: "Чек-лист в течение дня",
    subtitle: "Поддерживаем порядок и контроль в процессе смены.",
    items: [
      "Заполнить журнал здоровья сотрудников",
      "Фиксировать в группе, если чего-то мало/заканчивается, или нужно заготовить",
      "Маркировать вскрываемую продукцию",
      "Заготавливать необходимые п/ф",
      "Принимать товар (сверяя со списком), распределять по зонам хранения",
      "Принимать товар в DocsInBox (ООО и ИП)",
      "Взвешивать, списывать (через iiko) и утилизировать испорченное"
    ]
  },

  closing: {
    id: "closing",
    title: "Чек-лист закрытия смены",
    subtitle: "Закрываем смену так, чтобы утро началось без боли.",
    items: [
      "Термосы для мотивационного кофе отнесены в «Киссатен»",
      "Работа в DocsInBoх проведена (скрин ООО, ИП)",
      "Навести порядок на полке с чаями; всё аккуратно расставить",
      "Протереть стены за кофетачкой и под полкой с алкоголем",
      "Пивная станция чистая, краны чистые, стоки промыты (фото)",
      "Продукты убраны в холодильник или утилизированы согласно условиям и срокам",
      "Соусники отданы в заготовочный цех для заполнения (чистые, без маркировок) (фото)",
      "Стёкла холодильников чистые, без разводов (фото)",
      "Рельсы холодильников чистые (фото)",
      "Морозильные камеры чистые, включая уплотнители (фото)",
      "Посуда натёртая размещена в морозильных камерах и на станции (затарено максимально)",
      "Чашки кофейные (включая флэт/какао), чайники, молочники принесены на бар (затарено максимально)",
      "Инвентарь отмыт после смены и размещён по местам хранения",
      "Отмыть раковину (и кран) от извести и налёта; при забитии слива прочистить раковину вантузом (фото со снятым спилстопами раковины)",
      "Станции промыты (без остатков льда), чистые, сухие (фото)",
      "Изимилк промыт химией, ринзер чистый (фото)",
      "Кофемашина промыта (включая места под группой), выключена; холдеры и инвентарь в кофейной химии (фото)",
      "Протереть и отполировать блестящие/стеклянные/хромированные элементы и инвентарь",
      "На полке с алкоголем отсутствуют пустые места (фото)",
      "Протереть бутылки влажной тряпкой",
      "В шкафу за баром порядок (пивное оборудование чистое, радиатор не забит), нет коробок; запас стаканчиков и салфеток сложен (видео)",
      "Всю ветошь отнести на стирку; на утреннюю смену оставить минимум одну тряпку",
      "Собрать мусор из бара и вынести",
      "Мусорное ведро и место под ним чистые; вставлен новый пакет",
      "Отправить стоп/старт-лист",
      "Написать в передачу смены важную информацию по закрытию, недостачам и задачам для утра",
      "Закрыть смену в iiko"
    ]
  },

  prep: {
    id: "prep",
    title: "Заготовочный цех (закрытие)",
    subtitle: "Подготовка заготовочного цеха к следующему дню.",
    items: [
      "Написать старшему бармену, если чего-то мало или заканчивается",
      "Проверить заявки; о непришедшем/избыточном товаре отписаться в «Заявки»",
      "Акты перемещений заполнены и отправлены в группу (фото)",
      "Работа в DocsInBoх проведена (скрин ООО, ИП)",
      "Заполнить холодильники: п/ф, молоко, вино (белое/красное), софт (тёплый/холодный), пиво (максимально)",
      "Тара для заготовок: полная на следующую смену, чистая, промаркирована (фото)",
      "Пюре в необходимом объёме выставлено на дефрост (промаркировано) (фото)",
      "Все продукты убраны в холодильник (промаркированы) или утилизированы по условиям/срокам (фото)",
      "Инвентарь (мерники, ножи, ложки), оборудование (блендеры, резинки и крышки, весы) — чистые, разложены по местам (фото)",
      "Су-вид и ёмкость чистые, без накипи и разводов (фото)",
      "Розетки/удлинители/провода чистые и безопасны (фото)",
      "Холодильники чистые внутри (включая уплотнители), стекло без разводов, наледи нет (фото)",
      "Полки и поверхности чистые, без разводов и капель воды (фото)",
      "Холодильники в коридоре чистые; фрукты в промаркированных боксах (фото)",
      "Льдогенераторы чистые, совок хранится в отдельном контейнере (фото)",
      "Бланк замывки льдогенератора заполнен (фото)",
      "Раковина (и кран) чистые; в раковине нет мусора; место под раковиной чистое (фото)",
      "Вся продукция не лежит на полу (хранение на поддонах или стеллажах)",
      "На цеху отсутствуют грязные соусники и посуда",
      "Полы и стены чистые",
      "Стеллажи и шкаф в насосной чистые; пустые коробки и мусор убраны",
      "Оборудование на ночь выключено",
      "Документы в накопителе сложены аккуратно (включая накопитель с накладными принятой продукции)",
      "Передача смены: важная информация по закрытию, недостачам и задачам для утра"
    ]
  }
};

/** ================== КОНСТАНТЫ ЛОГИКИ ================== */
// Таймер только для открытия и закрытия
const TIMED_CHECKLISTS = new Set(["opening", "closing"]);

// Явные три «обязательных» кейса из ТЗ (помимо (фото)/(скрин))
const SPECIAL_REQUIRED_SUBSTRINGS = [
  "скрин поста в группе",      // стоп/старт-лист пост
  "стоп лист ретей",
  "фото салфеток в шкафу"      // минажи/салфетки
];

// Многофото для холодильников/морозилок
function isMultiPhoto(textRaw) {
  const t = (textRaw || "").toLowerCase();
  return /холодильн|морозил|стекл[ао]\s+холодил|рельс[ы]\s+холодил|холодильники в коридоре/.test(t);
}

// Флаг «обязательна фотография?» — по сырому тексту (до чистки)
function isPhotoRequired(textRaw) {
  const t = (textRaw || "").toLowerCase();
  if (t.includes("(фото") || t.includes("(скрин")) return true;
  return SPECIAL_REQUIRED_SUBSTRINGS.some(s => t.includes(s));
}

// Текст для интерфейса: убираем «(фото...)» в конце, если оно болтается
function displayText(textRaw) {
  return (textRaw || "").replace(/\s*\(фото[^\)]*\)\s*$/i, "").trim();
}

/** ================== СОСТОЯНИЕ ================== */
let checklistState = {};
let currentChecklistId = "opening";
let currentUser = null; // {name, role}
let timers = {};        // {[clid]: { startedAt, finishedAt, deadline, tick }}
let cameraStream = null;
let cameraFacing = "environment";
let cameraTarget = null; // ссылка на item-объект, куда кладём фото

/** ================== УТИЛЫ ================== */
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

/** ================== АВТОРИЗАЦИЯ ================== */
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

/** ================== ТАЙМЕРЫ ================== */
function ensureTimer(clid){ if(!timers[clid]) timers[clid]={startedAt:null, finishedAt:null, deadline:null, tick:null}; return timers[clid]; }
function loadTimers(){ try{ const raw=localStorage.getItem("barctrl.timers"); if(raw) timers=JSON.parse(raw);}catch{} }
function persistTimers(){ localStorage.setItem("barctrl.timers", JSON.stringify(timers)); }

function startChecklistTimer(){
  if(!TIMED_CHECKLISTS.has(currentChecklistId)) return;
  const t=ensureTimer(currentChecklistId);
  if(t.startedAt) return;
  t.startedAt=Date.now();
  t.deadline=t.startedAt+60*60*1000;
  t.finishedAt=null;
  persistTimers();
  renderSessionInfo();
  runTicker();
  $("#start-btn").disabled = true;
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
  if(!TIMED_CHECKLISTS.has(currentChecklistId) || !t.startedAt){ timerEl.classList.add("hidden"); return; }
  timerEl.classList.remove("hidden");
  if(t.tick){ clearInterval(t.tick); t.tick=null; }
  const update=()=>{ const now=Date.now(); const left=(t.deadline||now)-now; timerEl.textContent=formatCountdown(left); if(left<=0){ timerEl.textContent="00:00:00"; clearInterval(t.tick); t.tick=null; } };
  update(); t.tick=setInterval(update,1000);
}
function renderSessionInfo(){
  const t=ensureTimer(currentChecklistId);
  $("#session-info").textContent=(t.startedAt?`Начато: ${fmtTime(t.startedAt)}; `:"")+(t.finishedAt?`Завершено: ${fmtTime(t.finishedAt)}`:"");
}

/** ================== ИНИЦ СТЕЙТ ================== */
function initState(){
  checklistState={};
  for(const key in CHECKLISTS){
    const cl=CHECKLISTS[key];
    checklistState[key]={ items: cl.items.map(text=>({text, done:false, photos:[]})) };
  }
}

/** ================== КАМЕРА ================== */
async function openCamera(targetItem){
  cameraTarget = targetItem;
  $("#camera-modal").classList.remove("hidden");
  await startCamera();
}
async function startCamera(){
  await stopCamera();
  try{
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: cameraFacing, width: {ideal: 1920}, height: {ideal: 1080} },
      audio: false
    });
  }catch(e){
    showToast("Не удалось открыть камеру. Разрешите доступ в браузере.");
    console.error(e);
    closeCamera();
    return;
  }
  const video = $("#cam-video");
  video.srcObject = cameraStream;
  await video.play().catch(()=>{});
}
async function stopCamera(){
  if(cameraStream){
    cameraStream.getTracks().forEach(t=>t.stop());
    cameraStream=null;
  }
}
function closeCamera(){
  stopCamera();
  $("#camera-modal").classList.add("hidden");
  cameraTarget = null;
}
function capturePhoto(){
  const video=$("#cam-video");
  const canvas=$("#cam-canvas");
  const w=video.videoWidth, h=video.videoHeight;
  if(!w || !h){ showToast("Камера не готова."); return; }
  canvas.width=w; canvas.height=h;
  const ctx=canvas.getContext("2d");
  ctx.drawImage(video,0,0,w,h);
  const dataUrl=canvas.toDataURL("image/jpeg", 0.92);
  if(cameraTarget){
    if(isMultiPhoto(cameraTarget.text)){
      cameraTarget.photos.push(dataUrl);
    }else{
      cameraTarget.photos = [dataUrl]; // только одно
    }
    // авто-галочка, если фото обязательное
    if(isPhotoRequired(cameraTarget.text)) cameraTarget.done = true;
    renderChecklist();
  }
  showToast("Фото добавлено.");
}

function switchCamera(){
  cameraFacing = (cameraFacing === "environment" ? "user" : "environment");
  startCamera();
}

/** ================== РЕНДЕР ================== */
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

  // показать/скрыть таймерные элементы
  $("#start-btn").classList.toggle("hidden", !TIMED_CHECKLISTS.has(currentChecklistId));
  $("#timer").classList.toggle("hidden", !TIMED_CHECKLISTS.has(currentChecklistId));
  $("#start-btn").disabled = ensureTimer(currentChecklistId).startedAt != null || !TIMED_CHECKLISTS.has(currentChecklistId);

  const container=$("#checklist-container"); container.innerHTML="";
  state.items.forEach(item=>{
    const itemEl=document.createElement("div"); itemEl.className="checklist-item";
    const left=document.createElement("div"); left.className="checklist-item-left";

    const checkbox=document.createElement("input"); checkbox.type="checkbox"; checkbox.checked=item.done;
    checkbox.addEventListener("change",()=>{ item.done=checkbox.checked; textSpan.classList.toggle("done", item.done); });

    const textSpan=document.createElement("span"); textSpan.className="checklist-text"; textSpan.textContent=displayText(item.text);
    if(item.done) textSpan.classList.add("done");
    left.appendChild(checkbox); left.appendChild(textSpan);

    const photoBlock=document.createElement("div"); photoBlock.className="photo-block";

    const required = isPhotoRequired(item.text);
    if (required) {
      const label=document.createElement("div"); label.className="photo-label"; label.textContent="Фото/скрин выполнения (обязательно)";
      photoBlock.appendChild(label);
    }
    // кнопка камеры
    const actions=document.createElement("div"); actions.className="photo-actions";
    const photoBtn=document.createElement("button"); photoBtn.type="button"; photoBtn.className="photo-btn"; photoBtn.textContent="Сделать фото";
    photoBtn.addEventListener("click",()=>openCamera(item));
    actions.appendChild(photoBtn);

    // превью (несколько)
    const previews=document.createElement("div"); previews.className="photo-previews";
    item.photos.forEach((src, idx)=>{
      const wrap=document.createElement("div"); wrap.className="thumb";
      const img=document.createElement("img"); img.src=src; img.alt="Фото";
      const del=document.createElement("button"); del.className="thumb-del"; del.title="Удалить"; del.textContent="×";
      del.addEventListener("click",()=>{ item.photos.splice(idx,1); renderChecklist(); });
      wrap.appendChild(img); wrap.appendChild(del);
      previews.appendChild(wrap);
    });

    actions.appendChild(previews);
    photoBlock.appendChild(actions);

    itemEl.appendChild(left); itemEl.appendChild(photoBlock);
    container.appendChild(itemEl);
  });
}

/** ================== ВАЛИДАЦИЯ ================== */
function validateBeforeShare(){
  const state=checklistState[currentChecklistId];
  const t=ensureTimer(currentChecklistId);

  if(TIMED_CHECKLISTS.has(currentChecklistId) && !t.startedAt){
    showToast("Сначала нажмите «Начать» для фиксации времени.");
    return false;
  }

  let missing=0;
  const container=$("#checklist-container");
  const itemEls=[...container.querySelectorAll(".checklist-item")];

  state.items.forEach((item, idx)=>{
    const must = isPhotoRequired(item.text);
    const ok = must ? (item.photos && item.photos.length>0) : true;
    if(!ok){ missing++; itemEls[idx].classList.add("error"); }
    else { itemEls[idx].classList.remove("error"); }
  });

  if(missing>0){
    showToast(`Не прикреплены фото/скрин по ${missing} обязательным пункт(ам).`);
    return false;
  }
  return true;
}

/** ================== ПЕЧАТЬ/ШАРИНГ ================== */
function buildPrintHtml(){
  const cl=CHECKLISTS[currentChecklistId];
  const state=checklistState[currentChecklistId];
  const t=ensureTimer(currentChecklistId);

  const dateStr=new Date().toLocaleDateString("ru-RU");
  const author=currentUser?`${currentUser.name} • ${currentUser.role}`:"Гость";

  let statusHtml="";
  if(TIMED_CHECKLISTS.has(currentChecklistId) && t.startedAt){
    const finishedAt = t.finishedAt || Date.now();
    const ok = finishedAt <= t.deadline;
    statusHtml = `<div class="status ${ok ? "ok" : "bad"}">${
      ok ? "Чек-лист выполнен согласно нормам" : "Чек-лист не выполнен в срок"
    }</div>`;
  }

  const itemsHtml=state.items.map(item=>{
    const prefix=item.done?"☑":"☐";
    const photosHtml=(item.photos||[])
      .map(p=>`<div class="print-photo"><img src="${p}"/></div>`).join("");
    // в печати показываем чистый текст без «(фото)»
    return `<li><div class="print-item-text">${prefix} ${escapeHtml(displayText(item.text))}</div>${photosHtml}</li>`;
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

  if(TIMED_CHECKLISTS.has(currentChecklistId)) finishChecklistNow();

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
  state.items.forEach(i=>{ i.done=false; i.photos=[]; });
  const t=ensureTimer(currentChecklistId);
  if(t.tick) clearInterval(t.tick);
  timers[currentChecklistId]={startedAt:null, finishedAt:null, deadline:null, tick:null};
  localStorage.setItem("barctrl.timers", JSON.stringify(timers));
  renderChecklist(); renderSessionInfo(); runTicker();
}

/** ================== INIT + события ================== */
window.addEventListener("DOMContentLoaded",()=>{
  loadUser(); loadTimers();
  initState(); setupSidebar(); renderChecklist(); renderSessionInfo(); runTicker();
  document.getElementById("start-btn").addEventListener("click", startChecklistTimer);
  document.getElementById("export-btn").addEventListener("click", shareCurrentChecklistPDF);
  setupAuth();

  // камера
  $("#cam-cancel").addEventListener("click", closeCamera);
  $("#cam-shoot").addEventListener("click", capturePhoto);
  $("#cam-switch").addEventListener("click", switchCamera);
  window.addEventListener("beforeunload", stopCamera);
});
