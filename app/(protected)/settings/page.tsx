"use client";

import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  const onClick = () => {
    signOut();
  };

  return (
    <div>
      {JSON.stringify(session)}

      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
