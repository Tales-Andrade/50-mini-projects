const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    doTrick(e.target);
}));

function doTrick(Clicked) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === Clicked) {
            fast.checked = false;
        } else if (cheap === Clicked) {
            good.checked = false;
        } else {
            cheap.checked = false;
        }
    }
}