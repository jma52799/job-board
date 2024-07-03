"use client";

import { createContext, useState } from "react";
import { UserFile } from "@prisma/client";
import { UserExperienceEssentials } from "@/lib/types";
import { saveExperience } from "@/actions/actions";

type TUserInfoContext = {
    experience: UserFile['experience']
    handleChangeExperience: (newExperience: UserFile['experience']) => void
    handleSaveExperience: (newExperience: UserExperienceEssentials) => void
}

export const UserInfoContext = createContext<TUserInfoContext | null>(null)

export default function UserInfoContextProvider({children, data}: {children: React.ReactNode, data: UserFile[]}) {
    const [experience, setExperience] = useState<UserFile['experience']>(data[0]?.experience || "")

    //event handlers
    const handleChangeExperience = (newExperience: UserFile['experience']) => {
        setExperience(newExperience)
    }

    //actions
    const handleSaveExperience = async (newExperience: UserExperienceEssentials) => {
        await saveExperience(newExperience);
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