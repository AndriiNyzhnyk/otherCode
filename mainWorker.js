//   node --experimental-worker mainWorker.js

// const { Worker } = require('worker_threads');
//
// function runService(workerData) {
//     return new Promise((resolve, reject) => {
//         const worker = new Worker('./parseWorker.js', { workerData });
//         worker.on('message', resolve);
//         worker.on('error', reject);
//         worker.on('exit', (code) => {
//             if (code !== 0)
//                 reject(new Error(`Worker stopped with exit code ${code}`));
//         })
//     })
// }
//
// async function run() {
//     const result = await runService('world');
//     console.log(result);
// }
//
// run().catch(err => console.error(err));

setInterval( () => {
    console.log('HI');
}, 200);



// use singlePage  code
const {
    Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

if (isMainThread) {
        new Promise((resolve, reject) => {
            const worker = new Worker(__filename, {
                workerData: 'someImportantData'
            });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        }).then( (data) => {
            console.log(data + ' data');
        });


} else {
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


    parentPort.postMessage(Object.keys(obj2).length + ' ' + workerData);
}