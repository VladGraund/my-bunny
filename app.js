const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let sliceIndex = 0;
const img = [...document.querySelectorAll('img')];

next.addEventListener('click', () => {
    if(sliceIndex === 9) {
        img[sliceIndex].classList.remove('active');
        sliceIndex = 0;
        img[sliceIndex].classList.add('active');
    } else {
        img[sliceIndex].classList.remove('active');
        img[sliceIndex + 1].classList.add('active');
        sliceIndex++;
    }
})

prev.addEventListener('click', () => {
    if(sliceIndex === 0) {
        img[sliceIndex].classList.remove('active');
        sliceIndex = 9;
        img[sliceIndex].classList.add('active');
    } else {
        img[sliceIndex].classList.remove('active');
        img[sliceIndex - 1].classList.add('active');
        sliceIndex--;
    }
})