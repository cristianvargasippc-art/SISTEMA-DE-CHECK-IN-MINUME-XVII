// =====================================================
// DATOS BASE
// =====================================================

const roles = [
  "Delegados nacionales",
  "Mesas directivas",
  "Técnicos y docentes",
  "Secretarías generales",
  "Subsecretarías",
  "Staff",
  "Equipo logístico",
  "Periodista CLIT",
  "Invitados especiales",
];

const committeeRoles = [
  "Director general",
  "Director adjunto",
  "Evaluación y control",
  "Pasante",
  "Aprendiz",
];

const commissions = [
  "Asamblea General",
  "Consejo de Seguridad",
  "Consejo Económico y Social",
  "Consejo de Derechos Humanos",
  "Organización de Estados Americanos",
  "Corte Internacional de Justicia",
];

const defaultDirectory = Array.from({ length: 18 }, (_, index) => {
  const regional = `R${index + 1}`;
  const names = [
    ["Laura Méndez", "809-421-1001", "Adriana Peña", "809-421-2001"],
    ["Carlos Rivera", "809-421-1002", "Mariel Soto", "809-421-2002"],
    ["Diana Cruz", "809-421-1003", "Ricardo Luna", "809-421-2003"],
    ["Samuel Ortiz", "809-421-1004", "Patricia Núñez", "809-421-2004"],
    ["Nathalia Rojas", "809-421-1005", "Héctor Molina", "809-421-2005"],
    ["Miguel Santos", "809-421-1006", "Camila Paredes", "809-421-2006"],
    ["Elena Vargas", "809-421-1007", "Jorge Batista", "809-421-2007"],
    ["Felipe Guzmán", "809-421-1008", "Rosa Jiménez", "809-421-2008"],
    ["Paola Reyes", "809-421-1009", "Luis Peña", "809-421-2009"],
    ["Andrés Castillo", "809-421-1010", "Mónica Brito", "809-421-2010"],
    ["Gabriela Mateo", "809-421-1011", "Daniel Arias", "809-421-2011"],
    ["Víctor Suárez", "809-421-1012", "Sofía Medina", "809-421-2012"],
    ["Isabel Torres", "809-421-1013", "Rafael Cabrera", "809-421-2013"],
    ["Omar Fernández", "809-421-1014", "Carolina Gil", "809-421-2014"],
    ["Kiara Gómez", "809-421-1015", "Eduardo Valdez", "809-421-2015"],
    ["Roberto Díaz", "809-421-1016", "Yamile Herrera", "809-421-2016"],
    ["Amelia Rosario", "809-421-1017", "Francisco León", "809-421-2017"],
    ["Nelson Tavárez", "809-421-1018", "Ana Belén Mora", "809-421-2018"],
  ][index];

  return {
    regional,
    technicianName: names[0],
    technicianPhone: names[1],
    hostName: names[2],
    hostPhone: names[3],
  };
});

// =====================================================
// DATOS DE SALONES (CROQUIS)
// =====================================================

const defaultHotelRooms = [
  // Planta Baja
  { id: "coral", name: "Salón Coral", floor: "Planta Baja", capacity: 40, commission: "Asamblea General", status: "Sesión Activa", topic: "Reforma del sistema de votación en la ONU", moderator: "María González" },
  { id: "esmeralda", name: "Salón Esmeralda", floor: "Planta Baja", capacity: 35, commission: "Consejo de Seguridad", status: "En Receso", topic: "Conflicto en Ucrania — Propuesta de cese al fuego", moderator: "Carlos Ureña" },
  { id: "zafiro", name: "Salón Zafiro", floor: "Planta Baja", capacity: 50, commission: "", status: "Disponible", topic: "", moderator: "" },
  // Piso 1
  { id: "topacio", name: "Salón Topacio", floor: "Piso 1", capacity: 30, commission: "Consejo Económico y Social", status: "Sesión Activa", topic: "Erradicación de la pobreza extrema en América Latina", moderator: "Ana Belén Mora" },
  { id: "amatista", name: "Salón Amatista", floor: "Piso 1", capacity: 45, commission: "Consejo de Derechos Humanos", status: "Sesión Activa", topic: "Derechos de los refugiados climáticos", moderator: "Roberto Díaz" },
  { id: "rubi", name: "Salón Rubí", floor: "Piso 1", capacity: 25, commission: "", status: "Disponible", topic: "", moderator: "" },
  // Piso 2
  { id: "perla", name: "Salón Perla", floor: "Piso 2", capacity: 60, commission: "Organización de Estados Americanos", status: "En Receso", topic: "Democracia y Estado de derecho en el Caribe", moderator: "Felipe Guzmán" },
  { id: "onix", name: "Salón Ónix", floor: "Piso 2", capacity: 35, commission: "Corte Internacional de Justicia", status: "Clausurada", topic: "Caso: Soberanía marítima en el Caribe", moderator: "Diana Cruz" },
  { id: "diamante", name: "Gran Salón Diamante", floor: "Piso 2", capacity: 80, commission: "", status: "Disponible", topic: "Reservado para plenaria y clausura", moderator: "" },
];

// =====================================================
// DATOS DE STAFF Y VOLUNTARIOS
// =====================================================

const staffRolesData = {
  "Logística": {
    color: "#0b5cad",
    bg: "#edf6ff",
    icon: "📦",
    functions: [
      "Supervisar el montaje y desmontaje de salones",
      "Coordinar la distribución de materiales (carpetas, credenciales, banderas)",
      "Gestionar el inventario de suministros del evento",
      "Coordinar transporte y traslados de delegaciones",
      "Supervisar el espacio físico del hotel durante el evento",
    ],
  },
  "Protocolo": {
    color: "#9a5b00",
    bg: "#fff8ed",
    icon: "🎖️",
    functions: [
      "Coordinar la apertura y clausura de sesiones",
      "Gestionar el orden de intervenciones durante los debates",
      "Verificar que las delegaciones sigan el protocolo diplomático",
      "Coordinar la entrada y salida de autoridades",
      "Supervisar la presentación y vestimenta de los participantes",
    ],
  },
  "Soporte Técnico": {
    color: "#207a4c",
    bg: "#edf7f2",
    icon: "💻",
    functions: [
      "Configurar y mantener el sistema audiovisual de cada salón",
      "Brindar soporte con micrófonos, proyectores y pantallas",
      "Gestionar las presentaciones digitales de las comisiones",
      "Dar soporte a la plataforma de registro",
      "Documentar incidencias técnicas durante el evento",
    ],
  },
  "Prensa / CLIT": {
    color: "#6b21a8",
    bg: "#f5f0ff",
    icon: "📸",
    functions: [
      "Cubrir fotográficamente las sesiones y actividades",
      "Redactar comunicados y noticias para el CLIT",
      "Gestionar las redes sociales del evento en tiempo real",
      "Entrevistar a delegados y autoridades",
      "Producir el resumen audiovisual del evento",
    ],
  },
  "Acreditación": {
    color: "#a83232",
    bg: "#fff0f0",
    icon: "🪪",
    functions: [
      "Verificar documentación y check-in de participantes",
      "Distribuir credenciales y materiales de bienvenida",
      "Mantener actualizado el sistema de registro",
      "Gestionar el ingreso controlado a los salones",
      "Coordinar con logística la lista de asistencia",
    ],
  },
  "Alimentación": {
    color: "#0f766e",
    bg: "#f0fdf9",
    icon: "🍽️",
    functions: [
      "Coordinar los horarios de alimentación con el hotel",
      "Gestionar las necesidades dietéticas especiales de participantes",
      "Supervisar la distribución ordenada en el comedor",
      "Controlar raciones y disponibilidad de alimentos",
      "Comunicar cambios de horario al staff y delegaciones",
    ],
  },
};

