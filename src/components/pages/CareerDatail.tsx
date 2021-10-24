import { Box, Stack, Text } from '@chakra-ui/layout';
import { memo, VFC } from 'react';
import { HeaderCareerDatail } from '../organisms/layout/header/HeaderCareerDatail';

export const CareerDatail: VFC = memo(() => {
  return (
    <>
      <HeaderCareerDatail />
      <Box
        maxW='1000px'
        minH='600px'
        bg='white'
        borderRadius='10px'
        shadow='md'
        mt={5}
        p={6}
        mx='auto'
        _hover={{ cursor: 'pointer', opacity: 0.8 }}>
        <Stack spacing={4}>
          <Text fontSize='lg' fontWeight='bold' borderLeft='solid' borderColor='blue.300' borderLeftWidth='5px' pl={4}>
            臨床試験1：再発・難治性婦人科癌患者を対象としたPerifosineの第II相臨床試験
          </Text>
          <Text fontSize='sm'>
            ＜概要＞
            <br />
            再発・難治性の婦人科癌（卵巣癌、子宮体癌、子宮頸癌）患者を対象とした、AKT阻害剤であるPerifosine単剤療法の第II相臨床試験。PI3K/AKT経路に関連したPIK3CA遺伝子に着目して、PIK3CA遺伝子変異の野生型と変異型の患者にそれぞれ層別した。主要評価項目を病勢コントロール率（DCR:disease
            control rate）として、2013年〜2015年に国内13施設で実施された。
            <br />
            ＜携わったこと＞
            <br />
            カルテ閲覧をしてデータ収集
            <br />
            臨床開発モニターとして大学病院とがんセンターを中心に10施設以上を担当し、カルテを閲覧して治験データ（投与状況、CT/MRIでの有効性結果、有害事象発現状況、臨床検査値など）の収集を行いました。各施設の治験責任医師との面会して医師評価を確認する過程で、がん領域における有効性の解釈や副作用マネジメントについてディスカッションして抗がん剤領域での専門性を磨きました。
            <br />
            メディカルライティングと海外学会の発表補助
            <br />
            婦人科癌試験では、治験結果の公表のためのメディカルライティングを経験しました。英文
            <br />
            バイオマーカー探索研究
          </Text>
        </Stack>
      </Box>
    </>
  );
});
