// Определяем все чек-листы
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
      "Проверить все позиции бара по наличию и обновить стоп/старт-лист по бару, выложить в группу",
      "Включить кофемашину и проверить ее на исправность (в случае неисправности сообщить в группу. \"Собрать\" кофемашину, предварительно промыв все мелкие части.",
      "Списать в iiko настройка помола, пролив молока, пролив пива (фото)",
      "Выстваить все необходимые пф в станции (проверить сроки пф; бутылки под воду и прибэтчи, соусники чистые)",
      "Ветошь для натирки и поверхностей лежит в отведённых местах, не разбросанная по бару.",
      "Принесен запас кофе на день (матчи, какао тоже - заполнены боксы с ними) (фото)",
      "Стаканы на вынос вместе с крышками в наличии и стоят аккуратно (в шкафу за баром есть запас) (фото)",
      "Минажи заполнены салфетками (в шкафу пополнен запас салфеток)",
      "Настройка эспрессо (выставление правильного помола и граммовки)",
      "Вся посуда натерта (без сколов) и принесена в бар, и расставлена на свои места, недостающую посуду спустили со шкафа",
      "Барные полки чистые (буылки повернуты этикеткой к гостю, стоят аккуратно)",
      "Холодильнк пополенен фруктами (фрукты обработаны), шалфеем, цветами на смену (софт, вина в наличии)",
      "Стекла холодильников чистые",
      "Монитор iiko и принтер чистые.",
      "Термосы с мотивационным кофе принесены из Киссатен",
      "За баром и в зоне видимости гостей, отсутствуют посторонние предметы и личные вещи."
    ]
  },
  day: {
    id: "day",
    title: "Чек-лист в течение дня",
    subtitle: "Поддерживаем порядок и контроль в процессе смены.",
    items: [
      "Заполнить журнал здоровья сотрудников",
      "Обязательно записывать если чего-то мало, или заканчивается, или нужно заготовить в группу бара",
      "Маркировать вскрываемую продукцию",
      "Заготавливать необходимые пф",
      "Принимать (проверяя со списком заказанного, отписывясь в случае несовпадения) и распределять товар по зонам хранения",
      "Принимать товар в DocsInBox, как ООО, так и ИП",
      "Взвешивать, списывать (все списания делать через iiko) и выкидывать испорченные продукты."
    ]
  },
  closing: {
    id: "closing",
    title: "Чек-лист закрытия смены",
    subtitle: "Закрываем смену так, чтобы утро началось без боли.",
    items: [
      "Термосы для мотивацинного кофе отнесены на Киссатен",
      "Работа в DocsInBoх проведена (скрин ООО, ИП)",
      "Навести порядок на полке с чаями, все аккуратно расставить",
      "Протереть все стены за кофетачкой и под полкой с алкоголем",
      "Пивная станция чистая, краны читсые, стоки промыт (фото)",
      "Все продукты убраны в холодильник или выброшены, согласно условиям хранения и срокам годности",
      "Соусники отданы в заготовочный цех для заполнения (чистые, без маркировок) (фото)",
      "Стекла холодильников чистые, без разводов (фото)",
      "Рельсы холодильников чистые (фото)",
      "Морозильные камеры чистые, включая уплотнители (фото)",
      "Посуда натертая размещенна в морозильных камерах и на станции (посуда затаренна максимально)",
      "Чашки кофейные (влючая флэт, какао), чайники, молочники принесены на бар (затарены максимально)",
      "Инвентарь отмыт после смены и размещен на места хранения",
      "Отмыть раковину (и кран) от извести и налета, при забитии слива прочистить раковину вантузом (фото со снятым спилстопами раковины)",
      "Станции промытые (без остатков льда), чистые, сухие (фото)",
      "Изимилк промыт химией, ринзор чистый (фото)",
      "Кофемашина промыта (включая места под группой), выключена, холдеры и инвентарь в кофейной химии (фото)",
      "Промыть и протереть от пятен и налётов все блестящие, стеклянные, хромированные элементы, инвентарь.",
      "На полке с алкоголем отсутсвуют пустые места (фото)",
      "Протереть бутылки влажной тряпкой",
      "В шкафу за баром порядок (пивное оборудование чистое, радиатор не забит), нет коробок (запас стаканчиков и салфеток аккуратно сложен) (видео)",
      "По окончанию уборки всю ветошь относим на стирку. На утреннюю смену оставить как минимум одну тряпку.",
      "Собрать весь мусор из бара и вынести на мусорку.",
      "Мусорное ведро и место под ним чистые, вставлен новый пакет",
      "Оттправить стоп/стар-лист",
      "Написать в передачу смены важную информацию по закрытию, недостающих продуктов, и прочих дел, на которые стоит обратить внимание открывающему",
      "Закрыть смену в iiko"
    ]
  },
  prep: {
    id: "prep",
    title: "Заготовочный цех (закрытие)",
    subtitle: "Подготовка заготовочного цеха к следующему дню.",
    items: [
      "Обязательно написать старшему бармену, если чего-то мало или заканчивается!!!",
      "Заявки проверенны, о нерпешедшем товаре (или избыточном) отписаться в \"Заявки\"",
      "Акты перемещений заполнены и отправленны в группу (фото)",
      "Работа в DocsInBoх проведена (скрин ООО, ИП)",
      "Заполнить холодильники пф, молоком, винном (белым, красным), софт (теплы, холодный), пиво (все заполнить максимально)",
      "Все тары для заготовок полные (для следующей смены), чистые, промаркированные (фото)",
      "Пюре в необходимом объеме для заготовок на следующий день выставленно на дефрост (промаркированно) (фото)",
      "Все продукты убраны в холодильник (промаркированны) или выброшенны, согласно условиям хранения и срокам годности (фото)",
      "Инвентарь (мерники, нож, ложки), оборудование (блендеры, резинки и крышки от них, весы) чистые, расставлены по зонам (фото)",
      "Су-вид и ёмкость чистые без накипи и разводов (фото)",
      "Розетки удленители провода чистые. Безопасны для использования (фото)",
      "Холодильники чистые внутри (включая уплотнители), стекло чистое (без разводов), отсутсвует наледь (фото)",
      "Полки, поверхности чистые, без разводов и капель воды (фото)",
      "Холодильники в коридоре чистые (фрукты находятся в боксах с маркировкой) (фото)",
      "Льдогенераторы чистые, совок хранится в отдельном контейнере, бланк замывки заполнен (фото)",
      "Раковина (и кран) чистые, в раковине отсутсвует мусор, место под раковиной чистое (фото)",
      "Вся продукция не лежит на полу, можно хранить на паддонах или стеллажах.",
      "На цеху отсутсвуют грязные соусники, посуда",
      "Полы, стены чистые",
      "Стеллажи, шкаф в насосной чистые, пустые коробки и прочий мусор убраны",
      "Оборудование на ночь выключено",
      "Документы в накопителе сложены аккуратно (включая нкаопитель с наклыдными принятой продукции)",
      "Написать в передачу смены важную информацию по закрытию, недостающих продуктов, и прочих дел, на которые стоит обратить внимание открывающему."
    ]
  }
};

