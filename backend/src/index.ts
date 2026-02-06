import prisma from './lib/prisma';

async function main() {
  // Exemplo de uso do Prisma com a entidade User
  console.log('Backend iniciado com sucesso!');
  
  // Teste de conexão
  await prisma.$connect();
  console.log('Conectado ao banco de dados MySQL!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
