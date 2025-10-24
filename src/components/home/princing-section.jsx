'use client';
import {plan} from '@/atom/plan';
import {format} from '@/utils/format';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  Icon,
  RadioCard,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import {useSetAtom} from 'jotai';
import React from 'react';
import {LuCheck} from 'react-icons/lu';
import {Skeleton} from '../ui/skeleton';

export function PricingSection() {
  const [plans, setPlans] = React.useState([]);
  const [typeContractPlan, setTypeContractPlan] = React.useState('monthly');
  const [loading, setLoading] = React.useState(false);
  const setPlanAtom = useSetAtom(plan);

  const requestPlans = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const getFeatures = React.useCallback((p) => {
    const items = Array.isArray(p?.features) ? [...p.features] : [];

    const fmt = (v) => {
      if (v == null || v === '') return null;
      const n = Number(v);
      return Number.isNaN(n) ? String(v) : format.money(n);
    };

    if (p?.max_tables != null) {
      items.push(`Máximo de mesas: ${p.max_tables}`);
    }
    if (p?.max_users != null) {
      items.push(`Máximo de usuários: ${p.max_users}`);
    }

    const extraTable = fmt(p?.price_per_extra_table);
    const extraUser = fmt(p?.price_per_extra_user);

    if (extraTable) {
      items.push(`Valor por mesa adicional por mês: ${extraTable}`);
    }
    if (extraUser) {
      items.push(`Valor por usuário adicional por mês: ${extraUser}`);
    }

    items.push('Dashboard detalhado');
    items.push('Relatórios de vendas e desempenho');
    items.push('Real time das comandas');
    items.push('Teste gratuito de 15 dias');

    return items;
  }, []);

  React.useEffect(() => {
    requestPlans();
  }, []);

  React.useEffect(() => {}, [typeContractPlan]);

  return (
    <Stack as="section" id="pricing" py={16} bg="orange.50">
      <Container maxW="7xl">
        <Stack gap={12}>
          <Stack gap={3} maxW="2xl" mx="auto" textAlign="center">
            <Heading as="h2" size="2xl" fontWeight="bold" color="gray.900">
              Planos que se adaptam ao seu negócio
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Escolha o plano ideal para o tamanho do seu estabelecimento
            </Text>

            <RadioCard.Root
              value={typeContractPlan}
              onValueChange={(e) => setTypeContractPlan(e.value)}
              colorPalette="orange"
              align="center"
            >
              <HStack align="stretch">
                {[
                  {label: 'Mensal', value: 'monthly'},
                  {label: 'Anual', value: 'yearly'}
                ].map((item) => (
                  <RadioCard.Item key={item.value} value={item.value}>
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl>
                      <RadioCard.ItemText>{item.label}</RadioCard.ItemText>
                      <RadioCard.ItemIndicator />
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                ))}
              </HStack>
            </RadioCard.Root>
          </Stack>

          <SimpleGrid columns={{base: 1, lg: 3}} gap={8} maxW="7xl" mx="auto">
            {plans.map((plan, index) => (
              <Skeleton loading={loading} key={index}>
                <Card.Root
                  position="relative"
                  border={index === 1 ? '2px solid' : '1px solid'}
                  borderColor={index === 1 ? 'orange.500' : 'gray.200'}
                >
                  {index === 1 && (
                    <Box
                      position="absolute"
                      top="-4"
                      left="50%"
                      transform="translateX(-50%)"
                    >
                      <Badge
                        bg="orange.500"
                        color="white"
                        px={4}
                        py={1}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="medium"
                      >
                        Mais Popular
                      </Badge>
                    </Box>
                  )}

                  <Card.Header textAlign="center">
                    <Heading as="h3" size="lg" mb={4}>
                      {plan.name}
                    </Heading>
                    <Box>
                      <Text
                        as="span"
                        fontSize="4xl"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {format.money(
                          typeContractPlan === 'monthly'
                            ? plan.monthly_price
                            : plan.annual_price / 12
                        )}
                      </Text>
                      <Text as="span" color="gray.500">
                        /por mês
                      </Text>
                      {plan.monthly_price && (
                        <Text
                          mt={1}
                          fontSize="sm"
                          color="orange.500"
                          fontWeight="medium"
                        >
                          {typeContractPlan === 'yearly'
                            ? `${(((plan.monthly_price - plan.annual_price / 12) / plan.monthly_price) * 100).toFixed(2)}%`
                            : undefined}
                        </Text>
                      )}
                    </Box>
                    <Text mt={4} color="gray.600">
                      {plan.description}
                    </Text>
                  </Card.Header>

                  <Card.Body>
                    <Button
                      w="full"
                      mb={6}
                      colorPalette={index === 1 ? 'orange' : 'gray'}
                      variant={index === 1 ? 'solid' : 'outline'}
                      onClick={() => {
                        setPlanAtom(plan.id);
                        const el = document.getElementById('form');
                        if (el) {
                          el.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                          return;
                        }
                        const fallback = document.querySelector('#form');
                        if (fallback)
                          fallback.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                      }}
                    >
                      Assinar agora
                    </Button>

                    <VStack gap={3} align="start">
                      {getFeatures(plan).map((feature, featureIndex) => (
                        <HStack key={featureIndex} align="start">
                          <Icon
                            h={5}
                            w={5}
                            color="orange.500"
                            mt={0.5}
                            flexShrink={0}
                          >
                            <LuCheck />
                          </Icon>
                          <Text fontSize="sm" color="gray.600">
                            {feature}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </Skeleton>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Stack>
  );
}
