import {parentPort} from "worker_threads"
let response=0;
for (let i = 0; i < 100000000000000; i++) {
  response++;
}