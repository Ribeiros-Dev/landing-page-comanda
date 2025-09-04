import {
  Box,
  Card,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import {LuStar} from 'react-icons/lu';

const testimonials = [
  {
    name: 'Carlos Silva',
    business: 'Restaurante Sabor & Arte',
    image: '/restaurant-owner-portrait.png',
    content:
      'O comanda.vip revolucionou nosso atendimento. Reduzimos o tempo de pedido em 40% e os erros praticamente sumiram. Recomendo para qualquer restaurante que quer modernizar.',
    rating: 5
  },
  {
    name: 'Ana Rodrigues',
    business: 'Lanchonete da Ana',
    image: '/female-business-owner-portrait.png',
    content:
      'Desde que implementamos o sistema, nosso faturamento aumentou 25%. A impressão automática na cozinha agilizou muito nosso processo. Excelente investimento!',
    rating: 5
  },
  {
    name: 'Roberto Santos',
    business: 'Pizzaria Bella Vista',
    image: '/pizzeria-owner-portrait.jpg',
    content:
      'A funcionalidade de tempo real é fantástica. Agora sabemos exatamente quando uma mesa está livre e podemos otimizar nosso atendimento. Sistema muito intuitivo.',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <Stack as="section" id="testimonials" py={{base: 20, sm: 32}}>
      <Container maxW="7xl" px={{base: 4, sm: 6, lg: 8}}>
        <Box maxW="2xl" mx="auto" textAlign="center">
          <Heading
            as="h2"
            fontSize={{base: '3xl', sm: '4xl'}}
            fontWeight="bold"
            letterSpacing="tight"
            color="gray.900"
            _dark={{color: 'white'}}
          >
            Mais de 500 estabelecimentos confiam no comanda.vip
          </Heading>
          <Text
            mt={4}
            fontSize="lg"
            color="gray.600"
            _dark={{color: 'gray.400'}}
          >
            Veja o que nossos clientes dizem sobre a transformação em seus
            negócios
          </Text>
        </Box>

        <Grid
          maxW="6xl"
          mx="auto"
          mt={16}
          templateColumns={{base: '1fr', lg: 'repeat(3, 1fr)'}}
          gap={8}
        >
          {testimonials.map((testimonial, index) => (
            <Card.Root key={index} position="relative">
              <Card.Body p={6}>
                <HStack mb={4}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} boxSize={4} color="yellow.400">
                      <LuStar />
                    </Icon>
                  ))}
                </HStack>

                <Text
                  as="blockquote"
                  color="gray.600"
                  _dark={{color: 'gray.400'}}
                  mb={6}
                  lineHeight="relaxed"
                >
                  &ldquo;{testimonial.content}&rdquo;
                </Text>

                <HStack>
                  <Image
                    src={testimonial.image || '/placeholder.svg'}
                    alt={testimonial.name}
                    boxSize={12}
                    borderRadius="full"
                    objectFit="cover"
                  />
                  <Box ml={4}>
                    <Text
                      fontWeight="semibold"
                      color="gray.900"
                      _dark={{color: 'white'}}
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.600"
                      _dark={{color: 'gray.400'}}
                    >
                      {testimonial.business}
                    </Text>
                  </Box>
                </HStack>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}
