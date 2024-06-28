import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const jobs = [
    {
        applyUrl: "empty",
        title: "Frontend Developer",
        company: "Amazon",
        city: "Irvine",
        state: "CA",
        country: "US",
        deadline: "2024-03-01T00:00:00.000Z",
        daysAgo: "4",
    }
];

async function main() {
  console.log(`Start seeding ...`);

  for (const job of jobs) {
    const result = await prisma.job.create({
      data: job,
    })
    console.log(`Created job with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });