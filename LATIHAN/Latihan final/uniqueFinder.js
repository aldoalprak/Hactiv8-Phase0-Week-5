/*
=============
UNIQUE FINDER
=============
Name :_____________
[INSTRUCTIONS]
uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.

[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

DILARANG MENGGUNAKAN SPLIT, INDEXOF, INCLUDES

*/

/*
*/

function uniqueFinder(sentence) {
  // only code here!
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
  if(sentence.length===0) {
    return 'NO WORDS'
  }else{
  return newArr;
  }
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'