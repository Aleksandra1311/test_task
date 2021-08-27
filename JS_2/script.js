function getString(a, b, c, d) {
    return String(b + a + c + a + d); // явное приведение к строке
    // return b + a + c + a + d; // но можно оставить и так
}

// console.log(typeof getString('*', '2', 's', '2d')); // typeof string
console.log(getString('*', '2', 's', '2d'));