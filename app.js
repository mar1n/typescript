function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    return cb(result);
}
printResult(add(5, 12));
var combineValue;
combineValue = add;
//combineValue = printResult
//combineValue = 5
console.log(combineValue(8, 7));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
