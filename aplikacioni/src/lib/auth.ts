import "server-only";
import type { DefaultSession, NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [GitHubProvider({
    clientId: process.env.GITHUB_ID ?? "",
    clientSecret: process.env.GITHUB_SECRET ?? "",
    // Për këtë ushtrim mjafton identiteti. Nuk kërkojmë email ose repository.
    authorization: { params: { scope: "read:user" } },
    profile(profile) {
      return { id: String(profile.id), name: profile.name ?? profile.login, email: null, image: profile.avatar_url };
    },
  })],
  session: { strategy: "jwt", maxAge: 2 * 60 * 60 },
  pages: { error: "/panel" },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) session.user.id = token.sub;
      return session;
    },
  },
};

declare module "next-auth" {
  interface Session { user: { id: string } & DefaultSession["user"]; }
}
