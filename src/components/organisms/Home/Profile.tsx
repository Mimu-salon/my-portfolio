import { memo, VFC } from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { HeadingRayout } from '../../molecules/HeadingRayout';

export const Profile: VFC = memo(() => {
  return (
    <>
      <HeadingRayout>Profile</HeadingRayout>
      <Box maxW='1000px' m='auto' p={6}>
        <Stack spacing={4} textAlign='center'>
          <Image
            borderRadius='full'
            boxSize='260px'
            m='auto'
            src='https://source.unsplash.com/random'
            alt='プロフィール画像'
          />
          <Heading as='h3'>三村 武史 (Takeshi Mimura)</Heading>
          <Text>
            東京都西東京市出身。医療機器の研究員の父と薬剤師の母の影響で薬学部に進学して、大学院では医学部の研究室で研究に没頭。その後に製薬会社に就職して約8年間、抗がん剤の臨床開発に携わっています！現在はヘルステックの領域に興味を持ちプログラミングを猛勉強中。趣味は音楽フェス、海外旅行、カードゲームなど。鉄のメンタルを持つが実は嫁が怖い。
          </Text>
        </Stack>
      </Box>
    </>
  );
});
