// $ node AccessingUndefinedArrayItems_slow.js 
// main: 694.138ms

// $ node AccessingUndefinedArrayItems_fast.js 
// main: 306.018ms

console.time('main');

let array = [], sum = 0;
for(let i = 0; i < 100; i++) {
    array[i] = 1;
    for(let j = 0; j < 100_000; j++) {
        let ij = 0;
        let length = array.length;
        while(ij < length) {
            sum += array[ij];
            ij++;
        }
    }
}

console.timeEnd('main');