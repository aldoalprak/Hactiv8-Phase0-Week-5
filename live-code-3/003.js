/**
Above Average Students
----------------------
Implementasikan function aboveAverageStudents untuk mendapatkan list murid yang nilainya di atas
rata-rata. Rumus untuk mencari rata-rata: ( Hasil pertambahan semua nilai / Jumlah murid )
Contoh:
- input: [
    { name: 'Foobar', score: 75 },
    { name: 'Foobaz', score: 60 },
    { name: 'Foo', score: 75 }
  ]
- output: [
    { name: 'Foobar', score: 75 },
    { name: 'Foo', score: 75 }
  ]

Aturan coding:
---------------
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()

*/

/*
algoritma
-mencari average untuk setiap murid dengan melakukan iterasi di students.score
-melakukan iterasi dengan membandingkan nilai average untuk mendapatkan siswa yang berada di atas rata2;
- memasukan objek kedalam array baru.
*/

function aboveAverageStudents (students) {
  // Code disini
  
  var newArr=[];
  var count=0;
  for(var i=0;i<students.length;i++) {
    count+=students[i].score
  }
  var average=count/students.length;
  
  for(var j=0;j<students.length;j++) {
    var obj={};
    if(students[j].score>average) {
      obj.name=students[j].name;
      obj.score=students[j].score;
      newArr.push(obj);
    }
    
    
  }
  return newArr;
}

console.log(aboveAverageStudents([
  { name: 'Dimitri', score: 90 },
  { name: 'Sergei', score: 70 },
  { name: 'Alisa', score: 50 },
  { name: 'Viktor', score: 65 },
  { name: 'Vladimir', score: 40 },
  { name: 'Alexei', score: 70 }
]));
// [ { name: 'Dimitri', score: 90 },
//   { name: 'Sergei', score: 70 },
//   { name: 'Viktor', score: 65 },
//   { name: 'Alexei', score: 70 } ]

console.log(aboveAverageStudents([
  { name: 'Foo', score: 100 },
  { name: 'Bar', score: 100 },
  { name: 'Baz', score: 90 }
]));
// [ { name: 'Foo', score: 100 }, { name: 'Bar', score: 100 } ]

console.log(aboveAverageStudents([]));

// [ ]
