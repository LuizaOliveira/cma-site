import express from 'express';
import prisma from './lib/prisma';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Rotas da API
app.use('/api', routes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

async function main() {
  // Teste de conexão com o banco
  await prisma.$connect();
  console.log('Conectado ao banco de dados MySQL!');

  app.listen(PORT, () => {
    console.log(`Backend rodando na porta ${PORT}`);
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

// // Graceful shutdown
// process.on('SIGINT', async () => {
//   await prisma.$disconnect();
//   process.exit(0);
// });

// process.on('SIGTERM', async () => {
//   await prisma.$disconnect();
//   process.exit(0);
// });
