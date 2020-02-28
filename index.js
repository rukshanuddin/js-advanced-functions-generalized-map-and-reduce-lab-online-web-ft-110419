// Add your functions here
function map(array, callback){
    let r = [];
    for (let i = 0; i < array.length; i++) {
        r.push(callback(array[i]));
    }
    return r;
}
function reduce(array,callback, start = 0) {
    let result = (!!start) ? start : array[0];
    let i = (!!start) ? 0 : 1;
    for (; i < array.length; i++) {
        result = callback(array[i], result);
    }
    return result;
}