import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import path from "path";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connect failed !! ", err);
  });
