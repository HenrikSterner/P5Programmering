function setup() {
    print("computeLeipniz: ")
    computeLeipniz(1000000);
    print("nwetons: ")
    newtons(92);
}

function computeLeipniz(i) {
    let j = 0;
    for (let k = 0; k < i; k++) {
        if (k % 2 == 0) {
            j += 1 / (1 + k * 2);

        } else {
            j -= 1 / (1 + k * 2);
        }
    }
    j *= 4;
    print(j);
}

function newtons(i) {
    let j = 0;
    for (let k = 0; k < i; k++) {
        j += pow(2, k) * pow(fakultet(k), 2) / fakultet(2 * k + 1);
    }
    j *= 2;
    print(j);
}

function fakultet(input) {
    let output = input;
    if (input > 0) {
        for (let i = input - 1; i > 0; i--) {
            output *= i;
        }
    } else if (input == 0) {
        output = 1;
    }
    return output;
}