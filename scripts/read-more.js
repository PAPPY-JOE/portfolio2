// Javascript for Landing Page Read-More Toggle

// Not in use because it is rather longer to write than jQuery
// jQuery is in use


// Read more 1

let ReadMoreStatus1 = false;

// Read More Button
let ReadMoreBtn1 = document.getElementById('read-more-btn1');

// Read more text
let ReadMoreText1 = document.getElementById('read-more1');

let ReadMoreFunc1 = function () {
    if (ReadMoreStatus1 === false) {

        ReadMoreText1.style.display = 'inline'
        ReadMoreBtn1.innerHTML = 'Read Less'

        ReadMoreStatus1 = true;
    }
    else if (ReadMoreStatus1 === true) {
        
        ReadMoreText1.style.display = 'none'
        ReadMoreBtn1.innerHTML = 'Read More'

        ReadMoreStatus1 = false;
    }
}

ReadMoreBtn1.onclick = ReadMoreFunc1;



// Read more 2

let ReadMoreStatus2 = false;

// Read More Button
let ReadMoreBtn2 = document.getElementById('read-more-btn2');

// Read more text
let ReadMoreText2 = document.getElementById('read-more2');

let ReadMoreFunc2 = function () {
    if (ReadMoreStatus2 === false) {

        ReadMoreText2.style.display = 'inline'
        ReadMoreBtn2.innerHTML = 'Read Less'

        ReadMoreStatus2 = true;
    }
    else if (ReadMoreStatus2 === true) {
        
        ReadMoreText2.style.display = 'none'
        ReadMoreBtn2.innerHTML = 'Read More'

        ReadMoreStatus2 = false;
    }
}

ReadMoreBtn2.onclick = ReadMoreFunc2;



// Read more 3

let ReadMoreStatus3 = false;

// Read More Button
let ReadMoreBtn3 = document.getElementById('read-more-btn3');

// Read more text
let ReadMoreText3 = document.getElementById('read-more3');

let ReadMoreFunc3 = function () {
    if (ReadMoreStatus3 === false) {

        ReadMoreText3.style.display = 'inline'
        ReadMoreBtn3.innerHTML = 'Read Less'

        ReadMoreStatus3 = true;
    }
    else if (ReadMoreStatus3 === true) {
        
        ReadMoreText3.style.display = 'none'
        ReadMoreBtn3.innerHTML = 'Read More'

        ReadMoreStatus3 = false;
    }
}

ReadMoreBtn3.onclick = ReadMoreFunc3;

