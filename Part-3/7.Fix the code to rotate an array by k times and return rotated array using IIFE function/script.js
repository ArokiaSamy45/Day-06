var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = k % arr.length;
(function() {
  var out = [];
  for (var i = k; i < arr.length; i++) {
    out.push(arr[i]);
  }
  for (var i = 0; i < k; i++) {
    out.push(arr[i]);
  }
  console.log(out);
})();
