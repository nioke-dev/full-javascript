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

// Konsep this pada arrow function
// Constructor Function

// const Mahasiswa = function () {
//     this.nama = 'Sandhika',
//     this.umur = 33,
//     console.log(this);
//     this.sayHello = function () {
//         console.log(`Halo Nama Saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const sandhika = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Sandhika',
//     this.umur = 33,
//     console.log(this);
//     this.sayHello = () => {
//         console.log(`Halo Nama Saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const sandhika = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: "sandhika",
//   umur: 33,
//   sayHello: () => {
//     console.log(`Halo Nama Saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     console.log(this);
//   },
// };


// const Mahasiswa = function () {
//     this.nama = 'sandhika',
//     this.umur = 33,
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const sandhika = new Mahasiswa(); 


const box = document.querySelector('.box');
box.addEventListener('click', function () {  
    let satu = 'size';
    let dua = 'caption';
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }  
    this.classList.toggle(satu);
    // toggle artinya akan menambahkan class baru jika belum ada
    // atau dia akan menghilangkan class jika ada
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});