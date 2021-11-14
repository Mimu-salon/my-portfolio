import { Image } from '@chakra-ui/image';
import { Box, Stack, Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

type Props = {
  title: string;
  subTitle: string;
  image: string;
  imageUrl: string;
};

export const CardRayout: VFC<Props> = memo((props) => {
  const { title, subTitle, image, imageUrl } = props;
  return (
    <Box
      w="300px"
      h="300px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      as="a"
      href={imageUrl}
      target="_blank"
      _hover={{ cursor: 'pointer', opacity: 0.8 }}>
      <Stack textAlign="center" spacing={4}>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray">
          {subTitle}
        </Text>
        <Image borderRadius="10px" w="300px" h="150px" src={image} alt={subTitle} m="auto" />
      </Stack>
    </Box>
  );
});