const defaultStaff = [
  { id: "s1", name: "Laura Méndez", role: "Logística", area: "Montaje de salones", phone: "809-555-0101", note: "Coordinadora de área" },
  { id: "s2", name: "Miguel Santos", role: "Logística", area: "Distribución de materiales", phone: "809-555-0102", note: "" },
  { id: "s3", name: "Adriana Peña", role: "Protocolo", area: "Ceremonias y clausura", phone: "809-555-0201", note: "Jefa de protocolo" },
  { id: "s4", name: "Carlos Rivera", role: "Protocolo", area: "Sesiones de debate", phone: "809-555-0202", note: "" },
  { id: "s5", name: "Nelson Tavárez", role: "Soporte Técnico", area: "Audiovisual", phone: "809-555-0301", note: "Jefe de soporte técnico" },
  { id: "s6", name: "Diana Cruz", role: "Soporte Técnico", area: "Plataforma digital", phone: "809-555-0302", note: "" },
  { id: "s7", name: "Kiara Gómez", role: "Prensa / CLIT", area: "Fotografía y video", phone: "809-555-0401", note: "Directora CLIT" },
  { id: "s8", name: "Roberto Díaz", role: "Prensa / CLIT", area: "Redes sociales", phone: "809-555-0402", note: "" },
  { id: "s9", name: "Isabel Torres", role: "Acreditación", area: "Check-in lobby", phone: "809-555-0501", note: "Coordinadora de acreditación" },
  { id: "s10", name: "Felipe Guzmán", role: "Alimentación", area: "Coordinación con hotel", phone: "809-555-0601", note: "" },
];

// =====================================================
// DATOS DE CHECKLIST POR FASES
// =====================================================

const defaultTasks = [
  // Pre-evento
  { id: "t1", desc: "Confirmar reserva de salones con el hotel", role: "Logística", phase: "Pre-evento", priority: "Alta", responsable: "Coordinador General", deadline: "Día -3", done: false },
  { id: "t2", desc: "Preparar carpetas y materiales para delegados", role: "Logística", phase: "Pre-evento", priority: "Alta", responsable: "Equipo Logístico", deadline: "Día -1", done: false },
  { id: "t3", desc: "Configurar sistema audiovisual en todos los salones", role: "Soporte Técnico", phase: "Pre-evento", priority: "Alta", responsable: "Jefe de Soporte", deadline: "Día -1", done: false },
  { id: "t4", desc: "Instalar banderas y señalizaciones en salones", role: "Protocolo", phase: "Pre-evento", priority: "Media", responsable: "Equipo Protocolo", deadline: "Día -1", done: false },
  { id: "t5", desc: "Configurar mesa de acreditación en lobby", role: "Acreditación", phase: "Pre-evento", priority: "Alta", responsable: "Equipo Acreditación", deadline: "Día 0 · 7am", done: false },
  { id: "t6", desc: "Verificar rooming list y asignación de habitaciones", role: "Logística", phase: "Pre-evento", priority: "Alta", responsable: "Coordinador Alojamiento", deadline: "Día -2", done: false },
  { id: "t7", desc: "Confirmar menús y horarios de comida con el hotel", role: "Alimentación", phase: "Pre-evento", priority: "Media", responsable: "Coordinador Alimentación", deadline: "Día -1", done: false },
  // Llegada
  { id: "t8", desc: "Recibir y acreditar delegaciones en lobby", role: "Acreditación", phase: "Llegada", priority: "Alta", responsable: "Equipo Acreditación", deadline: "Día 1 · 8am", done: false },
  { id: "t9", desc: "Distribuir credenciales y carpetas de bienvenida", role: "Logística", phase: "Llegada", priority: "Alta", responsable: "Equipo Logístico", deadline: "Día 1 · 9am", done: false },
  { id: "t10", desc: "Guiar delegaciones a sus habitaciones asignadas", role: "Protocolo", phase: "Llegada", priority: "Media", responsable: "Equipo Protocolo", deadline: "Día 1 · 10am", done: false },
  { id: "t11", desc: "Verificar equipo audiovisual antes de la inauguración", role: "Soporte Técnico", phase: "Llegada", priority: "Alta", responsable: "Jefe de Soporte", deadline: "Día 1 · 9am", done: false },
  { id: "t12", desc: "Fotografiar llegada de delegaciones para CLIT", role: "Prensa / CLIT", phase: "Llegada", priority: "Media", responsable: "Equipo CLIT", deadline: "Día 1 · 8am", done: false },
  // Sesiones
  { id: "t13", desc: "Abrir y preparar salones 30 min antes de cada sesión", role: "Logística", phase: "Sesiones", priority: "Alta", responsable: "Equipo Logístico", deadline: "Cada sesión", done: false },
  { id: "t14", desc: "Supervisar protocolo durante los debates", role: "Protocolo", phase: "Sesiones", priority: "Alta", responsable: "Equipo Protocolo", deadline: "Cada sesión", done: false },
  { id: "t15", desc: "Gestionar micrófonos y presentaciones en vivo", role: "Soporte Técnico", phase: "Sesiones", priority: "Alta", responsable: "Técnico de Sala", deadline: "Cada sesión", done: false },
  { id: "t16", desc: "Publicar actualizaciones en redes del evento", role: "Prensa / CLIT", phase: "Sesiones", priority: "Media", responsable: "Community Manager", deadline: "En tiempo real", done: false },
  { id: "t17", desc: "Coordinar coffee break y alimentación con el hotel", role: "Alimentación", phase: "Sesiones", priority: "Media", responsable: "Coordinador Alimentación", deadline: "Receso de sesión", done: false },
  // Clausura
  { id: "t18", desc: "Preparar escenario para la ceremonia de clausura", role: "Logística", phase: "Clausura", priority: "Alta", responsable: "Coordinador General", deadline: "Día final · 2pm", done: false },
  { id: "t19", desc: "Preparar diplomas y reconocimientos", role: "Protocolo", phase: "Clausura", priority: "Alta", responsable: "Equipo Protocolo", deadline: "Día final · 1pm", done: false },
  { id: "t20", desc: "Documentar ceremonia de clausura (foto y video)", role: "Prensa / CLIT", phase: "Clausura", priority: "Alta", responsable: "Equipo CLIT", deadline: "Día final", done: false },
  { id: "t21", desc: "Desmontar y recoger materiales de los salones", role: "Logística", phase: "Clausura", priority: "Media", responsable: "Equipo Logístico", deadline: "Día final · 6pm", done: false },
  { id: "t22", desc: "Realizar informe final de incidencias técnicas", role: "Soporte Técnico", phase: "Clausura", priority: "Baja", responsable: "Jefe de Soporte", deadline: "Post-evento", done: false },
];

// =====================================================
// CLAVES DE ALMACENAMIENTO
// =====================================================

const storageKey = "minume-xvii-regional-directory";
const registrationsKey = "minume-xvii-registrations";
const adminSessionKey = "minume-xvii-admin-session";
const emailOutboxKey = "minume-xvii-email-outbox";
const hotelRoomsKey = "minume-xvii-hotel-rooms";
const tasksKey = "minume-xvii-tasks";
const staffKey = "minume-xvii-staff";

const adminCredentials = {
  user: "admin@minume.local",
  password: "MINUME17",
};

// =====================================================
// REFERENCIAS DOM
// =====================================================

const form = document.querySelector("#registrationForm");
const roleSelect = document.querySelector("#role");
const committeeRoleSelect = document.querySelector("#committeeRole");
const regionalSelect = document.querySelector("#regional");
const commissionSelect = document.querySelector("#commission");
const regionalPreview = document.querySelector("#regionalPreview");
const photoInput = document.querySelector("#photo");
const photoPreview = document.querySelector("#photoPreview");
const medicalCondition = document.querySelector("#medicalCondition");
const medicalDetail = document.querySelector("#medicalDetail");
const adminList = document.querySelector("#regionalAdminList");
const adminSummary = document.querySelector("#adminSummary");
const dialog = document.querySelector("#confirmationDialog");
const adminLogin = document.querySelector("#adminLogin");
const adminPanel = document.querySelector("#adminPanel");
const adminLoginForm = document.querySelector("#adminLoginForm");
const loginError = document.querySelector("#loginError");
const registrationsList = document.querySelector("#registrationsList");
const statusFilter = document.querySelector("#statusFilter");
const scanForm = document.querySelector("#scanForm");
const scanCodeInput = document.querySelector("#scanCode");
const scanResult = document.querySelector("#scanResult");
const simulateScanButton = document.querySelector("#simulateScan");
const emailSimulation = document.querySelector("#emailSimulation");
const emailOutbox = document.querySelector("#emailOutbox");
const reviewDialog = document.querySelector("#reviewDialog");
const reviewForm = document.querySelector("#reviewForm");
const reviewTitle = document.querySelector("#reviewTitle");
const reviewParticipant = document.querySelector("#reviewParticipant");
const reviewReason = document.querySelector("#reviewReason");

