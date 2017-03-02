module.exports.flatten = function(array){
    const concat = [];
    array.map(e => e.length > 0 ? concat.push(...e) : null);
    return concat;
}

module.exports.timestampToDateString = function(timestamp){
  return new Date(timestamp).toLocaleString();
}
