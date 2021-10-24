import { Box, Stack, Text } from '@chakra-ui/layout';
import { memo, VFC } from 'react';

import { PrimaryTitle } from '../atoms/title/PrimaryTitle';
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
          <PrimaryTitle title="臨床試験1：再発・難治性婦人科癌患者を対象としたPerifosineの第II相臨床試験" />

          <Text fontSize='sm'>
            概要
          </Text>
        </Stack>
      </Box>
    </>
  );
});
