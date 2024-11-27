"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/app/hooks/use-current-user";
import { getSession, useSession, signOut } from "next-auth/react";
import { useEffect, useState, useTransition } from "react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";

const SettingsPage = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     setLoading(true);
  //     console.log("fetching session");
  //     await getSession();
  //     setLoading(false);
  //   };

  //   fetchSession();
  // }, []);

  // const onClick = () => {
  //   logout();
  // };

  // if (loading) {
  //   // Display loading state
  //   return <div>Loading...</div>;
  // }
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      settings({
        name: "Something different",
      }).then(() => {
        update();
      });
    });
  };

  return (
    <Card className="w-[90%]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Settings</p>
      </CardHeader>
      <CardContent>
        <Button disabled={isPending} onClick={onClick}>
          Update Name
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
