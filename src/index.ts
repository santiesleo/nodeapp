//let app = require('express');

import express, {Express, Request, Response} from 'express'; //importamos express
import dotenv from 'dotenv'; //importamos dotenv
import { userRouter } from './routes/user.route'; //importamos userRouter, utilizamos las llaves para importar una función específica. Cuando está sin llaves, se importa el que está por defecto

dotenv.config(); //configuramos dotenv

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use('/user', userRouter); //usamos userRouter

app.get('/', (req: Request, res: Response) => { //función anónima, lo que está entre parentesis son los argumentos de la función

    res.send('Hello World');
});

app.get('/error', (req: Request, res: Response) => {
    res.status(500).send('Hello World');
});

app.get('/notfound', (req: Request, res: Response) => {
    res.status(404).send('Helo World');
});

app.listen(3000, () => {
    console.log(`Server on port ${port}`);
});