// membuat object
// Object literal

var mhs1 = {
    nama: 'Rizki',
    nrp: '12345',
    email: 'sandhikagalih@unpas.ac.id',
    jurusan: 'Teknik Informatika'
}

var mhs2 = {
    nama: 'Doddy',
    nrp: '12345',
    email: 'Dody@unpas.ac.id',
    jurusan: 'Teknik Industri'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nofariza', '023040123', 'nofa@yahoo.com', 'Teknik Pangan');

// Contructor
function Mahasiswa(nama, nrp, email, jurusan){
    // var this = {}
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Erik', '023040123', 'erik@icloud.com', 'Teknik Mesin');