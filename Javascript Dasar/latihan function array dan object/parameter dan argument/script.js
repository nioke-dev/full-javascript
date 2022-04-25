function tambah(a, b){
    return a + b;
}

function kali(a, b){
    return a * b;
}

function argument(){

    var hasil = 0;
    for (let index = 0; index < arguments.length; index++) {
        hasil += arguments[index];        
    }

    return hasil;
}

var a = parseInt(prompt('Masukkan Nilai 1'));
var b = parseInt(prompt('Masukkan Nilai 2'));
var hasil_tambah = tambah(a*2, b*2);
var hasil_kali = kali(a*2, b*2);
var argument = argument(a, b, 10, 20, 30, 'hi', 'hello'); 
console.log(hasil_tambah); //hasilnya adalah 40 jika variable a dan b diisi 10 dan 10
console.log(hasil_kali); //hasilnya adalah 400 jika variable a dan b diisi 10 dan 10
console.log(argument); //hasilnya 80hihello jika variable a dan b diisi 10 dan 10
