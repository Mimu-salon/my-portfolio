import { Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

import { PrimaryTitle } from '../atoms/title/PrimaryTitle';
import { CareerDetailCardRayout } from '../molecules/CareerDetailCardRayout';
import { HeaderCareerDetail } from '../organisms/layout/header/HeaderCareerDetail';

export const CareerDetail: VFC = memo(() => {
  return (
    <>
      <HeaderCareerDetail />
      <CareerDetailCardRayout>
        <PrimaryTitle>治験1：婦人科癌患者を対象としたPerifosineの第II相臨床試験</PrimaryTitle>
        <Text fontSize="sm">
          進行・再発婦人科癌（卵巣癌、子宮体癌、子宮頸癌）患者を対象とした、AKT阻害剤であるPerifosine（ペリフォシン）の単剤療法の臨床試験。婦人科癌をはじめ一部の癌腫で細胞内シグナルのPI3K/AKT経路が異常に活性化していることが報告されていることから、PI3KタンパクをコードするPIK3CA遺伝子に着目して遺伝子変異野生型と変異型の患者にそれぞれ層別して実施された。主要評価項目を病勢コントロール率（DCR:disease
          control rate）として、国内13施設で3癌腫合計71例にPerifosineが投与された。
        </Text>
      </CareerDetailCardRayout>
      <CareerDetailCardRayout>
        <PrimaryTitle>治験2：胆道癌患者を対象としたS-1 + Resminostat併用療法の第II相臨床試験</PrimaryTitle>
        <Text fontSize="sm">
          ゲムシタビン+プラチナ製剤に不応であった進行胆道癌患者を対象とした、ヒストン脱アセチル化酵素（HDAC）阻害剤であるResminostat（レスミノスタット）の臨床試験。HDACはでDNA鎖を折りたたむ役割があるヒストンというタンパク質に作用することで、細胞の生存、増殖、分化、アポトーシスの制御に関与しているが、胆道癌を含めた多種多様な癌で過剰に発現しており、癌化が亢進されていることが知られている。本試験は胆道癌の2次治療以降で広く使用されるS-1単剤療法にResminostatを上乗せしたプラセボ比較ランダム化二重盲検試験としてデザインされた。主要評価項目を無増悪生存期間（PFS）として、国内14施設で101例に治験治療が実施された。
        </Text>
      </CareerDetailCardRayout>
      <CareerDetailCardRayout>
        <PrimaryTitle>大学院：頭頸部癌患者を対象としたビタミンD受容体遺伝子多型による術後予後解析</PrimaryTitle>
        <Text fontSize="sm">
          ビタミンD受容体の遺伝子多型によって頭頸部癌の患者の術後予後を評価した医師主導の観察研究。日光を浴びた際の紫外線（UVB）がビタミンDの合成を誘導して、活性型ビタミンDが細胞質内でビタミンD受容体と結合することで、細胞の増殖と分化を正常な範囲に保ち悪性化を抑制しているとの報告がある。本研究はビタミンD受容体の5種類の遺伝子（FokI,
          Cdx2, BsmI, ApaI, TaqI)の遺伝子多型によって、頭頸部癌患者の術後予後が異なるかをPFSを比較することで評価した。
        </Text>
      </CareerDetailCardRayout>
    </>
  );
});
