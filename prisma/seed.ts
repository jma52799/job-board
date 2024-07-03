import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Create jobs first
  const job1 = await prisma.job.create({
    data: {
      applyUrl: "https://amazon.com/apply/1",
      title: "Frontend Developer",
      company: "Amazon",
      city: "Irvine",
      state: "CA",
      country: "US",
      deadline: new Date("2024-03-01T00:00:00.000Z"),
      daysAgo: "4",
    },
  });

  const job2 = await prisma.job.create({
    data: {
      applyUrl: "https://amazon.com/apply/2",
      title: "AI/ML Engineer",
      company: "Amazon",
      city: "Irvine",
      state: "CA",
      country: "US",
      deadline: new Date("2024-03-01T00:00:00.000Z"),
      daysAgo: "4",
    },
  });

  const hashedPassword = await bcrypt.hash("example", 10);

  const userData: Prisma.UserCreateInput = {
    email: "example@gmail.com",
    hashedPassword: hashedPassword,
    hasAccess: true,
    bookmarks: {
      create: [
        {
          job: {
            connect: { id: job1.id },
          },
        },
        {
          job: {
            connect: { id: job2.id },
          },
        },
      ],
    },
    userFile: {
      create: {
        experience: "5 years in frontend development and AI/ML engineering",
      },
    },
  };

  await prisma.user.create({
    data: userData,
  });

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
