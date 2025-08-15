'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
import { SessionProvider } from "next-auth/react"

export function Provider(props) {
  return (
    <SessionProvider session={props.session}>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </SessionProvider>
  );
}
