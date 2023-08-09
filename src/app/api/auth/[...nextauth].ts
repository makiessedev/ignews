import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

export default NextAuth ({
  providers: [
    Github({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
    })
  ] 
})