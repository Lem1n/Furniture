const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

let tabs = document.querySelector('.tabs')
let btns = tabs.querySelectorAll('.works_nav_link')
let items = tabs.querySelectorAll('.works_block')

function change(arr, i) {
    arr.forEach( item => {
        item.forEach( i => {i.classList.remove('active')})
        item[i].classList.add('active')
    })
}

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        change([btns, items], i)
    })
}
