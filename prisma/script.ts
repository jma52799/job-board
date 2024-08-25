// script.ts

import { Prisma } from "@prisma/client";

// Function to generate random data for jobs
function generateJobs(): Prisma.JobCreateInput[] {
    const companyCategoryMap: { [key: string]: string } = {
        "Amazon": "Internet & Software",
        "Google": "Internet & Software",
        "Facebook": "Internet & Software",
        "Microsoft": "Internet & Software",
        "Apple": "Internet & Software",
        "Tesla": "Automotive",
        "Boeing": "Aerospace",
        "Pfizer": "Healthcare",
        "Johnson & Johnson": "Healthcare",
        "Goldman Sachs": "Finance",
        "JPMorgan Chase": "Finance",
        "Chevron": "Energy",
        "ExxonMobil": "Energy",
        "Nike": "Retail",
        "Coca-Cola": "Retail",
        "PepsiCo": "Retail",
        "Starbucks": "Hospitality",
        "Oracle": "Internet & Software",
        "Adobe": "Internet & Software",
        "Netflix": "Media",
        "Twitter": "Telecommunications",
        "Uber": "Transportation",
        "Airbnb": "Hospitality",
        "Salesforce": "Internet & Software",
        "Cisco": "Telecommunications",
        "Intel": "Technology",
        "HP": "Technology",
        "IBM": "Technology",
    };

    const locations = [
        "New York, NY", "San Francisco, CA", "Austin, TX", "Seattle, WA", 
        "Los Angeles, CA", "Boston, MA", "Chicago, IL", "Denver, CO",
        "Houston, TX", "Miami, FL", "Phoenix, AZ", "Philadelphia, PA",
        "San Diego, CA", "Portland, OR", "Dallas, TX"
    ];

    const titlesAndSkills = [
        {
            title: "Frontend Developer",
            skills: ["React", "Next.js", "TypeScript", "GraphQL"],
            education: ["Bachelor", "Computer Science"]
        },
        {
            title: "Backend Developer",
            skills: ["Node.js", "Express", "MongoDB", "Docker"],
            education: ["Bachelor", "Software Engineering"]
        },
        {
            title: "AI/ML Engineer",
            skills: ["Python", "TensorFlow", "AI", "Machine Learning"],
            education: ["Master", "Data Science"]
        },
        {
            title: "Data Scientist",
            skills: ["Python", "R", "SQL", "Pandas"],
            education: ["Master", "Data Science"]
        },
        {
            title: "Cloud Architect",
            skills: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
            education: ["Bachelor", "Information Technology"]
        },
        {
            title: "UI/UX Designer",
            skills: ["Figma", "Sketch", "Adobe XD", "Wireframing"],
            education: ["Bachelor", "Graphic Design"]
        },
        {
            title: "DevOps Engineer",
            skills: ["Jenkins", "Docker", "Kubernetes", "CI/CD"],
            education: ["Bachelor", "Computer Science"]
        },
        {
            title: "Cybersecurity Analyst",
            skills: ["Penetration Testing", "Firewalls", "Encryption", "Risk Assessment"],
            education: ["Bachelor", "Cybersecurity"]
        },
        {
            title: "Product Manager",
            skills: ["Agile Methodologies", "Scrum", "Roadmapping", "Market Research"],
            education: ["MBA", "Business Administration"]
        },
        {
            title: "Electrical Engineer",
            skills: ["Circuit Design", "Matlab", "AutoCAD", "Embedded Systems"],
            education: ["Bachelor", "Electrical Engineering"]
        },
        {
            title: "Mechanical Engineer",
            skills: ["SolidWorks", "AutoCAD", "Mechanical Design", "Thermodynamics"],
            education: ["Bachelor", "Mechanical Engineering"]
        },
        {
            title: "Healthcare Administrator",
            skills: ["Healthcare Compliance", "Patient Care", "Healthcare IT", "Budget Management"],
            education: ["Master", "Healthcare Administration"]
        },
        {
            title: "Marketing Manager",
            skills: ["SEO", "Content Marketing", "Google Analytics", "Brand Management"],
            education: ["Bachelor", "Marketing"]
        },
        {
            title: "Financial Analyst",
            skills: ["Financial Modeling", "Excel", "Valuation", "Budgeting"],
            education: ["Bachelor", "Finance"]
        },
        {
            title: "Sales Executive",
            skills: ["Salesforce", "Customer Relationship Management", "Negotiation", "Lead Generation"],
            education: ["Bachelor", "Business Administration"]
        },
        {
            title: "Supply Chain Manager",
            skills: ["Logistics", "Inventory Management", "Vendor Management", "SAP"],
            education: ["Master", "Supply Chain Management"]
        }
    ];

    const companies = [
        "Amazon", "Boeing", "Google", "Microsoft", "Apple", "Tesla", 
        "Adobe", "Oracle", "Facebook", "Netflix", "Twitter", "Uber", 
        "Airbnb", "Salesforce", "Cisco", "Intel", "HP", "IBM", 
        "Johnson & Johnson", "Pfizer", "Goldman Sachs", "JPMorgan Chase",
        "Chevron", "ExxonMobil", "Nike", "Coca-Cola", "PepsiCo", "Starbucks"
    ];

    const remotes = ["Remote", "Onsite"];

    const type = ["Full-Time", "Part-Time", "Contract", "Internship"];

    const jobs = [];

    for (let i = 0; i <= 65; i++) {
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        const randomCompany = Object.keys(companyCategoryMap)[Math.floor(Math.random() * Object.keys(companyCategoryMap).length)];
        const randomCategory = companyCategoryMap[randomCompany];
        const randomTitleAndSkills = titlesAndSkills[Math.floor(Math.random() * titlesAndSkills.length)];
        const randomType = type[Math.floor(Math.random() * type.length)];
        const randomRemote = remotes[Math.floor(Math.random() * remotes.length)];
        const randomDaysAgo = Math.floor(Math.random() * 10) + 1;

        const job = {
            applyUrl: "",
            logo: randomCompany.charAt(0),
            title: `${randomTitleAndSkills.title}`,
            company: randomCompany,
            location: randomLocation,
            daysAgo: randomDaysAgo,
            salary: (Math.floor(Math.random() * 50) + 100) * 1000,
            description: `${randomTitleAndSkills.title} in ${randomCategory} at ${randomCompany}`,
            skills: randomTitleAndSkills.skills,
            educations: randomTitleAndSkills.education,
            category: randomCategory,
            type: randomType,
            deadline: new Date(new Date().setMonth(new Date().getMonth() + 2)), 
            remote: randomRemote,
        };

        jobs.push(job);
    }

    return jobs;
}


export const jobs = generateJobs();
