// On a m1 air runs in around 35.708 ms

console.time('main')

function f(a, b) {
    return a + b;
}

for(let i = 0; i < 5_000_000; i++) {
    let a, b;
    if(i % 2 === 0) {
        a = 1, b = 2;
    } else {
        a = `a`, b = `b`;
    }

    f(a, b)
}

console.timeEnd('main')