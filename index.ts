import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/serverstatus", (req: Request, res: Response) => {
  console.log("Check server status");
  res.json({status: "OK"});
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
