import { memo, useCallback, VFC } from 'react';
import { Box, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/layout';

import { HeadingRayout } from '../../molecules/HeadingRayout';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useHistory } from 'react-router';
import { CardRayout } from '../../molecules/CardRayout';

import Career1 from '../../../images/carrer1.png';
import Career2 from '../../../images/carrer2.png';

export const Carrer: VFC = memo(() => {
  const history = useHistory();

  const onClickCareerDatail = useCallback(() => history.push('/carrer_datail'), [history]);

  return (
    <>
      <Box id='carrer'>
        <HeadingRayout>Carrer</HeadingRayout>
      </Box>
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
            title='大学院修士研究'
            subTitle='頭頸部癌患者を対象としたビタミンD受容体遺伝子多型による術後予後解析'
            image={Career1}
            imageUrl='https://pubmed.ncbi.nlm.nih.gov/22242137/'
          />
        </WrapItem>
        <WrapItem>
          <CardRayout
            title='現職：臨床試験①'
            subTitle='再発・難治性●●患者を対象とした●●の第II相臨床試験'
            image={Career2}
            imageUrl='https://link.springer.com/article/10.1007%2Fs10637-017-0504-6'
          />
        </WrapItem>
        <WrapItem>
          <CardRayout
            title='現職：臨床試験②'
            subTitle='再発・難治性●●患者を対象とした●●の第II相臨床試験'
            image='https://source.unsplash.com/random'
            imageUrl='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3248455/'
          />
        </WrapItem>
      </Wrap>
    </>
  );
});
