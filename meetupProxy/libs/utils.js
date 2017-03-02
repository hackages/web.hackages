export function flatten(array){
    const concat = [];
    array.map(e => e.length > 0 ? concat.push(...e) : null);
    return concat;
}

export function timestampToDateString(timestamp){
  return new Date(timestamp).toLocaleString();
}
