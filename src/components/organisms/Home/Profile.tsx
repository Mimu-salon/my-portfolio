import { Image } from "@chakra-ui/image";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import type { VFC } from "react";
import { memo } from "react";

import { HeadingRayout } from "../../molecules/HeadingRayout";

export const Profile: VFC = memo(() => {
  return (
    <>
      <Box id="profile">
        <HeadingRayout>Profile</HeadingRayout>
      </Box>
      <Box maxW="1000px" m="auto" p={6}>
        <Stack spacing={4} textAlign="center">
          <Image
            borderRadius="full"
            boxSize="260px"
            m="auto"
            src="https://source.unsplash.com/random"
            alt="プロフィール画像"
          />
          <Heading as="h3">三村 武史 (Takeshi Mimura)</Heading>
          <Text>
            東京都西東京市出身。医療機器の研究員の父と薬剤師の母の影響で薬学部に進学して、大学院では医学部の研究室で研究に没頭。その後に製薬会社で約8年間、新規抗がん剤の臨床開発に携わりました。現在はヘルステックの領域に興味を持ちプログラミングを猛勉強中です。趣味は音楽フェス、海外旅行、カードゲームなど。鉄のメンタルを持つが実は嫁が怖い。
          </Text>
        </Stack>
      </Box>
    </>
  );
});
