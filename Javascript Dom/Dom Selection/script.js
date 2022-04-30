// DOM selection
// document.getElementById -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'lightblue';
// judul.innerHTML = 'Nurul Mustofa';

// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';    
// }


// document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'ini diubah dari javascript';



// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'lightblue';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.style.backgroundColor = 'tomato';
// yang dikembalikan hanya p pertama


// document.queryselectorAll() -> nodeList

// const p = document.querySelectorAll('p');    
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';    
// }


// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';



const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';