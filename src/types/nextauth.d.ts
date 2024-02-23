import { LoginType} from "@prisma/client";


declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      name: string;
      email?: string;
      phone: string;
      address: string;
      emailVerified: boolean;
      loginType: LoginType;
     
    };
  }
}