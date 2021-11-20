import { Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

import { PrimaryTitle } from '../atoms/title/PrimaryTitle';
import { CareerDetailCardRayout } from '../molecules/CareerDetailCardRayout';
import { Chiken1 } from '../organisms/careerDetail/Chiken1';
import { Chiken2 } from '../organisms/careerDetail/Chiken2';
import { HeaderCareerDetail } from '../organisms/layout/header/HeaderCareerDetail';

export const CareerDetail: VFC = memo(() => {
  return (
    <>
      <HeaderCareerDetail />
      <Chiken1 />
      <Chiken2 />

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
