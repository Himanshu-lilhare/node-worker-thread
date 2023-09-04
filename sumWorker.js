import {parentPort } from "worker_threads"
parentPort.on('message',(values)=>{
    const {num1,num2} = values
    parentPort.postMessage(parseInt(num1)+parseInt(num2))
})