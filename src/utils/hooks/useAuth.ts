import { useSession } from "next-auth/react";

export default function useAuth() {
  const { status, data } = useSession();
  return {
    status,
    user: data?.user,
  };
}
