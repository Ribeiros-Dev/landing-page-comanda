import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import {LuArrowRight, LuPlay} from 'react-icons/lu';

export function HeroSection() {
  return (
    <Stack
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-b, gray.50, gray.100)"
      py={16}
      spacing={0}
    >
      <Container maxW="7xl" px={{base: 4, sm: 6, lg: 8}}>
        <Stack gap={12} alignItems={'center'} justifyContent={'center'}>
          <Heading
            as="h1"
            fontSize={{base: '4xl', sm: '5xl'}}
            fontWeight="bold"
            letterSpacing="tight"
            color="gray.900"
          >
            Revolucione a gestão do seu{' '}
            <Text as="span" color="orange.600">
              restaurante
            </Text>
          </Heading>

          <Text
            fontSize="lg"
            color="gray.500"
            flexWrap={'wrap'}
            textAlign={'center'}
          >
            Sistema completo de comandas digitais com controle em tempo real,
            impressão automática e gestão de pagamentos. Agilize seus pedidos e
            aumente a satisfação dos clientes.
          </Text>

          <Stack
            direction={{base: 'column', sm: 'row'}}
            justify="center"
            gap={6}
          >
            <Link href="#form">
              <Button size="lg" colorPalette="orange">
                Começar Teste Grátis
                <LuArrowRight />
              </Button>
            </Link>
            <Link
              href="https://demo.comanda.vip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <LuPlay />
                Ver Demonstração
              </Button>
            </Link>
          </Stack>

          <Box>
            <Image
              src="/site-in-plataforms.png"
              alt="Sistema comanda.vip em ação"
              borderRadius="xl"
              shadow="2xl"
              border="1px"
              borderColor="gray.200"
            />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}
