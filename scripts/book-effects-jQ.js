
// Fun Fact animation


let FunFactObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        // To check if it works
        // console.log('Element is fully visible in screen');
        $('#f-b-t-body #text p').fadeIn(800, function () {
            $('#f-b-t-body #CTA p').fadeIn(600);
        });

    }
    else if (entries[0].isIntersecting === false){
        // To check if it works
        // console.log('Element is not fully visible in screen');
        $('#f-b-t-body #text p, #f-b-t-body #CTA p').fadeOut(150);

    }        
    
}, { threshold: [0] });

FunFactObserver.observe(document.body.querySelector("#first-block"));



// Upcomings animation


let UpcomingsObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        // To check if it works
        // console.log('Element is fully visible in screen');
        $('#b-t-body-block #b-t-text p').fadeIn(500, function () {
            $('#b-t-body-block #CTA p').fadeIn(500);
        });

    }
    else if (entries[0].isIntersecting === false){
        // To check if it works
        // console.log('Element is not fully visible in screen');
        $('#b-t-body-block #b-t-text p, #b-t-body-block #CTA p').fadeOut(150);

    }        
    
}, { threshold: [0] });

UpcomingsObserver.observe(document.body.querySelector("#business-type"));



// 3rd block animation


let Block3Observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        // To check if it works
        // console.log('Element is fully visible in screen');
        $('#t-b-b-header p').fadeIn(850, function () {
            $('.b-3-1st p').fadeIn(600, function () {
                $('.b-3-2nd p').fadeIn(650, function () {
                    $('.b-3-3rd p').fadeIn(650, function () {
                        $('.b-3-4th p').fadeIn(650)
                    });
                });
            });
        });

    }
    else if (entries[0].isIntersecting === false){
        // To check if it works
        // console.log('Element is not fully visible in screen');
        $('#t-b-body div p').fadeOut(150);

    }        
    
}, { threshold: [0] });

Block3Observer.observe(document.body.querySelector("#third-block"));



// How I differ animation


let DifferenceObserver = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        // To check if it works
        // console.log('Element is fully visible in screen');
        $('#h-i-d-body #h-i-d-b-header p').fadeIn(800, function () {
            $('#h-i-d-body #h-i-d-b-middle p').fadeIn(600, function () {
                $('#h-i-d-body #h-i-d-b-bottom p').fadeIn(800);
            });
        });

    }
    else if (entries[0].isIntersecting === false){
        // To check if it works
        // console.log('Element is not fully visible in screen');
        $('#h-i-d-body div p').fadeOut(150);

    }        
    
}, { threshold: [0] });

DifferenceObserver.observe(document.body.querySelector("#how-i-differ"));


