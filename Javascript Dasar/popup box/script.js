// This is ALert
// alert('Hello World!');

// This Prompt in Javascript
// var nama = prompt('Masukkan Nama Anda : ');
// alert('nama kamu adalah ' + nama);

// This Confirm in Javascript
// var konfirmasi = confirm('Apakah Anda Yakin?');
// if (konfirmasi) {
//     alert('Anda Telah Menekan OK');
// }else {
//     alert('Anda Telah Menekan Cancel');
// }


// Latihan
alert('Selamat Datang...');
var lagi = true;

while (lagi === true) {
    var nama = prompt('Masukkan Nama : ');
    alert('Halo ' + nama);

    lagi = confirm('coba lagi');
}

alert('terimakasih');