
import ResumeUpload from "@/components/resume-upload";
import LoggingControls from "@/components/logging-controls";
import UserExperience from "@/components/user-experience";
import UserInfoContextProvider from "@/contexts/userInfo-context-provider";
import prisma from "@/lib/db";


export default async function Account() {
  const experience = await prisma.userFile.findMany();
  
  return (
    <UserInfoContextProvider data={experience}>
        <main className="flex flex-col w-full items-center mt-16">
          <ResumeUpload />
          <div className="flex w-full gap-x-8 mt-8">
            <LoggingControls />
            <UserExperience/>
          </div>
        </main> 
    </UserInfoContextProvider>
  );
}
