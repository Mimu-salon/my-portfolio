import { memo, VFC } from 'react';
import { Text } from '@chakra-ui/layout';

import { PrimaryTitle } from '../atoms/title/PrimaryTitle';
import { CareerDatailCardRayout } from '../molecules/CareerDatailCardRayout';
import { HeaderCareerDatail } from '../organisms/layout/header/HeaderCareerDatail';

export const CareerDatail: VFC = memo(() => {
  return (
    <>
      <HeaderCareerDatail />
      <CareerDatailCardRayout>
        <PrimaryTitle>臨床試験1：再発・難治性婦人科癌患者を対象としたPerifosineの第II相臨床試験</PrimaryTitle>
        <Text fontSize='sm'>
          再発・難治性の婦人科癌（卵巣癌、子宮体癌、子宮頸癌）患者を対象とした、AKT阻害剤であるPerifosine単剤療法の第II相臨床試験。PI3K/AKT経路に関連したPIK3CA遺伝子に着目して、PIK3CA遺伝子変異の野生型と変異型の患者にそれぞれ層別した。主要評価項目を病勢コントロール率（DCR:disease
          control rate）として、2013年〜2015年に国内13施設で実施された。
        </Text>
      </CareerDatailCardRayout>
    </>
  );
});
