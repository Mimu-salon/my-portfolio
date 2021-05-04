import { memo, useCallback, VFC } from 'react';
import { Box, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/layout';

import { HeadingRayout } from '../../molecules/HeadingRayout';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useHistory } from 'react-router';
import { CardRayout } from '../../molecules/CardRayout';

export const Carrer: VFC = memo(() => {
  const history = useHistory();

  const onClickCareerDatail = useCallback(() => history.push('/carrer_datail'), [history]);

  return (
    <>
      <HeadingRayout>Carrer</HeadingRayout>
      <Box maxW='1000px' m='auto' p={6}>
        <Stack spacing={4} textAlign='center'>
          <Heading fontSize={{ base: 'lg', md: '2xl' }}>キャリア見出し</Heading>
          <Text>
            キャリアイントロ、キャリアイントロ、キャリアイントロ、キャリアイントロ、キャリアイントロ、キャリアイントロ、キャリアイントロ、キャリアイントロ、キャリアイントロ
          </Text>
        </Stack>
      </Box>
      <Box textAlign='center' mb={6}>
        <PrimaryButton onClick={onClickCareerDatail}>詳しい説明はこちら</PrimaryButton>
      </Box>

      <Wrap spacing='30px' justify='center' p={{ base: 4, md: 10 }}>
        <WrapItem>
          <CardRayout
            title='修士論文'
            subTitle='再発・難治性●●患者を対象とした●●の第II相臨床試験'
            imageUrl='https://source.unsplash.com/random'
          />
        </WrapItem>
        <WrapItem>
          <CardRayout
            title='臨床試験①'
            subTitle='再発・難治性●●患者を対象とした●●の第II相臨床試験'
            imageUrl='https://source.unsplash.com/random'
          />
        </WrapItem>
        <WrapItem>
          <CardRayout
            title='臨床試験②'
            subTitle='再発・難治性●●患者を対象とした●●の第II相臨床試験'
            imageUrl='https://source.unsplash.com/random'
          />
        </WrapItem>
      </Wrap>
    </>
  );
});
