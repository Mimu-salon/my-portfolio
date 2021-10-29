import { memo, ReactNode, VFC } from 'react';
import { Text } from '@chakra-ui/layout';

type Props = {
  children: ReactNode;
};

export const PrimaryTitle: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Text fontSize='lg' fontWeight='bold' borderLeft='solid' borderColor='blue.300' borderLeftWidth='5px' pl={4}>
      {children}
    </Text>
  );
});
