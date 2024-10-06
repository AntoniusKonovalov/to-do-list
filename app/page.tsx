"use client";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";
import { AuthMain } from "@/components/auth/auth-main";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = true;

    if(token) {
      setIsAuthenticated(true);
    }
  }, [])

  return <AuthMain />;
}
