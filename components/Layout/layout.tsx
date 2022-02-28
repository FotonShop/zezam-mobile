import { Stack, StackProps } from "@chakra-ui/react";
import Header from "./Header";

import { useRouter } from "next/router";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// const breakpoints = createBreakpoints({
//   sm: "30em",
//   md: "48em",
//   lg: "62em",
//   xl: "80em",
//   "2xl": "96em",
// });

export const Layout = ({ children, ...props }: StackProps) => {
  const router = useRouter();
  return (
    <>
      <Stack
        // w={[300, 400, 500]}
        pt="1rem"
        px={["2rem", "2rem", "3rem", "5rem"]}
        {...props}
      >
        <Header />
        {children}
      </Stack>
    </>
  );
};
