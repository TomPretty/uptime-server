import express from "express";

import statusFixtures from "../fixtures/status.json";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send(statusFixtures);
});

export default router;
