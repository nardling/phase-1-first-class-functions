function receivesAFunction(cb: Function): any {
    cb();
}

function returnsANamedFunction(): Function {
    const namedFunction = () => { console.log("Named Function Called") }
    return namedFunction;
}

function returnsAnAnonymousFunction(): Function {
    return () => { console.log("Called Anon Function") }
}