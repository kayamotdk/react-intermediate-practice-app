import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import { memo, FC, ReactNode, Children } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void
}
export const PrimaryButton: FC<Props> = memo((props) => {
  const {children,onClick} = props
  return (
    <Button bg="teal.400" color={"white"} _hover={{opacity:0.8}} onClick={onClick}>
      {children}
    </Button>
  );
});
