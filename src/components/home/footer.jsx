import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react';
import Link from 'next/link';
import {LuSmartphone, LuMail, LuMapPin} from 'react-icons/lu';

export function Footer() {
  return (
    <Box
      as="footer"
      id="contact"
      bg="gray.50"
      borderTop="1px"
      borderColor="gray.200"
    >
      <Container maxW="container.xl" py={12}>
        <Grid templateColumns={{base: '1fr', md: '2fr 1fr 1fr'}} gap={8}>
          <GridItem colSpan={{base: 1, md: 1}}>
            <Heading as="h3" size="xl" color="blue.600" mb={4}>
              comanda.vip
            </Heading>
            <Text color="gray.600" mb={6} maxW="md">
              Sistema completo de gestão para restaurantes, lanchonetes e
              estabelecimentos alimentícios. Modernize seu negócio com
              tecnologia de ponta.
            </Text>
            <VStack spacing={2} align="start">
              <HStack color="gray.600">
                <LuMail size={16} />
                <Text>contato@comanda.vip</Text>
              </HStack>
              <HStack color="gray.600">
                <LuSmartphone size={16} />
                <Text>(11) 99999-9999</Text>
              </HStack>
              <HStack color="gray.600">
                <LuMapPin size={16} />
                <Text>São Paulo, SP</Text>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem>
            <Heading as="h4" size="md" mb={4}>
              Produto
            </Heading>
            <VStack spacing={2} align="start">
              <Link
                href="#features"
                color="gray.600"
                _hover={{color: 'blue.600'}}
              >
                Recursos
              </Link>
              <Link
                href="#pricing"
                color="gray.600"
                _hover={{color: 'blue.600'}}
              >
                Preços
              </Link>
              <Link href="#" color="gray.600" _hover={{color: 'blue.600'}}>
                Demonstração
              </Link>
              <Link href="#" color="gray.600" _hover={{color: 'blue.600'}}>
                API
              </Link>
            </VStack>
          </GridItem>

          <GridItem>
            <Heading as="h4" size="md" mb={4}>
              Suporte
            </Heading>
            <VStack spacing={2} align="start">
              <Link href="#" color="gray.600" _hover={{color: 'blue.600'}}>
                Central de Ajuda
              </Link>
              <Link href="#" color="gray.600" _hover={{color: 'blue.600'}}>
                Documentação
              </Link>
              <Link href="#" color="gray.600" _hover={{color: 'blue.600'}}>
                Treinamentos
              </Link>
              <Link href="#" color="gray.600" _hover={{color: 'blue.600'}}>
                Status
              </Link>
            </VStack>
          </GridItem>
        </Grid>

        <Box
          borderTop="1px"
          borderColor="gray.200"
          mt={12}
          pt={8}
          textAlign="center"
        >
          <Text color="gray.600">
            &copy; {new Date().getFullYear()} comanda.vip. Todos os direitos
            reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
