/**
=======================================
Array of Objects  Mastery: Invoke Spell
=======================================
[INSTRUKSI]
Kael the Invoker memiliki 3 orb yaitu Quas (q), Wex (w), dan Exort (e). Jika orb ini
dikombinasikan maka akan menghasilkan salah satu dari 10 spell yang berbeda!
Diberikan function invokeSpell yang menerima parameter input, dan spell apa saja yang
dimiliki oleh Invoker sudah disediakan dalam bentuk array.
Function akan mengembalikan nama spell dari input yang dimasukkan oleh user, ex:
- input = 'eeq', output = 'Forge Spirit' (karena q = 1, w = 0, e = 2)
- input = 'www', output = 'EMP' (karena q = 0, w = 3, e = 0)
- input = 'wqz', output = 'Combination does not exist' (karena kombinasi tidak ditemukan)

NOTE:
Meskipun input terbalik atau tidak urut (ex: 'qwe', 'ewq', 'weq'), maka akan tetap mengeluarkan
spell yang sama!

Aturan Coding:
--------------
- tidak boleh menggunakan .map, .filter dan .reduce!

*/

function invokeSpell (input) {
  const spells = [
      { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
      { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
      { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
      { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
      { q: 1, w: 2, e: 0, spellName: 'Tornado' },
      { q: 0, w: 3, e: 0, spellName: 'EMP' },
      { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
      { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
      { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
      { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
  ];

  // your code here
  var arrHuruf=[];
  var count1=0;
  var count2=0;
  var count3=0;
  for(var i=0;i<input.length;i++) {
    if(input[i]==='q') {
      count1+=1;
    }else if(input[i]==='w') {
      count2+=1;
    }else if(input[i]==='e'){
      count3+=1;
    }
  }
  arrHuruf.push(count1);
  arrHuruf.push(count2);
  arrHuruf.push(count3);
  
  for(var j=0;j<spells.length;j++) {
    if(spells[j].q===arrHuruf[0] &&spells[j].w===arrHuruf[1] && spells[j].e===arrHuruf[2]) {
      return spells[j].spellName;
    }
  }
  return 'Combination does not exist';
}

console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist
