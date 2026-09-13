import { Heading, Text, Link, Code, Box, List } from "@chakra-ui/react";

const isExternalHref = (href = "") => /^https?:\/\//.test(href);

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

    // Links: só os externos abrem em nova aba
    a: ({ href, ...props }) => (
      <Link
        href={href}
        color="teal.500"
        textDecoration="underline"
        {...(isExternalHref(href) && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        {...props}
      />
    ),

    // Blockquote
    blockquote: (props) => (
      <Box
        as="blockquote"
        borderLeftWidth="4px"
        borderLeftColor="border.emphasized"
        pl="4"
        fontStyle="italic"
        color="fg.muted"
        my="8"
        {...props}
      />
    ),

    // Código inline e em bloco
    code: (props) => <Code fontSize="0.9em" {...props} />,
    pre: (props) => (
      <Box
        as="pre"
        bg="bg.subtle"
        borderWidth="1px"
        rounded="md"
        p="4"
        overflowX="auto"
        mb="4"
        css={{ "& code": { bg: "transparent", p: 0, fontSize: "0.9em" } }}
        {...props}
      />
    ),

    // Listas
    ul: (props) => <List.Root gap="2" pl="5" mb="4" {...props} />,
    ol: (props) => (
      <List.Root as="ol" gap="2" pl="5" mb="4" listStyleType="decimal" {...props} />
    ),
    li: (props) => <List.Item {...props} />,

    // Permite overrides adicionais
    ...components,
  };
}
