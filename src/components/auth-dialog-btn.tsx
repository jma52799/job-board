"use client";

import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export default function AuthDialogBtn({ isLogin }: { isLogin: boolean }) {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending} className="w-full">{isLogin ? 'Log in' : 'Create account'}</Button>
    )
}