import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

type PostItemProps = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
};

export default function PostItem(props: PostItemProps) {
  const formattedDate = new Date(props.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${props.slug}/${props.image}`;
  const linkPath = `/posts/${props.slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={props.title} width={300} height={200} layout="responsive"/>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <time>{formattedDate}</time>
          <p>{props.excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
