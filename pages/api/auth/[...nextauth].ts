import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest } from "next";

export default NextAuth({
  // 로그인 인증방식 설정
  providers: [
    Providers.Credentials({
      name: "email-password-credential",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      // sign up 버튼을 누르면 들어오는 함수
      // 이 데이터를 가지고 인증을 진행하면 됨
      async authorize(
        credentials: Record<"email" | "password", string>,
        req: NextApiRequest
      ) {
        return credentials;
      },
    }),
  ],
  // 원하는 화면으로 매핑
  pages: {
    signIn: "/login",
  },
});
