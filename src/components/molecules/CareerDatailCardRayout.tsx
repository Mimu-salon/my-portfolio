import { Box, Stack } from "@chakra-ui/layout";
import type { ReactNode, VFC } from "react";
import { memo } from "react";

type Props = {
  children: ReactNode;
};

export const CareerDatailCardRayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Box
      maxW="1000px"
      minH="600px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      mt={5}
      p={6}
      mx="auto"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack spacing={4}>{children}</Stack>
    </Box>
  );
});
