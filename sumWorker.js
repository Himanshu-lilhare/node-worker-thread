import {parentPort, workerData } from "worker_threads"


console.log(workerData.num1 + " Its worker Data ")
parentPort.postMessage(parseInt(workerData.num1)+parseInt(workerData.num2))