// =====================================================
// ESTADO
// =====================================================

let directory = loadDirectory();
let registrations = loadRegistrations();
let emailMessages = loadEmailMessages();
let hotelRooms = loadHotelRooms();
let tasks = loadTasks();
let staff = loadStaff();
let adminLoggedIn = localStorage.getItem(adminSessionKey) === "active";
let lastGeneratedCode = "";
let pendingReview = null;

// =====================================================
// FUNCIONES DE CARGA / GUARDADO
// =====================================================

function cloneDirectory(source) {
  return source.map((item) => ({ ...item }));
}

function loadDirectory() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return cloneDirectory(defaultDirectory);
  try { return JSON.parse(stored); } catch { return cloneDirectory(defaultDirectory); }
}

function loadRegistrations() {
  const stored = localStorage.getItem(registrationsKey);
  if (!stored) return [];
  try { return JSON.parse(stored); } catch { return []; }
}

function loadEmailMessages() {
  const stored = localStorage.getItem(emailOutboxKey);
  if (!stored) return [];
  try { return JSON.parse(stored); } catch { return []; }
}

function loadHotelRooms() {
  const stored = localStorage.getItem(hotelRoomsKey);
  if (!stored) return defaultHotelRooms.map((r) => ({ ...r }));
  try { return JSON.parse(stored); } catch { return defaultHotelRooms.map((r) => ({ ...r })); }
}

function loadTasks() {
  const stored = localStorage.getItem(tasksKey);
  if (!stored) return defaultTasks.map((t) => ({ ...t }));
  try { return JSON.parse(stored); } catch { return defaultTasks.map((t) => ({ ...t })); }
}

function loadStaff() {
  const stored = localStorage.getItem(staffKey);
  if (!stored) return defaultStaff.map((s) => ({ ...s }));
  try { return JSON.parse(stored); } catch { return defaultStaff.map((s) => ({ ...s })); }
}

function saveDirectory() {
  localStorage.setItem(storageKey, JSON.stringify(directory));
  renderRegionalPreview();
  renderAdminSummary();
}

function saveRegistrations() {
  localStorage.setItem(registrationsKey, JSON.stringify(registrations));
  renderRegistrations();
  renderAdminSummary();
}

function saveEmailMessages() {
  localStorage.setItem(emailOutboxKey, JSON.stringify(emailMessages));
  renderEmailOutbox();
}

function saveHotelRooms() {
  localStorage.setItem(hotelRoomsKey, JSON.stringify(hotelRooms));
}

function saveTasks() {
  localStorage.setItem(tasksKey, JSON.stringify(tasks));
}

function saveStaff() {
  localStorage.setItem(staffKey, JSON.stringify(staff));
}

