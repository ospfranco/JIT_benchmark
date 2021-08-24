console.time('main');

let array = [], sum = 0;
for(let i = 0; i < 100; i++) {
    array[i] = 1;
    for(let j = 0; j < 100_000; j++) {
        let ij = 0;
        // let length = array.length;
        while(array[ij]) {
            sum += array[ij];
            ij++;
        }
    }
}

console.timeEnd('main');