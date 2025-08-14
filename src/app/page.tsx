// "use client";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <LoginLink>
            <Button variant="secondary">
              Sign In
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button variant="secondary" className="bg-blue-500 hover:bg-blue-600 text-white">
              Sign Up
            </Button>
          </RegisterLink>
        </div>
      </main>

    </div>
  );
}
