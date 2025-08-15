import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          required: true,
          placeholder: 'meuemail@email.com'
        },
        password: {
          label: 'Senha',
          type: 'password',
          required: true,
          placeholder: '********'
        }
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {'Content-Type': 'application/json'}
          });

          const {
            data: {user, token}
          } = await res.json();

          if (!res.ok || !user) return null;

          return {...user, token};
        } catch (error) {
          throw new Error('Erro ao autenticar');
        }
      }
    })
  ],
  callbacks: {
    async session({session, token}) {
      session.user = token.user;
      if (token.user?.level) {
        session.level = token.user.level;
      }
      return session;
    },
    async jwt({token, user}) {
      if (user) {
        token.user = user;
      }

      return token;
    }
  },
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
