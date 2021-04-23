export const add = (a, b) => {
    return a + b;
};

export const multiply = (a, b) => {
    return a * b;
} 

export const isGreaterThan = (a, b) => {
    return a > b;
}

export function factorial(a)
{
    let temp = 1;
    for (let i = 1; i <= a; i++)
    {
        temp =+ temp * i;
    }
    return {
        result: temp
    }
}