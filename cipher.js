var _shiftBy = 3;

function shift(toShift, shiftBy) {
  var result = '';
  for (i = 0; i < toShift.length; i++) {
    var chr = toShift.charCodeAt(i);
    result += String.fromCharCode(+chr + +shiftBy);
  }
  return result;
}

if (process.argv.length > 3) {
  _shiftBy = process.argv[3];
}
if (process.argv[4] == '-d') {
  _shiftBy = -_shiftBy
}

console.log('Original: ' + process.argv[2]);
console.log('Encoded: ' + shift(process.argv[2], _shiftBy));
