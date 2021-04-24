import { memo, VFC } from 'react';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';

import { NavigationIconButton } from '../../../atoms/button/NavigationIconButton';
import { NavigationDrawer } from '../../../molecules/NavigationDrawer';
import { HeaderTemplate } from './HeaderTemplate';

export const HeaderHome: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeaderTemplate>
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
    </HeaderTemplate>
  );
});
