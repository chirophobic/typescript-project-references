
export function add(...numbers: [number, ...number[]]): number {
    return numbers.reduce((carry, current) => carry + current, 0);
}
