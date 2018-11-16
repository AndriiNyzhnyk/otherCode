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
    let res = [1, 1];

    for(let i = 0; i < count; i++) {
        let num = one + two;
        res.push(num);
        one = two;
        two = num;
    }
}

// reqursia fibonachi 1
arrFib2 = [];
function fib2(count, one = 1, two = 1) {
    if(count === 0) return;
    if(one === 1 && two === 1) arrFib2.push(one, two);

    count--;
    let num = one + two;
    arrFib2.push(num);
    one = two;
    two = num;
    return fib2(count, one, two);
}

// fib2(100);


// reqursia fibonachi 2
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

console.log('Param 1: ' + str1);
console.log('Param 2: ' + str2);


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
            num = 9;
            memory = result - 9;
        } else {
            num = result;
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

console.log(addNum(arr1, arr2).join(''));