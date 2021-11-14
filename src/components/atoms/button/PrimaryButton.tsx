import { Button } from "@chakra-ui/button";
import type { ReactNode, VFC } from "react";
import { memo } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      size="lg"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
