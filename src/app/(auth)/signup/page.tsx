import AuthForm from "@/components/auth-form";
import Container from "@/components/container";
import Link from "next/link";
import Image from 'next/image'
import { auth } from "@/lib/auth-no-edge";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session?.user) {
    redirect("/account");
  }

  return (
    <Container className="mt-16">
      <div className="flex-1 relative bg-black/50 overflow-hidden">
        <Image
          src="/auth-background.jpg"
          className="object-cover blur-3xl"
          layout="fill"
          alt="Background image"
        />
        <div className="absolute top-0 bg-black p-4 bg-opacity-50 left-0 w-full h-full flex flex-col items-center justify-center">
          <p className="text-white text-xl text-left w-full">
            &quot;This website has saved me countless hours and helped me apply to real jobs like never before.&quot;
          </p>
          <p className="text-white text-md text-left w-full mt-4">
            - Anonymous User
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="font-medium text-2xl leading-6 mb-5 text-center">Sign Up</h1>

        <AuthForm type="signUp" />

        <p className="mt-6 text-sm text-zinc-500">
          Already have an account?{" "}
          <Link href="/login" className="mt-6 font-medium underline">
            Log in
          </Link>
        </p>
      </div>
    </Container>
  );
}

