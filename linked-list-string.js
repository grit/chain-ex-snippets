function stringify(list) {
  let listString = '';
  if (!list) {
    return 'null';
  } else {
    let pointer = list;
    while (pointer.next) {
      listString += `${pointer.data} -> `;
      pointer = pointer.next;
    }
    listString += `${pointer.data} -> null`;
  }
  return listString;
}

module.exports = stringify;
