    function scrollCarousel(direction) {
            const track = document.getElementById('testimonialTrack');
            const card = track.querySelector('.yacht-testimonial-card');
            if (track && card) {
                const scrollAmount = card.offsetWidth + 20;
                track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
            }
        }

        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
   
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
    
