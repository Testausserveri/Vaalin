"use client"

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react"
import {
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons"
import i18next from "../i18n"
import { useTranslation } from "react-i18next"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { t } = useTranslation()

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Flex flex={{ base: 1 }} justify={"flex-begin"}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}>
            Vaalin 🗳️
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={4}>
            <Button onClick={toggleLanguage}>
            {t("next_language")}
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"} href={"#"}>
            {t("buttons.login")}
          </Button>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}>
            {t("buttons.signup")}
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}

function toggleLanguage(){
  if(i18next.language === "en"){
    i18next.changeLanguage("fi")
  } else {
    i18next.changeLanguage("en")
  }
}
