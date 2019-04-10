// generator random array
let mainArr = [];
function generatorRandomArray(length) {
    console.time("Time generator arr");
    for(let i = 0; i < length; i++) {
        let num;
        if(Math.random() > 0.5) {
            num = 1;
        } else {
            num = -1;
        }

        let item = Math.floor( ((Math.random() * 10) + (Math.random() * 15) + (Math.random() * 100)) * num );
        mainArr.push(item);
        
    }

    console.timeEnd("Time generator arr");

}

// generatorRandomArray(1000000);




// fibonachi
function fib1(count) {
    let one = 1;
    let two = 1;
    let res = new Array(count);
    res[0] = 1;
    res[1] = 1;

    for(let i = 2; i < count; i++) {
        let num = one + two;
        // res.push(num);
        res[i] = num;
        one = two;
        two = num;
    }
}

console.time('fib1');
fib1(100);
console.timeEnd('fib1');


// reqursia fibonachi 1
let arrFib1 = [];
function fib2(count, one = 1, two = 1) {
    if(count === 0) return arrFib1;
    if(one === 1 && two === 1) arrFib1.push(one, two);

    count--;
    let num = one + two;
    arrFib1.push(num);
    one = two;
    two = num;
    return fib2(count, one, two);
}

// fib2(100);

console.time('fib2');
fib2(100);
console.timeEnd('fib2');


// reqursia fibonachi 3
function fib3(count, arr = [], one = 1, two = 1) {
    if(count === 0) return arr;
    if(one === 1 && two === 1) arr.push(one, two);

    count--;
    let num = one + two;
    arr.push(num);
    one = two;
    two = num;
    return fib3(count, arr, one, two);

}

console.time('fib3');
fib3(100);
console.timeEnd('fib3');
// console.log(fib3(10));

// booblSort
function booblSort(arr) {
    console.time('booblSort');
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.timeEnd('booblSort');

    return arr;
}

// console.log( booblSort([1, -3, 14, 10, 15]) );

function insertSort(arr) {
    console.time('insertSort');
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];

        let j = i;
        for(j = i; j > 0; j--) {
            if(arr[j - 1] < temp) {
                break;
            } else {
                arr[j] = arr[j - 1];
            }
        }
        arr[j] = temp;
            

        // while ( (j > 0) && (arr[j - 1] > temp) ) {
        //     arr[j] = arr[j - 1];
        //     j--;
        //     c++;
        //
        // }

        // arr[j] = temp;

    }

    console.timeEnd('insertSort');
    return arr;
}

// console.log( insertSort(mainArr) );

// booblSort(mainArr);
// insertSort(mainArr);
//
// console.time('sort');
// mainArr.sort((a, b) => {
//     return a - b;
// });
// console.timeEnd('sort');



// add big number
let str1 = '100017148691328790045731598213304178096';
let str2 = '100787787854513';

// console.log('Param 1: ' + str1);
// console.log('Param 2: ' + str2);


let length1 = str1.length;
let length2 = str2.length;

let arr1 = new Array(length1);
let arr2 = new Array(length2);


for(let i = 0; i < arr1.length; i++) {
    arr1[i] = +str1.charAt(length1 - 1 - i);
}


for(let j = 0; j < arr2.length; j++) {
    arr2[j] = +str2.charAt(length2 - 1 - j);
}


function addNum(arr1, arr2) {

    let resArr = new Array( setLengthResArr(arr1, arr2) );
    completeArr(arr1, arr2);

    let memory = 0;


    for(let i = 0; i < resArr.length; i++) {

        let result = arr1[i] + arr2[i] + memory;

        let num;

        if(result > 9) {
            num = result - 10;
            memory = 1;

        } else {
            num = result;
            memory = 0;
        }

        resArr[i] = num;
    }
    return resArr.reverse();
}



function setLengthResArr(arr1, arr2) {
    if(arr1.length > arr2.length) {
        return arr1.length;
    } else {
        return arr2.length;
    }
}


function completeArr(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;

    let odds;

    if(len1 > len2) {
        odds = len1 - len2;
        resizeArr(arr2, odds);
    } else {
        odds = len2 - len1;
        resizeArr(arr1, odds);
    }

}

function resizeArr(arr, odds) {
    for(let i = 0; i < odds; i++) {
        arr.push(0);
    }
}

// console.log(addNum(arr1, arr2).join(''));


// test JSON parse and stringify
// const bytes = require('pretty-bytes');
// const obj = {};
// for ( let i = 0; i < 200000; i++) {
//     obj[i] = {
//         [Math.random()]: Math.random()
//     };
// }
// console.time ('serialise ');
// const jsonString = JSON .stringify(obj);
// console.timeEnd ('serialise ');
// console.log ('Serialised Size ', bytes(Buffer.byteLength(jsonString)));
// console .time ('deserialise');
// const obj2 = JSON.parse(jsonString);
// console.timeEnd ('deserialise');


// test speed compare string
// result:
//1) simple for
//2) justString
//3) forEach
function isPalindrome1(word)
{
    word = word.toLowerCase();
    let arr = word.split('');
    let newArr = [...arr];

    newArr.reverse();

    console.time('simple for');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== newArr[i]) break; // return false
    }
    console.timeEnd('simple for');

    console.time('forEach');
    arr.forEach((item, index, array) => {
        if(item !== newArr[index]) console.log('done forEach');
    });
    console.timeEnd('forEach');


    console.time('justString');
    let str = newArr.join();
    if(str !== word) console.log('justString');

    console.timeEnd('justString');

    return true;
}

// console.log(isPalindrome1('Deleveledeleveled'));
// console.log(isPalindrome1('adam'));



// test async Iterators
function helpMe() {
    return new Promise(resolve => { setTimeout(() => { 
        console.log('promise');
        resolve('ok')
    }, 3000)})
    
}

let a = [0, 1, 2];
async function asyncIterators() {
    console.log('tick 1');
    
    for(let i = 0; i < a.length; i++) {
        await helpMe();
        console.log('await');
    }
    
    console.log('tick 2');
    
    for await (let item of a) {
        helpMe();
        console.log('asynk loop');
    }
    
    console.log('tick 3');

}

// asyncIterators();