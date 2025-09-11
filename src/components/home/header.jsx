'use client';

import {
  Box,
  Button,
  Drawer,
  Flex,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';
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
      bg="rgba(255, 255, 255, 0.1)"
      p={4}
      shadow="sm"
      backdropFilter="blur(20px) saturate(180%)"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'full',
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
        zIndex: -1
      }}
    >
      <Box maxW="container.xl" mx="auto" px={{base: 4, sm: 6, lg: 8}}>
        <Flex h={16} align="center" justify="space-between">
          <Box flexShrink={0}>
            <HStack spacing={2}>
              <Image
                src="/logo.ico"
                alt="Logo comanda.vip"
                width={32}
                height={32}
                priority
              />

              <Text fontSize="2xl" fontWeight="bold" color="orange.500">
                comanda.vip
              </Text>
            </HStack>
          </Box>

          <Box as="nav" display={{base: 'none', md: 'block'}}>
            <Flex align="baseline" gap={8} ml={10}>
              <Link
                href="#features"
                _hover={{color: 'orange.500'}}
                transition="colors"
              >
                Recursos
              </Link>
              <Link
                href="#pricing"
                _hover={{color: 'orange.500'}}
                transition="colors"
              >
                Preços
              </Link>
              <Link
                href="#testimonials"
                _hover={{color: 'orange.500'}}
                transition="colors"
              >
                Depoimentos
              </Link>
              <Link
                href="#contact"
                _hover={{color: 'orange.500'}}
                transition="colors"
              >
                Contato
              </Link>
            </Flex>
          </Box>

          <Box display={{base: 'none', md: 'block'}}>
            <Button colorPalette="orange">Começar Grátis</Button>
          </Box>

          <Drawer.Root size={'xs'} as="nav">
            <Drawer.Backdrop />
            <Drawer.Trigger asChild display={{base: 'flex', md: 'none'}}>
              <Button variant="ghost" size="sm">
                <LuMenu size={20} />
              </Button>
            </Drawer.Trigger>
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Title>
                    <Box flexShrink={0}>
                      <HStack spacing={2}>
                        <Image
                          src="/logo.ico"
                          alt="Logo comanda.vip"
                          width={32}
                          height={32}
                          priority
                        />

                        <Text
                          fontSize="2xl"
                          fontWeight="bold"
                          color="orange.500"
                        >
                          comanda.vip
                        </Text>
                      </HStack>
                    </Box>
                  </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <VStack gap={6}>
                    <Link
                      href="#features"
                      _hover={{color: 'orange.500'}}
                      transition="colors"
                    >
                      Recursos
                    </Link>
                    <Link
                      href="#pricing"
                      _hover={{color: 'orange.500'}}
                      transition="colors"
                    >
                      Preços
                    </Link>
                    <Link
                      href="#testimonials"
                      _hover={{color: 'orange.500'}}
                      transition="colors"
                    >
                      Depoimentos
                    </Link>
                    <Link
                      href="#contact"
                      _hover={{color: 'orange.500'}}
                      transition="colors"
                    >
                      Contato
                    </Link>
                  </VStack>
                </Drawer.Body>
              </Drawer.Content>
            </Drawer.Positioner>
          </Drawer.Root>
        </Flex>
      </Box>
    </Box>
  );
}
