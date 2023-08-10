import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import { query as q } from 'faunadb'
import { fauna } from "@/app/services/fauna";

const nextAuthOptions: NextAuthOptions = ({
  providers: [
    Github({
      clientId: String(process.env.GITHUB_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_CLIENT_SECRET),
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      const { email } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(String(email))
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(String(email))
              )
            )
          )
        )
        return true
      } catch {
        return false
      }
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