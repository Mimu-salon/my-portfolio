import { Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

import { ChikenTable } from '../../atoms/table/ChikenTable';
import { PrimaryTitle } from '../../atoms/title/PrimaryTitle';
import { CareerDetailCardRayout } from '../../molecules/CareerDetailCardRayout';

export const Chiken2: VFC = memo(() => {
  return (
    <CareerDetailCardRayout>
      <PrimaryTitle>治験2：胆道癌患者を対象としたS-1 + Resminostat併用療法の第II相臨床試験</PrimaryTitle>
      <Text fontSize={{ base: 'sm', md: 'md' }}>
        ゲムシタビン+プラチナ製剤に不応であった進行胆道癌患者を対象とした、ヒストン脱アセチル化酵素（HDAC）阻害剤であるResminostat（レスミノスタット）の臨床試験。HDACはでDNA鎖を折りたたむ役割があるヒストンというタンパク質に作用することで、細胞の生存、増殖、分化、アポトーシスの制御に関与しているが、胆道癌を含めた多種多様な癌で過剰に発現しており、癌化が亢進されていることが知られている。本試験は胆道癌の2次治療以降で広く使用されるS-1単剤療法にResminostatを上乗せしたプラセボ比較ランダム化二重盲検試験としてデザインされた。主要評価項目を無増悪生存期間（PFS）として、国内14施設で101例に治験治療が実施された。
      </Text>
      <ChikenTable
        ptstarget="ゲムシタビン+プラチナ製剤不応の進行胆道癌患者"
        ptsnumber="101例"
        period="2018年〜2019年"
        endpoint="主要評価項目：無増悪生存期間（PFS）、
        副次評価項目：全生存期間（OS）、奏効率（RR）、病勢コントロール率（DCR）、安全性、
        探索的評価項目：バイオマーカー研究（免疫組織染色、次世代シークエンシングによる遺伝子検査）"
        efficacy="PFS中央値：Resminostat + S‐1群：2.9ヵ月、Placebo + S‐1群：3.0ヵ月（ハザード比：1.154, 95%信頼区間：0.759-1.757, p値 = 0.502）OS中央値：Resminostat + S‐1群：7.8ヵ月、Placebo + S‐1群：7.5ヵ月（ハザード比：1.049, 95%信頼区間：0.653-1.684, p値 = 0.834）"
      />
    </CareerDetailCardRayout>
  );
});
