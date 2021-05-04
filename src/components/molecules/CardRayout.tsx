import { memo, VFC } from 'react';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

type Props = {
  title: string;
  subTitle: string;
  imageUrl: string;
};

export const CardRayout: VFC<Props> = memo((props) => {
  const { title, subTitle, imageUrl } = props;
  return (
    <Box
      w='300px'
      h='300px'
      bg='white'
      borderRadius='10px'
      shadow='md'
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}>
      <Stack textAlign='center' spacing={4}>
        <Text fontSize='lg' fontWeight='bold'>
          {title}
        </Text>
        <Text fontSize='sm' color='gray'>
          {subTitle}
        </Text>
        <Image borderRadius='10px' w='260px' h='150px' src={imageUrl} alt={subTitle} m='auto' />
      </Stack>
    </Box>
  );
});
