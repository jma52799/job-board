import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';


export default function AuthDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <BookmarkIcon />
          Save
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>
            Enter your email below to create your account
          </DialogDescription>
        </DialogHeader>
        <div style={{ marginBottom: '20px' }}>
          <Button variant="outline" style={{ width: '100%', marginBottom: '10px' }}>
            GitHub
          </Button>
          <Button variant="outline" style={{ width: '100%', marginBottom: '20px' }}>
            Google
          </Button>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>OR CONTINUE WITH</p>
          <div style={{ marginBottom: '10px' }}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="m@example.com" />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" />
          </div>
          <Button type="submit" style={{ width: '100%' }}>Create account</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};