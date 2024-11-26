// function hariom(){
//     console.log("Gautam surolia");
// }
// hariom();
// hariom();
// hariom();
// hariom();



function hariomsurolia(){
    return "This is return value";
}
// const message = hariomsurolia();
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// const newMessage = message + " Gautam surolia";
// console.log(newMessage);

// function passMessageWithParameter(courseName, enrollMessage = ' enroll now'){   //default parameter 
//     return "I am happy to learn " + courseName + " from PW skills by chirag Goel" + enrollMessage;
// }

// console.log(passMessageWithParameter('Full Stack development'));
// console.log(passMessageWithParameter('Web development',' aaj hi enroll kren '));
// console.log(passMessageWithParameter('Backend development',' Today is the last date of enroll'));
// console.log(passMessageWithParameter('JavaScript',' enroll tomorrow'));


// function sum(a, b, c){
//     return a+b+c;
// }
// const total = sum(1,2,5);
// console.log(total);


// function sumofAllParameters(){
    // console.log(arguments.length)

//     let sum = 0;
//     for (i=0; i<arguments.length-1; i++){
//         // console.log(arguments[i]);
//         sum += arguments[i];
//     }
//     return sum;
        
    
// }
// const total = sumofAllParameters(1,2,3,4,5,6,7,8,9,10);
// console.log(total);


// const square = function(x){   //Anonymous function
//     return x*x;
// }
// console.log(square(2));


    //***  Arrow Function ****/
// const square1 = (x) => x*x;
// console.log(square(3));



// const square2 = (x) => {
//     console.log("Input Value > ", x);
//     return x*x;
// };
// console.log(square2(4));

// var getFullName = function(firstName, lastName){
//     return firstName + " " + lastName;
// }
// console.log(getFullName("Gautam", "surolia"));

        // *****Immediately Invoked Functin Execution (IIFE)****
        // (function (x){
        //     console.log(x*x);
        // })(3);


        function sum(a,b){
            return a+b;
        }
        const total = sum(1, 2);
        console.log(total);



