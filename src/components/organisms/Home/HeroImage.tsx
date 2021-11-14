import { Box, Flex, Heading } from "@chakra-ui/layout";
import type { VFC } from "react";
import { memo } from "react";

export const HeroImage: VFC = memo(() => {
  return (
    <Flex
      align="center"
      justify="center"
      h={{ base: "400px", md: "600px" }}
      bgImage="url('https://source.unsplash.com/random')"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box>
        <Heading as="h1" color="white" fontSize={{ base: "3xl", md: "5xl" }}>
          Takeshi Mimura&apos;s Portfolio
        </Heading>
      </Box>
    </Flex>
  );
});
