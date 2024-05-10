import { Router } from "express";
const router = Router();
import curriculo from "./curriculo";

router.get("/", (req, res) => {
  res.send("API REST de curriculos!");
});
router.use("/curriculos", router.curriculo);
export const routes = {
  curriculo,
};
