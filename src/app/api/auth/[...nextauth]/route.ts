import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import { query as q } from 'faunadb'

const nextAuthOptions: NextAuthOptions = ({
  providers: [
    Github({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {



      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
})

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }