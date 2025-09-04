import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import {LuCheck} from 'react-icons/lu';

const plans = [
  {
    name: 'Quinzenal',
    price: 'Grátis',
    period: '15 dias',
    description: 'Perfeito para testar todas as funcionalidades',
    features: [
      'Até 5 mesas',
      'Comandas digitais ilimitadas',
      'Impressão básica',
      'Relatórios simples',
      'Suporte por email'
    ],
    popular: false,
    cta: 'Começar Grátis'
  },
  {
    name: 'Mensal',
    price: 'R$ 45',
    period: 'por mês',
    description: 'Ideal para pequenos e médios estabelecimentos',
    features: [
      'Mesas ilimitadas',
      'Comandas digitais ilimitadas',
      'Impressão avançada',
      'Relatórios completos',
      'Gestão de usuários',
      'Pagamentos PIX',
      'Suporte prioritário',
      'Backup automático'
    ],
    popular: true,
    cta: 'Assinar Agora'
  },
  {
    name: 'Anual',
    price: 'R$ 450',
    period: 'por ano',
    originalPrice: 'R$ 540',
    discount: '10% de desconto',
    description: 'Melhor custo-benefício para estabelecimentos consolidados',
    features: [
      'Tudo do plano mensal',
      'Integração com delivery',
      'API personalizada',
      'Treinamento incluído',
      'Suporte 24/7',
      'Consultoria mensal',
      'Customizações especiais'
    ],
    popular: false,
    cta: 'Economizar 10%'
  }
];

export function PricingSection() {
  return (
    <Stack as="section" id="pricing" py={{base: 20, sm: 32}} bg="gray.50">
      <Container maxW="7xl" px={{base: 4, sm: 6, lg: 8}}>
        <Box maxW="2xl" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" fontWeight="bold" color="gray.900" mb={4}>
            Planos que se adaptam ao seu negócio
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Escolha o plano ideal para o tamanho do seu estabelecimento
          </Text>
        </Box>

        <SimpleGrid
          columns={{base: 1, lg: 3}}
          gap={8}
          maxW="7xl"
          mx="auto"
          mt={16}
        >
          {plans.map((plan, index) => (
            <Card.Root
              key={index}
              position="relative"
              border={plan.popular ? '2px solid' : '1px solid'}
              borderColor={plan.popular ? 'blue.500' : 'gray.200'}
            >
              {plan.popular && (
                <Box
                  position="absolute"
                  top="-4"
                  left="50%"
                  transform="translateX(-50%)"
                >
                  <Badge
                    bg="blue.500"
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
                    {plan.price}
                  </Text>
                  {plan.originalPrice && (
                    <Text
                      as="span"
                      ml={2}
                      fontSize="lg"
                      color="gray.500"
                      textDecoration="line-through"
                    >
                      {plan.originalPrice}
                    </Text>
                  )}
                  <Text as="span" color="gray.500">
                    /{plan.period}
                  </Text>
                  {plan.discount && (
                    <Text
                      mt={1}
                      fontSize="sm"
                      color="blue.500"
                      fontWeight="medium"
                    >
                      {plan.discount}
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
                  colorScheme={plan.popular ? 'blue' : 'gray'}
                  variant={plan.popular ? 'solid' : 'outline'}
                >
                  {plan.cta}
                </Button>

                <VStack spacing={3} align="start">
                  {plan.features.map((feature, featureIndex) => (
                    <HStack key={featureIndex} align="start">
                      <Icon
                        h={5}
                        w={5}
                        color="blue.500"
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
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
