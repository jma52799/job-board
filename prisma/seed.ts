import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Create jobs first
  const job1 = await prisma.job.create({
    data: {
      applyUrl: "https://amazon.com/apply/1",
      logo: "A",
      title: "Frontend Developer",
      company: "Amazon",
      location: "Irvine, CA",
      daysAgo: "4",
      salary: "$160,000",
      description: "Software engineer",
    },
  });

  const job2 = await prisma.job.create({
    data: {
      applyUrl: "https://amazon.com/apply/2",
      logo: "B",
      title: "AI/ML Engineer",
      company: "Boeing",
      location: "Sacramento, CA",
      daysAgo: "4",
      salary: "$170,000",
      description: "AI/ML engineer",
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
