import PostItem from "./post-item";
import classes from "./post-grid.module.css";
import { Post } from "./types/post";

type PostGridProps = {
  posts: [Post];
};



export default function PostGrid(props: PostGridProps) {
  return (
    <ul className={classes.grid}>
      {props.posts.map((post) => (
        <PostItem
          key={post.slug}
          date={post.date}
          excerpt={post.excerpt}
          image={post.image}
          slug={post.slug}
          title={post.title}
        />
      ))}
    </ul>
  );
}
