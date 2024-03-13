import classes from "./all-posts.module.css";
import PostGrid from "./post-grid";
import { Post } from "./types/post";

type AllPostsProps = {
  posts: [Post];
};

export default function AllPosts(props: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}
