//Menu

const openMenuBurger = document.querySelector('#open-burger');
const closeMenuBurger = document.querySelector('#close-burger');
const navigation = document.querySelector('#fixedNav');

if (openMenuBurger && openMenuBurger && navigation) {

    openMenuBurger.addEventListener('click', () => {
        navigation.style.display = 'block';
        document.body.style.overflow = 'hidden';
        openMenuBurger.classList.add('hide');
        closeMenuBurger.classList.remove('hide');
    });

    closeMenuBurger.addEventListener('click', () => {
        navigation.style.display = '';
        document.body.style.overflow = 'auto';
        openMenuBurger.classList.remove('hide');
        closeMenuBurger.classList.add('hide');
    });
}

// Slider
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    spaceBetween: 0,
    initialSlide: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        789: {
            spaceBetween: 100
        },

    }
});


// Phone Mask

function inputHandler(masks, max, event) {
    const c = event.target;
    const v = c.value.replace(/\D/g, '');
    const m = c.value.length > max ? 1 : 0;
    VMasker(c).unMask();
    VMasker(c).maskPattern(masks[m]);
    c.value = VMasker.toPattern(v, masks[m]);
}

const telMask = ['+9(999) 999-99-999', '+9(999) 999-99-99'];
const tel = document.querySelector('#phoneMask');
VMasker(tel).maskPattern(telMask[0]);
tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);
