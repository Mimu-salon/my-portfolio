import { Text } from "@chakra-ui/layout";
import type { ReactNode, VFC } from "react";
import { memo } from "react";

type Props = {
  children: ReactNode;
};

export const PrimaryTitle: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Text
      fontSize={{ base: 'md', md: 'lg' }}
      fontWeight="bold"
      borderLeft="solid"
      borderColor="blue.300"
      borderLeftWidth="5px"
      pl={4}
    >
      {children}
    </Text>
  );
});
