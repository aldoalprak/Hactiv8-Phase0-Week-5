function attack (damage) {
  // Code disini
  var x= damage-2;
  return x;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  
  var total=numberOfAttacks*attack(damagePerAttack);
  return total;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90