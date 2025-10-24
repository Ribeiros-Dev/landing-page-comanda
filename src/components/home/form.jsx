'use client';
import {format} from '@/utils/format';
import {
  Button,
  Card,
  Field,
  Heading,
  HStack,
  Input,
  NativeSelect,
  RadioCard,
  Stack,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {toaster} from '../ui/toaster';
import {useAtomValue} from 'jotai';
import {plan} from '@/atom/plan';

const createTenantSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  company_name: yup.string().required('A empresa é obrigatória'),
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
  phone: yup.string().required('O telefone é obrigatório'),
  plan_id: yup.string().required('O plano é obrigatório'),
  billing_cycle: yup.string().oneOf(['monthly', 'annual']).default('monthly')
});

export function Form() {
  const [plans, setPlans] = React.useState([]);
  const selectedPlan = useAtomValue(plan);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: {errors, isSubmitting}
  } = useForm({
    resolver: yupResolver(createTenantSchema)
  });

  const requestPlans = async () => {
    try {
      const res = await fetch('/api/plans', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      const {data} = await res.json();

      setPlans(data);
    } catch (error) {
      setPlans([]);
      throw error;
    }
  };

  const handleSubmitTenant = async (formData) => {
    const phone = (formData.phone || '').replace(/\D/g, '');
    const formattedPhone = phone.startsWith('55') ? phone : `55${phone}`;

    const formmatedBody = {
      ...formData,
      phone: formattedPhone
    };

    await fetch('/api/tenant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formmatedBody)
    }).then(({message}) => {
      toaster.create({
        description: message,
        type: 'success'
      });
      reset();
    });
  };

  React.useEffect(() => {
    requestPlans();
  }, []);

  React.useEffect(() => {
    reset({plan_id: selectedPlan || ''});
  }, [selectedPlan]);

  return (
    <VStack gap={6} as={'form'} onSubmit={handleSubmit(handleSubmitTenant)}>
      <Heading
        id="form"
        as="h2"
        size="2xl"
        fontWeight="bold"
        color="gray.900"
        textAlign="center"
      >
        Crie sua conta e comece a usar grátis por 15 dias
      </Heading>

      <Card.Root padding={1} w="full" maxW="md">
        <Card.Body>
          <Stack gap={3}>
            <Field.Root invalid={errors.name}>
              <Field.Label>Nome</Field.Label>
              <Input placeholder="Seu nome" {...register('name')} />
              <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={errors.company_name}>
              <Field.Label>Empresa</Field.Label>
              <Input placeholder="Sua empresa" {...register('company_name')} />
              <Field.ErrorText>{errors.company_name?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={errors.email}>
              <Field.Label>Email</Field.Label>
              <Input placeholder="me@example.com" {...register('email')} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={errors.phone}>
              <Field.Label>WhatsApp</Field.Label>
              <Input
                placeholder="(99) 99999-9999"
                type="tel"
                {...register('phone', {
                  onChange: (e) => {
                    const formatted = format.phone(e.target.value);
                    e.target.value = formatted;
                  }
                })}
              />
              <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
            </Field.Root>

            <RadioCard.Root
              defaultValue={'monthly'}
              onValueChange={(value) => setValue('billing_cycle', value)}
              colorPalette="orange"
              align="center"
            >
              <HStack align="stretch">
                {[
                  {label: 'Mensal', value: 'monthly'},
                  {label: 'Anual', value: 'annual'}
                ].map((item) => (
                  <RadioCard.Item key={item.value} value={item.value}>
                    <RadioCard.ItemHiddenInput {...register('billing_cycle')} />
                    <RadioCard.ItemControl>
                      <RadioCard.ItemText>{item.label}</RadioCard.ItemText>
                      <RadioCard.ItemIndicator />
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                ))}
              </HStack>
            </RadioCard.Root>

            <Field.Root invalid={errors.plan_id}>
              <Field.Label>Plano</Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field
                  placeholder="Selecione um plano"
                  {...register('plan_id')}
                >
                  {Array.isArray(plans)
                    ? plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name}
                        </option>
                      ))
                    : null}
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
              <Field.ErrorText>{errors.plan_id?.message}</Field.ErrorText>
            </Field.Root>
          </Stack>
        </Card.Body>

        <Card.Footer>
          <Button
            type="submit"
            w={'full'}
            colorPalette="orange"
            loading={isSubmitting}
            loadingText="Criando..."
          >
            Criar
          </Button>
        </Card.Footer>
      </Card.Root>
    </VStack>
  );
}
