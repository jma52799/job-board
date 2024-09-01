# Job Board Application

This is a full-stack CRUD job board application built with Next.js. The project allows users to browse job listings, save jobs, and manage their own job experiences. The application uses a relational database to connect users with their bookmarks and user files, enabling personalized experiences.

## Features

- **User Authentication**: Secure user login and sign-up with hashed passwords and allow users to delete their account.
- **Job Listings**: Display of job listings with search functionality and filtering options such as relevance and recency.
- **Bookmarking Jobs**: Users can toggle their job bookmarks on or off and manage the jobs they are interested in.
- **User Experience Management**: Users can create, update, and delete their job experiences.
- **CRUD Functionality**: Full support for Create, Read, Update, and Delete operations on user files (experience) and user's job bookmarks.
- **Relational Database**: The application uses a relational database to link users with their bookmarks and user files, ensuring data consistency and integrity.
- **Responsive Design**: The application is not yet optimize for various sizes (only desktop)
- **Animated UI**: Uses Framer Motion for animations, including a unique job-hunt encouragement banner and active link effect, and Tailwind for suspense skeleton.

## Technologies Used

- **Frontend**:
  - Next.js
  - React
  - Tailwind
  - Framer Motion

- **Backend**:
  - Next.js (for routing and server-side rendering)
  - Prisma (ORM for database management)
  - PostgreSQL (Database)
  - NextAuth.js(Authentication)

- **Others**:
  - TypeScript
  - ESLint and Prettier for code linting and formatting
  - Vercel for deployment

## Visit the application deployed on Vercel

 [Link to application](https://job-board-nine-nu.vercel.app)
