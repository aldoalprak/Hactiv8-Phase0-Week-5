/*
========================
Soal 3 : Number Grouping
========================

Name : _________________

Disediakan sebuah function numberGrouping yang bertugas untuk menerima sebuah parameter berupa angka, dan mengembalikan susunan angka baru yang merupakan hasil pengelompokan berdasarkan 3 digit angka. Apabila jumlah angka yang belum dikelompokan ada 4 maka akan dibagi menjadi 2 buah 2 digit angka tidak 3 dan 1
Ex: Input: [ 1 , 2 , 3 , 4 , 5 , 6 ]
Output: 123-456
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
Output: 123-456-78-91
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
Output: 123-456-78

*/

function numberGrouping(angka) {

    // Start Code Here
     
    if(angka.length%3===0){
      var count=0;
      var store='';
      for(var i=0;i<angka.length;i++) {
        count++;
        store+=angka[i].toString();
        if(count===angka.length) {
          store+='';
        }else if(count%3===0){
          store+='-';
        }
      }
      return store;
    }
     
     
    if(angka.length%3 !==0){
     count=0;
     store='';
     for(var j=0;j<angka.length;j++) {
       count++;
       store+=angka[j].toString();
       if(count===angka.length){
         store+='';
       }else if(angka.length-count===1){
         store+='';
       }else if(count%3===0 || angka.length-count===2){
         store+='-';
       }
     }
     return store;
    }
  
}

console.log(numberGrouping([4,6,7,9,2,9])); //467-929
console.log(numberGrouping([6,3,1,8,4,7,9,3,5,8])); //631-847-93-58
console.log(numberGrouping([1,8,4,7,3,7,1])); //184-73-71