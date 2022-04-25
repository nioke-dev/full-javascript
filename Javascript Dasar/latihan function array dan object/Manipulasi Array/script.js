// maniplasi array

// 1. menambah isi array
// var arr = ["a", 1, true];
// console.log(arr);

// var arr = [];
// arr[0] = "sandhika";
// arr[1] = "galih";
// arr[2] = "nofa";
// console.log(arr);


// 2. menghapus isi array

// var arr = ["sandhika", "galih", "nofa"];
// arr[1] = undefined;
// console.log(arr);


// 3. menampilkan isi array

// var arr = ["sandhika", "galih", "nofa"];

// for( var i = 0; i < arr.length; i++){
//     console.log('mahasiswa ke ' + i + ' : ' + arr[i]);
// }


// method pada array

// 1.join
var arr = ["sandhika", "galih", "nofa", "Doddy", "Fitri"];
// console.log(arr.join('-'));

// 2. push dan pop
// bekerja untuk elemen terakhir

// arr.push('Doddy');  
// arr.push('Doddy', 'Fitri');
// arr.pop();
// console.log(arr.join('-'));

// 3. unshift dan shift
// bekerja untuk elemen pertama

// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join('-'));

// 4. splice
// slice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)

// arr.splice(2, 0, 'Doddy', 'Fitri');
// console.log(arr.join('-'));


// 5. slice
// slice(indexAwal, Akhir)

// var arr2 = arr.slice(1,4);
// console.log(arr2.join('-'));


// 6. foreach

// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['sandhika', 'galih', 'nofa', 'Doddy', 'Fitri'];

// angka.forEach(function (e) {
//     console.log(e);
// });


// nama.forEach(function (e, i) {
//     console.log('mahasiswa ke-' + (i+1) + ' ' + e)
// })


// 7. map
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function (e){
//     return e * 2;
// });

// console.log(angka2.join(' - '));


// 8. sort
// var angka = [1,2,10,3,6,20,5,4,7,8];
// console.log(angka.join(' - ')); //belum diurutkan
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(' - ')); //sudah diurutkan


// 9. filter & find
// find tidak mengembalikan array tetapi nilai
// sedangkan filter mengembalikan array
var angka = [1,2,10,3,6,20,5,4,7,8];
var angka2 = angka.find(function (x) {
    return x > 5
});

console.log(angka2);

