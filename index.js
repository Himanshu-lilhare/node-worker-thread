import express from "express";

const app = express();



app.get("/", (req, res) => {
  let response = 0;
  for (let i = 0; i < 100; i++) {
    response++;
  }
  res.json(response);
});

app.get("/longtask", (req, res) => {
let response = 0 

for(let i=0;i<100000000000;i++){
  response++
}

res.json(response)
});


app.get("/hello", (req, res) => {
  res.json("hello");
});

app.listen(3000, () => {
  console.log("runnnig");
});
