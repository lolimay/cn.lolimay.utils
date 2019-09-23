import { randomColor, randomString } from './utils';
import Clipboard from 'clipboard';
import './style.styl';

const table: HTMLTableElement = document.createElement('table');
const tr: HTMLTableRowElement = document.createElement('tr');

table.appendChild(tr);
document.body.appendChild(table);

for (let i=0; i<500; i++) {
    render();
}

function render() {
    const td = createTd();

    tr.appendChild(td);

    if (Math.random() > 0.1) {
        setTimeout(render, 0);
    }
}

function createTd(): HTMLTableDataCellElement {
    const td: HTMLTableDataCellElement = document.createElement('td');
    
    new Clipboard(td);
    td.setAttribute('data-clipboard-text', td.innerText = td.style.background = randomColor());
    
    return td;
}