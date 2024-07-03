import { Button } from "@/components/ui/button";

export default function LoggingControls() {
    return (
        <div className="flex flex-col w-[347px] space-y-4">
            <Button className="width-[135px] bg-white/30 hover:bg-white/50">Log Out</Button>   
            <Button variant="destructive">Delete Account</Button>
        </div>
    )
}
