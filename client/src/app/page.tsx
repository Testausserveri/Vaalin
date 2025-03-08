"use client"

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}>
            {t("title")}
          </Heading>
          <Text color={"gray.500"}>
            {t("subtitle")}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}>
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}>
              {t("buttons.get_started")}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
