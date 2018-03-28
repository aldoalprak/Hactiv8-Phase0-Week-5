/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa huruf x / y / z
di dalam `str`.
Contoh ada di test cases

RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
 
 
 ALGORITMA
 -buat var penampung unntuk menghtung jumlah x,y,z
 -lakukan iterasi parameter str dengan menggunakan for untuk mengecek satu per satu kata
 - jika ketemu x/y/z makan store+=1
 - setelah pengulangan selesai 
    ---> jika store>0 maka tampilkan store+ 'virus detected'
    ---> jika 0 'no virus detected'
*/ 

function virusCheck (str) {
  // Code disini
  var store=0;
  for(var i=0;i<str.length;i++) {
    if(str[i].toLowerCase()==='x' || str[i].toLowerCase()==='y' || str[i].toLowerCase()==='z') {
      store+=1;
    }
  }
  if(store>0) {
    return (store+ ' virus detected');
  }else {
  return ('No virus detected');
  }
}

console.log(virusCheck('qlD4MZax0raQqew')); // 2 viruses detected
console.log(virusCheck('HH0NBP1zRa')); // 1 virus detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy')); // 4 viruses detected
console.log(virusCheck('mjBgPlzks')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected
