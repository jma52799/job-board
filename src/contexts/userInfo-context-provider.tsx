"use client";

import { createContext, useEffect, useState } from "react";
import { UserFile } from "@prisma/client";
import { fetchAuthenticatedUser, saveExperience, fetchUserExperience } from "@/actions/actions";

type TUserInfoContext = {
    experience: UserFile['experience']
    handleChangeExperience: (newExperience: UserFile['experience']) => void
    handleSaveExperience: () => void
}

export const UserInfoContext = createContext<TUserInfoContext | null>(null)

export default function UserInfoContextProvider({children}: {children: React.ReactNode}) {
    const [experience, setExperience] = useState<UserFile['experience']>("")
    const [userId, setUserId] = useState<string | null>(null);

    // Fetch the user's experience when the component mounts or userId changes
    useEffect(() => {
    const fetchExperience = async () => {
      const session = await fetchAuthenticatedUser();
      if (session?.user?.id) {
        setUserId(session.user.id);
        const userExperience = await fetchUserExperience(session.user.id);
        setExperience(userExperience || "");
      }
    };

    fetchExperience();
  }, [userId]);

    //event handlers
    const handleChangeExperience = (newExperience: UserFile['experience']) => {
        setExperience(newExperience)
    }

    //actions
    const handleSaveExperience = async () => {
        await saveExperience(experience);
    }

    return (
        <UserInfoContext.Provider
            value={{
                experience,
                handleChangeExperience,
                handleSaveExperience
            }}
        >
            {children}
        </UserInfoContext.Provider>
    )
}