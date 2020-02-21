/*******************
 ADDITION
 *******************/


function add(){
    let sum = 0;
    for(i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    
    return sum;
}

/*******************
  MULTIPLY
 *******************/


function multiply(){
    let product = 1;
    for( i=0; i<arguments.length; i++){
        product*= arguments[i];
    }

    return product;
}

/*******************
  NODE
 *******************/

console.log(add(2,5))
console.log(add(2,5,8,0,3))
console.log(multiply(9,5))
console.log(multiply(6,7,3,9,5))

module.exports = { add, multiply }


