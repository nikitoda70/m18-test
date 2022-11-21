import Splide from '@splidejs/splide';

new Splide('.slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    pagination: false,
    padding: '25%',
    gap: '70px',
    arrows: true,
    breakpoints: {
        1400: {
            gap: '40px',
            padding: '20%'
        },
        1200: {
            padding: 0
        },
    },
}).mount();