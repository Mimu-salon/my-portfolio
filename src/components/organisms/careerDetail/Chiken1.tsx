import { Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

import { ChikenTable } from '../../atoms/table/ChikenTable';
import { PrimaryTitle } from '../../atoms/title/PrimaryTitle';
import { CareerDetailCardRayout } from '../../molecules/CareerDetailCardRayout';

export const Chiken1: VFC = memo(() => {
  return (
    <CareerDetailCardRayout>
      <PrimaryTitle>治験1：婦人科癌患者を対象としたPerifosineの第II相臨床試験</PrimaryTitle>
      <Text fontSize={{ base: 'sm', md: 'md' }}>
        進行・再発婦人科癌（卵巣癌、子宮体癌、子宮頸癌）患者を対象とした、AKT阻害剤であるPerifosine（ペリフォシン）の単剤療法の臨床試験。婦人科癌をはじめ一部の癌腫で細胞内シグナルのPI3K/AKT経路が異常に活性化していることが報告されていることから、PI3KタンパクをコードするPIK3CA遺伝子に着目して遺伝子変異野生型と変異型の患者にそれぞれ層別して実施された。主要評価項目を病勢コントロール率（DCR:disease
        control rate）として、国内13施設で3癌腫合計71例にPerifosineが投与された。
      </Text>
      <ChikenTable
        ptstarget="進行・再発婦人科癌患者"
        ptsnumber="卵巣癌（OC）（PIK3CA遺伝子野生型/変異型）：21例（16例/5例）
        子宮体癌（EC）（PIK3CA遺伝子野生型/変異型）：24例（17例/7例）
        子宮頸癌（CC）（PIK3CA遺伝子野生型/変異型）：26例（18例/8例）"
        period="2013年〜2015年"
        endpoint="主要評価項目：病勢コントロール率（DCR）、
        副次評価項目：無増悪生存期間（PFS）、全生存期間（OS）、奏効率（RR）、安全性、
        探索的評価項目：バイオマーカー研究（免疫組織染色、次世代シークエンシングによる遺伝子検査）"
        efficacy="DCR（PIK3CA遺伝子野生型/変異型）
        OC：12.5%/40.0% 、EC：47.1%/14.3%、CC：11.1%/25.0%"
      />
    </CareerDetailCardRayout>
  );
});
