import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { jobs } from "./script";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }

  const job1 = await prisma.job.create({
    data: {
      applyUrl: "",
      logo: "A",
      title: "Frontend Developer",
      company: "Amazon",
      location: "Irvine, CA",
      daysAgo: 4,
      salary: 160000,
      description: "Software engineer",
      skills: ["React", "Next.js", "TypeScript", "GraphQL"],
      educations: ["Bachelor", "Computer Science"],
      category: "Internet & Software",
      type: 'Full-Time',
      deadline: new Date("2024-12-12"),
      remote: "Remote",
    },
  });

  const job2 = await prisma.job.create({
    data: {
      applyUrl: "",
      logo: "B",
      title: "AI/ML Engineer",
      company: "Boeing",
      location: "Sacramento, CA",
      daysAgo: 4,
      salary: 170000,
      description: "AI/ML engineer",
      skills: ["Python", "Machine Learning", "Deep Learning"],
      educations: ["Bachelor", "Artificial Intelligence"],
      category: "Engineering",
      type: 'Part-Time',
      deadline: new Date("2024-11-15"),
      remote: "Onsite",
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
