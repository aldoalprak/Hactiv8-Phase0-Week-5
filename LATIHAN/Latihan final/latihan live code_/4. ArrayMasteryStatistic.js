/*
====================================
Number and Array Mastery: Statistics
====================================

Name Here :_____________

[INSTRUKSI]
Tersedia 3 input:
1) kata (2 kemungkinan: 'min' atau 'max')
2) array berisi angka-angka positif
3) array berisi angka-angka positif

Output:

Jika kata adalah 'min', maka return hasil terkecil dari dua array yang ada
Jika kata adalah 'max', maka return hasil terbesar dari dua array yang ada

[CONTOH]

1) 'max', [6, 2, 4, 10, 8, 2] , [4, 7, 9, 19]  -->   10 , 19
2) 'min', [5, 11, 18, 6] , [3, 9, 10, 13]  -->    5 , 13

*/

function statistik(kata, arr1, arr2) {
  if(kata==='max') {
    var maxNumber1=0;
    for(var i=0;i<arr1.length;i++) {
      if(arr1[i]>maxNumber1) {
        maxNumber1=arr1[i];
      }
    }  
    var maxNumber2=0;
    for(var j=0;j<arr2.length;j++) {
      if(arr2[j]>maxNumber2) {
        maxNumber2=arr2[j];
      }
    }
    var maxToString1=maxNumber1.toString();
    var maxToString2=maxNumber2.toString();
    return(maxToString1+','+maxToString2);  
  }
  
  if(kata==='min') {
    var minNumber1=1000000000;
    for(var k=0;k<arr1.length;k++) {
      if(arr1[k]<minNumber1) {
        minNumber1=arr1[k];
      }
    }
    var minNumber2=1000000000;
    for(var l=0;l<arr2.length;l++) {
      if(arr2[l]<minNumber2) {
        minNumber2=arr2[l]
      }
    }
     var minToString1=minNumber1.toString();
     var minToString2=minNumber2.toString();
     return(minToString1+' '+minToString2)
  }
  
  
}


 console.log(statistik('min', [1, 1, 1] , [8, 15, 17, 9]));             // 1 8
 console.log(statistik('max', [4, 8, 9, 12] , [33, 88, 99 ,11]));       // 12 99
 console.log(statistik('min', [1, 2, 5, 2, 2] , [67, 45, 55]));         // 1 45
 console.log(statistik('max', [6, 2, 4, 10, 8, 2] , [6, 5, 13, 23]));     // 10 23
 console.log(statistik('min', [5, 11, 18, 6], [3, 1, 8, 13]));          // 5 1
