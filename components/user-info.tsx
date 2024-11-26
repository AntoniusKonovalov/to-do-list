import { ExtendedUser } from "@/next-auth";
import { Card, CardHeader } from "@/components/ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
    </Card>
  );
};
