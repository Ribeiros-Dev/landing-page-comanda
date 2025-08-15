'use client';

import {PasswordInput} from '@/components/ui/password-input';
import {Button, Center, Field, Input, Stack, Card} from '@chakra-ui/react';
import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import Link from 'next/link';
import {useAuth} from '../../hooks/useAuth';
import {loginSchema} from '../../schema/login';

export function Login() {
  const {login} = useAuth();

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const handleLogin = async (formData) => {
    try {
      console.log(formData);

      await login(formData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Center minH="100dvh" minW="100vw">
      <Card.Root width="md">
        <Card.Header>
          <Card.Title>Login</Card.Title>
          <Card.Description>
            Informe seus dados para acessar o sistema
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack
            gap="4"
            as="form"
            id="login-form"
            onSubmit={handleSubmit(handleLogin)}
          >
            <Field.Root invalid={!!errors.email}>
              <Field.Label>E-mail</Field.Label>
              <Input type="e-mail" {...register('email')} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label>Senha</Field.Label>
              <PasswordInput {...register('password')} />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Stack w={'full'}>
            <Button variant="solid" type="submit" form="login-form">
              Entrar
            </Button>
            <Button as={Link} variant="plain" href="/forgot-password">
              Esqueci minha senha
            </Button>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </Center>
  );
}
