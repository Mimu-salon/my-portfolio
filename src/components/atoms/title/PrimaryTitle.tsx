import { memo, VFC } from 'react';
import { Text } from '@chakra-ui/layout';

type Props = {
  title: string;
};

export const PrimaryTitle: VFC<Props> = memo((props) => {
  const { title } = props;
  return (
    <Text fontSize='lg' fontWeight='bold' borderLeft='solid' borderColor='blue.300' borderLeftWidth='5px' pl={4}>
      {title}
    </Text>
  );
});
