"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { useUserInfoContext } from "@/lib/hooks";
import { useTransition } from "react";
import { toast } from "sonner";

export default function UserExperience() {
    const { experience, handleChangeExperience, handleSaveExperience } = useUserInfoContext();
    const [isPending, startTransition] = useTransition();

    return (
        <div className="flex-grow px-8 py-4 bg-white/30 rounded-lg shadow-md space-y-2">
          <p className="text-2xl text-black/50">My Journey</p>
          <p className="text-base text-blue-600 text-wrap">What are you passionate about? What are your experiences?</p>
          <Textarea 
            className="w-full h-32 bg-white/50" 
            value={experience}
            onChange={(e) => handleChangeExperience(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <Button 
              variant="secondary"
              onClick={() => handleChangeExperience("")}>
                Clear
            </Button>
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-800"
              disabled={isPending}
              onClick={
                async () => {
                  startTransition(async () => {
                    await handleSaveExperience();
                  })
                  toast.success("Saved!")
                }
              }
            >
              Save
            </Button>
          </div>
        </div>
    )
}