import { createContext, useState } from "react"

type TAuthContext = {

}

export const AuthContext = createContext<TAuthContext | null>(null)

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    //state
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    //event handler

    return (
        <BookmarkContext.Provider value={{}}>
            {children}
        </BookmarkContext.Provider>
    )
}