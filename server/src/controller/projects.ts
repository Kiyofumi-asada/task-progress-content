import express from 'express';
import { projectsModels } from '@/model/projects';

const router = express.Router();

// GET
router.get('/', async (_req, res) => {
  try {
    const resData = await projectsModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    const userId = Number(Object.values(req.body));
    await projectsModels.create(userId);
    const resData = await projectsModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

//PUT
router.put('/', async (req, res) => {
  try {
    const data = req.body;
    await projectsModels.edit(data);
    const resData = await projectsModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE
router.delete('/', async (req, res) => {
  try {
    const projectsId = Number(`${req.query.projectsId}`);
    await projectsModels.logicalDelete(projectsId);
    const resData = await projectsModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
