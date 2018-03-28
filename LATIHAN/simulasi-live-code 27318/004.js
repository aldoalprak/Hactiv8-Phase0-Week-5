/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti
dan ada berapa orang yang mewakili negara tersebut.
Contoh ada di test cases


RULES
=====
- Dilarang menggunakan .map, .filter, .reduce



Object.keys();
*/

function participantsSummary (data) {
  // Code disini
   if(data.length===0) {
    return 'no participants'
   }
  var dataPeserta=[];
  dataPeserta.push([data[0][1]])
  
  //cari negara unik
  for(var i=0;i<data.length;i++) {
    var store=1;
    for(var j=0;j<dataPeserta.length;j++) {
      if(data[i][1]!==dataPeserta[j][0]) {
        store*=1;
      }else {
        store*=0;
      }
    }
    if(store===1) {
      dataPeserta.push([data[i][1]]);
    }
  }
  
 // masukin jumlah negara
  
  for(var k=0;k<dataPeserta.length;k++) {
    var tampung=0;
    for(var l=0;l<data.length;l++) {
      if(dataPeserta[k][0]===data[l][1]) {
        tampung+=1
      }
    }
    dataPeserta[k].push(tampung);
  }
  
  //jadi String
  var output='';
  for(var m=0;m<dataPeserta.length;m++) {
    if(m===dataPeserta.length-1) {
      output+=dataPeserta[m][0]+': '+ dataPeserta[m][1];
    }else {
    output+=dataPeserta[m][0]+': '+ dataPeserta[m][1]+', ';
    }
  }
  
 
  
  return output;
  
}

// Test cases
console.log(participantsSummary([
  ['Dimitri', 'Russia'],
  ['Heihachi', 'Japan'],
  ['Sergei', 'Russia'],
  ['Kazuya', 'Japan'],
  ['Hwoarang', 'South Korea'],
  ['Jin', 'Japan']
]));
// Russia: 2, South Korea: 1, Japan: 3

console.log(participantsSummary([
  ['Suzuka', 'Japan'],
  ['Steve', 'United Kingdom'],
  ['Paul', 'USA']
]));
// Japan: 1, United Kingdom: 1, USA: 1

console.log(participantsSummary([]));
// No participants
