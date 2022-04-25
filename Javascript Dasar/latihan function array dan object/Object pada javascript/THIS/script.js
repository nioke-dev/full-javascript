// this
// this adalah sebuah keyword special yang secara otomatis didefinisikan pada setiap function.
// var a = 10
// console.log(this.a);








// membuat object

// cara 1 - function declaration
// function halo(){
//     console.log('halo');
// }

// halo();


// cara 2 - function literal
// var obj = {};

// obj.halo = function(){
//     console.log('halo');
// }

// obj.halo();


// cara 3 - constructor function
// function Halo(){
//     console.log('halo');
// }

// new Halo();













// membuat object menggunakan this

// cara 1 - function declaration
// function halo(){
//     console.log(this);  
//     console.log('halo');
// }

// this.halo();
// this mengembalikan object global


// cara 2 - function literal
// var obj = {a: 10, nama: "Sandhika Galih"};

// obj.halo = function(){
//     console.log(this);
//     console.log('halo ges');
// }

// obj.halo();
// this mengembalikan object yang bersangkutan


// cara 3 - constructor function
function Halo(){
    console.log(this);
    console.log('halo');
}

var obj1 = new Halo();
var obj2 = new Halo();

// this mengembalikan object yang baru dibuat

