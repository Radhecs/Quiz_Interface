import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import routes from "./routes/route.js";

/**import connection file */
import connect from "./database/conn.js";

config();

const app = express();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

/** application port */
const port = process.env.PORT || 8080;

/** routes */
app.use("/api", routes); /** apis */

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (err) {
    res.json(err);
  }
});

/** start sarver only when we have vaild connection */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server connected to http://localhost:${port}`);
      });
    } catch (err) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((err) => {
    console.log("Invaild DataBase Connection!");
  });
