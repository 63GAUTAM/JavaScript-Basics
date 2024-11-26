// for(let count = 1; count <= 3;  count++){
//     console.log("Gautam")
// }

// for(a=1; a<=10; a++){
//     console.log(2*a)
// }

// for(let num = 2; num <= 20; num += 2)
// {
//     console.log(num)
// }


// ***
// ***
// ***
// ***
// ***


// for (outerloop = 1; outerloop <= 5; outerloop++) {
//     let col = '';
//     for (innerloop = 1; innerloop <= 3; innerloop++) {
//         col = col + "*";
//     }
//     console.log(col)
// }


for (outerloop = 1; outerloop <= 3; outerloop++) {
    let star = '';
    for (innerloop = 1; innerloop <= outerloop; innerloop++) {
        // col = col + "*";
        star = star+"*";
    }
    console.log(star);
    
}