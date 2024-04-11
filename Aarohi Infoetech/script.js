$('.project').owlCarousel({
    
    // stagePadding: 50,
    loop:true,
    margin:40,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

$('.team').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


//AOS init

AOS.init();