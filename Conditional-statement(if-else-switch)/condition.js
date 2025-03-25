

// console.log('lets apply to condition');
/**@PART1 */

//-THIS CONDITION MADE FOR STUDENT ADMISSION FOR SCHOOL LIFE :
// let fullName = prompt('name');
// let age = prompt('age');
// let skill = prompt('skill');
// console.log(`Hello${fullName}, u r a ${age} yerars old and u r a ${skill}-Developer`);
/*
let studentName = prompt('studentName');
let birthYear = prompt('student birthYear');
let age = 2025 - birthYear;
console.log(age);
//use condition //
if (age >= 6) {
    console.log(`Hello kid-${studentName} your age-${age} so welcome to school`)
} else {
    console.log(`Hello kid-your age ${age}, so you are not a welcome to school`)
}
*/




/**@PART2 */
/*
-THIS IS ARE THE MAKE FOR PICNIC LOGIC CONDITION:
let name =prompt('Name');
let ages =prompt('Age');
let money = prompt('Money');
let fitness = confirm('are you strong?')
let extraMoney=prompt('do u have extraMoney?')
//use conditon 
if (name === name && ages >= 20 && money >= 500 && fitness==true || extraMoney>=5000) {
    console.log(`Hello Mr ${name}, your age ${ages}? and u dont have ${money} 'but u have extra-money' so  u r slected`);
} else {
    console.log(`sry u r not selected for the picnic`);
}
*/



/**@PART3 */
/*
- Now we make for byear boyos logic
let name = prompt('your Name');
let birthYear = prompt('birthYear');
let finalAge = 2025 - birthYear;
let marriedAge = 18; //(bydefault this age was for female member)
let male = confirm('are u sele?');
let female = confirm('are u maye');
*/

/**
 * finalAge>=defaultAge ->means defaultAge mayer belai-18 r seler belai-22 so condition jeita match kore
*/

/*
-gender-condition (check seler biar boyos)
if (male) {
    marriedAge = 22;
}
// now byar condition (check  biar boyos)
if (finalAge>=marriedAge) {
    console.log(`Yeah! ${name} ur married age was ${finalAge}-so u r welcome for married life and u r male or female`);
} else {
    console.log(`Ops ${name} u r not for ready to got married cause ur finalage was-${finalAge}`);
}
*/


/**@PART4 */

// EKJON STUDENT PASS KORSE NAKI FAILED KORSE SETA FINTOUT KORBO OR
/*
let name = prompt("Name");
let bang = prompt("Bangla");

let gpa;
let grade;
// now implementation of condition 
if (bang >= 0 && bang < 33) {
    gpa = 0;
    grade = 'F';
} else if (bang >= 33 && bang < 40) {
    gpa = 1;
    grade = 'D';
} else if (bang >= 40 && bang < 50) {
    gpa = 2;
    grade = 'C';
} else if (bang >= 50 && bang < 60) {
    gpa = 3;
    grade = 'B';
} else if (bang >= 60 && bang < 70) {
    gpa = 4;
    grade = 'A-';
} else if (bang >= 70 && bang < 80) {
    gpa = 4.5 ;
    grade = 'A';
} else if (bang >= 80 && bang < 90) {
    gpa = 5;
    grade = 'A+';
} else if (bang >= 90 && bang < 100) {
    gpa = 5
    grade = 'Golden A+'
}
else {
    gpa = ' Durntibaz Student';
    grade = ' Azgubi Number';
}
console.log(
    `
    Name:${name};
    Marks:${bang};
    GPA:${gpa};
    GRADE:${grade}
    `
    
)
*/

/**@PART5 */
/**@SWTICHCASE */
let name =prompt("Name");
let dist = prompt("District");

switch (dist) {
    case 'dha':
        console.log(`${name}, man u r a funny`);
        break;
    case 'mym':
        console.log(`${name}, dam u r talent`);
        break;
    case 'barisal':
        console.log(`${name}, i hate this distirct person`);
        break;
    case 'noakhali':
        console.log(`${name}, i dam hate nokhailla`);
        break;
    
    default:
        console.log(`${name}, ok u r perfect`);
        break;
}

