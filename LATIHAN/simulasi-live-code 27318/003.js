/*
------------
NUMBERS DIVIDER
------------
PROBLEM
=======
numbersDivider adalah sebuah function yang akan menerima satu parameter berupa number.
Function akan mengembalikan array dua dimensi dimana array pertama berisi kumpulan pembagi parameter tersebut
dan array ke dua berisi penjumlahan dari angka pembagi yang ganjil

Contoh:
input: 6
output:
[ [6, 3, 2, 1], 4 ]

input: 8
output:
[ [8, 4, 2, 1], 1 ]

input: 13
output:
[ [13, 1], 14 ]

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan .reduce, .map, .filter
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
- Dilarang menggunakan regex metode apapun

algoritma=

-buat var arr sebagai hasil output
-lakukan iterasi pertama untuk array pertama (i dimulai dari num sampai >0)
   ->jika num%i===0 makan arr[0],push(i)
-lakukan iterasi kedua untuk menentukan penjumlahan ganjil (j dimulai dari 0 sampai arr[0].length)
  ->buat var store untuk pernampung
   -> jika arr[0][j] %2 !==0 maka store+=arr[0][j]
-buat assignment arr[1]=store

*/


function numbersDivider(num) {
    // your code here
    var arr=[[],0];
    //array1
    for(var i=num;i>0;i--) {
      if(num%i===0) {
        arr[0].push(i);
      }
    }
    //array2
    var store=0;
    for(var j=0;j<arr[0].length;j++) {
       if(arr[0][j]%2!==0) {
         store+=arr[0][j];
       }
    }
    arr[1]=store;
  return arr;  
}

console.log(numbersDivider(6));      // [ [6, 3, 2, 1], 4 ]
console.log(numbersDivider(8));     // [ [8, 4, 2, 1], 1 ]
console.log(numbersDivider(13));     // [ [13, 1], 14 ]
