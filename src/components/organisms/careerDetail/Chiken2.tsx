import { Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

import { PrimaryTitle } from '../../atoms/title/PrimaryTitle';
import { CareerDetailCardRayout } from '../../molecules/CareerDetailCardRayout';

export const Chiken2: VFC = memo(() => {
  return (
    <CareerDetailCardRayout>
      <PrimaryTitle>治験2：胆道癌患者を対象としたS-1 + Resminostat併用療法の第II相臨床試験</PrimaryTitle>
      <Text fontSize="sm">
        ゲムシタビン+プラチナ製剤に不応であった進行胆道癌患者を対象とした、ヒストン脱アセチル化酵素（HDAC）阻害剤であるResminostat（レスミノスタット）の臨床試験。HDACはでDNA鎖を折りたたむ役割があるヒストンというタンパク質に作用することで、細胞の生存、増殖、分化、アポトーシスの制御に関与しているが、胆道癌を含めた多種多様な癌で過剰に発現しており、癌化が亢進されていることが知られている。本試験は胆道癌の2次治療以降で広く使用されるS-1単剤療法にResminostatを上乗せしたプラセボ比較ランダム化二重盲検試験としてデザインされた。主要評価項目を無増悪生存期間（PFS）として、国内14施設で101例に治験治療が実施された。
      </Text>
    </CareerDetailCardRayout>
  );
});
