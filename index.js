import express from "express";
import { Worker } from "worker_threads";
const app = express();

app.get("/calculatesum", (req, res) => {
  let { num1, num2 } = req.query;

  let worker = new Worker("./sumWorker.js");

  worker.postMessage({ num1, num2 });

  worker.on("message", (data) => {
    res.json(data);

    worker.terminate();
  });

  worker.on("exit", (data) => {
    console.log("Terminated " + data )
  });
});

app.get("/", (req, res) => {
  let response = 0;
  for (let i = 0; i < 100; i++) {
    response++;
  }
  res.json(response);
});

app.get("/longtask", (req, res) => {
  let worker = new Worker("./worker.js");
  worker.on("message", (data) => {
    console.log(data);
    res.json(data);
  });
});
app.get("/longtask2", (req, res) => {
  let worker = new Worker("./worker2.js");
  worker.on("message", (data) => {
    console.log(data);
    res.json(data);
  });
});

app.get("/hello", (req, res) => {
  res.json("hello");
});

app.listen(3000, () => {
  console.log("runnnig");
});
