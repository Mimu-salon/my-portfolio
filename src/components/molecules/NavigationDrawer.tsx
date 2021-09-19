import { memo, VFC } from 'react';
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const NavigationDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement='right' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%' as='a' href='/#top'>
              Top
            </Button>
            <Button w='100%' as='a' href='/#profile'>
              Proflle
            </Button>
            <Button w='100%' as='a' href='/#carrer'>
              Carrer
            </Button>
            <Button w='100%' as='a' href='/#skills-portfolio'>
              Skills/Portfolio
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
