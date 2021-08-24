// On a m1 air runs in around 9.1 ms
// a ~25% speed-up

console.time('main')

function f(a, b) {
    return a + b;
}

function g(a,b) {
    return a + b;
}

for(let i = 0; i < 5_000_000; i++) {
    let a, b;
    if(i % 2 === 0) {
        a = 1, b = 2;
        f(a, b);
    } else {
        a = `a`, b = `b`;
        g(a, b)
    }

}

console.timeEnd('main')