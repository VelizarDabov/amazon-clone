
import nextAuth from "next-auth"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
const idd = '873com'
const secret = 'GOC'
export const authOptions = {

 
  providers: [
    GoogleProvider({
      clientId:idd,
      clientSecret:secret,
    }),

  ],
}

export default NextAuth(authOptions)
export const handler= nextAuth(authOptions)
export {handler as GET, handler as POST}