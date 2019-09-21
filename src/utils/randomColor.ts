/**
 * Generate a random hex format color string.
 */
export function randomColor(): string {
    return `#${ Math.round((Math.random() * 0xffffff)).toString(16).padStart(6, '0')}`;
}