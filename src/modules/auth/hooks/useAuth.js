import {AuthService} from '../services/authService';

export function useAuth() {
  const authService = new AuthService();

  const login = async (request) => {
    try {
      await authService.login(request);
    } catch (error) {
      throw new Error(error);
    }
  };

  const forgotPassword = async (request) => {
    try {
      await authService.forgotPassword(request);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    login,
    forgotPassword
  };
}
