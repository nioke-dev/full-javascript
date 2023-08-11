// Execution Context, Hoisting & Scope

console.log(nama);
var nama = 'Sandhika';

// Creation Phase Pada Global Context
// nama var = undefined
// nama function = fn()
// Hoisting

// window = global object
// this = window

// Execution Phase
// console.log(sayHello());
// var nama = 'Sandhika';
// var umur = 33;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya umur ${umur} tahun`;
// }

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Sandhika Galih';
// var username = '@sandhikagalih';

// function cetakURL(username){
//     console.log(arguments);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@doddy'));

// telusuri dengan menggunakan js visualize

// function a() {
//     console.log('ini a');
//     function b(){
//         console.log('ini b');
//         function c() {
//             console.log("ini c");
//         }
//         c();
//     }
//     b();
// }
// a();


// Latihan Terakhir
function satu() {
    var nama = 'Sandhika';
    console.log(nama);
}

function dua() {
    console.log(nama);
}
console.log(nama);
var nama = 'Erik';
satu();
dua('doddy');
console.log(nama);

// This is the Ouptut 
// undefined
// Sandhika
// Erik
// Erik