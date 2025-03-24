function myEach(collection, callback) {
    let array = Array.isArray(collection) ? collection : Object.values(collection);
    for (let item of array) {
        callback(item);
    }
    return collection;
}

function myMap(collection, callback) {
    let array = Array.isArray(collection) ? collection : Object.values(collection);
    return array.map(callback);
}

function myReduce(collection, callback, acc) {
    let array = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    for (let item of array) {
        acc = callback(acc, item, collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    let array = Array.isArray(collection) ? collection : Object.values(collection);
    for (let item of array) {
        if (predicate(item)) return item;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let array = Array.isArray(collection) ? collection : Object.values(collection);
    return array.filter(predicate);
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        myEach, myMap, myReduce, myFind, myFilter, mySize, 
        myFirst, myLast, myKeys, myValues 
    };
}
