const {workerData, parentPort} = require('worker_threads');



// test JSON parse and stringify
const bytes = require('pretty-bytes');
const obj = {};
for ( let i = 0; i < 200000; i++) {
    obj[i] = {
        [Math.random()]: Math.random()
    };
}

console.log('start');
console.time ('serialise ');
const jsonString = JSON .stringify(obj);
console.timeEnd ('serialise ');
console.log ('Serialised Size ', bytes(Buffer.byteLength(jsonString)));
console .time ('deserialise');
const obj2 = JSON.parse(jsonString);
console.timeEnd ('deserialise');
console.log('end');

parentPort.postMessage({ result: Object.keys(obj2).length });