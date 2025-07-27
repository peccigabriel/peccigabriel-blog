import React from "react";
import { Heading, Text, Link, Code, Box, List } from "@chakra-ui/react";

export function getMDXComponents(components) {
  return {
    // Headings
    h1: (props) => <Heading as="h1" size="3xl" mt="8" mb="4" {...props} />,
    h2: (props) => <Heading as="h2" size="2xl" mt="8" mb="3" {...props} />,
    h3: (props) => <Heading as="h3" size="xl" mt="8" mb="2" {...props} />,
    h4: (props) => <Heading as="h4" size="lg" mt="5" mb="2" {...props} />,
    h5: (props) => <Heading as="h5" size="md" mt="4" mb="1" {...props} />,
    h6: (props) => <Heading as="h6" size="sm" mt="3" mb="1" {...props} />,

    // Parágrafos
    p: (props) => <Text mb="4" lineHeight="tall" {...props} />,

    // Links
    a: (props) => (
      <Link
        target="_blank"
        color="teal.500"
        textDecoration="underline"
        isExternal
        {...props}
      />
    ),

    // Blockquote
    blockquote: (props) => (
      <Box
        as="blockquote"
        borderLeftWidth="4px"
        borderLeftColor="gray.200"
        pl="4"
        fontStyle="italic"
        color="gray.600"
        mb="8"
        mt="8"
        {...props}
      />
    ),

    // Código inline e em bloco
    code: (props) => (
      <Code
        bg="gray.100"
        px="1"
        py="0.5"
        rounded="sm"
        fontSize="0.9em"
        {...props}
      />
    ),
    pre: (props) => (
      <Box
        as="pre"
        bg="gray.800"
        color="white"
        rounded="md"
        p="4"
        overflowX="auto"
        mb="4"
        {...props}
      />
    ),

    // Listas
    ul: (props) => <List.Root as="ul" spacing="2" pl="5" mb="4" {...props} />,
    ol: (props) => (
      <List.Root
        as="ol"
        spacing="2"
        pl="5"
        mb="4"
        styleType="decimal"
        {...props}
      />
    ),

    // Permite overrides adicionais
    ...components,
  };
}