// =====================================================
// UTILIDADES
// =====================================================

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) { resolve(""); return; }
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function formatBytes(bytes) {
  if (!bytes) return "0 KB";
  const units = ["B", "KB", "MB"];
  let size = bytes;
  let index = 0;
  while (size >= 1024 && index < units.length - 1) { size /= 1024; index += 1; }
  return `${size.toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function getRoleColor(role, type) {
  const data = staffRolesData[role];
  if (!data) return type === "color" ? "#68758a" : "#eef4fb";
  return data[type];
}

function getPhaseIcon(phase) {
  const icons = { "Pre-evento": "🕐", "Llegada": "✈️", "Sesiones": "🏛️", "Clausura": "🎓" };
  return icons[phase] || "📋";
}

function formatDate(value) {
  if (!value) return "Sin revisión";
  return new Date(value).toLocaleString("es-DO");
}

// =====================================================
// INICIALIZACIÓN DE SELECTORES
// =====================================================

function initializeSelects() {
  fillSelect(roleSelect, roles);
  fillSelect(committeeRoleSelect, committeeRoles);
  fillSelect(commissionSelect, commissions);

  const notApplicableOption = document.createElement("option");
  notApplicableOption.value = "N/A";
  notApplicableOption.textContent = "N/A";
  regionalSelect.append(notApplicableOption);
  defaultDirectory.forEach(({ regional }) => {
    const option = document.createElement("option");
    option.value = regional;
    option.textContent = regional;
    regionalSelect.append(option);
  });

  // Populate salon editor commission select
  const editorCommissionEl = document.querySelector("#editorCommission");
  if (editorCommissionEl) {
    const noneOpt = document.createElement("option");
    noneOpt.value = "";
    noneOpt.textContent = "Sin comisión asignada";
    editorCommissionEl.append(noneOpt);
    commissions.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      editorCommissionEl.append(opt);
    });
  }
}

// =====================================================
// SINCRONIZACIÓN DE CAMPOS DE FORMULARIO
// =====================================================

function normalizeRole(role) {
  return role.toLowerCase();
}

function syncRoleFields() {
  const role = normalizeRole(roleSelect.value);
  const isDelegate = role === "delegados nacionales";
  const isBoard = role === "mesas directivas";
  const isSecretariat = role === "secretarías generales" || role === "subsecretarías";

  document.querySelectorAll(".delegate-field").forEach((field) => field.classList.toggle("hidden", !isDelegate));
  document.querySelectorAll(".commission-field").forEach((field) => field.classList.toggle("hidden", !(isDelegate || isBoard)));
  document.querySelectorAll(".secretariat-field").forEach((field) => field.classList.toggle("hidden", !isSecretariat));
  document.querySelectorAll("[data-role-detail='mesa']").forEach((field) => field.classList.toggle("hidden", !isBoard));

  document.querySelector("#country").required = isDelegate;
  commissionSelect.required = isDelegate || isBoard;
  committeeRoleSelect.required = isBoard;
  document.querySelector("#area").required = isSecretariat;
}

function syncMedicalFields() {
  const needsDetail = medicalCondition.value === "Otra";
  document.querySelector(".medical-detail").classList.toggle("hidden", !needsDetail);
  medicalDetail.required = needsDetail;
}

// =====================================================
// VISTA REGIONAL
// =====================================================

function renderRegionalPreview() {
  const selected = directory.find((item) => item.regional === regionalSelect.value);
  if (!selected) {
    regionalPreview.innerHTML =
      regionalSelect.value === "N/A"
        ? "<span>Regional no aplicable. No se asignará técnico regional.</span>"
        : "<span>Seleccione una regional para ver los datos asignados.</span>";
    return;
  }
  regionalPreview.innerHTML = `
    <strong>${selected.regional}</strong> · Técnico regional: <strong>${selected.technicianName}</strong>,
    ${selected.technicianPhone}. Recepción de invitados: <strong>${selected.hostName}</strong>,
    ${selected.hostPhone}.
  `;
}

// =====================================================
// PANEL ADMIN — DIRECTORIO
// =====================================================

function renderAdmin() {
  adminList.innerHTML = "";
  directory.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "admin-card";
    card.innerHTML = `
      <h3>${item.regional}</h3>
      <div class="compact-grid">
        <label>Técnico<input data-field="technicianName" value="${item.technicianName}" /></label>
        <label>Teléfono técnico<input data-field="technicianPhone" value="${item.technicianPhone}" /></label>
        <label>Recibe invitados<input data-field="hostName" value="${item.hostName}" /></label>
        <label>Teléfono recepción<input data-field="hostPhone" value="${item.hostPhone}" /></label>
      </div>
    `;
    card.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", () => {
        directory[index][input.dataset.field] = input.value.trim();
        saveDirectory();
      });
    });
    adminList.append(card);
  });
  renderAdminSummary();
}

function renderAdminSummary() {
  const configured = directory.filter(
    (item) => item.technicianName && item.technicianPhone && item.hostName && item.hostPhone,
  ).length;
  const pending = registrations.filter((item) => item.status === "Pendiente").length;
  const approved = registrations.filter((item) => item.status === "Aprobado").length;
  const returned = registrations.filter((item) => item.status === "Devuelto" || item.status === "Rechazado").length;

  adminSummary.innerHTML = `
    <div><span>Regionales configuradas</span><strong>${configured} de ${directory.length}</strong></div>
    <div><span>Registros recibidos</span><strong>${registrations.length}</strong></div>
    <div><span>Pendientes</span><strong>${pending}</strong></div>
    <div><span>Aprobados / devueltos</span><strong>${approved} / ${returned}</strong></div>
    <div><span>Última actualización</span><strong>${new Date().toLocaleString("es-DO")}</strong></div>
  `;
}

// =====================================================
// CAMBIO DE VISTAS PRINCIPALES
// =====================================================

function switchView(view) {
  document.querySelector("#registroView").classList.toggle("hidden", view !== "registro");
  document.querySelector("#logisticaView").classList.toggle("hidden", view !== "logistica");
  document.querySelector("#adminView").classList.toggle("hidden", view !== "admin");
  document.querySelectorAll(".view-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });

  if (view === "admin") {
    renderAdminGate();
  }
  if (view === "logistica") {
    renderHotelMap();
    renderChecklist();
    renderStaffDirectory();
    renderRoleDutyDetail("Logística");
  }
}

// =====================================================
// LOGÍSTICA — TABS
// =====================================================

function switchLogisticaTab(tab) {
  document.querySelector("#croquisSubTab").classList.toggle("hidden", tab !== "croquis");
  document.querySelector("#checklistSubTab").classList.toggle("hidden", tab !== "checklist");
  document.querySelector("#staffSubTab").classList.toggle("hidden", tab !== "staff");
  document.querySelectorAll(".logistica-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.logisticaTab === tab);
  });
}

// =====================================================
// CROQUIS DE SALONES
// =====================================================

function renderHotelMap(floor) {
  const mapContainer = document.querySelector("#hotelMap");
  if (!mapContainer) return;

  const floorEl = document.querySelector("#floorFilter");
  const selectedFloor = floor ?? floorEl?.value ?? "Todos";
  const floors = ["Planta Baja", "Piso 1", "Piso 2"];
  const activeFloors = selectedFloor === "Todos" ? floors : [selectedFloor];

  mapContainer.innerHTML = activeFloors
    .map((f) => {
      const rooms = hotelRooms.filter((r) => r.floor === f);
      return `
        <div class="floor-section">
          <div class="floor-label">
            <span class="floor-icon">🏢</span> ${escapeHtml(f)}
            <span class="floor-room-count">${rooms.length} salones</span>
          </div>
          <div class="rooms-grid">
            ${rooms.map((room) => renderRoomCard(room)).join("")}
          </div>
        </div>
      `;
    })
    .join("");

  mapContainer.querySelectorAll(".room-card[data-id]").forEach((card) => {
    card.addEventListener("click", () => openSalonEditor(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openSalonEditor(card.dataset.id); }
    });
  });
}

function renderRoomCard(room) {
  const statusClass =
    room.status === "Sesión Activa" ? "active" :
    room.status === "En Receso" ? "recess" :
    room.status === "Clausurada" ? "closed" : "available";

  const delegateCount = registrations.filter((r) => r.commission === room.commission && room.commission).length;
  const commissionLabel = room.commission || "Sin comisión asignada";

  return `
    <div class="room-card room-${statusClass}" data-id="${escapeHtml(room.id)}" role="button" tabindex="0" aria-label="Editar ${escapeHtml(room.name)}">
      <div class="room-header">
        <span class="room-name">${escapeHtml(room.name)}</span>
        <span class="room-dot room-dot-${statusClass}"></span>
      </div>
      <div class="room-commission">${escapeHtml(commissionLabel)}</div>
      ${room.topic ? `<div class="room-topic">"${escapeHtml(room.topic)}"</div>` : ""}
      ${room.moderator ? `<div class="room-moderator">🪑 ${escapeHtml(room.moderator)}</div>` : ""}
      <div class="room-footer">
        <span class="room-capacity">👥 Cap. ${room.capacity}</span>
        ${room.commission && delegateCount > 0 ? `<span class="room-delegates">${delegateCount} delegados</span>` : ""}
        <span class="room-status-badge badge-${statusClass}">${escapeHtml(room.status)}</span>
      </div>
    </div>
  `;
}

function openSalonEditor(id) {
  const room = hotelRooms.find((r) => r.id === id);
  if (!room) return;
  const editor = document.querySelector("#salonEditor");
  document.querySelector("#editorSalonName").textContent = room.name;
  document.querySelector("#editorSalonId").value = room.id;
  document.querySelector("#editorCommission").value = room.commission;
  document.querySelector("#editorStatus").value = room.status;
  document.querySelector("#editorTopic").value = room.topic;
  document.querySelector("#editorModerator").value = room.moderator;
  editor.classList.remove("hidden");
  editor.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeSalonEditor() {
  document.querySelector("#salonEditor").classList.add("hidden");
}

function handleSalonEditorSubmit(event) {
  event.preventDefault();
  const id = document.querySelector("#editorSalonId").value;
  const idx = hotelRooms.findIndex((r) => r.id === id);
  if (idx === -1) return;
  hotelRooms[idx] = {
    ...hotelRooms[idx],
    commission: document.querySelector("#editorCommission").value,
    status: document.querySelector("#editorStatus").value,
    topic: document.querySelector("#editorTopic").value.trim(),
    moderator: document.querySelector("#editorModerator").value.trim(),
  };
  saveHotelRooms();
  closeSalonEditor();
  renderHotelMap();
}

// =====================================================
// CHECKLIST POR FASES
// =====================================================

function renderChecklist() {
  const container = document.querySelector("#checklistItems");
  if (!container) return;

  const roleFilter = document.querySelector("#taskRoleFilter")?.value || "Todos";
  const statusFilterVal = document.querySelector("#taskStatusFilter")?.value || "Todos";
  const phaseFilter = document.querySelector("#taskPhaseFilter")?.value || "Todos";

  const filtered = tasks.filter((t) => {
    const roleMatch = roleFilter === "Todos" || t.role === roleFilter;
    const statusMatch = statusFilterVal === "Todos" || (statusFilterVal === "Completada" ? t.done : !t.done);
    const phaseMatch = phaseFilter === "Todos" || t.phase === phaseFilter;
    return roleMatch && statusMatch && phaseMatch;
  });

  const completedTotal = tasks.filter((t) => t.done).length;
  const pct = tasks.length ? Math.round((completedTotal / tasks.length) * 100) : 0;

  if (!filtered.length) {
    container.innerHTML = `
      <div class="progress-bar-wrap">
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <span class="progress-label">${completedTotal} de ${tasks.length} tareas completadas (${pct}%)</span>
      </div>
      <div class="empty-state">No hay tareas para este filtro.</div>
    `;
    return;
  }

  const phases = ["Pre-evento", "Llegada", "Sesiones", "Clausura"];
  const grouped = {};
  for (const t of filtered) {
    if (!grouped[t.phase]) grouped[t.phase] = [];
    grouped[t.phase].push(t);
  }

  container.innerHTML = `
    <div class="progress-bar-wrap">
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      <span class="progress-label">${completedTotal} de ${tasks.length} tareas completadas (${pct}%)</span>
    </div>
    ${phases
      .filter((p) => grouped[p])
      .map(
        (phase) => `
          <div class="phase-group">
            <div class="phase-header">
              <span class="phase-icon">${getPhaseIcon(phase)}</span>
              <strong>${phase}</strong>
              <span class="phase-count">${grouped[phase].filter((t) => t.done).length}/${grouped[phase].length} completadas</span>
            </div>
            ${grouped[phase].map((task) => renderTaskItem(task)).join("")}
          </div>
        `,
      )
      .join("")}
  `;

  container.querySelectorAll(".task-checkbox").forEach((cb) => {
    cb.addEventListener("change", () => {
      const idx = tasks.findIndex((t) => t.id === cb.dataset.id);
      if (idx !== -1) {
        tasks[idx].done = cb.checked;
        saveTasks();
        renderChecklist();
      }
    });
  });
}

function renderTaskItem(task) {
  const priorityClass =
    task.priority === "Alta" ? "priority-high" :
    task.priority === "Media" ? "priority-mid" : "priority-low";
  const roleColor = getRoleColor(task.role, "color");
  const roleBg = getRoleColor(task.role, "bg");
  const roleIcon = staffRolesData[task.role]?.icon || "👤";

  return `
    <div class="task-item ${task.done ? "task-done" : ""}">
      <input class="task-checkbox" type="checkbox" ${task.done ? "checked" : ""} data-id="${escapeHtml(task.id)}" id="task-${escapeHtml(task.id)}" />
      <div class="task-body">
        <label for="task-${escapeHtml(task.id)}" class="task-desc">${escapeHtml(task.desc)}</label>
        <div class="task-meta">
          <span class="task-role-chip" style="background:${roleBg};color:${roleColor}">${roleIcon} ${escapeHtml(task.role)}</span>
          <span class="${priorityClass}">${escapeHtml(task.priority)}</span>
          <span class="task-meta-item">👤 ${escapeHtml(task.responsable)}</span>
          <span class="task-meta-item">⏰ ${escapeHtml(task.deadline)}</span>
        </div>
      </div>
    </div>
  `;
}

// =====================================================
// DIRECTORIO DE STAFF
// =====================================================

function renderRoleDutyDetail(role) {
  const detail = document.querySelector("#roleDutyDetail");
  if (!detail) return;
  const data = staffRolesData[role];
  if (!data) {
    detail.innerHTML = `<p>Seleccione un rol para ver sus funciones.</p>`;
    return;
  }
  detail.innerHTML = `
    <div class="role-detail-header">
      <span class="role-detail-icon">${data.icon}</span>
      <strong style="color:${data.color}">${role}</strong>
    </div>
    <ul class="role-functions-list">
      ${data.functions.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
    </ul>
  `;
}

function renderStaffDirectory() {
  const container = document.querySelector("#staffDirectoryList");
  if (!container) return;

  const roleFilter = document.querySelector("#staffRoleFilter")?.value || "Todos";
  const filtered = staff.filter((s) => roleFilter === "Todos" || s.role === roleFilter);

  if (!filtered.length) {
    container.innerHTML = `<div class="empty-state">No hay miembros de staff en este rol.</div>`;
    return;
  }

  // Group by role
  const grouped = {};
  for (const s of filtered) {
    if (!grouped[s.role]) grouped[s.role] = [];
    grouped[s.role].push(s);
  }

  container.innerHTML = Object.entries(grouped)
    .map(([role, members]) => {
      const roleData = staffRolesData[role] || { icon: "👤", color: "#68758a", bg: "#eef4fb" };
      return `
        <div class="staff-role-group">
          <div class="staff-role-header" style="border-color:${roleData.color}">
            <span>${roleData.icon} ${escapeHtml(role)}</span>
            <span class="staff-count">${members.length} miembro${members.length !== 1 ? "s" : ""}</span>
          </div>
          <div class="staff-cards-grid">
            ${members
              .map((m) => {
                const initials = m.name.split(" ").map((n) => n[0]).slice(0, 2).join("");
                return `
                  <div class="staff-card">
                    <div class="staff-avatar" style="background:${roleData.bg};color:${roleData.color}">${escapeHtml(initials)}</div>
                    <div class="staff-info">
                      <strong>${escapeHtml(m.name)}</strong>
                      <span>${escapeHtml(m.area)}</span>
                      <a href="tel:${escapeHtml(m.phone)}" class="staff-phone">${escapeHtml(m.phone)}</a>
                      ${m.note ? `<em class="staff-note">${escapeHtml(m.note)}</em>` : ""}
                    </div>
                    <button class="remove-staff-btn" type="button" data-remove-staff="${escapeHtml(m.id)}" title="Eliminar">✕</button>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll("[data-remove-staff]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!confirm("¿Eliminar este miembro del staff?")) return;
      staff = staff.filter((s) => s.id !== btn.dataset.removeStaff);
      saveStaff();
      renderStaffDirectory();
    });
  });
}

function handleAddStaff(event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const newMember = {
    id: `s${Date.now()}`,
    name: fd.get("staffName").trim(),
    role: fd.get("staffRole"),
    area: fd.get("staffArea").trim(),
    phone: fd.get("staffPhone").trim(),
    note: fd.get("staffNote").trim(),
  };
  if (!newMember.name) return;
  staff.push(newMember);
  saveStaff();
  event.target.reset();
  renderStaffDirectory();
}

// =====================================================
// ROOMING LIST (PANEL ADMIN)
// =====================================================

function renderRoomingList() {
  const container = document.querySelector("#roomingListContent");
  if (!container) return;

  const roomReg = registrations.filter((r) => r.roomNumber);
  const buildingFilter = document.querySelector("#buildingLeaderFilter")?.value.trim().toLowerCase() || "";
  const filtered = buildingFilter
    ? roomReg.filter((r) => r.buildingLeader?.toLowerCase().includes(buildingFilter))
    : roomReg;

  if (!filtered.length) {
    container.innerHTML = `<div class="empty-state">No hay participantes con habitación asignada. Los registros con habitación aparecerán aquí agrupados por habitación.</div>`;
    return;
  }

  const grouped = {};
  for (const r of filtered) {
    if (!grouped[r.roomNumber]) grouped[r.roomNumber] = [];
    grouped[r.roomNumber].push(r);
  }

  const totalRooms = Object.keys(grouped).length;
  const totalParticipants = filtered.length;
  const noRoom = registrations.length - roomReg.length;

  container.innerHTML = `
    <div class="rooming-stats">
      <div><span>Habitaciones activas</span><strong>${totalRooms}</strong></div>
      <div><span>Con alojamiento</span><strong>${totalParticipants}</strong></div>
      <div><span>Sin hab. asignada</span><strong>${noRoom}</strong></div>
    </div>
    <div class="rooming-grid">
      ${Object.entries(grouped)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([roomNum, occupants]) => {
          const leader = occupants[0]?.buildingLeader;
          return `
            <div class="rooming-card">
              <div class="rooming-card-header">
                <span class="room-number-badge">🛏️ Hab. ${escapeHtml(roomNum)}</span>
                <span class="room-occupancy">${occupants.length} persona${occupants.length !== 1 ? "s" : ""}</span>
                ${leader ? `<span class="building-leader-tag">🏢 Líder: ${escapeHtml(leader)}</span>` : ""}
              </div>
              <div class="rooming-occupants">
                ${occupants
                  .map(
                    (occ) => `
                      <div class="rooming-occupant">
                        ${occ.photoDataUrl
                          ? `<img class="rooming-photo" src="${occ.photoDataUrl}" alt="${escapeHtml(occ.firstName)}" />`
                          : `<div class="rooming-photo placeholder">${escapeHtml((occ.firstName || "?")[0])}${escapeHtml((occ.lastName || "?")[0])}</div>`}
                        <div class="rooming-occupant-info">
                          <strong>${escapeHtml(occ.firstName)} ${escapeHtml(occ.lastName)}</strong>
                          <span>${escapeHtml(occ.role)}</span>
                          <span>${escapeHtml(occ.regional)} · ${escapeHtml(occ.school)}</span>
                          <span class="status-pill" data-status="${escapeHtml(occ.status)}">${escapeHtml(occ.status)}</span>
                        </div>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

// =====================================================
// PANEL ADMIN — GATE & TABS
// =====================================================

function switchAdminTab(tab) {
  document.querySelector("#registrationsTab").classList.toggle("hidden", tab !== "registrations");
  document.querySelector("#directoryTab").classList.toggle("hidden", tab !== "directory");
  document.querySelector("#emailsTab").classList.toggle("hidden", tab !== "emails");
  document.querySelector("#roomingTab").classList.toggle("hidden", tab !== "rooming");
  document.querySelectorAll(".admin-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminTab === tab);
  });

  if (tab === "emails") renderEmailOutbox();
  if (tab === "directory") renderAdmin();
  if (tab === "rooming") renderRoomingList();
}

function renderAdminGate() {
  adminLogin.classList.toggle("hidden", adminLoggedIn);
  adminPanel.classList.toggle("hidden", !adminLoggedIn);
  if (adminLoggedIn) {
    renderRegistrations();
    renderEmailOutbox();
    renderAdminSummary();
    if (scanCodeInput.value) renderScanResult(scanCodeInput.value);
  }
}

function handleAdminLogin(event) {
  event.preventDefault();
  const formData = new FormData(adminLoginForm);
  const user = formData.get("adminUser").trim();
  const password = formData.get("adminPassword");

  if (user !== adminCredentials.user || password !== adminCredentials.password) {
    loginError.textContent = "Credenciales incorrectas. Verifique usuario y contraseña.";
    return;
  }
  loginError.textContent = "";
  adminLoggedIn = true;
  localStorage.setItem(adminSessionKey, "active");
  adminLoginForm.reset();
  renderAdminGate();
}

// =====================================================
// REVIEW DIALOG
// =====================================================

function openReviewDialog(id, status) {
  const item = registrations.find((registration) => registration.id === id);
  if (!item) return;
  pendingReview = { id, status };
  reviewTitle.textContent = status === "Aprobado" ? "Aprobar check-in" : "Devolver check-in";
  reviewParticipant.textContent = `${item.firstName} ${item.lastName} · ${item.code} · ${item.email}`;
  reviewReason.value = "";
  reviewDialog.showModal();
  reviewReason.focus();
}

function closeReviewDialog() {
  pendingReview = null;
  reviewForm.reset();
  reviewDialog.close();
}

function handleReviewSubmit(event) {
  event.preventDefault();
  if (!pendingReview) return;
  const reason = reviewReason.value.trim();
  if (!reason) {
    reviewReason.setCustomValidity("Debe escribir el motivo de la decisión.");
    reviewReason.reportValidity();
    return;
  }
  reviewReason.setCustomValidity("");
  const item = registrations.find((registration) => registration.id === pendingReview.id);
  if (!item) return;
  updateRegistrationStatus(pendingReview.id, pendingReview.status, reason);
  queueEmailMessage(item, pendingReview.status, reason);
  closeReviewDialog();
}

// =====================================================
// REGISTROS
// =====================================================

function updateRegistrationStatus(id, status, reason) {
  registrations = registrations.map((item) =>
    item.id === id
      ? { ...item, status, reviewReason: reason, emailSentAt: new Date().toISOString(), reviewedAt: new Date().toISOString() }
      : item,
  );
  saveRegistrations();
}

function renderParticipantFile(item) {
  const condition = item.medicalDetail
    ? `${escapeHtml(item.medicalCondition)} - ${escapeHtml(item.medicalDetail)}`
    : escapeHtml(item.medicalCondition);
  const certificateLink = item.certificateDataUrl
    ? `<a class="file-link" href="${item.certificateDataUrl}" download="${escapeHtml(item.certificateName)}">Ver certificado medico PDF</a>`
    : `<span class="file-missing">Certificado no disponible</span>`;

  return `
    <article class="participant-file">
      <div class="participant-photo-wrap">
        ${item.photoDataUrl
          ? `<img class="participant-photo" src="${item.photoDataUrl}" alt="Foto 2x2 de ${escapeHtml(item.firstName)} ${escapeHtml(item.lastName)}" />`
          : `<div class="participant-photo placeholder">Sin foto</div>`}
      </div>
      <div class="participant-info">
        <div class="participant-heading">
          <div>
            <p class="eyebrow">Ficha de check-in</p>
            <h3>${escapeHtml(item.firstName)} ${escapeHtml(item.lastName)}</h3>
          </div>
          <span class="status-pill" data-status="${escapeHtml(item.status)}">${escapeHtml(item.status)}</span>
        </div>
        <div class="detail-grid">
          <div><span>Codigo</span><strong>${escapeHtml(item.code)}</strong></div>
          <div><span>Rol</span><strong>${escapeHtml(item.role)}</strong></div>
          <div><span>Regional</span><strong>${escapeHtml(item.regional)}</strong></div>
          <div><span>Centro</span><strong>${escapeHtml(item.school)}</strong></div>
          <div><span>Telefono</span><strong>${escapeHtml(item.phone)}</strong></div>
          <div><span>Correo</span><strong>${escapeHtml(item.email)}</strong></div>
          <div><span>Medico</span><strong>${condition}</strong></div>
          <div><span>Alergias</span><strong>${escapeHtml(item.allergies)}</strong></div>
          <div><span>Tratamiento</span><strong>${escapeHtml(item.treatment)}</strong></div>
          <div><span>Emergencia</span><strong>${escapeHtml(item.emergencyName)} - ${escapeHtml(item.emergencyPhone)}</strong></div>
          <div><span>Tecnico regional</span><strong>${escapeHtml(item.technicianName)} - ${escapeHtml(item.technicianPhone)}</strong></div>
          <div><span>Recepcion</span><strong>${escapeHtml(item.hostName)} - ${escapeHtml(item.hostPhone)}</strong></div>
          <div><span>Habitación</span><strong>${escapeHtml(item.roomNumber || "No asignada")}</strong></div>
          <div><span>Compañero</span><strong>${escapeHtml(item.roommate || "Ninguno")}</strong></div>
          <div><span>Líder Edificio/Bloque</span><strong>${escapeHtml(item.buildingLeader || "No asignado")}</strong></div>
        </div>
        <div class="file-row">
          ${certificateLink}
          <span>${escapeHtml(item.certificateName || "Sin archivo")} - ${formatBytes(Number(item.certificateSize || 0))}</span>
        </div>
        <div class="email-log">${escapeHtml(item.emailSimulation || "Simulacion de correo registrada.")}</div>
      </div>
    </article>
  `;
}

function renderScanResult(code) {
  const normalizedCode = code.trim();
  const found = registrations.find((item) => item.code.toLowerCase() === normalizedCode.toLowerCase());

  if (!normalizedCode) {
    scanResult.classList.add("hidden");
    scanResult.innerHTML = "";
    return false;
  }

  scanResult.classList.remove("hidden");
  if (!found) {
    scanResult.innerHTML = `
      <div class="scan-error">
        Codigo no encontrado. Verifique que el QR pertenezca a esta simulacion local.
      </div>
    `;
    return false;
  }

  scanResult.innerHTML = renderParticipantFile(found);
  return true;
}

function renderRegistrations() {
  if (!registrationsList) return;
  const filter = statusFilter.value;
  const visible = registrations
    .filter((item) => filter === "Todos" || item.status === filter)
    .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

  if (!visible.length) {
    registrationsList.innerHTML = `
      <div class="empty-state">
        No hay registros para este filtro. Los formularios enviados aparecerán aquí en tiempo local.
      </div>
    `;
    return;
  }

  registrationsList.innerHTML = visible
    .map(
      (item) => `
        <article class="registration-card" data-status="${escapeHtml(item.status)}">
          ${item.photoDataUrl
            ? `<img class="record-photo" src="${item.photoDataUrl}" alt="Foto de ${escapeHtml(item.firstName)} ${escapeHtml(item.lastName)}" />`
            : `<div class="record-photo placeholder">Foto</div>`}
          <div>
            <h3>${escapeHtml(item.firstName)} ${escapeHtml(item.lastName)}</h3>
            <div class="record-meta">
              <span>${escapeHtml(item.code)}</span>
              <span>${escapeHtml(item.role)}</span>
              <span>${escapeHtml(item.regional)}</span>
              <span>${escapeHtml(item.school)}</span>
              <span>Enviado: ${formatDate(item.submittedAt)}</span>
              <span>Revisión: ${formatDate(item.reviewedAt)}</span>
            </div>
            <div class="record-health">
              <span>Condición: ${escapeHtml(item.medicalCondition)}${item.medicalDetail ? ` - ${escapeHtml(item.medicalDetail)}` : ""}</span>
              <span>Emergencia: ${escapeHtml(item.emergencyName)} · ${escapeHtml(item.emergencyPhone)}</span>
            </div>
            <p class="record-notes">
              Teléfono: ${escapeHtml(item.phone)} · Correo: ${escapeHtml(item.email)}
              ${item.committeeRole ? ` · Comité: ${escapeHtml(item.committeeRole)}` : ""}
              ${item.commission ? ` · Comisión: ${escapeHtml(item.commission)}` : ""}
              ${item.country ? ` · Asignación: ${escapeHtml(item.country)}` : ""}
              ${item.area ? ` · Área: ${escapeHtml(item.area)}` : ""}
              ${item.roomNumber ? ` · Hab: ${escapeHtml(item.roomNumber)}` : ""}
              ${item.roommate ? ` · Compañero: ${escapeHtml(item.roommate)}` : ""}
              ${item.buildingLeader ? ` · Líder Bloque: ${escapeHtml(item.buildingLeader)}` : ""}
              ${item.reviewReason ? ` · Motivo: ${escapeHtml(item.reviewReason)}` : ""}
            </p>
          </div>
          <div class="record-actions">
            <div class="admin-qr-panel">
              <canvas class="admin-qr" width="120" height="120" data-id="${escapeHtml(item.id)}" aria-label="QR de ${escapeHtml(item.code)}"></canvas>
              <span>${escapeHtml(item.code)}</span>
            </div>
            <span class="status-pill" data-status="${escapeHtml(item.status)}">${escapeHtml(item.status)}</span>
            <button class="secondary-button" type="button" data-action="scan" data-id="${escapeHtml(item.id)}">Ver ficha QR</button>
            <button class="secondary-button" type="button" data-action="approve" data-id="${escapeHtml(item.id)}">Aprobar check-in</button>
            <button class="danger-button" type="button" data-action="return" data-id="${escapeHtml(item.id)}">Devolver</button>
          </div>
        </article>
      `,
    )
    .join("");
  drawAdminQrs();
}

// =====================================================
// EMAIL
// =====================================================

function buildEmailMessage(item, status, reason) {
  const approved = status === "Aprobado";
  const subject = approved
    ? `MINUME XVII Check-In aprobado - ${item.code}`
    : `MINUME XVII Check-In devuelto - ${item.code}`;
  const body = [
    `Estimado/a ${item.firstName} ${item.lastName},`,
    "",
    approved
      ? "Su check-in para MINUME XVII ha sido aprobado."
      : "Su check-in para MINUME XVII ha sido devuelto para revisión.",
    "",
    `Código QR: ${item.code}`,
    `Estado: ${status}`,
    `Motivo: ${reason}`,
    "",
    `Técnico regional: ${item.technicianName} - ${item.technicianPhone}`,
    `Recepción de invitados: ${item.hostName} - ${item.hostPhone}`,
    "",
    "Plataforma SGL - MINUME XVII Check-In",
  ].join("\n");

  return {
    id: `${item.code}-${Date.now()}`,
    to: item.email,
    subject,
    body,
    status,
    reason,
    participant: `${item.firstName} ${item.lastName}`,
    code: item.code,
    createdAt: new Date().toISOString(),
  };
}

function createMailto(message) {
  const query = new URLSearchParams({ subject: message.subject, body: message.body });
  return `mailto:${encodeURIComponent(message.to)}?${query.toString()}`;
}

function queueEmailMessage(item, status, reason) {
  const message = buildEmailMessage(item, status, reason);
  emailMessages.unshift(message);
  saveEmailMessages();
  const link = document.createElement("a");
  link.href = createMailto(message);
  link.target = "_blank";
  link.rel = "noopener";
  document.body.append(link);
  link.click();
  link.remove();
}

function renderEmailOutbox() {
  if (!emailOutbox) return;
  if (!emailMessages.length) {
    emailOutbox.innerHTML = `
      <div class="empty-state">
        Aún no hay correos generados. Al aprobar o devolver un registro se creará un mensaje aquí.
      </div>
    `;
    return;
  }
  emailOutbox.innerHTML = emailMessages
    .map(
      (message) => `
        <article class="email-card">
          <h3>${escapeHtml(message.subject)}</h3>
          <div class="email-meta">
            <span>Para: ${escapeHtml(message.to)}</span>
            <span>Participante: ${escapeHtml(message.participant)}</span>
            <span>Estado: ${escapeHtml(message.status)}</span>
            <span>Generado: ${formatDate(message.createdAt)}</span>
          </div>
          <p>${escapeHtml(message.body).replaceAll("\n", "<br>")}</p>
          <a class="file-link" href="${createMailto(message)}">Abrir borrador de correo</a>
        </article>
      `,
    )
    .join("");
}

// =====================================================
// QR
// =====================================================

function makeQrPayload(data) {
  return ["MINUME-XVII", data.code, data.firstName, data.lastName, data.role, data.regional].join("|");
}

function drawQrOnCanvas(canvas, payload) {
  const context = canvas.getContext("2d");
  const cells = 29;
  const size = canvas.width / cells;
  let seed = 0;
  for (const char of payload) { seed = (seed * 31 + char.charCodeAt(0)) >>> 0; }

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);

  function randomBit(row, col) {
    const value = Math.sin(seed + row * 41 + col * 67) * 10000;
    return value - Math.floor(value) > 0.52;
  }

  function finder(x, y) {
    context.fillStyle = "#102139";
    context.fillRect(x * size, y * size, size * 7, size * 7);
    context.fillStyle = "#ffffff";
    context.fillRect((x + 1) * size, (y + 1) * size, size * 5, size * 5);
    context.fillStyle = "#102139";
    context.fillRect((x + 2) * size, (y + 2) * size, size * 3, size * 3);
  }

  for (let row = 0; row < cells; row += 1) {
    for (let col = 0; col < cells; col += 1) {
      const inFinder =
        (row < 8 && col < 8) ||
        (row < 8 && col > cells - 9) ||
        (row > cells - 9 && col < 8);
      if (!inFinder && randomBit(row, col)) {
        context.fillStyle = (row + col) % 5 === 0 ? "#0b5cad" : "#102139";
        context.fillRect(col * size, row * size, Math.ceil(size), Math.ceil(size));
      }
    }
  }
  finder(0, 0);
  finder(cells - 7, 0);
  finder(0, cells - 7);
}

function drawPseudoQr(payload) {
  drawQrOnCanvas(document.querySelector("#qrCanvas"), payload);
}

function drawAdminQrs() {
  document.querySelectorAll(".admin-qr").forEach((canvas) => {
    const registration = registrations.find((item) => item.id === canvas.dataset.id);
    if (registration) {
      drawQrOnCanvas(canvas, registration.qrPayload || makeQrPayload(registration));
    }
  });
}

// =====================================================
// FORMULARIO DE REGISTRO
// =====================================================

function collectFormData() {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}

function createRegistration(data, code, assets, selected, payload) {
  return {
    id: code,
    code,
    status: "Pendiente",
    submittedAt: new Date().toISOString(),
    reviewedAt: "",
    reviewReason: "",
    emailSentAt: "",
    firstName: data.firstName,
    lastName: data.lastName,
    role: data.role,
    committeeRole: data.committeeRole || "",
    regional: data.regional,
    school: data.school,
    phone: data.phone,
    email: data.email,
    commission: data.commission || "",
    country: data.country || "",
    area: data.area || "",
    roomNumber: data.roomNumber || "",
    roommate: data.roommate || "",
    buildingLeader: data.buildingLeader || "",
    medicalCondition: data.medicalCondition,
    medicalDetail: data.medicalDetail || "",
    allergies: data.allergies,
    treatment: data.treatment,
    emergencyName: data.emergencyName,
    emergencyPhone: data.emergencyPhone,
    photoDataUrl: assets.photoDataUrl,
    photoName: assets.photoName,
    certificateDataUrl: assets.certificateDataUrl,
    certificateName: assets.certificateName,
    certificateSize: assets.certificateSize,
    technicianName: selected.technicianName,
    technicianPhone: selected.technicianPhone,
    hostName: selected.hostName,
    hostPhone: selected.hostPhone,
    qrPayload: payload,
    emailSimulation: `Simulacion: comprobante, QR y datos de check-in enviados a ${data.email}.`,
  };
}

function handlePhotoPreview() {
  const file = photoInput.files[0];
  if (!file) { photoPreview.removeAttribute("src"); return; }
  photoPreview.src = URL.createObjectURL(file);
}

function validateCertificate() {
  const certificate = document.querySelector("#certificate").files[0];
  if (!certificate) return false;
  return certificate.type === "application/pdf" || certificate.name.toLowerCase().endsWith(".pdf");
}

async function handleSubmit(event) {
  event.preventDefault();
  if (!validateCertificate()) {
    document.querySelector("#certificate").setCustomValidity("Debe adjuntar un certificado médico en PDF.");
    document.querySelector("#certificate").reportValidity();
    return;
  }
  document.querySelector("#certificate").setCustomValidity("");
  const data = collectFormData();
  const selected = directory.find((item) => item.regional === data.regional) || {
    technicianName: "No aplica",
    technicianPhone: "No aplica",
    hostName: "No aplica",
    hostPhone: "No aplica",
  };
  const code = `MXVII-${data.regional.replace("/", "")}-${Date.now().toString().slice(-6)}`;
  const payload = makeQrPayload({ ...data, code });
  const photoFile = photoInput.files[0];
  const certificateFile = document.querySelector("#certificate").files[0];
  const assets = {
    photoDataUrl: await readFileAsDataUrl(photoFile),
    photoName: photoFile?.name || "",
    certificateDataUrl: await readFileAsDataUrl(certificateFile),
    certificateName: certificateFile?.name || "",
    certificateSize: certificateFile?.size || 0,
  };

  registrations.unshift(createRegistration(data, code, assets, selected, payload));
  lastGeneratedCode = code;
  saveRegistrations();

  document.querySelector("#confirmationName").textContent = `${data.firstName} ${data.lastName}`;
  document.querySelector("#confirmationMeta").textContent = `${data.role} · ${data.regional} · ${data.school} · Habitación: ${data.roomNumber || "No asignada"} · Estado: Pendiente de revisión`;
  document.querySelector("#confirmationTech").textContent = selected.technicianName;
  document.querySelector("#confirmationTechPhone").textContent = selected.technicianPhone;
  document.querySelector("#confirmationHost").textContent = selected.hostName;
  document.querySelector("#confirmationHostPhone").textContent = selected.hostPhone;
  document.querySelector("#qrCodeText").textContent = code;
  emailSimulation.textContent = `Simulacion: comprobante enviado a ${data.email}.`;

  drawPseudoQr(payload);
  dialog.showModal();
}

// =====================================================
// EVENT LISTENERS
// =====================================================

// Navegación principal
document.querySelectorAll(".view-button").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

// Logística — tabs
document.querySelectorAll(".logistica-tab").forEach((btn) => {
  btn.addEventListener("click", () => switchLogisticaTab(btn.dataset.logisticaTab));
});

// Croquis
document.querySelector("#floorFilter")?.addEventListener("change", () => renderHotelMap());
document.querySelector("#salonEditorForm")?.addEventListener("submit", handleSalonEditorSubmit);
document.querySelector("#closeSalonEditor")?.addEventListener("click", closeSalonEditor);

// Checklist
document.querySelector("#taskRoleFilter")?.addEventListener("change", renderChecklist);
document.querySelector("#taskStatusFilter")?.addEventListener("change", renderChecklist);
document.querySelector("#taskPhaseFilter")?.addEventListener("change", renderChecklist);
document.querySelector("#resetTasksButton")?.addEventListener("click", () => {
  if (confirm("¿Restaurar todas las tareas a su estado original?")) {
    tasks = defaultTasks.map((t) => ({ ...t }));
    saveTasks();
    renderChecklist();
  }
});
document.querySelector("#newTaskForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const fd = new FormData(event.target);
  const newTask = {
    id: `t${Date.now()}`,
    desc: fd.get("desc").trim(),
    role: fd.get("role"),
    phase: fd.get("phase") || "Sesiones",
    priority: fd.get("priority"),
    responsable: fd.get("responsable")?.trim() || "Por asignar",
    deadline: fd.get("deadline")?.trim() || "Sin fecha límite",
    done: false,
  };
  if (!newTask.desc) return;
  tasks.push(newTask);
  saveTasks();
  event.target.reset();
  renderChecklist();
});

// Staff
document.querySelectorAll(".role-tag").forEach((tag) => {
  tag.addEventListener("click", () => {
    document.querySelectorAll(".role-tag").forEach((t) => t.classList.remove("active"));
    tag.classList.add("active");
    renderRoleDutyDetail(tag.dataset.roleDuty);
  });
});
document.querySelector("#staffRoleFilter")?.addEventListener("change", renderStaffDirectory);
document.querySelector("#addStaffForm")?.addEventListener("submit", handleAddStaff);
document.querySelector("#resetStaffButton")?.addEventListener("click", () => {
  if (confirm("¿Restaurar el directorio de staff base?")) {
    staff = defaultStaff.map((s) => ({ ...s }));
    saveStaff();
    renderStaffDirectory();
  }
});

// Admin — login/logout
adminLoginForm.addEventListener("submit", handleAdminLogin);
document.querySelector("#adminLogout").addEventListener("click", () => {
  adminLoggedIn = false;
  localStorage.removeItem(adminSessionKey);
  renderAdminGate();
});

// Admin — tabs
document.querySelectorAll(".admin-tab").forEach((button) => {
  button.addEventListener("click", () => switchAdminTab(button.dataset.adminTab));
});

// Admin — registros
statusFilter.addEventListener("change", renderRegistrations);
registrationsList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "scan") {
    scanCodeInput.value = button.dataset.id;
    renderScanResult(button.dataset.id);
    scanResult.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  openReviewDialog(button.dataset.id, button.dataset.action === "approve" ? "Aprobado" : "Devuelto");
});
document.querySelector("#clearRegistrations").addEventListener("click", () => {
  if (confirm("¿Eliminar todos los registros?")) { registrations = []; saveRegistrations(); }
});

// Admin — rooming list
document.querySelector("#buildingLeaderFilter")?.addEventListener("input", renderRoomingList);

// Admin — directorio
document.querySelector("#resetAdmin").addEventListener("click", () => {
  directory = cloneDirectory(defaultDirectory);
  saveDirectory();
  renderAdmin();
});

// Admin — correos
document.querySelector("#clearEmails").addEventListener("click", () => {
  emailMessages = [];
  saveEmailMessages();
});

// Scan
scanForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderScanResult(scanCodeInput.value);
});
simulateScanButton.addEventListener("click", () => {
  if (!lastGeneratedCode) return;
  dialog.close();
  switchView("admin");
  scanCodeInput.value = lastGeneratedCode;
  if (adminLoggedIn) renderScanResult(lastGeneratedCode);
});

