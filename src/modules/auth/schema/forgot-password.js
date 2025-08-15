import * as yup from 'yup';

export const forgotPasswordSchema = yup.object().shape({
  username: yup.string().required('Usuário é obrigatório')
});
