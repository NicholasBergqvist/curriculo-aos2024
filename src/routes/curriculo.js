import { Router } from "express";
const router = Router();

router.get("/curriculos", async (req, res) => {
  const curriculos = await req.context.models.Curriculo.findAll();
  return res.send(curriculos);
});
router.get("/:curriculoId", async (req, res) => {
  const curriculo = await req.context.models.Curriculo.findByPk(
    req.params.curriculoId
  );
  return res.send(curriculo);
});

router.post("/", async (req, res) => {
  const novoCurriculo = await req.context.models.Curriculo.create({
    text: req.body.text,
  });

  return res.send(novoCurriculo);
});
router.delete('/:curriculoId', async (req, res) => {
    const result = await req.context.models.Curriculo.destroy({
      where: { id: req.params.curriculoId },
    });
  
    return res.send(true);
  });

export default router;
