import { Box, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo, useCallback } from 'react';
import { useHistory } from 'react-router';

import Career1 from '../../../images/carrer1.png';
import Career2 from '../../../images/carrer2.png';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { CardRayout } from '../../molecules/CardRayout';
import { HeadingRayout } from '../../molecules/HeadingRayout';

export const Carrer: VFC = memo(() => {
  const history = useHistory();

  const onClickCareerDetail = useCallback(() => history.push('/carrer_detail'), [history]);

  return (
    <>
      <Box id="carrer">
        <HeadingRayout>Carrer</HeadingRayout>
      </Box>
      <Box maxW="1000px" m="auto" p={6}>
        <Stack spacing={4} textAlign="center">
          <Heading fontSize={{ base: 'lg', md: '2xl' }}>抗がん剤領域の新薬開発を経験</Heading>
          <Text>
            大学院では医師主導臨床研究に関わり、その経験を活かして製薬会社では抗がん剤領域が専門の臨床開発モニター（CRA）として治験に関わる業務を経験しました。一部の論文発表されたものですが、携わったプロジェクトを紹介します！
          </Text>
        </Stack>
      </Box>

      <Box textAlign="center" mb={6}>
        <PrimaryButton onClick={onClickCareerDetail}>詳しい説明はこちら</PrimaryButton>
      </Box>
      <Text textAlign="center">↓画像をクリックすると公表論文にアクセスできます。</Text>
      <Wrap spacing="30px" justify="center" p={{ base: 4, md: 10 }}>
        <WrapItem>
          <CardRayout
            title="治験1"
            subTitle="婦人科癌患者を対象としたPerifosineの第II相臨床試験"
            image={Career1}
            imageUrl="https://link.springer.com/article/10.1007%2Fs10637-017-0504-6"
          />
        </WrapItem>
        <WrapItem>
          <CardRayout
            title="治験2"
            subTitle="胆道癌患者を対象としたS-1 + Resminostat併用療法の第II相臨床試験"
            image={Career2}
            imageUrl="https://pubmed.ncbi.nlm.nih.gov/33635605/"
          />
        </WrapItem>
      </Wrap>
    </>
  );
});
