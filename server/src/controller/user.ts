import express from 'express';
import { userModels } from '@/model/user';
import { taskModels } from '@/model/task';

const router = express.Router();

// POST
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const getNewUser = await await userModels.create(data);
    await taskModels.create(getNewUser.id);
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
    await userModels.edit(data);
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
    await userModels.logicalDelete(taskId);
    const resData = await taskModels.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
