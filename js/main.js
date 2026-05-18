/* ═══════════════════════════════════════
   STUDENTHELPER — main.js
═══════════════════════════════════════ */

// ── ДАННЫЕ СТУДЕНТОВ ─────────────────────────────────────────

const STUDENTS = [
  {
    id: 1, name: 'Иван Петров', year: 4, group: 'УПП-211',
    direction: 'Управление перевозочными процессами',
    subjects: ['Организация движения поездов', 'Грузовые перевозки', 'Станции и узлы', 'Теория транспортных процессов'],
    phone: '+7 (999) 123-45-67', vk: 'vk.com/ivan_petrov', email: 'ivan.petrov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=11',
    bio: 'Привет! Я Иван, четвёртый курс УПП в МИИТ. Обожаю логистику — особенно когда поезда идут по графику. Помогаю с организацией движения и станциями: объясню так, чтобы дошло, а не просто решу за тебя :)'
  },
  {
    id: 2, name: 'Мария Сидорова', year: 5, group: 'ИСТ-202',
    direction: 'Информационные системы на транспорте',
    subjects: ['Python', 'Базы данных', 'Сети ЭВМ', 'Информационные системы на транспорте'],
    phone: '+7 (999) 987-65-43', vk: 'vk.com/maria_sidorova', email: 'maria.sid@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=47',
    bio: 'Привет! Меня зовут Маша. Пишу код с 14 лет, сейчас на пятом курсе ИСТ МИИТ. Могу помочь с питоном или базами данных транспортных систем. Без лишней теории — сразу на практике :)'
  },
  {
    id: 3, name: 'Алексей Иванов', year: 2, group: 'ЭЭТ-231',
    direction: 'Электроэнергетика и электротехника',
    subjects: ['ТОЭ', 'Электрические машины', 'Тяговые подстанции', 'Электроснабжение ж/д'],
    phone: '+7 (999) 555-11-22', vk: 'vk.com/alex_ivanov', email: 'alex.ivanov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=3',
    bio: 'Привет, я Лёша! Второй курс ЭЭТ в МИИТ. ТОЭ и тяговые подстанции понимаю лучше, чем их объясняют на парах. Если запутался в задачах или лабах — пиши, разберёмся вместе.'
  },
  {
    id: 4, name: 'Екатерина Новикова', year: 3, group: 'МНТ-221',
    direction: 'Менеджмент на транспорте',
    subjects: ['Управление транспортным предприятием', 'Транспортный маркетинг', 'Стратегический менеджмент'],
    phone: '+7 (999) 444-33-22', vk: 'vk.com/kate_novikova', email: 'kate.nov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=44',
    bio: 'Привет! Я Катя, третий курс МНТ. Помогаю с управлением транспортным предприятием и маркетингом в МИИТ. Всё разложу по полочкам — ненудно и по делу.'
  },
  {
    id: 5, name: 'Дмитрий Козлов', year: 5, group: 'ИСТ-201',
    direction: 'Информационные системы на транспорте',
    subjects: ['Python', 'Базы данных', 'Сети ЭВМ'],
    phone: '+7 (999) 333-22-11', vk: 'vk.com/dima_kozlov', email: 'dima.kozlov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=12',
    bio: 'Привет! Я Дима, пятый курс ИСТ. Разбираюсь в сетях и базах данных для железной дороги в МИИТ — помогу не только сдать, но и реально понять, как это работает под капотом.'
  },
  {
    id: 6, name: 'Анна Морозова', year: 1, group: 'ЭТП-241',
    direction: 'Экономика транспортного предприятия',
    subjects: ['Экономика транспорта', 'Статистика', 'Ценообразование'],
    phone: '+7 (999) 111-22-33', vk: 'vk.com/anna_morozova', email: 'anna.mor@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=48',
    bio: 'Привет! Я Аня, только поступила на ЭТП МИИТ. Школьную программу знаю крепко, первокурсникам помогу войти в ритм — статистика и экономика пока даются легко.'
  },
  {
    id: 7, name: 'Сергей Попов', year: 'grad', group: 'ИСТ-192',
    direction: 'Информационные системы на транспорте',
    subjects: ['Python', 'Базы данных', 'Сети ЭВМ', 'Информационные системы на транспорте'],
    phone: '+7 (999) 222-33-44', vk: 'vk.com/sergey_popov', email: 's.popov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=15',
    bio: 'Привет! Я Серёга, выпускник ИСТ МИИТ, уже работаю в РЖД. Объясню питон, базы данных и транспортные системы так, как это реально устроено в индустрии, а не только для экзамена.'
  },
  {
    id: 8, name: 'Ольга Лебедева', year: 2, group: 'ПСЖ-231',
    direction: 'Подвижной состав железных дорог',
    subjects: ['Вагоны и вагонное хозяйство', 'ТО подвижного состава', 'Механика', 'Детали машин'],
    phone: '+7 (999) 333-44-55', vk: 'vk.com/olga_lebedeva', email: 'o.leb@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=49',
    bio: 'Привет! Я Оля, второй курс ПСЖ. Мне нравятся вагоны, и я умею объяснять сложные вещи простыми словами. Механика, детали машин — обращайся, МИИТовцы!'
  },
  {
    id: 9, name: 'Андрей Смирнов', year: 4, group: 'АТТ-212',
    direction: 'Автоматика и телемеханика на транспорте',
    subjects: ['Системы ЖАТ', 'Автоблокировка', 'Микропроцессорные системы', 'ТАУ'],
    phone: '+7 (999) 444-55-66', vk: 'vk.com/andrey_smirnov', email: 'a.smirnov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=17',
    bio: 'Привет! Меня зовут Андрей, четвёртый курс АТТ. Специализируюсь на системах ЖАТ и автоблокировке в МИИТ. ТАУ объясняю без занудных лекций — через живые примеры.'
  },
  {
    id: 10, name: 'Татьяна Волкова', year: 3, group: 'ЭТП-221',
    direction: 'Экономика транспортного предприятия',
    subjects: ['Экономика транспорта', 'Финансы предприятий', 'Статистика', 'Ценообразование'],
    phone: '+7 (999) 555-66-77', vk: 'vk.com/tanya_volkova', email: 't.volkova@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=53',
    bio: 'Привет! Я Таня, третий курс ЭТП в МИИТ. Помогаю разобраться с экономикой транспорта, финансами и ценообразованием. Готовиться к экзамену вместе — всегда проще и веселее!'
  },
  {
    id: 11, name: 'Никита Зайцев', year: 1, group: 'ИСТ-242',
    direction: 'Информационные системы на транспорте',
    subjects: ['Python', 'Базы данных'],
    phone: '+7 (999) 666-77-88', vk: 'vk.com/nikita_zaitsev', email: 'n.zaitsev@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=7',
    bio: 'Привет! Я Никита, первокурсник ИСТ МИИТ. Хорошо шарю в базовом программировании — помогу тем, кто только знакомится с питоном и алгоритмами. Сам недавно через это прошёл.'
  },
  {
    id: 12, name: 'Виктория Кузнецова', year: 'grad', group: 'СЖД-191',
    direction: 'Строительство железных дорог, мостов и тоннелей',
    subjects: ['Железнодорожный путь', 'Механика грунтов', 'Сопромат', 'Проектирование ж/д'],
    phone: '+7 (999) 777-88-99', vk: 'vk.com/vika_kuznetsova', email: 'v.kuz@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=56',
    bio: 'Привет! Я Вика, выпускница СЖД МИИТ, проектирую новые пути. Сопромат, механика грунтов и проектирование — мои любимые темы. Объясню даже самое заковыристое.'
  },
  {
    id: 13, name: 'Павел Соколов', year: 5, group: 'АТТ-201',
    direction: 'Автоматика и телемеханика на транспорте',
    subjects: ['Системы ЖАТ', 'Автоблокировка', 'Микропроцессорные системы', 'ТАУ'],
    phone: '+7 (999) 888-99-00', vk: 'vk.com/pavel_sokolov', email: 'p.sokolov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=19',
    bio: 'Привет! Я Паша, пятый курс АТТ МИИТ. Работаю с микропроцессорными системами и ТАУ. Если не понимаешь что происходит на лабах по автоблокировке — приходи, разберёмся.'
  },
  {
    id: 14, name: 'Наталья Михайлова', year: 2, group: 'ЛОГ-231',
    direction: 'Логистика и управление цепями поставок',
    subjects: ['Транспортная логистика', 'Управление цепями поставок', 'Грузоведение', 'Складское дело'],
    phone: '+7 (999) 100-20-30', vk: 'vk.com/nataly_mikh', email: 'n.mikh@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=57',
    bio: 'Привет! Я Наташа, второй курс ЛОГ. Логистика пугает только поначалу — помогу разобраться с грузоведением и цепями поставок в МИИТ, чтобы задачи не казались страшными.'
  },
  {
    id: 15, name: 'Роман Фёдоров', year: 3, group: 'УПП-222',
    direction: 'Управление перевозочными процессами',
    subjects: ['Организация движения поездов', 'Грузовые перевозки', 'Станции и узлы'],
    phone: '+7 (999) 200-30-40', vk: 'vk.com/roman_fedorov', email: 'r.fed@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=20',
    bio: 'Привет! Меня зовут Рома, третий курс УПП в МИИТ. Занимаюсь станциями и узлами. Помогу, если нужно разобраться с грузовыми перевозками и графиком движения.'
  },
  {
    id: 16, name: 'Ксения Орлова', year: 4, group: 'СЖД-211',
    direction: 'Строительство железных дорог, мостов и тоннелей',
    subjects: ['Железнодорожный путь', 'Механика грунтов', 'Сопромат', 'Проектирование ж/д'],
    phone: '+7 (999) 300-40-50', vk: 'vk.com/ksen_orlova', email: 'k.orlova@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=58',
    bio: 'Привет! Я Ксюша, четвёртый курс СЖД. Проектирование ж/д и сопромат — это моё. Помогу не просто всё рассчитать, но и объясню принципы МИИТовской школы, которые за этим стоят.'
  },
  {
    id: 17, name: 'Артём Беляев', year: 1, group: 'УПП-241',
    direction: 'Управление перевозочными процессами',
    subjects: ['Организация движения поездов', 'Теория транспортных процессов'],
    phone: '+7 (999) 400-50-60', vk: 'vk.com/artem_belyaev', email: 'a.belyaev@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=25',
    bio: 'Привет! Я Артём, первокурсник УПП МИИТ. Сам недавно всё это проходил, поэтому хорошо понимаю, где спотыкаются. Помогу с теорией транспортных процессов.'
  },
  {
    id: 18, name: 'Людмила Тихонова', year: 'grad', group: 'ЭТП-192',
    direction: 'Экономика транспортного предприятия',
    subjects: ['Экономика транспорта', 'Финансы предприятий', 'Статистика'],
    phone: '+7 (999) 500-60-70', vk: 'vk.com/lyudmila_tikh', email: 'l.tikh@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=60',
    bio: 'Привет! Меня зовут Люда. Выпускница ЭТП МИИТ, сейчас работаю экономистом на предприятии. Помогу с финансами и экономикой транспорта — по-настоящему, с прицелом на реальную работу.'
  },
  {
    id: 19, name: 'Игорь Жуков', year: 5, group: 'АТТ-202',
    direction: 'Автоматика и телемеханика на транспорте',
    subjects: ['Системы ЖАТ', 'Автоблокировка', 'Микропроцессорные системы', 'ТАУ'],
    phone: '+7 (999) 600-70-80', vk: 'vk.com/igor_zhukov', email: 'i.zhukov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=29',
    bio: 'Привет! Я Игорь, пятый курс АТТ МИИТ. Работаю с системами ЖАТ и автоблокировкой. Если нужна помощь с лабами по ТАУ или микропроцессорным системам — обращайся, помогу разобраться.'
  },
  {
    id: 20, name: 'Полина Степанова', year: 2, group: 'ЛОГ-232',
    direction: 'Логистика и управление цепями поставок',
    subjects: ['Транспортная логистика', 'Управление цепями поставок', 'Грузоведение'],
    phone: '+7 (999) 700-80-90', vk: 'vk.com/polina_step', email: 'p.step@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=62',
    bio: 'Привет! Я Поля, второй курс ЛОГ МИИТ. Помогу с транспортной логистикой и цепями поставок. Объясняю по-человечески — без зубрёжки, только понимание :)'
  }
];

// ── УТИЛИТЫ ──────────────────────────────────────────────────

const AVATAR_PALETTE = [
  { bg: '#dbeafe', icon: '#2563eb' },
  { bg: '#dcfce7', icon: '#16a34a' },
  { bg: '#fce7f3', icon: '#db2777' },
  { bg: '#fef3c7', icon: '#d97706' },
  { bg: '#ede9fe', icon: '#7c3aed' },
  { bg: '#fee2e2', icon: '#dc2626' },
  { bg: '#ccfbf1', icon: '#0d9488' },
  { bg: '#e0e7ff', icon: '#4338ca' },
  { bg: '#fef9c3', icon: '#ca8a04' },
  { bg: '#f3e8ff', icon: '#9333ea' },
  { bg: '#d1fae5', icon: '#059669' },
  { bg: '#ffedd5', icon: '#ea580c' },
];

function avatarHtml(id, cls) {
  const c = AVATAR_PALETTE[(id - 1) % AVATAR_PALETTE.length];
  return '<div class="' + cls + '" style="background:' + c.bg + ';color:' + c.icon + '">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="8" r="4"/>' +
      '<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>' +
    '</svg>' +
  '</div>';
}

function yearLabel(year) {
  return year === 'grad' ? 'Выпускник' : year + ' курс';
}

