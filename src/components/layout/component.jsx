import {Box, Grid, GridItem} from '@chakra-ui/react';
import {Sidebar, Header} from './';

export function Layout({children}) {
  return (
    <Grid
      h="100dvh"
      templateRows="repeat(2, 1fr)"
      templateColumns="280px 1fr"
      gap={0}
    >
      <GridItem rowSpan={2} colSpan={1} bgColor={'red.500'}>
        <Sidebar />
      </GridItem>
      <GridItem height="80px" colSpan={1} bgColor={'blue.500'}>
        <Header />
      </GridItem>
      <GridItem
        height={'calc(100dvh - 80px)'}
        colSpan={1}
        bgColor={'yellow.500'}
      >
        <Box>{children}</Box>
      </GridItem>
    </Grid>
  );
}
