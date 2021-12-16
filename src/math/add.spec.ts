import { add } from './add';

describe('add', () => {
    it('should add two numbers and produce the correct result', () => {
        expect(add(1, 2)).toEqual(3);
    })
});
