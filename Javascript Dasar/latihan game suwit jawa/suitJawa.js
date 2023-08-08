var tanya = true;
while (tanya) {
  // Menangkap Pilihan Player
  var p = prompt("Pilih : Gajah, Semut atau Orang");

  // Menangkap Pilihan Computer
  // Membangkitkan Bilangan Random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp < 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";
  // Menentukan Rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    hasil = comp == "semut" ? "KALAH" : "MENANG";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH" : "MENANG";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = 'Memasukkan Pilihan yang salah';
  }
  // Tampilkan Hasilnya
  alert(
    "Kamu Memilih : " +
      p +
      " dan komputer memilih : " +
      comp +
      "\nMaka Hasilnya : Kamu " +
      hasil
  );
  
  tanya = confirm('lagi?');
}
alert('Terimakasih Sudah Bermain');