// $ node StoringNonNumericInNumericArrays_slow.js 
// main: 147.179ms

// $ node StoringNonNumericInNumericArrays_fast.js 
// main: 122.641ms

console.time('main');

let array = [];

for(let i = 0; i < 10_000_000; i++) {
    array[i] = i;
    array[4] = 2;
    array[4] = 3;
}

console.timeEnd('main');