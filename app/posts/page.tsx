import AllPosts from "@/components/posts/all-posts";
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

export default function PostsPage() {
  return <AllPosts posts={DUMMY_DATA} />;
}
