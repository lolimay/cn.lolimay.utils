/**
 * Generate a random color, hex string format by default.
 * @param type specify the color type, hex string by default.
 */
export function randomColor(type: ColorType = ColorType.HEX): string {
    const hexColorString = `${ Math.round((Math.random() * 0xffffff)).toString(16).padStart(6, '0')}`;

    if (!Object.values(ColorType).includes(<ColorType>type.toUpperCase())) {
        throw new Error('The type parameter passed in is unknown!');
    }

    if (<ColorType>type.toUpperCase() === ColorType.RGB) {
        const red = parseInt(hexColorString.slice(0, 2), 16).toString().padStart(3, '0');
        const green = parseInt(hexColorString.slice(2, 4), 16).toString().padStart(3, '0');
        const blue = parseInt(hexColorString.slice(4, 6), 16).toString().padStart(3, '0');

        return(`rgb(${ red },${ green },${ blue })`);
    }

    return `#${ hexColorString }`;
}

export enum ColorType {
    RGB = 'RGB',
    HEX = 'HEX'
}