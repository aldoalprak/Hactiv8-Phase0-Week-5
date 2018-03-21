function highestScore (students) {
  // Code disini
  var obj={};
  var namaTerbaik='';
  var nilaiTerbaik=0;
  
  for(var i=0;i<students.length;i++) {
    var obj2={};
    for(var j=i+1;j<students.length;j++){
      if((students[i].class)===(students[j].class)) {
       
        if((students[i].score>students[j].score)) {
          namaTerbaik=students[i].name;
          nilaiTerbaik=students[i].score;
          obj2.name=namaTerbaik;
          obj2.score=nilaiTerbaik;
          obj[students[i].class]=obj2;
        }else {
          namaTerbaik=students[j].name;
          nilaiTerbaik=students[j].score;
          obj2.name=namaTerbaik;
          obj2.score=nilaiTerbaik;
          obj[students[j].class]=obj2;
        }
       }
      }  
    }
  for(var k=0;k<students.length;k++) {
     obj2={};
        if(obj[students[k].class]===undefined) {
          namaTerbaik=students[k].name;
          nilaiTerbaik=students[k].score;
          obj2.name=namaTerbaik;
          obj2.score=nilaiTerbaik;
          obj[students[k].class]=obj2;
       }
     }  
  return obj;  
  }
  


// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

/* alternatif
function highestScore (students) {
  // Code disini
  var obj={};
  for(var i=0;i<students.length;i++) {
    obj[students[i].class]={};
    obj[students[i].class].name='';
    obj[students[i].class].score=0;
    for(var j=0;j<students.length;j++) {
      if(students[i].class===students[j].class) {
        if(students[j].score>obj[students[i].class].score){
          obj[students[i].class].name=students[j].name;
          obj[students[i].class].score=students[j].score;
        }
      }
    }
  }
return obj;  
}
*/