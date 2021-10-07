import { memo, useCallback, VFC } from 'react';
import { Box, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/layout';

import { HeadingRayout } from '../../molecules/HeadingRayout';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useHistory } from 'react-router';
import { CardRayout } from '../../molecules/CardRayout';

import Career1 from '../../../images/carrer1.png';
import Career3 from '../../../images/carrer3.png';

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
          <Heading fontSize={{ base: 'lg', md: '2xl' }}>抗がん剤領域の新薬開発を経験</Heading>
          <Text>
            大学院では医師主導臨床研究に関わり、その経験を活かして製薬会社では抗がん剤領域が専門の臨床開発モニター（CRA）として治験に関わる業務を経験しました。一部の論文発表されたものですが、携わったプロジェクトを紹介します！
          </Text>
        </Stack>
      </Box>

      <Box textAlign='center' mb={6}>
        <PrimaryButton onClick={onClickCareerDatail}>詳しい説明はこちら</PrimaryButton>
      </Box>
      <Text textAlign='center'>↓画像をクリックすると公表論文にアクセスできます。</Text>
      <Wrap spacing='30px' justify='center' p={{ base: 4, md: 10 }}>
        <WrapItem>
          <CardRayout
            title='臨床試験1'
            subTitle='再発・難治性婦人科癌患者を対象としたPerifosineの第II相臨床試験'
            image={Career1}
            imageUrl='https://link.springer.com/article/10.1007%2Fs10637-017-0504-6'
          />
        </WrapItem>
        <WrapItem>
          <CardRayout
            title='臨床試験2'
            subTitle='再発・難治性●●患者を対象とした●●の第II相臨床試験'
            image='https://source.unsplash.com/random'
            imageUrl='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3248455/'
          />
        </WrapItem>
        <WrapItem>
          <CardRayout
            title='大学院：医師主導臨床研究'
            subTitle='頭頸部癌患者を対象としたビタミンD受容体遺伝子多型による術後予後解析'
            image={Career3}
            imageUrl='https://pubmed.ncbi.nlm.nih.gov/22242137/'
          />
        </WrapItem>
      </Wrap>
    </>
  );
});
