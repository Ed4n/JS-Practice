
//Ternary Functions
//EJ
const bill = 275;
var tip;

tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
//   Condicion (if) ? Lo que pasara si se cumple la condicion (lo que va adentro del if) : si no se cumple (else)
console.log("==================== Base ================================");
console.log(`The bill was ${bill}, the tip was ${tip} and the total is ${bill + tip}`)


