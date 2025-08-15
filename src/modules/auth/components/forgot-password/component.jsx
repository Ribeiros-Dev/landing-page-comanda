'use client';

import { PasswordInput } from '@/components/ui/password-input';
import { Button, Center, Field, Input, Stack, Card } from '@chakra-ui/react';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { forgotPasswordSchema } from '../../schema/forgot-password';

export function ForgotPassword() {
  const { forgotPassword } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });


  const handleForgotPassword = async (data) => {
    try {
      await forgotPassword(data);
    } catch (error) {
      console.error('Forgot password failed:', error);
    }
  };

  return (
    <Center minH="100dvh" minW="100vw">
      <Card.Root width="md">
        <Card.Header>
          <Card.Title>Recuperar Senha</Card.Title>
          <Card.Description>
            Informe seu usuário para recuperar a senha
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" as="form" id='forgot-password-form' onSubmit={handleSubmit(handleForgotPassword)}>
            <Field.Root invalid={!!errors.username}>
              <Field.Label>Usuário</Field.Label>
              <Input {...register("username")} />
              <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Stack w={"full"}>
            <Button variant="solid" type="submit" form="forgot-password-form">Continuar</Button>
            <Button as={Link} variant="plain" href="/login">Voltar para o login</Button>
          </Stack>
        </Card.Footer>
      </Card.Root>

    </Center>
  );
}
