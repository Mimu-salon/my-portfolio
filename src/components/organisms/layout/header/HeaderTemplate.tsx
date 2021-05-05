import { memo, ReactNode, useCallback, VFC } from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { useHistory } from 'react-router';

type Props = {
  children: ReactNode;
};

export const HeaderTemplate: VFC<Props> = memo((props) => {
  const { children } = props;

  const history = useHistory();
  const onClickHome = useCallback(() => history.push('/'), [history]);
  
  return (
    <Flex as='nav' id="top" bg='blue.500' color='gray.50' align='center' justify='space-between' padding={{ base: 4, md: 5 }}>
      <Flex align='center' as='a' mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
        <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>
          Takeshi Mimura
        </Heading>
      </Flex>
      {children}
    </Flex>
  );
});
