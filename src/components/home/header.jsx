'use client';

import {Box, Button, Flex, Text, VStack} from '@chakra-ui/react';
import Link from 'next/link';
import {useState} from 'react';
import {LuMenu, LuX} from 'react-icons/lu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={50}
      w="full"
      borderBottom="1px"
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(8px)"
    >
      <Box maxW="container.xl" mx="auto" px={{base: 4, sm: 6, lg: 8}}>
        <Flex h={16} align="center" justify="space-between">
          <Flex align="center">
            <Box flexShrink={0}>
              <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                comanda.vip
              </Text>
            </Box>
          </Flex>

          <Box as="nav" display={{base: 'none', md: 'block'}}>
            <Flex align="baseline" gap={8} ml={10}>
              <Link
                href="#features"
                _hover={{color: 'blue.500'}}
                transition="colors"
              >
                Recursos
              </Link>
              <Link
                href="#pricing"
                _hover={{color: 'blue.500'}}
                transition="colors"
              >
                Preços
              </Link>
              <Link
                href="#testimonials"
                _hover={{color: 'blue.500'}}
                transition="colors"
              >
                Depoimentos
              </Link>
              <Link
                href="#contact"
                _hover={{color: 'blue.500'}}
                transition="colors"
              >
                Contato
              </Link>
            </Flex>
          </Box>

          <Box display={{base: 'none', md: 'block'}}>
            <Button colorScheme="blue">Começar Grátis</Button>
          </Box>

          <Box display={{base: 'block', md: 'none'}}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </Button>
          </Box>

          {isMenuOpen && (
            <Box display={{base: 'block', md: 'none'}}>
              <VStack spacing={1} px={2} pt={2} pb={3} borderTop="1px">
                <Link
                  href="#features"
                  w="full"
                  px={3}
                  py={2}
                  _hover={{color: 'blue.500'}}
                >
                  Recursos
                </Link>
                <Link
                  href="#pricing"
                  w="full"
                  px={3}
                  py={2}
                  _hover={{color: 'blue.500'}}
                >
                  Preços
                </Link>
                <Link
                  href="#testimonials"
                  w="full"
                  px={3}
                  py={2}
                  _hover={{color: 'blue.500'}}
                >
                  Depoimentos
                </Link>
                <Link
                  href="#contact"
                  w="full"
                  px={3}
                  py={2}
                  _hover={{color: 'blue.500'}}
                >
                  Contato
                </Link>
                <Box px={3} py={2} w="full">
                  <Button w="full" colorScheme="blue">
                    Começar Grátis
                  </Button>
                </Box>
              </VStack>
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
