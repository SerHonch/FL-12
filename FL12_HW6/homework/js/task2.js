// Your code goes here
let a = parseInt(prompt('Enter A value'));
let b = parseInt(prompt('Enter B value'));
let c = parseInt(prompt('Enter C value'));
if (a !== '' && b !== '' && c !== ''){
    if(a <= 0 || b <= 0 || c <= 0){
        console.log('A triangle must have 3 sides with a positive definite length');
    } else{
        if(a + b > c && a + c > b && b + c > a){
            if ( a === b && a === c && b === c){
                console.log('Equilateral triangle');
            } else if( a === b && a !== c|| b === c && b !== a || a === c && a!== b ){
                console.log('Isosceles triangle');
            } else {
                console.log('Scalene triangle');
            }
        } else {
            console.log('Triangle doesn’t exist');
        }
    }
} else {
    console.log('Input values should be ONLY numbers');
}