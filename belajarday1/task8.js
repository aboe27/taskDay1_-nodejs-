function kuadrat(n, q) {
    if (n > 1 && q > 1) {
        return n * kuadrat(n,q-1)
    }
    return n
}
console.log(kuadrat(5, 3))