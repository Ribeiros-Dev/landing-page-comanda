import { AuthService } from "../services/authService";

export function useAuth() {
  const authService = new AuthService();

  const login = async (request) => {
    try {
      await authService.login(request);
    } catch (error) {
      throw new Error('Login failed, please try again.');
    }
  };

  const forgotPassword = async (request) => {
    try {
      await authService.forgotPassword(request);
    } catch (error) {
      throw new Error('Forgot password failed, please try again.');
    }
  };

  return {
    login,
    forgotPassword
  };
}
