import express, { Express, Request, Response } from "express";
import todo_router from "./modules/todo/todo.route"
const app: Express = express();
const port = process.env.PORT || 9090;

app.use(express.json())
app.use('/todos',todo_router)

app.get("/", (req: Request, res: Response) => {
  res.send("Bedee Backend Test");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});