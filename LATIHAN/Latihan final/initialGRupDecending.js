/*
===========================
Initial Grouping Descending
==========================
[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output: 
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!
RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort 
*/

function initialGroupingDescending(studentsArr) {
// Only Code Here
  
  //sorting
  var store='';
  for(var i=0;i<studentsArr.length;i++) {
    for(var j=i+1;j<studentsArr.length;j++) {
      if(studentsArr[j]>studentsArr[i]) {
        store=studentsArr[i];
        studentsArr[i]=studentsArr[j];
        studentsArr[j]=store;
      }  
    }
  }
  
  //masukin huruf depan
  var grupNama=[];
  grupNama.push([studentsArr[0][0]])
  
  for(var k=0;k<studentsArr.length;k++) {
    var tampung=1;
    for(var m=0;m<grupNama.length;m++) {
      if(studentsArr[k][0]!==grupNama[m][0]){
        tampung*=1
      }else {
        tampung*=0
      }
    }
    if(tampung===1) {
      grupNama.push([studentsArr[k][0]]);
    }
  }
  
  //masukin nama sesuai huruf depan
  
    for(var p=0;p<grupNama.length;p++) {
      for(var n=0;n<studentsArr.length;n++){
         if(grupNama[p][0]===studentsArr[n][0]){
            grupNama[p].push(studentsArr[n]);
         }  
      }
    }
  
  
return grupNama;
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/