function plural(n, one, few, many) {
  const mod10  = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return n + ' ' + one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return n + ' ' + few;
  return n + ' ' + many;
}

function logout() {
  localStorage.removeItem('sh_user');
  sessionStorage.removeItem('sh_filter');
  window.location.href = 'login.html';
}

// ── СТРАНИЦА ВХОДА ───────────────────────────────────────────

const GROUPS = [...new Set(STUDENTS.map(s => s.group))].sort();

function initLogin() {
  const form = document.getElementById('login-form');
  if (!form) return;

  const phoneInput   = document.getElementById('f-phone');
  const facultyInput = document.getElementById('f-faculty');
  const facultyList  = document.getElementById('faculty-list');
  const courseInput  = document.getElementById('f-course');
  const submitBtn    = document.getElementById('login-btn');
  const courseBtns   = document.querySelectorAll('.course-btn');

  let selectedCourse = '';
  let activeIdx = -1;

  // Маска телефона
  phoneInput.addEventListener('input', () => {
    let raw = phoneInput.value.replace(/\D/g, '');
    if (raw.startsWith('8')) raw = '7' + raw.slice(1);
    if (!raw.startsWith('7') && raw.length > 0) raw = '7' + raw;
    raw = raw.slice(0, 11);
    const d = raw.slice(1);
    let formatted = '';
    if (raw.length > 0) formatted = '+7';
    if (d.length > 0) formatted += ' (' + d.slice(0, 3);
    if (d.length >= 3) formatted += ') ' + d.slice(3, 6);
    if (d.length >= 6) formatted += '-' + d.slice(6, 8);
    if (d.length >= 8) formatted += '-' + d.slice(8, 10);
    phoneInput.value = formatted;
    checkForm();
  });

  // Автодополнение групп
  facultyInput.addEventListener('input', () => {
    const q = facultyInput.value.trim().toUpperCase();
    const matches = q
      ? GROUPS.filter(g => g.toUpperCase().includes(q))
      : GROUPS;
    renderList(matches);
    checkForm();
  });

  facultyInput.addEventListener('focus', () => {
    const q = facultyInput.value.trim().toUpperCase();
    const matches = q ? GROUPS.filter(g => g.toUpperCase().includes(q)) : GROUPS;
    renderList(matches);
  });

  facultyInput.addEventListener('keydown', e => {
    const items = facultyList.querySelectorAll('li');
    if (!items.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      updateActive(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      updateActive(items);
    } else if (e.key === 'Enter' && activeIdx >= 0) {
      e.preventDefault();
      selectGroup(items[activeIdx].textContent);
    } else if (e.key === 'Escape') {
      closeList();
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.autocomplete-wrap')) closeList();
  });

  function renderList(matches) {
    facultyList.innerHTML = '';
    activeIdx = -1;
    if (!matches.length) { facultyList.hidden = true; return; }
    matches.forEach(g => {
      const li = document.createElement('li');
      li.textContent = g;
      li.addEventListener('mousedown', e => { e.preventDefault(); selectGroup(g); });
      facultyList.appendChild(li);
    });
    facultyList.hidden = false;
  }

  function updateActive(items) {
    items.forEach((el, i) => el.classList.toggle('is-active', i === activeIdx));
    if (activeIdx >= 0) items[activeIdx].scrollIntoView({ block: 'nearest' });
  }

  function selectGroup(g) {
    facultyInput.value = g;
    closeList();
    checkForm();
  }

  function closeList() {
    facultyList.hidden = true;
    activeIdx = -1;
  }

  courseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      courseBtns.forEach(b => b.classList.remove('course-btn--active'));
      btn.classList.add('course-btn--active');
      selectedCourse = btn.dataset.v;
      courseInput.value = selectedCourse;
      checkForm();
    });
  });

  function checkForm() {
    const phoneOk   = phoneInput.value.replace(/\D/g, '').length >= 11;
    const facultyOk = facultyInput.value.trim().length > 0;
    submitBtn.disabled = !(phoneOk && facultyOk && selectedCourse);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    localStorage.setItem('sh_user', phoneInput.value.trim());
    sessionStorage.removeItem('sh_filter');
    window.location.href = 'catalog.html';
  });
}

