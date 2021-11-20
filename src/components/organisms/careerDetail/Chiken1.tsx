import { Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

import { PrimaryTitle } from '../../atoms/title/PrimaryTitle';
import { CareerDetailCardRayout } from '../../molecules/CareerDetailCardRayout';

export const Chiken1: VFC = memo(() => {
  return (
    <CareerDetailCardRayout>
      <PrimaryTitle>治験1：婦人科癌患者を対象としたPerifosineの第II相臨床試験</PrimaryTitle>
      <Text fontSize="sm">
        進行・再発婦人科癌（卵巣癌、子宮体癌、子宮頸癌）患者を対象とした、AKT阻害剤であるPerifosine（ペリフォシン）の単剤療法の臨床試験。婦人科癌をはじめ一部の癌腫で細胞内シグナルのPI3K/AKT経路が異常に活性化していることが報告されていることから、PI3KタンパクをコードするPIK3CA遺伝子に着目して遺伝子変異野生型と変異型の患者にそれぞれ層別して実施された。主要評価項目を病勢コントロール率（DCR:disease
        control rate）として、国内13施設で3癌腫合計71例にPerifosineが投与された。
      </Text>
    </CareerDetailCardRayout>
  );
});
