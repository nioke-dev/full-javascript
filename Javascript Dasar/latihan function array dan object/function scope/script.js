// global scope
// var a = 1;
"use strict";

function tes(){
    // name conflict
    // var a = 2;    
    a = 2;    
}


tes();
console.log(a);