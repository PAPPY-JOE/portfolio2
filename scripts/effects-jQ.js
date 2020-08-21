
// Services animation

let observer1 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        // To check if it works
        // console.log('Element is fully visible in screen');
        $('.services-text p').fadeIn(1250);
        $('.services-text p a').fadeIn(1250);
    }
    else if (entries[0].isIntersecting === false){
        // To check if it works     
        // console.log('Element is not fully visible in screen');
        $('.services-text p').fadeOut(150);
        $('.services-text p a').fadeOut(150);
    }        
    
}, { threshold: [0] });

observer1.observe(document.body.querySelector(".services-text"));


// About Me animation


let observer2 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        // To check if it works
        // console.log('Element is fully visible in screen');
        $('.about-effect-slide').slideDown(850, function () {
            $('.about-effect').fadeIn(500);
        });

    }
    else if (entries[0].isIntersecting === false){
        // To check if it works
        // console.log('Element is not fully visible in screen');
        $('.about-effect').fadeOut(150);
        $('.about-effect-slide').slideUp(150);

    }        
    
}, { threshold: [0] });

observer2.observe(document.body.querySelector(".about-text"));