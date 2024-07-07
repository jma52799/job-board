"use client";

//import { logIn, signUp } from "@/actions/actions";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AuthFormBtn from "./auth-form-btn";
import { useFormState } from "react-dom";
import { Button } from "./ui/button";
import { logIn, signUp } from "@/actions/actions";


type AuthFormProps = {
  type: "logIn" | "signUp";
};

export default function AuthForm({ type }: AuthFormProps) {


  return (
    <form 
      className="flex flex-col"
      action={type === 'logIn' ? logIn : signUp}
    >
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required maxLength={100} />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          maxLength={100}
        />
      </div>

      <Button className="mt-6">{type === "logIn" ? "Log In" : "Sign Up"}</Button>
    </form>
  );
}