import express from 'express';
import cors from 'cors'; // Importa o pacote CORS
import router from './routes.js';

const app = express();
const port = 3000;

// Aplica o middleware do CORS antes de definir as rotas
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`API RODANDO NA PORTA: ${port}!`));
