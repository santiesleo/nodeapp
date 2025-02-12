import { Router, Request, Response } from 'express';

export const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => {
    res.send('Get all users');
});

userRouter.post('/', (req: Request, res: Response) => {
    res.status(201).send('Create user');
});

userRouter.get('/:id', (req: Request, res: Response) => {
    res.send(`Get user with id ${req.params.id}`);
});

userRouter.put('/:id', (req: Request, res: Response) => {
    res.send(`Update user with id ${req.params.id}`);
});

userRouter.delete('/:id', (req: Request, res: Response) => {
    res.send(`Delete user with id ${req.params.id}`);
});