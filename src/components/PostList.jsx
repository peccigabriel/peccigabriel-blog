import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { formatDate } from "@/helpers/formatDate";
import { getAllPosts } from "@/helpers/getAllPosts";

export default function PostList() {
  const posts = getAllPosts();

  return (
    <Stack mt={8}>
      {posts.map(({ slug, title, date, excerpt }) => (
        <Box key={slug} w="100%" mb={8}>
          <Flex direction="column" alignItems="center" textAlign="center">
            <Heading as="h1" size="3xl">
              <Link href={`/posts/${slug}`} textDecoration="none">
                {title}
              </Link>
            </Heading>
            <Text fontSize="sm" color="gray.500" m={4}>
              {formatDate(date)}
            </Text>
            <Box w="100%" textAlign="center">
              <Text
                textAlign="justify"
                fontSize="lg"
                maxW="60ch"
                mx="auto"
                mb={4}
              >
                {excerpt}
              </Text>
            </Box>
            <Button as="a" href={`/posts/${slug}`} size="sm" variant="outline">
              Continue lendo
            </Button>
          </Flex>
        </Box>
      ))}
    </Stack>
  );
}
