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

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/*
1.cari kata unik dari kalimat
2. kemudian ketika katanya tidak sama dimasukan ke array unik
3. klu kaliamtnya kosong , di return ke no word
4. nah bagian yang hellonya , saya bingung nempatinnya uda mepet waktunya kwkwkwk
logikanya sih kata HELLo dan hllo di buat lowercase jadi biar sama , cmn kayaknya gk sempet ngetiknya hahahaha
5. terus di return ke array yang kita push

*/

function uniqueFinder(sentence) {
  sentence = sentence.split(' ') // pisahkan ke array
  var unik = [] // untuk tampung
  for(var i=0;i<sentence.length;i++){
    var posisi = unik.indexOf(sentence[i])
    if (posisi === -1) {
      unik.push(sentence[i])
    }
  }
  return unik
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'
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

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/*
1.cari kata unik dari kalimat
2. kemudian ketika katanya tidak sama dimasukan ke array unik
3. klu kaliamtnya kosong , di return ke no word
4. nah bagian yang hellonya , saya bingung nempatinnya uda mepet waktunya kwkwkwk
logikanya sih kata HELLo dan hllo di buat lowercase jadi biar sama , cmn kayaknya gk sempet ngetiknya hahahaha
5. terus di return ke array yang kita push

*/

function uniqueFinder(sentence) {
  var newSentence = sentence.toLowerCase()
  //console.log(newSentence);
  var arr = []
  arr.push(newSentence)
  var newArr = []
  //console.log(arr);
  for(var i=0;i<arr.length;i++){
  	for(var j=0;j<arr.length;j++){
  		if (arr[i]!==arr[j]) {
  			newArr.push(arr[j])
  		}
  	}
  }
  return newArr
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'