// ── КАТАЛОГ ──────────────────────────────────────────────────

function initCatalog() {
  const grid = document.getElementById('student-grid');
  if (!grid) return;

  const user = localStorage.getItem('sh_user');
  const headerUser = document.getElementById('header-user');
  const logoutBtn  = document.getElementById('logout-btn');

  if (user) {
    if (headerUser) headerUser.textContent = user;
    if (logoutBtn)  logoutBtn.addEventListener('click', logout);
  } else {
    if (headerUser) headerUser.innerHTML = '<a href="login.html" style="color:var(--signal-blue);text-decoration:none;font-size:13px">Войти</a>';
    if (logoutBtn)  logoutBtn.style.display = 'none';
  }

  let activeFilter = sessionStorage.getItem('sh_filter') || 'all';
  let searchQuery  = '';

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    if (btn.dataset.filter === activeFilter) btn.classList.add('filter-btn--active');
    else btn.classList.remove('filter-btn--active');

    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      activeFilter = btn.dataset.filter;
      sessionStorage.setItem('sh_filter', activeFilter);
      render();
    });
  });

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.toLowerCase().trim();
    render();
  });

  function getFiltered() {
    return STUDENTS.filter(s => {
      const matchFilter =
        activeFilter === 'all' ||
        (activeFilter === 'grad' && s.year === 'grad') ||
        (activeFilter !== 'grad' && s.year === parseInt(activeFilter));

      const matchSearch =
        !searchQuery ||
        s.name.toLowerCase().includes(searchQuery) ||
        s.direction.toLowerCase().includes(searchQuery) ||
        s.group.toLowerCase().includes(searchQuery) ||
        s.subjects.some(sub => sub.toLowerCase().includes(searchQuery));

      return matchFilter && matchSearch;
    });
  }

  function render() {
    const filtered = getFiltered();
    const emptyEl  = document.getElementById('sh-empty');
    const countEl  = document.getElementById('students-count');

    grid.innerHTML = '';

    if (filtered.length === 0) {
      emptyEl.hidden = false;
      countEl.textContent = '';
      return;
    }

    emptyEl.hidden = true;
    countEl.textContent = plural(filtered.length, 'студент', 'студента', 'студентов');

    filtered.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'student-card fade-up';

      const subjectsHtml =
        s.subjects.slice(0, 3).map(sub =>
          '<span class="student-card__subject">' + sub + '</span>'
        ).join('') +
        (s.subjects.length > 3
          ? '<span class="student-card__subject student-card__subject--more">+' + (s.subjects.length - 3) + '</span>'
          : '');

      card.innerHTML =
        '<div class="student-card__avatar">' +
          avatarHtml(s.id, 'avatar-icon') +
        '</div>' +
        '<div class="student-card__body">' +
          '<div class="student-card__name">' + s.name + '</div>' +
          '<div class="student-card__meta">' +
            '<span class="badge badge--blue">' + yearLabel(s.year) + '</span>' +
            '<span class="student-card__group">' + s.group + '</span>' +
          '</div>' +
          (s.bio ? '<p class="student-card__bio">' + s.bio + '</p>' : '') +
          '<div class="student-card__divider"></div>' +
          '<div class="student-card__subjects">' + subjectsHtml + '</div>' +
        '</div>' +
        '<div class="student-card__footer">' +
          '<a href="profile.html?id=' + s.id + '" class="btn btn--primary btn--full">Подробнее</a>' +
        '</div>';

      card.addEventListener('click', function(e) {
        if (!e.target.closest('a')) {
          window.location.href = 'profile.html?id=' + s.id;
        }
      });

      grid.appendChild(card);
      setTimeout(() => card.classList.add('is-visible'), i * 50 + 20);
    });
  }

  render();
}

