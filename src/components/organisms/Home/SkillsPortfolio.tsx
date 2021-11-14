import { Box, Heading, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import type { VFC } from "react";
import { memo } from "react";

import { CardRayout } from "../../molecules/CardRayout";
import { HeadingRayout } from "../../molecules/HeadingRayout";

export const SkillsPortfolio: VFC = memo(() => {
  return (
    <>
      <Box id="skills-portfolio">
        <HeadingRayout>Skills and Portfolio</HeadingRayout>
      </Box>
      <Box maxW="500px" m="auto" p={6}>
        <Stack spacing={4}>
          <Heading textAlign="center" fontSize={{ base: "lg", md: "2xl" }}>
            - スキル -
          </Heading>
          <Text color="gray">
            言語：Javascript、Typescript、HTML、CSS
            <br />
            フレームワーク：React、Next.js
            <br />
            エディタ：VS code
            <br />
            OS：macOS
          </Text>
        </Stack>
      </Box>
      <Heading textAlign="center" fontSize={{ base: "lg", md: "2xl" }}>
        - ポートフォリオ -
      </Heading>
      <Wrap spacing="30px" justify="center" p={{ base: 4, md: 10 }}>
        <WrapItem>
          <CardRayout
            title="My-Portfolio"
            subTitle="React + Typescript + Chakra UIで作成"
            image="https://source.unsplash.com/random"
            imageUrl="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3248455/"
          />
        </WrapItem>
        <WrapItem>
          <CardRayout
            title="未定"
            subTitle="React + Typescript + Chakra UIで作成"
            image="https://source.unsplash.com/random"
            imageUrl="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3248455/"
          />
        </WrapItem>
      </Wrap>
    </>
  );
});
