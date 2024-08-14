"use client";

import { logOut, destroyAccount } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoggingControls() {
    const [isPending, setIsPending] = useState(false);

    const handleLogOut = async () => {
        setIsPending(true);
        try {
            await logOut();
        } finally {
            setIsPending(false);
        }
    };

    const handleDestroyAccount = async () => {
        setIsPending(true);
        try {
            await destroyAccount();
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="flex flex-col w-[347px] space-y-4">
            <Button 
                className="width-[135px] bg-white/30 hover:bg-white/50"
                disabled={isPending}
                onClick={handleLogOut}
            >
                Log Out
            </Button>   
            <Button 
                variant="destructive"
                disabled={isPending}
                onClick={handleDestroyAccount}
            >
                Delete Account
            </Button>
        </div>
    )
}

