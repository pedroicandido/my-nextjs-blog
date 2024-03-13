import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const DUMMY_DATA = {
  slug: "getting-started-with-nextjs3",
  title: "Getting stated with next js3",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_DATA.slug}/${DUMMY_DATA.image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={DUMMY_DATA.title} />
      <ReactMarkdown>{DUMMY_DATA.content}</ReactMarkdown>
    </article>
  );
}
