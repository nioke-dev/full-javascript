// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Nurul Mustofa</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<h1>Hello World</h1>';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'tomato';

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Sandhika');

// const p2 = document.querySelector('.p2');


// Dom Manipulation
// Buat Elemen Baru
const pBaru = document.createElement('p'); //Masih Disimpan Di Memory
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di Akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);




const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('judul Baru!');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';