// Binary operations, such as +, -, *, /, %, |, and &

// On a m1 air runs in around 148ms

// Minimal improvement... it needs to force cast undefined to 0, but maybe there are further optimizations here done in the latest node versions

console.time('main')

let x = 0, y = 0;
for(let i = 0; i < 300_000_000; i++) {
    y = x | 2;
}

console.timeEnd('main')