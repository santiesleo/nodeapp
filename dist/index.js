"use strict";
//let app = require('express');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //importamos express
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/error', (req, res) => {
    res.status(500).send('Hello World');
});
app.get('/notfound', (req, res) => {
    res.status(404).send('Helo World');
});
app.listen(3000, () => {
    console.log(`Server on port ${port}`);
});
