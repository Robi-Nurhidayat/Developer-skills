"use strict";

// diberikan sebuah array peramalan maximum temperature, termometer menampilkan sebuah string dengan kalimat temperatur ini.

// contoh : [17,21,23] akan menampilkan "... 17oc di hari ke 1, ... 21oC di hari ke 2, ... 23oC di hari ketiga ..."

//buat sebuah fungsi tampilPeramalan yang mengambil sebuah array dengan nama "arr" dan menampilkan sebuah string like di atas ke konsol

// gunakan problem solving framework: pahami masalah dan pecah ke sub masalah!

// TEST DATA 1 : [17,21,23]
// TEST DATA 2 : [12,5,-5,0,4]

// Memahami masalah
// 1. Bagaimana cara menampilkan array cuaca sesuai dengan permintaan
// 2. Membuat sebuah fungsi untuk menampilkan isi isi array tersebut
// 3. menangkap isi array kemudian di loop
// 4. membuat variabel hari
// 5. memanggil fungsi

const tampilPeramalan = function (arr) {
  const temperatur = arr;
  let day = 0;

  for (let i = 0; i < temperatur.length; i++) {
    console.log(`... ${temperatur[i]}oC dihari ke ${(day = i + 1)}`);
  }
};

tampilPeramalan([17, 21, 23]);
tampilPeramalan([12, 5, -5, 0, 4]);
