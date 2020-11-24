import express from 'express';
import {displayUserJSON} from './services/controller';

const app = express();

app.get('/', displayUserJSON);

app.listen('3333', () =>{
    console.log('Servidor da porta 80 está ativo');
});