import {Box, Container, Heading, Text, Button, Stack} from '@chakra-ui/react';
import {LuArrowRight} from 'react-icons/lu';

export function CTASection() {
  return (
    <Box py={16}>
      <Container maxW="container.xl" px={{base: 4, sm: 6, lg: 8}}>
        <Stack gap={{base: '2', md: '4'}} alignItems="center">
          <Heading
            as="h2"
            size="3xl"
            textAlign="center"
            fontWeight="extrabold"
            color="primary.foreground"
          >
            Pronto para revolucionar seu restaurante?
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Junte-se a centenas de estabelecimentos que já modernizaram sua
            gestão. Comece seu teste gratuito hoje mesmo, sem compromisso.
          </Text>
          <Box mt="6" textAlign="center">
            <Button size="lg" variant="outline">
              Começar Teste Grátis de 15 Dias
              <LuArrowRight
                style={{marginLeft: '8px', height: '16px', width: '16px'}}
              />
            </Button>
          </Box>
          <Text mt="4" fontSize="sm" color="primary.foreground" opacity="0.7">
            Sem cartão de crédito • Sem compromisso • Suporte incluído
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
