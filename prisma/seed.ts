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

  const job3 = await prisma.job.create({
    data: {
      applyUrl: "https://apple.com/apply/3",
      logo: "C",
      title: "Backend Developer",
      company: "Apple",
      location: "Cupertino, CA",
      daysAgo: "3",
      salary: "$150,000",
      description: "Backend software engineer",
    },
  });
  
  const job4 = await prisma.job.create({
    data: {
      applyUrl: "https://microsoft.com/apply/4",
      logo: "D",
      title: "Full Stack Developer",
      company: "Microsoft",
      location: "Redmond, WA",
      daysAgo: "2",
      salary: "$155,000",
      description: "Full stack developer",
    },
  });
  
  const job5 = await prisma.job.create({
    data: {
      applyUrl: "https://google.com/apply/5",
      logo: "E",
      title: "Data Scientist",
      company: "Google",
      location: "Mountain View, CA",
      daysAgo: "1",
      salary: "$165,000",
      description: "Data scientist",
    },
  });
  
  const job6 = await prisma.job.create({
    data: {
      applyUrl: "https://facebook.com/apply/6",
      logo: "F",
      title: "UI/UX Designer",
      company: "Meta",
      location: "Menlo Park, CA",
      daysAgo: "5",
      salary: "$140,000",
      description: "UI/UX designer",
    },
  });
  
  const job7 = await prisma.job.create({
    data: {
      applyUrl: "https://twitter.com/apply/7",
      logo: "G",
      title: "DevOps Engineer",
      company: "Twitter",
      location: "San Francisco, CA",
      daysAgo: "3",
      salary: "$160,000",
      description: "DevOps engineer",
    },
  });
  
  const job8 = await prisma.job.create({
    data: {
      applyUrl: "https://netflix.com/apply/8",
      logo: "H",
      title: "Product Manager",
      company: "Netflix",
      location: "Los Gatos, CA",
      daysAgo: "2",
      salary: "$180,000",
      description: "Product manager",
    },
  });
  
  const job9 = await prisma.job.create({
    data: {
      applyUrl: "https://tesla.com/apply/9",
      logo: "I",
      title: "Electrical Engineer",
      company: "Tesla",
      location: "Palo Alto, CA",
      daysAgo: "1",
      salary: "$175,000",
      description: "Electrical engineer",
    },
  });
  
  const job10 = await prisma.job.create({
    data: {
      applyUrl: "https://adobe.com/apply/10",
      logo: "J",
      title: "QA Engineer",
      company: "Adobe",
      location: "San Jose, CA",
      daysAgo: "4",
      salary: "$145,000",
      description: "Quality assurance engineer",
    },
  });
  
  const job11 = await prisma.job.create({
    data: {
      applyUrl: "https://oracle.com/apply/11",
      logo: "K",
      title: "Cloud Architect",
      company: "Oracle",
      location: "Austin, TX",
      daysAgo: "3",
      salary: "$185,000",
      description: "Cloud architect",
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
