// $ node ContiguousArray_slow.js 
// main: 72.629ms

// $ node ContiguousArray_fast.js 
// main: 12.565ms
console.time('main');

for(let i = 0; i < 400; i++) {
    let array = [];
    for(let j = 0; j < 5000; j++) {
        array[j] = j
    }
}

console.timeEnd('main');