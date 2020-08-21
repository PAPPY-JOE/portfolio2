// Read More 1

$(document).ready(function () {
    let ReadMore1Trgger = false;
   
    $("#read-more-btn1").click(function () {

        if (ReadMore1Trgger === false) {
            $("#read-more1").show(1000, function () {
                $("#read-more-btn1").text('Read Less');
                $(".ellipses").fadeOut(0);
            });

            ReadMore1Trgger = true;
        }
        else if (ReadMore1Trgger === true) {
            $("#read-more1").hide(1000, function () {
                $("#read-more-btn1").text('Read More');
                $(".ellipses").fadeIn(0);
            });

            ReadMore1Trgger = false;
        }
        

    });
});


// Read More 2

$(document).ready(function () {
    let ReadMore2Trgger = false;

    $("#read-more-btn2").click(function () {

        if (ReadMore2Trgger === false) {
            $("#read-more2").show(1000, function () {
                $("#read-more-btn2").text('Read Less')
                $(".ellipses").fadeOut(0);
            });

            ReadMore2Trgger = true;
        }
        else if (ReadMore2Trgger === true) {
            $("#read-more2").hide(1000, function () {
                $("#read-more-btn2").text('Read More')
                $(".ellipses").fadeIn(0);
            });

            ReadMore2Trgger = false;
        }

    });
});



// Read More 3

$(document).ready(function () {
    let ReadMore3Trgger = false;


    $("#read-more-btn3").click(function () {

        if (ReadMore3Trgger === false) {
            $("#read-more3").show(1000, function () {
                $("#read-more-btn3").text('Read Less')
                $(".ellipses").fadeOut(0);
            });

            ReadMore3Trgger = true;
        }
        else if (ReadMore3Trgger === true) {
            $("#read-more3").hide(1000, function () {
                $("#read-more-btn3").text('Read More')
                $(".ellipses").fadeIn(0);
            });

            ReadMore3Trgger = false;
        }


    });
});

