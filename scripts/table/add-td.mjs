export function addTd(tableRow, childValue, th = undefined) {
  const newTd = th ? th : document.createElement('td');
  newTd.innerHTML = childValue;
  tableRow.append(newTd);
}
