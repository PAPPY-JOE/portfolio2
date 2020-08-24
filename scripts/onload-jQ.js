setTimeout(() => {
    $('.onload').slideUp(800);
}, 1000);
 
    

// Changing text in landing block

let greet1 = false;
let greet2;
let greet3;
let greet4;
let greet5;

    setInterval(() => {
        
        if (greet1 === false ) {

            // alert('1')
            $('#welcome-greeting').html('Hello, ');            
            $('#welcome-name').html("I'M JOSEPH");            

            greet1 = true;
            greet2 = false;
        }
        else if (greet1 === true && greet2 === false) {
            
            $('#welcome-greeting').html('Hola, ');            
            $('#welcome-name').html("SOY JOSE");            

            greet2 = true;
            greet3 = false;
        }
        else if (greet2 === true && greet3 === false) {
            
            $('#welcome-greeting').html('Bonjour, ');            
            $('#welcome-name').html("JE SUIS JOSEPH");            

            greet3 = true;
            greet4 = false;
        }
        else if (greet3 === true && greet4 === false) {
            
            $('#welcome-greeting').html('Olá ,');         
            $('#welcome-name').html("EU SOU JOSÉ");            

            greet4 = true;
            greet5 = false;
        }
        else if (greet4 === true && greet5 === false) {
            
            $('#welcome-greeting').html('你好, ');         
            $('#welcome-name').html("我是 约瑟夫");            

            greet5 = true;
        }
        else if (greet5 === true) {
            
            greet1 = false
        }

    }, 8000);


