/*
-Buat var kelas untuk objek baru
-iterasi 1 untuk nentuin key tiap kelas
-iterasi 2 untuk masukin properties di setaip key;
*/

function graduates (students) {
  // Code disini
  var kelas={};

  for(var i=0;i<students.length;i++) {
    kelas[students[i].class]=[]; 
  }



  for(var j=0;j<students.length;j++) {
      var properties={};
     //console.log(properties);
    if(students[j].score>75) {
      properties.name=students[j].name;
     // console.log(properties.name);
      properties.score=students[j].score;
      //console.log(properties);
       kelas[students[j].class].push(properties);
       //console.log(students[j].class);
      // console.log(kelas);
      // console.log('\n');
    }
    
  }
return kelas;

}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }