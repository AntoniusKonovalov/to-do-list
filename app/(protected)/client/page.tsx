"use client";

import { useCurrentUser } from "@/app/hooks/use-current-user";
import { UserInfo } from "@/components/user-info";

const ClientPage = () => {

  const user = useCurrentUser();

  return (
    <UserInfo 
      label="Client Component"
      user={user}
    />
  )
};

export default ClientPage;