// ── ПРОФИЛЬ ──────────────────────────────────────────────────

function initProfile() {
  const wrap = document.getElementById('profile-wrap');
  if (!wrap) return;

  const user = localStorage.getItem('sh_user');
  const logoutBtn = document.getElementById('logout-btn');
  if (user) {
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
  } else {
    if (logoutBtn) logoutBtn.style.display = 'none';
  }

  document.getElementById('back-btn').addEventListener('click', () => {
    if (history.length > 1) history.back();
    else window.location.href = 'catalog.html';
  });

  const id      = parseInt(new URLSearchParams(window.location.search).get('id'));
  const student = STUDENTS.find(s => s.id === id);

  if (!student) {
    document.getElementById('not-found').hidden = false;
    return;
  }

  document.title = 'StudentHelper — ' + student.name;

  const phoneClean = student.phone.replace(/[\s()-]/g, '');

  const subjectsHtml = student.subjects
    .map(s => '<li class="profile__subject">' + s + '</li>')
    .join('');

  wrap.innerHTML =
    '<div class="profile">' +

      '<div class="profile__left">' +
        avatarHtml(student.id, 'avatar-icon avatar-icon--profile') +

        '<div class="profile__contact-card">' +
          '<p class="profile__contact-title">Контакты</p>' +
          '<a href="tel:' + phoneClean + '" class="profile__contact-row">' +
            '<span class="profile__contact-icon">☎</span>' +
            '<span>' + student.phone + '</span>' +
          '</a>' +
          '<a href="https://' + student.vk + '" target="_blank" rel="noopener" class="profile__contact-row">' +
            '<span class="profile__contact-icon">VK</span>' +
            '<span>' + student.vk + '</span>' +
          '</a>' +
          '<a href="mailto:' + student.email + '" class="profile__contact-row">' +
            '<span class="profile__contact-icon">@</span>' +
            '<span>' + student.email + '</span>' +
          '</a>' +
        '</div>' +

        '<div class="profile__actions">' +
          '<a href="tel:' + phoneClean + '" class="btn btn--primary btn--full">☎ Позвонить</a>' +
          '<a href="https://' + student.vk + '" target="_blank" rel="noopener" class="btn btn--outline btn--full">VK Написать</a>' +
          '<a href="mailto:' + student.email + '" class="btn btn--outline btn--full">✉ Email</a>' +
        '</div>' +
      '</div>' +

      '<div class="profile__right">' +
        '<div class="profile__head">' +
          '<h1 class="profile__name">' + student.name + '</h1>' +
          '<span class="badge badge--blue">' + yearLabel(student.year) + '</span>' +
        '</div>' +
        (student.bio ? '<p class="profile__bio">' + student.bio + '</p>' : '') +

        '<div class="profile__info-grid">' +
          '<div class="profile__info-item">' +
            '<span class="profile__info-label">Группа</span>' +
            '<span class="profile__info-value">' + student.group + '</span>' +
          '</div>' +
          '<div class="profile__info-item">' +
            '<span class="profile__info-label">Курс</span>' +
            '<span class="profile__info-value">' + yearLabel(student.year) + '</span>' +
          '</div>' +
          '<div class="profile__info-item profile__info-item--wide">' +
            '<span class="profile__info-label">Направление</span>' +
            '<span class="profile__info-value">' + student.direction + '</span>' +
          '</div>' +
        '</div>' +

        '<div class="profile__section">' +
          '<h2 class="profile__section-title">Чем я могу помочь</h2>' +
          '<ul class="profile__subjects">' + subjectsHtml + '</ul>' +
        '</div>' +
      '</div>' +

    '</div>';
}

// ── ИНИЦИАЛИЗАЦИЯ ────────────────────────────────────────────

initLogin();
initCatalog();
initProfile();
