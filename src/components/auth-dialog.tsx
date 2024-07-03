import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import BookmarkIcon from "./bookmark-icon";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function AuthDialog() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div>
          <h2 className="text-xl font-bold mb-4">Create an account</h2>
          <p className="mb-6 text-gray-600">Enter your email below to create your account</p>
          <div className="mb-6">
            <Button variant="outline" className="w-full mb-4 flex items-center justify-center">
              GitHub
            </Button>
            <Button variant="outline" className="w-full mb-6 flex items-center justify-center">
              Google
            </Button>
            <div className="flex items-center mb-6">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 text-gray-500">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="m@example.com" />
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" />
            </div>
            <Button type="submit" className="w-full">Create account</Button>
          </div>
        </div>
      </div>
    </div>
  );
};