import {
  Flex,
  Button,
  Text,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Float,
  Circle,
} from "@chakra-ui/react";

import ArrowDownIcon from "../../assets/svg/arrow-down.svg";
import type { SVGProps } from "react";

const containerStyles = {
  w: "100%",
  p: "16px",
  borderBottom: "1px solid #DDDDDD",
  justify: "space-between",
  align: "flex-start",
};

const leftStyles = {
  gap: "22px",
  align: "center",
};

const buttonStyles = {
  fontSize: "20px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  gap: "8px",

  _hover: { bg: "gray.100" },
  _active: { bg: "gray.200" },
};

const rightStyles = {
  justify: "flex-end",
  align: "center",
  gap: "14px",
};

const badgeStyles = {
  size: "20px",
  bg: "#B93C3C",
  color: "white",
  fontSize: "13px",
  fontWeight: "700",
};


export const Header = () => {
  const notifications = 2;

  return (
    <Flex {...containerStyles}>
      <Flex {...leftStyles}>
        <Button variant="ghost" {...buttonStyles}>
          <Text>Заявки</Text>
            <ArrowDownIcon
              {...({
                style: { width: "7px", height: "5px" },
              } as SVGProps<SVGSVGElement>)}
            />
        </Button>
      </Flex>

      <Flex {...rightStyles}>
        <Avatar.Root size="sm">
          <AvatarImage src="" />
          <AvatarFallback />

          {notifications > 0 && (
            <Float placement="bottom-end" offsetX="2" offsetY="2">
              <Circle {...badgeStyles}>{notifications}</Circle>
            </Float>
          )}
        </Avatar.Root>
      </Flex>
    </Flex>
  );
};
