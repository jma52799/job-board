import {} from "next-auth";

declare module "@auth/core/jwt" {
    interface JWT {
        userId: string;
    }
}

//Chatgpt to get session userid
declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        id: string;
      } & DefaultSession["user"];
    }
  
    interface User extends DefaultUser {
      id: string;
    }
}