import { ArrowRightIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/layout';
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';

type Props = {
  children: ReactNode;
};

export const HeadingRayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Heading
      as="h2"
      textAlign="center"
      p={5}
      lineHeight="1.4"
      color="blue.400"
      borderTop="dotted 1px gray"
      borderBottom="dotted 1px gray"
      fontSize={{ base: '2xl', md: '4xl' }}
      bg="gray.200">
      <ArrowRightIcon pr={2} />
      {children}
    </Heading>
  );
});
