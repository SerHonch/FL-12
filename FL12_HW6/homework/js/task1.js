let a = parseInt(prompt('Enter A value'));
let b = parseInt(prompt('Enter B value'));
let c = parseInt(prompt('Enter C value'));
const div = 4;
const div2 = 2;
let disc = b*b - div*a*c;
let message;
if(Number(a) && Number(b) && Number(c)){
    if (disc < 0) {
        message = 'No solution!';
    } else if (disc > 0){
        message = `x1 = ${(-b + Math.sqrt(disc)) / (div2 * a)} and x2 = ${(-b - Math.sqrt(disc)) / (div2 * a)}`;
    } else {
        message = `x = ${-b / (div2 *a)}`;
    }
console.log(message);
} else {
    console.log('Invalid data');
}