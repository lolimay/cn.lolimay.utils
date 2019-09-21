import { randomColor } from './utils';
import './style.css';

const table = document.createElement('table');

const TABLE_SIZE = Math.pow(10, 18);
const tr: HTMLTableRowElement = document.createElement('tr');

tr.style.display = 'flex';
tr.style.flexWrap = 'wrap';
table.appendChild(tr);
document.body.appendChild(table);

let count = TABLE_SIZE;
async function render() {
    if (count > 0) {
        setTimeout(() => {
            render();
        }, 0);
    }

    createTd().then(td => {
        tr.appendChild(td);
    })

    count--;
}
render();

async function createTd(): Promise<HTMLTableDataCellElement> {
    const td: HTMLTableDataCellElement = await document.createElement('td');
    
    td.innerText = td.style.background = randomColor();
    return td;
}