// Состояние (галочки + фото) для каждого чек-листа
let checklistState = {};
let currentChecklistId = "opening";

function initState() {
  checklistState = {};
  for (const key in CHECKLISTS) {
    const cl = CHECKLISTS[key];
    checklistState[key] = {
      items: cl.items.map(text => ({
        text,
        done: false,
        photoDataUrl: null
      }))
    };
  }
}

// Toast (уведомление)
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  toastMessage.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("visible");
  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("hidden");
  }, 2500);
}

// Навигация
function setupSidebar() {
  const navButtons = document.querySelectorAll(".nav-item");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.checklist;
      if (id === currentChecklistId) return;
      currentChecklistId = id;

      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      renderChecklist();
    });
  });
}

// Рендер выбранного чек-листа
function renderChecklist() {
  const cl = CHECKLISTS[currentChecklistId];
  const state = checklistState[currentChecklistId];

  const titleEl = document.getElementById("checklist-title");
  const subtitleEl = document.getElementById("checklist-subtitle");
  const container = document.getElementById("checklist-container");

  titleEl.textContent = cl.title;
  subtitleEl.textContent = cl.subtitle;
  container.innerHTML = "";

  state.items.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.className = "checklist-item";

    const left = document.createElement("div");
    left.className = "checklist-item-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    checkbox.addEventListener("change", () => {
      item.done = checkbox.checked;
      if (item.done) {
        textSpan.classList.add("done");
      } else {
        textSpan.classList.remove("done");
      }
    });

    const textSpan = document.createElement("span");
    textSpan.className = "checklist-text";
    textSpan.textContent = item.text;
    if (item.done) {
      textSpan.classList.add("done");
    }

    left.appendChild(checkbox);
    left.appendChild(textSpan);

    const photoBlock = document.createElement("div");
    photoBlock.className = "photo-block";

    const label = document.createElement("div");
    label.className = "photo-label";
    label.textContent = "Фото выполнения (обязательно):";

    const actions = document.createElement("div");
    actions.className = "photo-actions";

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.className = "photo-input";

    const photoBtn = document.createElement("button");
    photoBtn.type = "button";
    photoBtn.className = "photo-btn";
    photoBtn.textContent = item.photoDataUrl ? "Изменить фото" : "Добавить фото";

    const preview = document.createElement("img");
    preview.className = "photo-preview";
    preview.style.display = item.photoDataUrl ? "block" : "none";
    if (item.photoDataUrl) {
      preview.src = item.photoDataUrl;
    }

    photoBtn.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        item.photoDataUrl = e.target.result;
        preview.src = item.photoDataUrl;
        preview.style.display = "block";
        photoBtn.textContent = "Изменить фото";
      };
      reader.readAsDataURL(file);
    });

    actions.appendChild(photoBtn);
    actions.appendChild(preview);

    photoBlock.appendChild(label);
    photoBlock.appendChild(actions);

    itemEl.appendChild(left);
    itemEl.appendChild(photoBlock);

    container.appendChild(itemEl);
  });
}

// Сброс текущего чек-листа
function resetCurrentChecklist(showMessage = true) {
  const state = checklistState[currentChecklistId];
  state.items.forEach(item => {
    item.done = false;
    item.photoDataUrl = null;
  });
  renderChecklist();
  if (showMessage) {
    showToast("Чек-лист сброшен для следующей смены.");
  }
}

// Экранируем текст для HTML
function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Собираем HTML для печатной версии (текст + фото)
function buildPrintHtml() {
  const cl = CHECKLISTS[currentChecklistId];
  const state = checklistState[currentChecklistId];

  const dateStr = new Date().toLocaleDateString("ru-RU");

  const itemsHtml = state.items
    .map(item => {
      const prefix =
