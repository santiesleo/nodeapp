//let app = require('express');

import express, {Express, Request, Response} from 'express'; //importamos express

const app: Express = express();
const port: number = 3000;

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