function map (array,callback) {
  var result = [];
  array.forEach(function (item) {
    // console.log(item, index, array);

    result.push(callback(item));
  });
  console.log(result);
}

var words = ["ground", "control", "to", "major", "tom"];


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
