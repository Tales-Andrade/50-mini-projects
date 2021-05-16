const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const images = document.querySelector('#images');
const imagesUrl = [
    "https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/reserve/OnRKhvlFQ2uJNSx5O3cc_DSC00560.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    "https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1508264165352-258db2ebd59b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
];

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive += 1;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive -= 1;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    });

    const image = document.createElement('div');

    image.innerHTML = `
    <div class="img">
        <img src=${imagesUrl[currentActive - 1]} alt="#">
    </div>
    `
    images.innerHTML = '';
    images.appendChild(image);

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}