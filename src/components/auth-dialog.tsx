/*
Problem: The error message for log in and sign up does not disapper when swiching between log in and sign up
Reason: The component does not rerender when switching between log in and sign up
*/

"use client";

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { logIn, signUp } from "@/actions/actions";
import AuthDialogBtn from './auth-dialog-btn';
import { useFormState } from "react-dom";

type AuthDialogProps = {
  closeDialog: () => void
  isLogin: boolean
  toggleDialog: () => void
}

export default function AuthDialog({ closeDialog, isLogin, toggleDialog }: AuthDialogProps) {  
  const [signUpError, dispatchSignUp] = useFormState(signUp, undefined);
  const [logInError, dispatchLogIn] = useFormState(logIn, undefined);
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeDialog}
    >
      <form 
        className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog
        action={isLogin ?  dispatchLogIn :  dispatchSignUp} 
      >
        <button
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
          onClick={closeDialog}
        >
          &times;
        </button>

        <div>
          <h2 className="text-xl font-bold mb-4">{isLogin ? 'Log in to your account' : 'Create an account to get started'}</h2>
          <p className="mb-6 text-gray-600">{isLogin ? 'Enter your credentials below to log in' : 'Enter your email below to create your account'}</p>
          
          <div className="mb-6">
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="m@example.com" required maxLength={100} />
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>
              <Input type="password" name='password' id="password" required maxLength={100}/>
            </div>

            <AuthDialogBtn isLogin={isLogin} />
          </div>

          <p className="text-center text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"} 
            <button 
              onClick={(e) => {
                e.preventDefault();
                toggleDialog();
              }}
              className="text-blue-500 underline ml-1"
              
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>

        {signUpError && (
          <p className="text-red-500 text-sm mt-2">{signUpError.message}</p>
        )}
        {logInError && (
          <p className="text-red-500 text-sm mt-2">{logInError.message}</p>
        )}
      </form>
    </div>
  );
};
