/*
=============
DUPLICATE FINDER
=============
Name :_____________

[INSTRUCTIONS]
duplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi kata yang duplikat atau lebih dari satu.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.


[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata duplikat: saya
output: ['saya']


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function duplicateFinder(sentence) {
  //your code here
  var arr=[];
  var store='';
  
  //untuk push  kata pertama sampai terakhir ke var arr
  for(var i=0;i<sentence.length;i++) {
    if(sentence[i]===' ') {
      arr.push(store);
      store='';
    }else{
      store+=sentence[i];
    }
  }
  //untuk push kata terakhir ke var arr
  arr.push(store);
  
  //untuk membandingkan antara arr dan newArr(array baru untuk output yang diinginkan)
  var newArr=[];
  newArr.push(arr[0]);
  
  for(var j=0;j<arr.length;j++) {
    var tampung=1;
    for(var k=0;k<newArr.length;k++) {
       
       if(arr[j].toLowerCase()!==newArr[k].toLowerCase()) {
        tampung*=1;
      }else {
        tampung*=0;
      }
    }
    if(tampung===1) {
      newArr.push(arr[j]);
    }
  }
  
  //cari kata duplikat
 
  var output=[];
  for(var o=0;o<newArr.length;o++){
     var count=0;
    for(var l=0;l<arr.length;l++) {
      if(newArr[o].toLowerCase()===arr[l].toLowerCase()) {
        count++
      }
    }
    if(count>1) {
      output.push(newArr[o]);
      
    }
  }
  
  if(sentence.length===0) {
    return 'NO WORDS'
  }else{
  return output;
  }

}

console.log(duplicateFinder('hello black dragon and hello red dragon')); // ['hello', 'dragon']
console.log(duplicateFinder('hello HELLo hEllO hlloe')); // ['hello']
console.log(duplicateFinder('john is coding and he is coding')); // ['is', 'coding']
console.log(duplicateFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(duplicateFinder('')); // 'NO WORDS'