import { setRequestLocale } from "next-intl/server";
import PostList from "@/components/PostList";

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <PostList />
    </main>
  );
}
