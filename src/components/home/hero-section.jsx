import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import {LuArrowRight, LuPlay} from 'react-icons/lu';

export function HeroSection() {
  return (
    <Stack
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-b, gray.50, gray.100)"
      py={{base: 20, sm: 32}}
      spacing={0}
    >
      <Container maxW="7xl" mx="auto" px={{base: 4, sm: 6, lg: 8}}>
        <Box maxW="4xl" mx="auto" textAlign="center">
          <Heading
            as="h1"
            fontSize={{base: '4xl', sm: '6xl'}}
            fontWeight="bold"
            letterSpacing="tight"
            color="gray.900"
          >
            Revolucione a gestão do seu{' '}
            <Text as="span" color="blue.600">
              restaurante
            </Text>
          </Heading>
          <Text mt={6} fontSize="lg" lineHeight="8" color="gray.600">
            Sistema completo de comandas digitais com controle em tempo real,
            impressão automática e gestão de pagamentos. Agilize seus pedidos e
            aumente a satisfação dos clientes.
          </Text>
          <HStack mt={10} justify="center" spacing={6}>
            <Button size="lg" colorScheme="blue" rightIcon={<LuArrowRight />}>
              Começar Teste Grátis
            </Button>
            <Button variant="outline" size="lg" leftIcon={<LuPlay />}>
              Ver Demonstração
            </Button>
          </HStack>
          <Box mt={16}>
            <Image
              src="/restaurant-management-dashboard-with-tablets-and-p.jpg"
              alt="Sistema comanda.vip em ação"
              mx="auto"
              borderRadius="xl"
              shadow="2xl"
              border="1px"
              borderColor="gray.200"
            />
          </Box>
        </Box>
      </Container>
    </Stack>
  );
}
