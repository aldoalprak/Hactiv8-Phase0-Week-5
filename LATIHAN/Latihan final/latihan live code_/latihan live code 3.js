/*
==================================
Array Mastery: Shortest Word
==================================

Nama:________

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!


function shortestWords(words) {
  words = words.toLowerCase().split(' ')
  //console.log(words);
  var totalWords = []
  for(var i=0;i<words.length;i++){
    totalWords.push(words[i].length)
    //console.log(totalWords);
  }
  for(var j=1;j<totalWords.length;j++){
    var minimum = totalWords[0]
    if (minimum>totalWords[j]) {
      minimum = totalWords[j]
    }
  }
  var hasil = []
  for(var k=0;k<words.length;k++){
    if (words[k].length===minimum) {
      hasil.push(words[k])
    }
  }
  return hasil
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']
