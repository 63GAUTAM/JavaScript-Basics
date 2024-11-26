/*  var getSeven = function(){
    return 7;
};

console.log(getSeven());

function useFunction(fn){
    return fn();

}

// console.log(useFunction(getSeven));

function returnFunction(){
    return getSeven;
}

const exFunc = returnFunction();
console.log(exFunc()); */


function sum(x, y){
    return x + y;
} 

function subtract(x , y){
    return x - y;

}

function multiple(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function calculatorFunction(fn, x, y){
    return fn(x, y);
}

// console.log('sum >', calculatorFunction(sum, 1, 2));
// console.log('subtrac >', calculatorFunction(subtract, 2, 5));
// console.log('multiple >', calculatorFunction(multiple, 2, 4));
// console.log('divide >', calculatorFunction(divide, 5, 10));







// var timeId = setInterval(function(){
//     console.log('Its time to study ');
//     console.log(new Date());
//     clearInterval(timeId);
// }, 3000);

const timerId = setTimeout(function() {
    console.log('First task');
}, 3000)
// setTimeout(function() {
//     console.log('Second task');
// }, 7000)
// setTimeout(function() {
//     console.log('Third task');
// }, 5000)

clearTimeout(timerId)