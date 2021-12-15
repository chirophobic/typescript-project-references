
export function add(...numbers: [number, ...number[]]): number {
    return numbers.reduce((a, b) => a + b, 0);
}
