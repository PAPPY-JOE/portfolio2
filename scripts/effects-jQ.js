
// Services animation

let observer1 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        // To check if it works
        // console.log('Element is fully visible in screen');
        $('.services-text p').fadeIn(1250);
        $('.services-text p a').fadeIn(1250, function () {
            
            $('.box-1 p, .box-1 button').slideDown(800, function () {
                
                $('.box-2 p, .box-2 button').slideDown(800, function () {
                  
                    $('.box-3 p, .box-3 button').slideDown(800);
                });
            });
        });
    }
    else if (entries[0].isIntersecting === false){
        // To check if it works     
        // console.log('Element is not fully visible in screen');
        $('.services-text p').fadeOut(150);
        $('.services-text p a').fadeOut(150, function () {
            
            $('.box-1 p, .box-1 button').slideUp(300, function () {
                
                $('.box-2 p, .box-2 button').slideUp(300, function () {
                  
                    $('.box-3 p, .box-3 button').slideUp(300);
                });
            });
        });
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