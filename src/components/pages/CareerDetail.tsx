import { Box } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';
import { useHistory } from 'react-router';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Chiken1 } from '../organisms/careerDetail/Chiken1';
import { Chiken2 } from '../organisms/careerDetail/Chiken2';
import { Footer } from '../organisms/layout/footer/Footer';
import { HeaderCareerDetail } from '../organisms/layout/header/HeaderCareerDetail';

export const CareerDetail: VFC = memo(() => {
  const history = useHistory();

  const onClickHome = useCallback(() => history.push('/#carrer'), [history]);
  return (
    <>
      <HeaderCareerDetail />
      <Chiken1 />
      <Chiken2 />
      <Box textAlign="center" mt={6} mb={6}>
        <PrimaryButton onClick={onClickHome}>トップに戻る</PrimaryButton>
      </Box>
      <Footer />
    </>
  );
});
