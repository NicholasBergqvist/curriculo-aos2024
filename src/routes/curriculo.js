import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
  res.send("API REST de currículos. Use /curriculos para operações");
});
router.get("/curriculos", async (req, res) => {
  const curriculos = await req.context.models.Curriculo.findAll();
  return res.send(curriculos);
});
router.get("/curriculos/:id", async (req, res) => {
  const curriculoId = await req.context.models.Curriculo.findByPk(
    req.params.id
  );
  return res.send(curriculoId);
});

router.post("/curriculos", async (req, res) => {
  const novoCurriculo = await req.context.models.Curriculo.create({
    nome: req.body.nome,
    graduacao: req.body.graduacao,
    sobre: req.body.sobre,
    habilidades: req.body.habilidades,
    especializacoes: req.body.especializacoes,
  });

  return res.send(novoCurriculo);
});
router.delete("/curriculos:id", async (req, res) => {
  const result = await req.context.models.Curriculo.destroy({
    where: { curriculoId: req.params.id },
  });

  return res.send(true);
});

export default router;
