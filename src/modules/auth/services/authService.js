export class AuthService {
  async login(request = {}) {
    const {email, password} = request;

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({email, password})
    });

    if (res?.error) {
      throw new Error(res?.error);
    } else {
      window.location.href = '/';
    }
  }

  async forgotPassword(request = {}) {
    const {email} = request;

    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      body: email
    });

    if (res?.error) {
      throw new Error(res?.error);
    } else {
      window.location.href = '/';
    }
  }
}
