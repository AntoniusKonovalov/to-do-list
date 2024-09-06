"use client";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button variant="custom" size="lg" className="w-full bg-[#ffffff]" onClick={() => {}}>
        <FaGoogle className="text-[#444444] h-5 w-5" />
      </Button>
      <Button variant="custom" size="lg" className="w-full bg-[#ffffff]" onClick={() => {}}>
        <FaGithub className="text-[#444444] h-5 w-5" />
      </Button>
    </div>
  );
};
