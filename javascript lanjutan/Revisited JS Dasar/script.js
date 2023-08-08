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

// function mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    
//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     mahasiswa.main = function (jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     }
//     return mahasiswa;
// }
// let sandhika = mahasiswa('Sandhika', 10);
// let doddy = mahasiswa('doddy', 20);

// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;
    
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }

    this.main = function (jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain!`);
    }    
}
let sandhika = new Mahasiswa('Sandhika', 10);
let doddy = Mahasiswa('doddy', 20);
// 4. Object.create