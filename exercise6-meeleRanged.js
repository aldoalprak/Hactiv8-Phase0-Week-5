function meleeRangedGrouping (str) {
  //your code here
  var gruping=[[],[]];
  var pisah=str.split(',');
  
  var pisah2=[];
  for(var i=0;i<pisah.length;i++) {
    pisah2.push(pisah[i].split('-'))
  }
  
  for(var j=0;j<pisah2.length;j++) {
    if(pisah2[j][1]==='Ranged') {
      gruping[0].push(pisah2[j][0])
    }else {
      gruping[1].push(pisah2[j][0])
    }
  }
  if(str.length===0) {
    return []
  }else {
  return gruping;
  }
  
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []s