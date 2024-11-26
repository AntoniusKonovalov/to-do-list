"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/app/hooks/use-current-user";
import { getSession, useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

interface User {
  id?: string;
  role?: "USER" | "ADMIN";
  image?: string;
}



const SettingsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true); 
      console.log("fetching session");
      await getSession();
      setLoading(false); 
    };

    fetchSession();
  }, []);

  const onClick = () => {
    logout();
  };

  if (loading) {
    // Display loading state
    return <div>Loading...</div>;
  }


  return (
    <div className="bg-white p-10 rounded-xl">
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
