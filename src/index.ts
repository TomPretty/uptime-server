import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
