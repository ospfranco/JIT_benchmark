console.time('main');

for(let i = 0; i < 400; i++) {
    let array = [];
    for(let j = 5000; j >= 0; j--) {
        array[j] = j
    }
}

console.timeEnd('main');