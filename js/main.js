/* ═══════════════════════════════════════
   STUDENTHELPER — main.js
═══════════════════════════════════════ */

// ── ДАННЫЕ СТУДЕНТОВ ─────────────────────────────────────────

const STUDENTS = [
  {
    id: 1, name: 'Иван Петров', year: 4, group: 'ПМ-21-01',
    direction: 'Прикладная математика',
    subjects: ['Высшая математика', 'Линейная алгебра', 'Дифф. уравнения', 'Мат. анализ', 'Теория вероятности'],
    phone: '+7 (999) 123-45-67', vk: 'vk.com/ivan_petrov', email: 'ivan.petrov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=11',
    bio: 'Привет! Я Иван, четвёртый курс ПМ. Обожаю математику — особенно когда она внезапно «щёлкает». Помогаю с вышматом, линейной алгеброй и дифурами: объясню так, чтобы дошло, а не просто решу за тебя :)'
  },
  {
    id: 2, name: 'Мария Сидорова', year: 5, group: 'ПИ-20-02',
    direction: 'Программная инженерия',
    subjects: ['Python', 'C++', 'Базы данных', 'Алгоритмы', 'Машинное обучение'],
    phone: '+7 (999) 987-65-43', vk: 'vk.com/maria_sidorova', email: 'maria.sid@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=47',
    bio: 'Привет! Меня зовут Маша. Пишу код с 14 лет, сейчас на пятом курсе ПИ. Могу помочь с питоном, плюсами или базами данных. Без лишней теории — сразу на практике :)'
  },
  {
    id: 3, name: 'Алексей Иванов', year: 2, group: 'ЭЭ-23-01',
    direction: 'Электроэнергетика',
    subjects: ['Физика', 'Электротехника', 'Электроника'],
    phone: '+7 (999) 555-11-22', vk: 'vk.com/alex_ivanov', email: 'alex.ivanov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=3',
    bio: 'Привет, я Лёша! Второй курс ЭЭ. Физику и электротехнику понимаю лучше, чем их объясняют на парах. Если запутался в задачах или лабах — пиши, разберёмся вместе.'
  },
  {
    id: 4, name: 'Екатерина Новикова', year: 3, group: 'МЕН-22-01',
    direction: 'Менеджмент',
    subjects: ['Экономика', 'Статистика', 'Маркетинг', 'Основы управления'],
    phone: '+7 (999) 444-33-22', vk: 'vk.com/kate_novikova', email: 'kate.nov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=44',
    bio: 'Привет! Я Катя, третий курс менеджмента. Помогаю с экономикой, статистикой и маркетингом. Всё разложу по полочкам — ненудно и по делу.'
  },
  {
    id: 5, name: 'Дмитрий Козлов', year: 5, group: 'КБ-20-01',
    direction: 'Компьютерная безопасность',
    subjects: ['Сети и защита', 'ОС Linux', 'Криптография', 'Java'],
    phone: '+7 (999) 333-22-11', vk: 'vk.com/dima_kozlov', email: 'dima.kozlov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=12',
    bio: 'Привет! Я Дима, пятый курс КБ. Разбираюсь в сетях, Linux и криптографии — помогу не только сдать, но и реально понять, как это работает под капотом.'
  },
  {
    id: 6, name: 'Анна Морозова', year: 1, group: 'МА-24-01',
    direction: 'Математика',
    subjects: ['Высшая алгебра', 'Аналитическая геометрия', 'Математический анализ'],
    phone: '+7 (999) 111-22-33', vk: 'vk.com/anna_morozova', email: 'anna.mor@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=48',
    bio: 'Привет! Я Аня, только поступила на мат. Школьную программу знаю крепко, первокурсникам помогу войти в ритм — высшая алгебра и геометрия пока даются легко.'
  },
  {
    id: 7, name: 'Сергей Попов', year: 'grad', group: 'ИТ-19-02',
    direction: 'Информационные технологии',
    subjects: ['Веб-разработка', 'React', 'Node.js', 'SQL', 'Docker'],
    phone: '+7 (999) 222-33-44', vk: 'vk.com/sergey_popov', email: 's.popov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=15',
    bio: 'Привет! Я Серёга, выпускник ИТ, уже работаю в разработке. Объясню React, Node.js и всё вокруг так, как это реально устроено в индустрии, а не только для экзамена.'
  },
  {
    id: 8, name: 'Ольга Лебедева', year: 2, group: 'ФИЗ-23-01',
    direction: 'Физика',
    subjects: ['Механика', 'Термодинамика', 'Оптика', 'Квантовая физика'],
    phone: '+7 (999) 333-44-55', vk: 'vk.com/olga_lebedeva', email: 'o.leb@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=49',
    bio: 'Привет! Я Оля, второй курс физического. Мне нравится физика, и я умею объяснять сложные вещи простыми словами. Механика, термодинамика, оптика — обращайся!'
  },
  {
    id: 9, name: 'Андрей Смирнов', year: 4, group: 'ПИ-21-02',
    direction: 'Программная инженерия',
    subjects: ['C#', '.NET Framework', 'ООП', 'Паттерны проектирования'],
    phone: '+7 (999) 444-55-66', vk: 'vk.com/andrey_smirnov', email: 'a.smirnov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=17',
    bio: 'Привет! Меня зовут Андрей, четвёртый курс ПИ. Специализируюсь на C# и .NET. ООП и паттерны объясняю без занудных лекций — через живые примеры из кода.'
  },
  {
    id: 10, name: 'Татьяна Волкова', year: 3, group: 'ЭК-22-01',
    direction: 'Экономика',
    subjects: ['Микроэкономика', 'Макроэкономика', 'Финансы', 'Бухучёт'],
    phone: '+7 (999) 555-66-77', vk: 'vk.com/tanya_volkova', email: 't.volkova@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=53',
    bio: 'Привет! Я Таня, третий курс экономики. Помогаю разобраться с микро и макро, финансами и бухучётом. Готовиться к экзамену вместе — всегда проще и веселее!'
  },
  {
    id: 11, name: 'Никита Зайцев', year: 1, group: 'ИНФ-24-02',
    direction: 'Информатика',
    subjects: ['Основы программирования', 'Pascal', 'Информатика'],
    phone: '+7 (999) 666-77-88', vk: 'vk.com/nikita_zaitsev', email: 'n.zaitsev@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=7',
    bio: 'Привет! Я Никита, первокурсник информатики. Хорошо шарю в базовом программировании — помогу тем, кто только знакомится с Pascal и алгоритмами. Сам недавно через это прошёл.'
  },
  {
    id: 12, name: 'Виктория Кузнецова', year: 'grad', group: 'МА-19-01',
    direction: 'Математика',
    subjects: ['Теория вероятности', 'Математическая статистика', 'Мат. анализ', 'Комплексный анализ'],
    phone: '+7 (999) 777-88-99', vk: 'vk.com/vika_kuznetsova', email: 'v.kuz@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=56',
    bio: 'Привет! Я Вика, выпускница матфака, готовлюсь к аспирантуре. Теорвер, матстат и комплексный анализ — мои любимые темы. Объясню даже самое заковыристое.'
  },
  {
    id: 13, name: 'Павел Соколов', year: 5, group: 'РАД-20-01',
    direction: 'Радиотехника',
    subjects: ['Теория сигналов', 'Схемотехника', 'Цифровая обработка сигналов'],
    phone: '+7 (999) 888-99-00', vk: 'vk.com/pavel_sokolov', email: 'p.sokolov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=19',
    bio: 'Привет! Я Паша, пятый курс РАД. Работаю с теорией сигналов и схемотехникой. Если не понимаешь что происходит на лабах по ЦОС — приходи, разберёмся.'
  },
  {
    id: 14, name: 'Наталья Михайлова', year: 2, group: 'ХИМ-23-01',
    direction: 'Химия',
    subjects: ['Неорганическая химия', 'Физическая химия', 'Органическая химия'],
    phone: '+7 (999) 100-20-30', vk: 'vk.com/nataly_mikh', email: 'n.mikh@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=57',
    bio: 'Привет! Я Наташа, второй курс химии. Химия пугает только поначалу — помогу разобраться с неорганикой, органикой и физхимией, чтобы задачи не казались страшными.'
  },
  {
    id: 15, name: 'Роман Фёдоров', year: 3, group: 'ПМ-22-02',
    direction: 'Прикладная математика',
    subjects: ['Численные методы', 'Мат. моделирование', 'Методы оптимизации'],
    phone: '+7 (999) 200-30-40', vk: 'vk.com/roman_fedorov', email: 'r.fed@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=20',
    bio: 'Привет! Меня зовут Рома, третий курс ПМ. Занимаюсь численными методами и моделированием. Помогу, если нужно разобраться с алгоритмами и задачами на оптимизацию.'
  },
  {
    id: 16, name: 'Ксения Орлова', year: 4, group: 'ДИЗ-21-01',
    direction: 'Дизайн',
    subjects: ['Графический дизайн', 'Figma', 'Photoshop', 'UI/UX'],
    phone: '+7 (999) 300-40-50', vk: 'vk.com/ksen_orlova', email: 'k.orlova@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=58',
    bio: 'Привет! Я Ксюша, четвёртый курс дизайна. Figma, Photoshop, UI/UX — это моё. Помогу не просто сделать красиво, но и объясню принципы, которые за этим стоят.'
  },
  {
    id: 17, name: 'Артём Беляев', year: 1, group: 'ИТ-24-01',
    direction: 'Информационные технологии',
    subjects: ['Информатика', 'HTML и CSS', 'Основы ИТ'],
    phone: '+7 (999) 400-50-60', vk: 'vk.com/artem_belyaev', email: 'a.belyaev@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=25',
    bio: 'Привет! Я Артём, первокурсник ИТ. Сам недавно всё это проходил, поэтому хорошо понимаю, где спотыкаются. Помогу с информатикой и основами HTML/CSS.'
  },
  {
    id: 18, name: 'Людмила Тихонова', year: 'grad', group: 'ФИН-19-02',
    direction: 'Финансы',
    subjects: ['Финансовый анализ', 'Бухгалтерский учёт', '1С:Предприятие', 'Налоги'],
    phone: '+7 (999) 500-60-70', vk: 'vk.com/lyudmila_tikh', email: 'l.tikh@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=60',
    bio: 'Привет! Меня зовут Люда. Выпускница финансового, сейчас работаю бухгалтером. Помогу с 1С, налогами и финансовым анализом — по-настоящему, с прицелом на реальную работу.'
  },
  {
    id: 19, name: 'Игорь Жуков', year: 5, group: 'АВТ-20-01',
    direction: 'Автоматика и робототехника',
    subjects: ['MATLAB', 'Теория автоматического управления', 'Робототехника', 'Arduino'],
    phone: '+7 (999) 600-70-80', vk: 'vk.com/igor_zhukov', email: 'i.zhukov@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=29',
    bio: 'Привет! Я Игорь, пятый курс АВТ. Работаю с MATLAB, Arduino и теорией управления. Если нужна помощь с лабами по ТАУ или робототехнике — обращайся, помогу разобраться.'
  },
  {
    id: 20, name: 'Полина Степанова', year: 2, group: 'БИО-23-01',
    direction: 'Биология',
    subjects: ['Общая биология', 'Химия', 'Анатомия и физиология'],
    phone: '+7 (999) 700-80-90', vk: 'vk.com/polina_step', email: 'p.step@mail.ru',
    avatar: 'https://i.pravatar.cc/300?img=62',
    bio: 'Привет! Я Поля, второй курс биологии. Помогу с общей биологией, анатомией и химией. Объясняю по-человечески — без зубрёжки, только понимание :)'
  },
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
  sessionStorage.removeItem('sh_user');
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
    sessionStorage.setItem('sh_user', phoneInput.value.trim());
    sessionStorage.removeItem('sh_filter');
    window.location.href = 'catalog.html';
  });
}

// ── КАТАЛОГ ──────────────────────────────────────────────────

function initCatalog() {
  const grid = document.getElementById('student-grid');
  if (!grid) return;

  const user = sessionStorage.getItem('sh_user');
  if (!user) { window.location.href = 'login.html'; return; }

  const headerUser = document.getElementById('header-user');
  if (headerUser) headerUser.textContent = user;
  document.getElementById('logout-btn').addEventListener('click', logout);

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

  const user = sessionStorage.getItem('sh_user');
  if (!user) { window.location.href = 'login.html'; return; }

  document.getElementById('logout-btn').addEventListener('click', logout);
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
