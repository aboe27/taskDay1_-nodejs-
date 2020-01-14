function kuadrat(n, q) {
    if (q > 1) {
        return n * kuadrat
    }
    return n
}
console.log(kuadrat(5, 3))