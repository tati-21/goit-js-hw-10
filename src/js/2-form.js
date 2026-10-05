// todo
// todo Завдання 2 - Форма зворотного зв'язку

// todo Додай у HTML розмітку форми. У JS напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// todo 1. Оголоси поза будь-якими функціями об'єкт formData з полями email та message, які спочатку мають порожні рядки як значення: { email: "", message: "" }.

const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

// todo 3. При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

// todo 2. Використовуй метод делегування для відстеження змін у формі через подію input. Зберігай актуальні дані з полів email та message у formData та записуй цей об'єкт у локальне сховище. Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// todo 4. Перед відправленням форми переконайся, що обидва поля форми заповнені. Якщо будь-яке з полів (властивостей об'єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields». Якщо всі поля заповнені, виведи у консоль об'єкт formData з актуальними значеннями, очисти локальне сховище, об'єкт formData і поля форми.

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});

// На що буде звертати увагу ментор при перевірці:

// На живій сторінці відображається форма з двома елементами форми і кнопкою типу submit
// Форма стилізована згідно з макетом
// На формі прослуховуються події input і submit
// При введенні даних у будь-який елемент форми вони записуються у локальне сховище під ключем "feedback-form-state", збережені дані не містять пробіли по краях
// Введення даних в одне поле форми не видаляє дані в сховищі для іншого
// При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні undefined
// При сабміті форми є перевірка, щоб обидва елементи форми були заповнені
// Під час сабміту форми, якщо обидва елементи форми заповнені, виводиться у консоль об'єкт з полями email, message та їхніми поточними значеннями, а також очищаються сховище і поля форми
// Якщо після сабміту форми ввести в будь-який елемент форми дані, то в локальному сховищі не з'являються дані від попереднього сабміта
