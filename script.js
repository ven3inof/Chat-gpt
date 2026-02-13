const INVITE_DATA = {
  eventType: 'Свадебное приглашение',
  title: 'Анна & Максим',
  subtitle: 'Праздник любви, тепла и самых близких людей',
  eventDate: '2026-09-12T15:00:00+03:00',
  eventDateLabel: '12 сентября 2026',
  location: 'Санкт-Петербург · Дом торжеств «Веранда»',
  story:
    'Мы приглашаем вас в день, который станет для нас началом новой главы. Ваше присутствие сделает этот праздник по-настоящему особенным.',
  dressCode:
    'Пастельные и природные оттенки: молочный, бежевый, пудровый, дымчато-голубой.',
  wishes:
    'Будем благодарны, если вместо букетов вы выберете небольшую открытку с пожеланием.',
  rsvpLink: 'https://forms.gle/',
  rsvpDeadline: 'Пожалуйста, ответьте до 01.08.2026',
  coupleSign: 'Анна и Максим',
  program: [
    { time: '15:00', title: 'Сбор гостей и welcome drink' },
    { time: '16:00', title: 'Выездная церемония' },
    { time: '17:30', title: 'Ужин и поздравления' },
    { time: '20:00', title: 'Танцы и свадебный торт' },
  ],
};

function fillContent() {
  document.getElementById('event-type').textContent = INVITE_DATA.eventType;
  document.getElementById('title').textContent = INVITE_DATA.title;
  document.getElementById('subtitle').textContent = INVITE_DATA.subtitle;
  document.getElementById('event-date-text').textContent = INVITE_DATA.eventDateLabel;
  document.getElementById('location-text').textContent = INVITE_DATA.location;
  document.getElementById('story-text').textContent = INVITE_DATA.story;
  document.getElementById('dress-code-text').textContent = INVITE_DATA.dressCode;
  document.getElementById('wishes-text').textContent = INVITE_DATA.wishes;
  document.getElementById('rsvp-deadline-text').textContent = INVITE_DATA.rsvpDeadline;
  document.getElementById('couple-sign').textContent = INVITE_DATA.coupleSign;

  const link = document.getElementById('rsvp-link');
  link.href = INVITE_DATA.rsvpLink;

  const programList = document.getElementById('program-list');
  programList.innerHTML = '';

  INVITE_DATA.program.forEach((item) => {
    const li = document.createElement('li');

    const time = document.createElement('span');
    time.className = 'timeline-time';
    time.textContent = item.time;

    const title = document.createElement('span');
    title.textContent = item.title;

    li.appendChild(time);
    li.appendChild(title);
    programList.appendChild(li);
  });
}

function startCountdown() {
  const end = new Date(INVITE_DATA.eventDate).getTime();

  function update() {
    const diff = Math.max(0, end - Date.now());

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById('days').textContent = String(days);
    document.getElementById('hours').textContent = String(hours);
    document.getElementById('minutes').textContent = String(minutes);
  }

  update();
  setInterval(update, 60 * 1000);
}

fillContent();
startCountdown();
