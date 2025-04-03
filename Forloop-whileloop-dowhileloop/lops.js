

// console.log('Hello Loop');
let chanmia = 20 //chan miar kase 20ti dim asa
//ali jabe chanmiar Kase dim ante karon ali miar Kase Konow dim nai.
for (let ali = 0; ali <= chanmia; ali = ali + 1) {
    console.log('Alir kase dim ase vai ekhon : ' + ali);
}

/**@problemSolving */
// now emon ekti loop make koron-jei loop ti 500 thKe start hobe and end hobe 300 te gia. and loop ti console e gia JOOR number print Korbe...
for (let i = 500; i >= 300; i--) {
    // console.log('I er value kome :' +i);
    //ekhon JOOR number nibo console e
    // JOOR numbr mane holoe 2 dara (bivajjo )mana vagseh 0 hobe
    if (i % 2 == 0) {
        console.log('joor number holo :', i)
    }
}

/**@problemSolving */
//emon ekta loop make koro= 5000 theke 6000 porjonto ekta loop make koron jar result 21 dara vibajjo that means 21 dara vag korle vagsesh 0 hobe; sei numbergula console e print kore hobe.

for (let i = 5000; i <= 6000; i++) {
    if (i % 21 == 0) {
        console.log('21 er vibazzo holo -', i);
    }
}


/**@problemSolving */
// 0 theKe 100 projonto eKti Loop maKe Koron and apni console.log e oi number gulai deKhaben jeigula (4)dara vibazzo hote hobe and (5)dara vibazzo hote hobe (NOTE- 4 and 5 UVOY dara vibazzo hote hobe emon hobe na question-ta)
for (let i = 0; i <= 100; i = i + 1) {
    if (i % 4 == 0 || i % 5 == 0) {
        console.log('4 and 5 er vibajjo holo-', i);
    }
}
// =========
/**@problemSolving */
// 0 theke 1000 porjonto emon eKta loop maKe Koron - jei loop 7 Kore increment hobe and finally 13 dara vibazzo Konow zoor Number pailei Loop ta automatic off hoye jabe.. 
for (let i = 1; i <= 1000; i += 7) { //i+=7 means i er previouse value plus present value (i er previous value=0 and prsenet value holo =7 -> 0+7=7)
    if (i % 13 == 0) {
        console.log('Final-vibazzo holo--', i);
        break;
    } else {
        console.log('otherwise result was:', i);
    }
}
/**NOTE:- UPOROKUTO problem solving a 0 number e konow vibajjo hobe na cause 0 er KONOW vibajjo hoy na so minmum number 1 dita hobe  */


/**@problemSolving */
// 0-theke 20 porjonto loop make Koro and console.log e show Koro. (USE WHILE-LOOP AND DO-WHILE-LOOP)
for (let i = 0; i <= 20; i++) {
    // console.log(i);
}
//same thing use while loop
let i = 0;
while (i <= 30) {
    console.log('while er value holo: -', i);
    i++
}
//same thing use do-while loop.(do-while mana condition match na Korlew ekbar holew condition run hobe)
let ii = 50;
do {
    console.log('do-while er value holo:', ii);
    ii++
} while (ii <= 10);


/**@problemSolving */
/**
 * emon eKti for loop make Koron,ja 0 theke start hoye 200 porjonto gurbe and console.log e only 50-theke-100 and 150-thKe-200 projonto print Korbe...
 * 
 * MaKe while-loop,ja 5000-theKe start Kore and 1000 e end hobe..proti dape loopti 7 Kore Kombe...Joor number er maje jeigula 12 dia VIBAZZO seigula print korben.
 * 
 * loop-er maddome-5,6,7,8 er namata ber Koron..
 * 
 * emon eKti loop maKe Koron- ja 0 theke start hoye 100 porjonto gurbe and ponorai 0 te eshe thambe(make any loop)
 * 
 * 7 Kore barbe emon eKti loop maKe Koron-ja start hobe 1000 theke and end hobe 3000 e.console.log e oi number gula print Korben ja 9 dara VIBAZZO and loop ti 11 dara VIBAZZO KONOW number pele colose KORE DIN.
 */

/**@problemSolving */
// emon eKti for loop make Koron,ja 0 theke start hoye 200 porjonto gurbe and console.log e only 50-theke-100 and 150-thKe-200 projonto print Korbe...
for (let i = 0; i <= 200; i++) {
    //console e 50-theke100 print korbe
    // console.log('problem-part-1: ', i);
    if (i % 50 == 0) {
        console.log('problem-part-1:', i);

    }
}

/**@problemSolving */
// MaKe while-loop,ja 5000-theKe start Kore and 1000 e end hobe..proti dape loopti 7 Kore Kombe...Joor number er maje jeigula 12 dia VIBAZZO seigula print korben.
let iii = 5000
while (iii >= 1000) {
    // console.log('problem-solving-part-2: ', i)
    if (iii % 12 == 0) {
        console.log('problem-s-p-2:', iii);
    }
    // i = i - 7;
    iii -= 7;
}


/**@problemSolving */
// loop-er maddome-5,6,7,8 er namata ber Koron..
// i am use Nested loop
let number = '';
for (let a = 0; a <= 10; a++) {
    console.log('5 er namata holo: ', `${number = 5}*${a}=${number * a}`)
    for (let b = 0; b <= 10; b++) {
        console.log(`${number = 6}*${b}=${number * b}`);
    }
    for (let c = 0; c <= 10; c++) {
        console.log(`${number = 7}*${c}=${number * c}`);
    }
}
console.log('----------------------------------');
/**
 * loop-er maddome-5,6,7,8 er namata ber Koron..===(uporukto problem er solution ta anno waytew kora possible)
 */
for (let g = 1; g <= 10; g++) {
    console.log('G er value protibar gure hoy = ', g);
    console.log(`====================:namota = ${g}er`);
    // console.log(`5x${g} =${5 * g}`); //==thsi is the static system to find out the 5-er namata.
   if (g==5 || g==6 || g==7 || g==8) {
    for (let h = 1; h <= 10; h++)
        console.log(`${g} x ${h} =${g * h}`);
   }

}

console.log('--------------------------------');

/**@problemSolving */
// emon eKti loop maKe Koron- ja 0 theke start hoye 100 porjonto gurbe and ponorai 0 te eshe thambe(make any loop)
for (let d = 0; d <= 100; d++) {
    if (d % 100 === 0) {
        console.log('d-er-value :', d);
        break;
    } else {
        console.log('d-er-else-value:', d);
    }
}
/** emon eKti loop maKe Koron- ja 0 theke start hoye 100 porjonto gurbe and ponorai 0 te eshe thambe(make any loop)
 * ei problemta uprokto solution saraw amra NESTED-LOOP use kroe korte pari 
 * 1st e er man 100 porjonto jabe 
 * 2nd f er man reverse hoy 100 theke 0 te gia thambe
*/
for (let e = 0; e <= 100; e++) {
    console.log('e er value start:', e);
    if (e == 100) {
        // F er value =100 theke =0 porjont jabe jokhon F-er value reverse hobe means 1,1,1 er kore kombe 100 theke
        for (let f = 100; f >= 0; f--)
            console.log('f-er-value start = ', f);
    }
}
// for (let e = 100; e >= 0; e--){
//     console.log('e er value',e);
// }


