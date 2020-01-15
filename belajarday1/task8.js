function kuadrat(n, q) {
//     kondisi ini cukup q > 1 saja
    if (n > 1 && q > 1) {
        return n * kuadrat(n,q-1)
    }
    return n
}
console.log(kuadrat(5, 3))
console.log(kuadrat(3, 3))
