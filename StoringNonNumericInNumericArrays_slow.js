console.time('main');

let array = [];

for(let i = 0; i < 10_000_000; i++) {
    array[i] = i;
    array[4] = "abc";
    array[4] = 3;
}

console.timeEnd('main');