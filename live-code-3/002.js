/**
Array Injector
--------------
Implementasikan function `arrayInjector` menerima 3 parameter yaitu firstData, index dan secondData
dimana function ini meminta untuk menyisipkan `secondData` ke `firstData` berdasarkan paramter `index`
yang telah diberikan dan menempatkan `secondData` dimulai dari parameter `index` tersebut

Contoh:
  - input: [8, 'foobar', 'foobaz'], 1, ['bar', 'baz']
    output: [8, 'bar', 'baz', 'foobar', 'foobaz']

Aturan coding:
---------------
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
    - .splice()
    - spread operator(...)
*/

/*
ALGORITMA
-membuat variable newArr untuk penampung array baru
-melakukan iterasi dengan batasan firstData.length
   ---> jika i===index maka lakukan iterasi untuk secondData dan push ke newArr
        --->setelah iterasi selesai push firstData[i] 
   ---->selain itu newArr.push(firstData[i)
-return newArr   

*/

function arrayInjector (firstData, index, secondData) {
  // Code disini
  var newArr=[];
  for(var i=0;i<firstData.length;i++) {
    if(i===index) {
      for(var j=0;j<secondData.length;j++) {
        newArr.push(secondData[j]);
    }newArr.push(firstData[i]);
    }else {
      newArr.push(firstData[i]);
    }
  
  }
return newArr;  
}

console.log(arrayInjector([1, 5, 6,7], 1, [2, 3, 4]));
// [1, 2, 3, 4, 5, 6, 7]

console.log(arrayInjector([10, 20,70], 2, [30, 40, 50, 60]));
// [10, 20, 30, 40, 50, 60, 70]

console.log(arrayInjector(['Dimitri', 'Alexei', 'Alexander', 'Alisa'], 3, ['Dragunov']));
// ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']
