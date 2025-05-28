import { BACKEND_URL } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import NextAuth, {
  Awaitable,
  NextAuthOptions,
  RequestInternal,
  User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { headers } from "next/headers";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "brand@email.com",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      authorize: async function (
        credentials: Record<string, string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ) {
        if (!credentials?.email || credentials?.password) {
          return null;
        }

        const { email, password } = credentials;
        const response = await fetch(`${BACKEND_URL}/auth/signup`, {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status == 401) {
          console.log(response.statusText);
          return null;
        }

        const user = await response.json();
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
