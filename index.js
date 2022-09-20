function receivesAFunction(cb) {
    cb();
}
function returnsANamedFunction() {
    var namedFunction = function () { console.log("Named Function Called"); };
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return function () { console.log("Called Anon Function"); };
}
