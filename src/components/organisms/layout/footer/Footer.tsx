import { Box } from "@chakra-ui/layout";
import type { VFC } from "react";
import { memo } from "react";

export const Footer: VFC = memo(() => {
  return (
    <Box textAlign="center" padding={{ base: 4, md: 5 }}>
      <small>Copyright &copy; 2021 Takeshi Mimura All Rights Reserved.</small>
    </Box>
  );
});
