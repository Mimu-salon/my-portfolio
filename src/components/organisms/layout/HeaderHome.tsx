import { memo, VFC } from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';

import { NavigationIconButton } from '../../atoms/button/NavigationIconButton';
import { NavigationDrawer } from '../../molecules/NavigationDrawer';

export const HeaderHome: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as='nav' bg='blue.500' color='gray.50' align='center' justify='space-between' padding={{ base: 3, md: 5 }}>
        <Flex align='center' as='a' mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>
            Takeshi Mimura
          </Heading>
        </Flex>
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link>Proflle</Link>
          </Box>
          <Box pr={4}>
            <Link>Carrer</Link>
          </Box>
          <Box pr={4}>
            <Link>Skills/Portfolio</Link>
          </Box>
          <Link>Contact</Link>
        </Flex>
        <NavigationIconButton onOpen={onOpen} />
        <NavigationDrawer onClose={onClose} isOpen={isOpen} />
      </Flex>
    </>
  );
});
