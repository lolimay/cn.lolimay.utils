import { randomColor } from './utils';
import './style.styl';

const table: HTMLTableElement = document.createElement('table');
const tr: HTMLTableRowElement = document.createElement('tr');

table.appendChild(tr);
document.body.appendChild(table);

for (let i=0; i<500; i++) {
    render();
}

async function render() {
    const td = await createTd();

    tr.appendChild(td);

    if (Math.random() > 0.1) {
        setTimeout(render, 0);
    }
}

async function createTd(): Promise<HTMLTableDataCellElement> {
    const td: HTMLTableDataCellElement = await document.createElement('td');
    
    td.innerText = td.style.background = randomColor();
    return td;
}