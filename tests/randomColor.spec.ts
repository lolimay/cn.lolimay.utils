import { randomColor } from '../src/utils/randomColor';

const REPEAT_TIMES = 10000;

test('the length of returned hex color string should be 7', () => {
    const results = [];

    for (let i=0; i<REPEAT_TIMES; i++) {
        results.push(randomColor().length);
    }
    results.every(result => {
        expect(result).toBe(7);
    });
});

test('should obey a uniform random distribution', () => {
    const total = REPEAT_TIMES;
    let lessThanHalf = 0, frequency = 0;

    for (let i=0; i<total; i++) {
        const result = randomColor().slice(1);

        if (parseInt(result, 16) < 0.5 * 0xffffff) {
            lessThanHalf++;
        }
    }
    frequency = lessThanHalf / total;
    
    expect(frequency > 0.48 && frequency < 0.52).toBe(true);
});