// Review dialog
reviewForm.addEventListener("submit", handleReviewSubmit);
document.querySelector("#reviewCancel").addEventListener("click", closeReviewDialog);
document.querySelector("#reviewClose").addEventListener("click", closeReviewDialog);

// Confirmación dialog
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

// Formulario de registro
roleSelect.addEventListener("change", syncRoleFields);
medicalCondition.addEventListener("change", syncMedicalFields);
regionalSelect.addEventListener("change", renderRegionalPreview);
photoInput.addEventListener("change", handlePhotoPreview);
form.addEventListener("submit", handleSubmit);
form.addEventListener("reset", () => {
  setTimeout(() => {
    syncRoleFields();
    syncMedicalFields();
    renderRegionalPreview();
    photoPreview.removeAttribute("src");
  });
});

// Storage sync (multi-tab)
window.addEventListener("storage", (event) => {
  if (event.key === registrationsKey) {
    registrations = loadRegistrations();
    renderRegistrations();
    renderAdminSummary();
  }
  if (event.key === storageKey) {
    directory = loadDirectory();
    renderRegionalPreview();
    renderAdmin();
  }
  if (event.key === emailOutboxKey) {
    emailMessages = loadEmailMessages();
    renderEmailOutbox();
  }
  if (event.key === hotelRoomsKey) {
    hotelRooms = loadHotelRooms();
    renderHotelMap();
  }
  if (event.key === tasksKey) {
    tasks = loadTasks();
    renderChecklist();
  }
});

// =====================================================
// INICIALIZACIÓN
// =====================================================

initializeSelects();
syncRoleFields();
syncMedicalFields();
renderAdmin();
renderAdminGate();
