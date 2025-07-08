import NextAuth from "next-auth"
import "next-auth/jwt"

import GitHub from "next-auth/providers/github"


export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: !!process.env.AUTH_DEBUG,
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  providers: [
    GitHub,
  ],
})
