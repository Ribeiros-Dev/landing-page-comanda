import {
  Card,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import {
  LuSmartphone,
  LuClock,
  LuPrinter,
  LuCreditCard,
  LuUsers,
  LuChartBar,
  LuWifi,
  LuShield
} from 'react-icons/lu';

const features = [
  {
    icon: LuSmartphone,
    title: 'Comandas Digitais',
    description:
      'Interface intuitiva para tablets e smartphones. Pedidos rápidos e sem erros.'
  },
  {
    icon: LuClock,
    title: 'Tempo Real',
    description:
      'Acompanhe o status das mesas e pedidos instantaneamente. Saiba quando está ocupada ou livre.'
  },
  {
    icon: LuPrinter,
    title: 'Impressão Automática',
    description:
      'Integração direta com impressoras térmicas. Pedidos chegam automaticamente na cozinha.'
  },
  {
    icon: LuCreditCard,
    title: 'Pagamentos PIX',
    description:
      'Gestão completa de faturas do sistema com pagamentos via PIX integrados.'
  },
  {
    icon: LuUsers,
    title: 'Gestão de Usuários',
    description:
      'Controle total de garçons, cozinheiros e administradores com diferentes permissões.'
  },
  {
    icon: LuChartBar,
    title: 'Relatórios Completos',
    description:
      'Análises detalhadas de vendas, produtos mais pedidos e performance do estabelecimento.'
  },
  {
    icon: LuWifi,
    title: 'Funciona Offline',
    description:
      'Continue operando mesmo sem internet. Sincronização automática quando voltar online.'
  },
  {
    icon: LuShield,
    title: 'Dados Seguros',
    description:
      'Backup automático na nuvem e criptografia de ponta a ponta para máxima segurança.'
  }
];

export function FeaturesSection() {
  return (
    <Stack id="features" py={{base: 20, sm: 32}} gap={2}>
      <Container maxW="container.xl" px={{base: 4, sm: 6, lg: 8}}>
        <Stack maxW="2xl" mx="auto" textAlign="center">
          <Heading
            size={{base: 'xl', sm: '2xl'}}
            fontWeight="bold"
            letterSpacing="tight"
            textAlign="center"
          >
            Tudo que você precisa para modernizar seu restaurante
          </Heading>
          <Text mt={4} fontSize="lg" color="gray.600">
            Recursos desenvolvidos especificamente para agilizar operações e
            aumentar a eficiência
          </Text>
        </Stack>

        <Stack maxW="7xl" mx="auto" mt={16}>
          <SimpleGrid columns={{base: 1, sm: 2, lg: 4}} gap={6}>
            {features.map((feature, index) => (
              <Card.Root key={index} overflow="hidden">
                <Card.Header>
                  <Flex
                    h={12}
                    w={12}
                    align="center"
                    justify="center"
                    rounded="lg"
                    bg="blue.50"
                  >
                    <feature.icon size={24} color="blue.500" />
                  </Flex>
                  <Card.Title fontSize="lg">{feature.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Description fontSize="sm" lineHeight="relaxed">
                    {feature.description}
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Stack>
  );
}
