import express from "express";
import morgan from "morgan";
import statusRouter from "./routes/status";

const app = express();

app.use(morgan("tiny"));
app.use("/status", statusRouter);

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
