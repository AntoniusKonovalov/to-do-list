import { LoginButton } from "@/components/auth/login-button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const AuthMain = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[#ffffff]">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-5xl font-semibold text-black", font.className)}>
          TaskFlow
        </h1>
        <div>
          <LoginButton>
            <Button variant="custom">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};
