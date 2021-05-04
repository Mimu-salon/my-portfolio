import { memo, VFC } from 'react';
import { Box } from '@chakra-ui/layout';

export const Footer: VFC = memo(() => {
  return (
    <Box textAlign='center' padding={{ base: 4, md: 5 }}>
      <small>Copyright &copy; 2021 Takeshi Mimura All Rights Reserved.</small>
    </Box>
  );
});
