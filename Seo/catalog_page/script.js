const leftScroll = document.getElementById('leftScroll');
const rightScroll = document.getElementById('rightScroll');
const mainImage = document.getElementById('mainImage');

// Массив с изображениями для центра
const images = [
    'img/footer1.svg', // Изображение для левой кнопки
    'img/sample_foto.svg', // Изображение по умолчанию
    'img/footer2.svg'  // Изображение для правой кнопки
];

// Функция для смены изображения в центре
const changeImage = (index) => {
    mainImage.src = images[index];
};

// Добавление обработчиков событий
leftScroll.addEventListener('click', () => {
    changeImage(0); // Изменение на изображение для левой кнопки
});

rightScroll.addEventListener('click', () => {
    changeImage(2); // Изменение на изображение для правой кнопки
});

// Установка изображения по умолчанию
changeImage(1);