const gallery = document.getElementById('gallery');
const fullViewContainer = document.getElementById('fullViewContainer');
const fullViewCloseButton = document.getElementById('fullViewCloseButton');
const fullViewImage = document.getElementById('fullViewImage');

const images = [
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg',
    "https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg",
    'https://img.freepik.com/premium-photo/black-man-cooking-breakfast-lunch-kitchen-home-african-american-man-wearing-apron-preparing-lemon_664157-1372.jpg'


];


images.forEach(createImage)


function createImage(imgSrc) {
    const imageElement = document.createElement('img');
    imageElement.src = imgSrc;
    imageElement.className = 'gallery__image'

    gallery.appendChild(imageElement);
    imageElement.addEventListener('click', function (e) {
        fullViewContainer.style.display = 'grid';
        fullViewContainer.classList.add('gallery__image')
        fullViewImage.src = imgSrc;
    })
}


// function el(e) {
//     fullViewContainer.style.display = 'none';
// }

fullViewCloseButton.addEventListener('click', function (e) {
    fullViewContainer.style.display = 'none';
})

