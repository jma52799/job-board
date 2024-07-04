import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {logIn} from "@/actions/actions";

type AuthDialogProps = {
  closeDialog: () => void
  isLogin: boolean
  toggleDialog: () => void
}

export default function AuthDialog({ closeDialog, isLogin, toggleDialog }: AuthDialogProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeDialog}
    >
      <form 
        className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog
        action={logIn}
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
            <Button variant="outline" className="w-full mb-4 flex items-center justify-center">
              {isLogin ? 'Log in with GitHub' : 'Sign up with GitHub'}
            </Button>
            <Button variant="outline" className="w-full mb-6 flex items-center justify-center">
              {isLogin ? 'Log in with Google' : 'Sign up with Google'}
            </Button>
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 text-gray-500">OR {isLogin ? 'LOG IN WITH' : 'CONTINUE WITH'}</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="m@example.com" />
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>
              <Input type="password" name='password' id="password" />
            </div>
            <Button type="submit" className="w-full">{isLogin ? 'Log in' : 'Create account'}</Button>
          </div>
          <p className="text-center text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"} 
            <button 
              onClick={toggleDialog}
              className="text-blue-500 underline ml-1"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};
