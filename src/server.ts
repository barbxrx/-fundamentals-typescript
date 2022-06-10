import express from 'express';
import { createCourse } from './routes';

const app = express();

//criando primeira rota

app.get("/", createCourse)

//iniciando servidor
app.listen(3333);