/**
CSV to Object
-------------
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }

  RULES
  =====
  - Dilarang menggunakan built in function .split

*/

function convertToObject(keys, values) {
  // Code disini
  var obj={};
  var arrKeys=[];
  var store='';
  //jadiin array untuk Keys
  for(var i=0;i<keys.length;i++) {
    if(keys[i]===',') {
      arrKeys.push(store);
      store='';
    }else{
    store+=keys[i];
    }
  }
  arrKeys.push(store);
  
  var arrValues=[];
  var tampung='';
  for(var j=0;j<values.length;j++) {
    if(values[j]===',') {
      arrValues.push(tampung);
      tampung=''
    }else {
      tampung+=values[j];
    }
  }
  arrValues.push(tampung);
  
  //masukin objek
  for(var k=0;k<arrValues.length;k++){
    obj[arrKeys[k]]=arrValues[k];
  }
  if(keys==='' && values===''){
    return { };
  }else {
  return obj;
  }
}

console.log(convertToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(convertToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(convertToObject('', ''));
// { }
