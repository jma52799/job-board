"use client";

import { logOut, destroyAccount } from "@/actions/actions";
import { Button } from "@/components/ui/button";

export default function LoggingControls() {
    return (
        <div className="flex flex-col w-[347px] space-y-4">
            <Button 
                className="width-[135px] bg-white/30 hover:bg-white/50"
                onClick={async () => await logOut()}
            >
                Log Out
            </Button>   
            <Button 
                variant="destructive"
                onClick={async () => await destroyAccount()}
            >
                Delete Account
            </Button>
        </div>
    )
}

