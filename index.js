import express from "express";
import {Worker,isMainThread} from "worker_threads"
const app = express();

function itesMainThread(route){
  console.log('its main thread ' + route)
}

app.get("/", (req, res) => {

 if(isMainThread){
   itesMainThread(req.path)
 }

  let response=0;
  for (let i = 0; i < 100; i++) {
    response++;
  }
  res.json(response);
});

app.get("/longtask", (req, res) => {
  let worker = new Worker('./worker.js')
  worker.on('message',(data)=>{
    console.log(data)
    res.json(data);
  })
 
});
app.get("/longtask2", (req, res) => {
    if(isMainThread){
     itesMainThread(req.path)
     }
    let worker = new Worker('./worker2.js')
    worker.on('message',(data)=>{
      console.log(data)
      res.json(data);
    })
   
  });
app.get("/hello", (req, res) => {
    if(isMainThread){
      itesMainThread(req.path)
     }
   res.json("hello")
   
  });

app.listen(3000, () => {
  console.log("runnnig");
});
