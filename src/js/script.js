(() => {
    let webP = new Image();
    webP.onload = webP.onerror = () => {
        if (webP.height === 2) { document.body.classList.add('webp'); }
        else { document.body.classList.add('no-webp'); }
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

    const sections = document.querySelectorAll('section');

    let mainSwiper = new Swiper(".mainSwiper", {
        direction: "vertical",
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    mainSwiper.on('slideChange', (e) => {
        sections[e.activeIndex].querySelectorAll('[data-animate]').forEach(element => {
            // const display = element.style.display;
            // element.style.display = 'none';
            element.style.opacity = 0;
            const isActive = element.classList.contains('active');
            element.classList.remove('active');
            setTimeout(() => {
                //element.style.display = display;
                element.style.opacity = 1;
                if (isActive) element.classList.add('active');

                element.classList.add(element.dataset.animate);
                setTimeout(() => element.classList.remove(element.dataset.animate), 1000);
            }, element.dataset.delay * 300)

        });
    });

    let projectsSwiper = new Swiper(".projectsSwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        grabCursor: true,
        slidesPerView: 2.5,
        lazy: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });
    projectsSwiper.slideNext();
    projectsSwiper.on('slideChange', (e) => {
        const prev = e.$el[0].querySelector('.swiper-slide-prev');
        const next = e.$el[0].querySelector('.swiper-slide-next');
        if (prev) {
            prev.querySelectorAll('[data-animate]').forEach(element => {
                element.className = element.dataset.animate;
                setTimeout(() => element.className = '', 1000);
            });
        }
        if (next) {
            next.querySelectorAll('[data-animate]').forEach(element => {
                element.className = element.dataset.animate;
                setTimeout(() => element.className = '', 1000);
            });
        }
    });
    let biographySwiper = new Swiper(".biographySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        grabCursor: true,
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.8,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    const btn2D = document.getElementById('2D');
    const btnCG = document.getElementById('CG');
    const btnIL = document.getElementById('IL');
    const for2D = document.getElementById('for2D');
    const forCG = document.getElementById('forCG');
    const forIL = document.getElementById('forIL');

    const activate = (element) => {
        return (e) => {
            for2D.classList.remove('active');
            forCG.classList.remove('active');
            forIL.classList.remove('active');
            btn2D.classList.remove('active');
            btnCG.classList.remove('active');
            btnIL.classList.remove('active');
            element.classList.add('active');
            e.target.classList.add('active');
        }
    }

    btn2D.addEventListener('click', activate(for2D));
    btnCG.addEventListener('click', activate(forCG));
    btnIL.addEventListener('click', activate(forIL));
})()