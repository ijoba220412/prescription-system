```typescript
import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Layout: React.FC = ({ children }) => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Flex alignContent="center" h="24" px={8}
justify-content="space-between">
        <Link href="/profissionais" passHref>
          <Heading>Profissionais</Heading>
        </Link>
        <Link href="/pacientes" passHref>
          <Heading>Pacientes</Heading>
        </Link>
        <Link href="/medicamentos" passHref>
          <Heading>Medicamentos</Heading>
        </Link>
        <Link href="/prescricoes" passHref>
          <Heading>Prescrições</Heading>
        </Link>
        <Link href="/dashboard" passHref>
          <Heading>Dashboard</Heading>
        </Link>
      </Flex>
      <Box p={8}>{children}</Box>
    </Box>
  );
};

export default Layout;
```