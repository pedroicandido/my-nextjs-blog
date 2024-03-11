import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/perfil.jpg" alt="" width={300} height={300} />
      </div>
      <h1>Olá, meu nome é Pedro!</h1>
      <p>
        Um blog sobre desenvolvimento web - focado em frontend e em tecnologias
        como Angular e React.
      </p>
    </section>
  );
}
