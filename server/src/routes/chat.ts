import express from 'express';
import { prismaChat } from '@/infra/chat';

const router = express.Router();

// GET
router.get('/', async (req, res, _next) => {
  try {
    const resData = await prismaChat.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    await prismaChat.create(data);
    const resData = await prismaChat.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

//PUT
router.put('/', async (req, res, next) => {
  try {
    const data = req.body;
    await prismaChat.edit(data);
    const resData = await prismaChat.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(`${req.params.id}`);
    await prismaChat.logicalDelete(id);
    const resData = await prismaChat.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
