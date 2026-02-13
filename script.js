const INVITE_DATA = {
  dateLabel: '12 сентября 2026',
  title: 'Анна & Максим',
  subtitle: 'Приглашаем вас разделить с нами самый тёплый день',
  description:
    'Мы подготовили вечер в эстетике современной классики: живая музыка, церемония на открытом воздухе, ужин и танцы до поздней ночи.',
  place: 'Загородный клуб «Лесной берег»',
  time: 'Сбор гостей в 15:00',
  eventDate: '2026-09-12T15:00:00+03:00',
  sign: 'С любовью, Анна и Максим',
  program: [
    { time: '15:00', title: 'Welcome & фуршет' },
    { time: '16:00', title: 'Церемония' },
    { time: '17:00', title: 'Ужин и тосты' },
    { time: '20:00', title: 'DJ set и танцы' },
  ],
};

function fillPage() {
  document.getElementById('hero-date').textContent = INVITE_DATA.dateLabel;
  document.getElementById('hero-title').textContent = INVITE_DATA.title;
  document.getElementById('hero-subtitle').textContent = INVITE_DATA.subtitle;
  document.getElementById('event-text').textContent = INVITE_DATA.description;
  document.getElementById('event-place').textContent = INVITE_DATA.place;
  document.getElementById('event-time').textContent = INVITE_DATA.time;
  document.getElementById('footer-sign').textContent = INVITE_DATA.sign;

  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  INVITE_DATA.program.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'timeline-item';
    card.innerHTML = `
      <div class="timeline-time">${item.time}</div>
      <div>${item.title}</div>
    `;
    timeline.appendChild(card);
  });
}

function startCountdown() {
  const target = new Date(INVITE_DATA.eventDate).getTime();

  function render() {
    const now = Date.now();
    const diff = Math.max(target - now, 0);

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('days').textContent = String(days);
    document.getElementById('hours').textContent = String(hours);
    document.getElementById('minutes').textContent = String(minutes);
    document.getElementById('seconds').textContent = String(seconds);
  }

  render();
  setInterval(render, 1000);
}

function bindForm() {
  const form = document.getElementById('rsvp-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const guests = document.getElementById('guests').value.trim();

    status.textContent = `Спасибо, ${name}! Записали: ${guests} гост(я/ей).`;
    form.reset();
  });
}

fillPage();
startCountdown();
bindForm();
