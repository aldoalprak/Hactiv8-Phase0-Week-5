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
 
 
 var pisah=words.split(' ');
 
 //cari jumlah kata
 var jumlahKata=[];
 for(var i=0;i<pisah.length;i++) {
   jumlahKata.push(pisah[i].length);
 }
 
 //angka terkcil
 var min=100;
 for(var j=0;j<jumlahKata.length;j++) {
     if(jumlahKata[j]<min){
       min=jumlahKata[j];
   }
 }

 var output1=[];
 
 for(var k=0;k<pisah.length;k++) {
   if(pisah[k].length===min) {
     output1.push(pisah[k]);
   }
 }
 
 var output2=[];
 
 output2.push(output1[0]);
 for(var l=0;l<output1.length;l++){
   var store=1;
   for(var m=0;m<output2.length;m++) {
     if(output1[l].toLowerCase()!==output2[m].toLowerCase()) {
       store*=1;
       
     }else {
       store*=0
     }
   }
   if(store===1) {
     output2.push(output1[l])
   }
 }
 return output2;
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']
