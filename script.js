const INVITE_DATA = {
  eventType: 'Свадебное приглашение',
  title: 'Анна & Максим',
  subtitle: 'Будем счастливы разделить с вами этот день',
  eventDate: '2026-09-12T15:00:00+03:00',
  eventDateLabel: 'Суббота • 12 сентября 2026 • 15:00',
  location: 'Загородный клуб «Лесной берег»',
  dressCode:
    'Будем рады видеть вас в образах в натуральной гамме: молочный, песочный, пудровый, светло-серый и приглушённый синий.',
  rsvpLink: 'https://forms.gle/',
  coupleSign: 'Анна и Максим',
  program: [
    { time: '15:00', title: 'Сбор гостей и welcome-drink' },
    { time: '16:00', title: 'Церемония' },
    { time: '17:00', title: 'Ужин и поздравления' },
    { time: '19:00', title: 'Первый танец и торт' },
    { time: '20:00', title: 'Танцы и вечерняя программа' },
  ],
  galleryTiles: [
    { color: 'blue', className: 'tile-1 tall' },
    { color: 'red', className: 'tile-2' },
    { color: 'red', className: 'tile-3' },
    { color: 'blue', className: 'tile-4 tall' },
    { color: 'red', className: 'tile-5' },
  ],
};

function fillContent() {
  document.getElementById('event-type').textContent = INVITE_DATA.eventType;
  document.getElementById('title').textContent = INVITE_DATA.title;
  document.getElementById('subtitle').textContent = INVITE_DATA.subtitle;
  document.getElementById('event-date-text').textContent = INVITE_DATA.eventDateLabel;
  document.getElementById('location-text').textContent = INVITE_DATA.location;
  document.getElementById('dress-code-text').textContent = INVITE_DATA.dressCode;
  document.getElementById('couple-sign').textContent = INVITE_DATA.coupleSign;

  const link = document.getElementById('rsvp-link');
  link.href = INVITE_DATA.rsvpLink;

  const heroLink = document.getElementById('hero-rsvp');
  heroLink.href = '#rsvp';

  const programList = document.getElementById('program-list');
  programList.innerHTML = '';
  INVITE_DATA.program.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="program-time">${item.time}</span><span>${item.title}</span>`;
    programList.appendChild(li);
  });

  const gallery = document.getElementById('gallery-grid');
  gallery.innerHTML = '';
  INVITE_DATA.galleryTiles.forEach((tile) => {
    const el = document.createElement('div');
    el.className = `tile ${tile.color} ${tile.className}`;
    gallery.appendChild(el);
  });
}

function startCountdown() {
  const end = new Date(INVITE_DATA.eventDate).getTime();

  function update() {
    const now = Date.now();
    const diff = Math.max(0, end - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById('days').textContent = String(days);
    document.getElementById('hours').textContent = String(hours);
    document.getElementById('minutes').textContent = String(minutes);
  }

  update();
  setInterval(update, 60000);
}

fillContent();
startCountdown();
