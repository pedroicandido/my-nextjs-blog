import PostGrid from "../posts/post-grid";
import { Post } from "../posts/types/post";
import classes from "./featured-posts.module.css";

type FeaturedPosts = {
  posts: [Post];
};

export default function FeaturedPosts(props: FeaturedPosts) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}
