function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  
  var newArr=[];
  var awal='';
  var akhir='';
  for(var i=0;i<arrPenumpang.length;i++) {
    var obj={};
    obj.penumpang=arrPenumpang[i][0];
    obj.naikDari=arrPenumpang[i][1];
    obj.tujuan=arrPenumpang[i][2];
    for(var j=0;j<rute.length;j++) {
      if(obj.naikDari===rute[j]) {
         awal=j;
      }else if(obj.tujuan===rute[j]) {
         akhir=j;
      }
    }
  obj.bayar=(akhir-awal)*2000;
  newArr.push(obj);  
  }
  
if(arrPenumpang.length===0){
  return [];
  }else{  
  return newArr;  
  }
    
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]