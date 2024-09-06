"use client";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export const LoginButtonTest = ({ children }: any) => {

    const router = useRouter();

    const onClick = () => {
        router.push("/auth/react-hook-test");

    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
}