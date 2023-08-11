// function init() {
//     // let nama = 'Sandhika';
//     return function (nama) {
//         console.log(nama);
//     }    
// }
// let panggilNama = init();
// panggilNama('Sandhika');
// panggilNama('Galih');


// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Sandhika');
// selamatSiang('Galih');
// selamatMalam('Mustofa');

let add = (function () {
    let counter = 0;
    return function() {
        return ++counter
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());