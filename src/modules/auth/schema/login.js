import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required('Usuário é obrigatório'),
  password: yup.string().required('Senha é obrigatória')
});
