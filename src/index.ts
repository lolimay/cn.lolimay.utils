import { randomColor } from './utils';

const table = document.createElement('table');

const TABLE_SIZE = 200;
const BLOCK_SIZE = '73px';

for (let i=0; i<TABLE_SIZE; i++) {
    const tr = document.createElement('tr');
    tr.style.display = 'flex';
    tr.style.flexWrap = 'wrap';

    for (let j=0; j<TABLE_SIZE; j++) {
        const td = document.createElement('td');

        td.style.color = 'white';
        td.innerText = td.style.background = randomColor();
        td.style.textShadow = '0 0 5px #000000';
        td.style.display = 'flex';
        td.style.alignItems = 'center';
        td.style.justifyContent = 'center';
        td.style.width = BLOCK_SIZE;
        td.style.height = BLOCK_SIZE;

        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);