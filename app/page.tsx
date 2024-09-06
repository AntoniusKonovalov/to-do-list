// "use client";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { LoginButton } from "@/components/auth/login-button";
import { LoginButtonTest } from "@/components/auth/login-button-form-hook";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Home() {
  console.log("hello world");

  return (
    <main className="flex h-full flex-col items-center justify-center bg-[#ffffff]">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-5xl font-semibold text-white drop-shadow-custom-text",
            font.className
          )}
        >
          Auth
        </h1>
        <div>
          <LoginButton>
            <Button variant="custom">Sign in</Button>
          </LoginButton>
        </div>
        {/* <div>
          <LoginButtonTest>
            <Button variant="custom">Sign in test</Button>
          </LoginButtonTest>
        </div> */}
      </div>
    </main>
  );
}
