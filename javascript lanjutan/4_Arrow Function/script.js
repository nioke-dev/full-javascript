// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('sandhika'));


// bentuk 1 arrow function

// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }

// bentuk 2 arrow function

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Erik', 'Malam'));

// sort hand
// implicit return
// jika parameter hanya 1 dan isinya hanya return bisa ditulis seprti dibawah ini
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Erik'));

// jika tidak memiliki paramter
// const tampilNama = () => `Halo Dunia`;
// console.log(tampilNama());

// contoh lain arrow function
// let mahasiswa = ['Sandhika Galih', 'Doddy Ferdiansyah', 'Erik'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length
// });
// console.log(jumlahHuruf);
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// jika kita hanya menulikan kurung kurawal biasa maka akan dianggap return
// untuk menjadikan kurung kurawal tersebut sebagai objek tambahkan kurung biasa
// let jumlahHuruf = mahasiswa.map(nama => ({ 
//     name: nama,
//     jmlHuruf: nama.length
// }));