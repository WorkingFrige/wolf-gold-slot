const links = document.querySelectorAll('a[data-goto]'),
    accordionOpen = document.querySelectorAll('.accordion-open'),
    forms = document.querySelectorAll('form'),
    popupSuccess = document.querySelector('.popup-success'),
    popupClose = document.querySelectorAll('.popup-close'),
    nav = document.querySelector('.nav'),
    burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('lock');
});

nav.addEventListener('click', () => {
    document.body.classList.remove('lock');
    nav.classList.remove('active');
    burger.classList.remove('active');
});

if (links.length > 0) {
    links.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();

            document.body.classList.remove('lock');
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    }
}

accordionOpen.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});

forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        form.reset();

        popupSuccess.classList.add('active');
        document.body.classList.add('lock');
    });
});

popupClose.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelectorAll('.popup').forEach((popup) => popup.classList.remove('active'));
        document.body.classList.remove('lock');
    });
});

