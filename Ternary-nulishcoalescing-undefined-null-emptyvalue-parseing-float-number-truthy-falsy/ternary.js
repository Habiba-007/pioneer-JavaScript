
/**
 * @problemSolving1
 * Make a condition Jekhane-Dollar,Uro,Pound K Taka te convert Kora hobe.
 * Note-
 * 1st user er Kas theke (Amount) nite pari cause User Amount er Maddome dolar,euro,pound check Korbe that Means Amount Dilam-500 eitaK dolar/euro/pound a checK Koro
 * 2nd Currency- Means (currency) bolte-dolar.pound.euro bujai. that means currency=dolar,pound,euro.
 * 3rd Rate- Currency er maddome (Rate) FInal kora hoy Means 1Dollar Koto Rate!(11o-Rate) Bola Jai Amar Amount er Rate KiroKom hobe seta depend kora Currency Er Upore.(RATE ER BANGLA HOLO DAAM)
 */



/**
 * @ProblemSolving2
 * Biar jonno Patro Khoje Ber Koron-Patrer age hobe Minimum-30,salary Hobe Minimum 50thousand,Lomba HOTE hobe 6Feet Ar Jodi SALARY 2Lak hoy tahole Konow condition Lagbena ,, patrii Kobol bole felbe.
 * Note-
 * variable nite hobe-age,salary and height than use condition -if-else,switch-case,or ternary.
 */

/**
 * @NullCoalescingOPERATOR
 * Konow 1ta Variable er value jodi NULL hoy tahole amar OUtput e NULL jno show na kore onno kiso show korate chai.. jno null show na kore
 */

// let person = 'farid';
let person = null;
// let person1 = '';
console.log(person ?? 'person er value null show korabo na'); //-> EiKhane ??-null coalesching use Kora Hoyse
// console.log(person1);
let fruit; //Friut er value By-default Undefined .
console.log(fruit ?? 'fruit er value undefined show korabo na tai null coalescing symbol use korsi');

let data = null;
console.log(typeof data);
let otherData = "";
console.log(typeof otherData);

let private;
console.log('private resutl was ', private);
// console.log('primary resutl was ', primary);


/**
 * @parseInt
 * @parseFloat
 * @Number
 * @+
 */

let rice = 300;
let sugar = 200;
console.log(`
        Rice =${rice};
        Sugar =${sugar};
        ----------------
        Total- ${rice + sugar}
    `);
//use parseInt
let potato = 400;
let mango = '500';
console.log(`
        Potato =${potato}
        Mango =${mango}
        -----------------
        Total- ${potato +parseInt( mango)};
    `);
//use parseFloat
let kahata = 100;
let pencil = '100';
console.log(`
        Khata =${kahata}
        Pencil =${pencil}
        ---------------------
        total- ${kahata + parseFloat(pencil)}
    `);

//use Number
let orange = 300;
let oil = '300';
console.log(`
        Orange =${orange}
        Oil =${oil}
        ------------------
        total = ${orange + Number(oil)}
    `);

//use (+ symbol)
let flower = 500;
let tree = +'800';
console.log(`
        Flower = ${flower}
        Tree = ${tree}
        ---------------------
        total= ${flower + tree}
    `);


/**
 *@sigleDOubleTrippleEQUAL
 *  =,==,=== use case
 */
let name1 = 20;
let name2 = 20;
if (name1 == name2) {
    console.log('ok');
} else {
    console.log('not ok');
}

let name3 = 40;
let name4 = '40';
if (name3 == name4) {
    console.log('ok ase');
} else {
    console.log('ok nai');
}

let person1 = 100;
let person2 = '100';
if (person1 === person2) {
    console.log('person ok ase');
} else {
    console.log('person ok nai');
}

let permission = ''
// let permission = 0;
// let permission = null;
// let permission = NaN;
// let permission = undefined;
// let permission = false;
if (permission) {
    console.log('its truthy value');
} else {
    console.log('its falsy value');
}