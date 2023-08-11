// Cara Untuk Membuat Object Pada Javascript

// 1. Object Literal
// PROBLEM : Tidak Efektif Untuk Objek Yang Banyak
let mahasiswa1 = {
    nama : 'sandhika',
    energi : 10,
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }
}

let mahasiswa2 = {
    nama : 'Doddy',
    energi : 20,
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }
}

// 2. Function Declaration

// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     },
    
//     main : function (jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     },   
     
//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur`);
//     }
// }

// function mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;    
    
//     return mahasiswa;
// }
// let sandhika = mahasiswa('Sandhika', 10);
// let doddy = mahasiswa('doddy', 20);


// Prototype
function Mahasiswa(nama, energi){    
    this.nama = nama;
    this.energi = energi;    
}
Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan!`;
}
Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat Main!`;
}
Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat Tidur!`;
}
let sandhika = new Mahasiswa('sandhika', 10);


// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
    
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     this.main = function (jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     }    
// }
// let sandhika = new Mahasiswa('Sandhika', 10);
// let doddy = Mahasiswa('doddy', 20);
// 4. Object.create