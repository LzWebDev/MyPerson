let numeroSeguinte = 1

for(let i = 0; i <= 10; i++){
    let num = numeroSeguinte += (numeroSeguinte)
    console.log(num)
}

/**
    0, 1, 2, 3, 5, 8, 13, 21

    1 + 1 numseg + numseg = 2
    2 + 1 numseg(2) + numseg-1 = 3
    3 + 2 numseg(3) + numseg-1 = 5
    5 + 3 numseg(5) + numseg-2
    8 + 5
    13 + 8
    21 + 13
 */