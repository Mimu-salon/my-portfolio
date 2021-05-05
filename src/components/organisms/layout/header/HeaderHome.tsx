import { memo, VFC } from 'react';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';
import { NavHashLink } from 'react-router-hash-link';

import { NavigationIconButton } from '../../../atoms/button/NavigationIconButton';
import { NavigationDrawer } from '../../../molecules/NavigationDrawer';
import { HeaderTemplate } from './HeaderTemplate';

export const HeaderHome: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeaderTemplate>
      <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }}>
        <Box pr={4}>
          <NavHashLink smooth activeStyle={{ fontWeight: 'bold' }} to={'/#proflle'}>
            Proflle
          </NavHashLink>
        </Box>
        <Box pr={4}>
          <NavHashLink smooth activeStyle={{ fontWeight: 'bold' }} to={'/#carrer'}>
            Carrer
          </NavHashLink>
        </Box>
        <Box pr={4}>
          <NavHashLink smooth activeStyle={{ fontWeight: 'bold' }} to={'/#skills-portfolio'}>
            Skills/Portfolio
          </NavHashLink>
        </Box>
        <Link>Contact</Link>
      </Flex>
      <NavigationIconButton onOpen={onOpen} />
      <NavigationDrawer onClose={onClose} isOpen={isOpen} />
    </HeaderTemplate>
  );
});
