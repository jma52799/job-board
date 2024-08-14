/*
Problem: Figure out how to store pdf, word docs in Postgres
*/

"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

export default function ResumeUpload() {
    return (
        <div className="flex w-full h-[160px] items-start bg-white/30 rounded-lg shadow-md px-8 py-4">
            <Image src={"/cv-icon.svg"} alt="resume upload" width={60} height={60}/>
            <div className="ml-8 space-y-4">
                <h3 className="text-2xl text-black/70">Build your Profile Faster</h3>
                <p className="text-lg">Upload your resume so companies can find you (Accept PDF, DOC, DOCX)</p>
                <Button 
                    className="rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-800" variant="secondary"
                    onClick={() => { toast.error('Sorry! This function is not yet available') }}
                >
                    Upload a Resume
                </Button>
            </div>
        </div>
    )
}