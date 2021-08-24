// On a m1 air runs in around 1.330 ms
// a ~19% speed up

console.time('main')

class C {
    constructor(seed) {
        if(seed % 2 === 0) {
            this.a = Math.random();
            this.b = Math.random();
        } else {
            this.a = Math.random();
            this.b = Math.random();
        }
    }
}

function sum(base, p1, p2) {
    return base[p1] + base[p2]
}

for(let i = 0; i <= 100_000_000; i++) {
    sum(new C(i), `a`, `b`)
}

console.timeEnd('main')