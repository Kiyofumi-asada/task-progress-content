import express from 'express';
import { taskModels } from '@/model/task';

const router = express.Router();

// GET
router.get('/', async (_req, res) => {
  try {
    const resData = await taskModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    const userId = Number(Object.values(req.body));
    await taskModels.create(userId);
    const resData = await taskModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

//PUT
router.put('/', async (req, res) => {
  try {
    const data = req.body;
    await taskModels.edit(data);
    const resData = await taskModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE
router.delete('/', async (req, res) => {
  try {
    const taskId = Number(`${req.query.taskId}`);
    await taskModels.logicalDelete(taskId);
    const resData = await taskModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
