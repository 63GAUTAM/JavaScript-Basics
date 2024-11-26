//***Object Literal ****/
var bicycle = {
    brand: "Hero",
    wheelSize: 29,
    gears: 21,
    color: 'black',
    isAlloyRims: true
    // gautam: function() {
    //     console.log("Hello I am a Hero Bicycle");
    // }
}
// bicycle.body="Alloy"

// console.log(bicycle.gautam());

// console.log(bicycle);


// var bicycle2 = {
//     brand: "Atlus",
//     wheelSize: 28,
//     gears: false,
//     color: 'black',
//     isAlloyRims: false


// }
// console.log(bicycle2);
// console.log(bicycle.color, bicycle.brand, bicycle.isAlloyRims);

/***Object using new keyword ****/
// var myDetails = new Object();
// myDetails.name = "Gautam surolia";
// myDetails.skill = ["HTML", "CSS", "On going JavaScript"]
// myDetails.age = 21;
// myDetails.gender = "Male";
// gautam: function() {
//          console.log("Hello I am a Hero Bicycle");
//      }

// console.log(myDetails);



/***Object using Constructor Method ****/

//{
// instructor: "Gautam",
// title: "JavaScript Foundations",
//description: "JavaScript Programming course",
//language: "Hinglish",
//duration: 10,
//fees: "free",
//isOnline: true,   
// }

function Course(instructor,
    title,
    description,
    language,
    duration,
    fees,
    isOnline
)
     {
    this.instructor = instructor;
    this.title = title;
    this.description = description;
    this.language = language;
    this.duration = duration;
    this.fees = fees;
    this.isOnline = isOnline;

}


var JavaScript = new Course( "Gautam", "JavaScript course", "This is JavaScript course","Hinglish", 10, "free", "true");

// delete JavaScript.duration;
// JavaScript.duration = null;

// JavaScript.name = "hariom"  //add a element in the object

// Object.freeze(JavaScript);

// Object.seal(JavaScript);
// JavaScript.description = "Study do hard";
// JavaScript.isbenifitial = "true";
// JavaScript.isbenifitial = "false";


// console.log(JavaScript);
// console.log(Object.keys(JavaScript));
// console.log(Object.values(JavaScript));


for(key in JavaScript)
{
    console.log(JavaScript[key]);
}
// console.log(JavaScript);