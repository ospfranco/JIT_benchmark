// Binary operations, such as +, -, *, /, %, |, and &

// On a m1 air runs in around 152.702ms

console.time('main')

let x, y;

for(let i = 0; i < 300_000_000; i++) {
    y = x | 2
}

console.timeEnd('main')