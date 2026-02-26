   
    document.addEventListener('DOMContentLoaded', function () {
        const swiperEl = document.querySelector('.dxb-swiper');
        const prevBtn  = document.querySelector('.dxb-btn-prev');
        const nextBtn  = document.querySelector('.dxb-btn-next');

        prevBtn.addEventListener('click', function () {
            swiperEl.swiper.slidePrev();
        });
        nextBtn.addEventListener('click', function () {
            swiperEl.swiper.slideNext();
        });
    });
                                
    
    
    
    
    
    
    
    
    function scrollCarousel(direction) {
            const track = document.getElementById('testimonialTrack');
            const card = track.querySelector('.yacht-testimonial-card');
            if (track && card) {
                const scrollAmount = card.offsetWidth + 20;
                track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
            }
        }

   
        document.addEventListener('click', function (event) {
            const navbar = document.getElementById('navMenu');
            const toggler = document.querySelector('.navbar-toggler');

            if (
                navbar.classList.contains('show') &&
                !navbar.contains(event.target) &&
                !toggler.contains(event.target)
            ) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbar)
                    || new bootstrap.Collapse(navbar, { toggle: false });

                bsCollapse.hide();
            }
        });
                const swiper = document.getElementById('mySwiper');

document.querySelector('.awb-btn-prev').addEventListener('click', () => {
    swiper.swiper.slidePrev();
});

document.querySelector('.awb-btn-next').addEventListener('click', () => {
    swiper.swiper.slideNext();
});
    
