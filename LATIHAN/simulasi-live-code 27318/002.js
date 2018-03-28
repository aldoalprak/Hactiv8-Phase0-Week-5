/*
------------
LOST NUMBERS
------------
PROBLEM
=======
lostNumbers adalah sebuah function yang akan menerima tiga parameter.
Tiga parameter tersebut adalah tiga angka yang berbeda.
Function akan menampilkan di log setiap angka diantara angka terkecil dan angka terbesar dari antara ketiga angka tersebut.
Hindari menampilkan angka yang merupakan salah satu dari tiga angka parameter tersebut.
Contoh:
first = 6, second = 1, third = 3
berarti, function akan menampilkan di console 1 per 1 angka:
2
4
5

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan Math.max, Math.min, .apply, .bind, .call
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
- Dilarang menggunakan regex metode apapun

algoritma

-buat var arr penampung untuk push first,second,third
-sort array dari terkecil hingga terbesar

-buat iterasi dengan menggunakan for dar i=first sampai i=third untuk mendapatkan hasil
 deret dari first sampai third
-kemudian pus ke var newArr 

-buat array baru var angkaHilang
-buat var store untuk penampung(initial store=1)
-bandingkan arr dan newArr
    ->jika angka di newArr tidak ada di arr maka store*=1
    ->jika angka di newArr tidak ada di arr maka store*=0
    ->jika hasil akhir store=1 maka push ke angkaHilang
    
-car min dan max
-lakuin for() antara min dan max
-pake indexOf
*/

function lostNumbers(first, second, third) {
  // only code here..
  var arr=[];
  arr.push(first,second,third);
  arr.sort(function(a,b){return a-b});
  
  //buat newArr dari first sampai third
  var newArr=[];
  for(var i=arr[0];i<=arr[2];i++) {
    newArr.push(i);
  }
  
  //bandingkan newArr dan arr
  
  angkaHilang=[];
  for(var j=0;j<newArr.length;j++) {
    var store=1;
    for(var k=0;k<arr.length;k++) {
      if(newArr[j]!==arr[k]) {
        store*=1
      }else {
        store*=0
      }
    }
    if(store===1) {
      angkaHilang.push(newArr[j])
    }
  }
  
  if(angkaHilang.length===0) {
    console.log('TIDAK ADA YANG DITAMPILKAN COBSOLE'); 
  }else {
    for(var l=0;l<angkaHilang.length;l++) {
      console.log(angkaHilang[l]);
    }
  }
  console.log('\n');
}

lostNumbers(1, 3, 5);
// 2
// 4

lostNumbers(4, 6, 2);
// 3
// 5

lostNumbers(100, 108, 105);
// 101
// 102
// 103
// 104
// 106
// 107

lostNumbers(6, 5, 3);
// 4

lostNumbers(3, 1, 2);
// (TIDAK ADA YANG DITAMPILKAN CONSOLE)
