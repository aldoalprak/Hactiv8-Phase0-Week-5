/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

Aturan coding
-------------
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/

/*
ALGORITMA
-membuat var arr sebagai penamppung Array
-melakukan iterasi menggunakan for loops untuk mengecek setia pasang dari string yang ada
  --->pengecekan dilakukan 2 kondisi
       1. jika str.length%2===0
         ---> kondisi lagi
              a. jika i===0||i%2===0
              
       2. jika str.length%2!==0
        --->kondisi lagi
            a.i===str.length-1
            b.i===0 ||i%2===0
- kemudian hasi di pish ke var arr
-buat loop kedua untuk itersi setiap array yang berangka genap
-menggunakan var count untuk menampung
*/         

function evenPairsSum (str) {
  // Code disini
  var arr=[];
  for(var i=0;i<str.length;i++) {
    if(str.length%2!==0){
      if(i===str.length-1) {
        arr.push(parseInt(str[i]+str[0]));
      }else if(i===0 || i%2===0) {
        arr.push(parseInt(str[i]+str[i+1]))
      } 
    }else if(str.length%2===0) {
      if(i===0 || i%2===0) {
        arr.push(parseInt(str[i]+str[i+1]))
      }
    }
  }
  var count=0;
  for(var j=0;j<arr.length;j++) {
    if(arr[j]%2===0) {
      count+=arr[j];
    }
  }
  if(count!==0) {
    return count;
  }else {
  return 0;
  }
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
