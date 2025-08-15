import {signIn} from 'next-auth/react';

export class AuthService {
  async login(request = {}) {
    const {username, password} = request;

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password
    });

    if (res?.error) {
      throw new Error(res?.error);
    } else {
      window.location.href = '/';
    }
  }

  async forgotPassword(request = {}) {
  }
}
