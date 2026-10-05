// todo
// todo Завдання 1 - Галерея зображень

// todo Зроби таку саму галерею, як у попередньому домашньому завданні, але використовуючи бібліотеку SimpleLightbox, яка повністю візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

// todo Використовуй код з минулого домашнього завдання та виконай його рефакторинг. Не потрібно писати все з нуля. Наприклад, створення елементів галереї буде таким самим. А ось код делегування та відкриття модального вікна потрібно видалити.

// todo Додай бібліотеку SimpleLightbox як залежність проєкту, використовуючи npm.
// todo Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один імпорт, крім того, що описаний у документації.

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// todo Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// todo Наступний крок це ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

// todo Після цього подивись у документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття модального вікна.

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// На що буде звертати увагу ментор при перевірці:

// На живій сторінці відображається галерея зображень із масиву даних images
// Галерея зображень стилізована згідно з макетом
// Дані для галереї створені динамічно в JS
// Відсутні власні слухачі
// Підключена бібліотека SimpleLightbox з використанням npm
// Екземпляр бібліотеки ініціалізований після додавання елементів галереї у DOM і поза межами будь-яких функцій
// При кліку по елементу галереї відкривається модальне вікно підключеної бібліотеки, в якому міститься збільшена версія зображення, по якому клікнули. Весь базовий функціонал бібліотеки працює
// Через 250 мілісекунд після відкривання модального вікна вміст атрибута alt з'являється знизу, як підпис до зображення
