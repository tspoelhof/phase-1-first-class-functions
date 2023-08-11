function receivesAFunction(callBackFunction) {
    callBackFunction();
}

function returnsANamedFunction() {
    return function namedFunction() {
}
}

function returnsAnAnonymousFunction() {
    return function() {
    };
}