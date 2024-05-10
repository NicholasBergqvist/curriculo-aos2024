import "dotenv/config";
import cors from "cors";
import express from "express";
import { routes } from "./routes";
import models, { sequelize } from "./models";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use("/", routes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("App com Express funcionando");
  });
});
