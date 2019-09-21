import { randomColor, ColorType } from '../src/utils/randomColor';

const REPEAT_TIMES = 10000;

interface IColor {
    red: number,
    green: number,
    blue: number
}

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

test('should throw an error when pass a wrong color type', () => {
    expect(() => {
        // @ts-ignore
        randomColor('')
        // @ts-ignore
        randomColor('xxss')
    }).toThrowError();
});

test('should not throw an error when pass a right color type', () => {
    expect(() => {
        // @ts-ignore
        randomColor('rgb')
        // @ts-ignore
        randomColor('hex')
        // @ts-ignore
        randomColor('hEx')
    }).not.toThrowError();
});

test('rgb result should be in the right range', () => {
    const results: Array<IColor> = [];

    for (let i=0; i<REPEAT_TIMES; i++) {
        const rgbColor: string = randomColor(ColorType.RGB);
        const parsedResult: RegExpMatchArray | null = rgbColor.match(/rgb\((\d{0,3}),(\d{0,3}),(\d{0,3})\)/);
        
        expect(parsedResult).not.toBe(null);

        if (parsedResult !== null) {
            const [, red, green, blue] = parsedResult;
            expect(
                red.length === green.length
                && green.length === blue.length
                && blue.length === 3
            ).toBe(true);

            results.push({
                red: parseInt(red),
                green: parseInt(green),
                blue: parseInt(blue)
            });
        }
    }

    results.forEach((color: IColor) => {
        const { red, green, blue } = color;

        expect(red >= 0 && red <= 255).toBe(true);
        expect(green >= 0 && green <= 255).toBe(true);
        expect(blue >= 0 && blue <= 255).toBe(true);
    });
})