import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Post } from "@/components/posts/types/post";

const DUMMY_DATA: [Post] = [
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting stated with next js3",
    image: "getting-started-nextjs.png",
    excerpt: "alguma coisa em ingles",
    date: "2022-02-10",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </>
  );
}
