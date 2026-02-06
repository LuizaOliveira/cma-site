import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed...');

  const admin = await prisma.user.upsert({
    where: { email: 'admin@cma.com.br' },
    update: {},
    create: {
      email: 'admin@cma.com.br',
      name: 'Administrador',
      password: 'admin123', // TODO: Usar hash em produção
    },
  });

  console.log('Usuário admin criado:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
