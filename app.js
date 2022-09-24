let c = [];
function ekub(a) {
    for (i = 0; i < a; i++) {
        if (a % i == 0) {
            c.push(i)
        }
    }
    return c;
}
console.log(ekub(30));