import Head from "next/head";
import Link from "next/link";
import HeroSection from "../components/HeroSection";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <HeroSection />
      <section className=" my-14">
        <h2 className={styles.h2}>Projects</h2>
        <div className={styles.work}>
          <div className={styles.hoverClass}>
            <h1>J Worra</h1>
            <p>
              Los Angeles-based DJ and producer Jamie Sitter, a.k.a. “J. Worra”
              boosting 1.7 million and counting monthly listeners on Spotify
            </p>
            <Link href="https://jworra.com/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>
          <div className={styles.hoverClass}>
            <h1>Wicked Paradise</h1>
            <p>
              A PREMIER DAY CLUB AND INTIMATE BOAT PARTY SERIES UNLIKE ANY
              OTHER.
            </p>
            <Link href="https://www.wckdparadise.com/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>
          <div className={styles.hoverClass}>
            <h1>DJ Soda</h1>
            <p>
              DJ Soda{","} is a South Korean DJ under Highline Entertainment.
              Hwang has built her reputation on being a frequent headliner for
              several Asian music festivals, including {'"'}S20 Songkran Musical
              Festival{'"'}
            </p>
            <Link href="https://www.deejaysoda.com/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>
          <div className={styles.hoverClass}>
            <h1>L{"'"}Affaire Musicale</h1>
            <p>
              L{"'"}Affaire Musicale is a independent events and artist
              management company.
            </p>
            <Link href="https://www.laffairemusicale.com/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>
          <div className={styles.hoverClass}>
            <h1>Kaysin</h1>
            <p>
              L.A. based DJ and producer Kaysin is a name well-known among
              industry heads and brewing in tech house circles.
            </p>
            <Link href="https://www.kaysin.com/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>
          <div className={styles.hoverClass}>
            <h1>Rastatoulie Escovitch</h1>
            <p>Chef Donavan Scott based Orlando, FL</p>
            <Link href="https://www.rastatoullieescovitch.com/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>
        </div>
        <h2 className="text-[3.6rem] lg:text-[6rem]">Misc. Projects</h2>
        <div className={styles.work}>
          <div className={styles.hoverClass}>
            <h1>Icecapade Frozen Treats</h1>
            <p>Build on wordpress using elementor.</p>
            <Link href="https://icecapadefrozentreats.com/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>

          <div className={styles.hoverClass}>
            <h1>Filmther</h1>
            <p>
              Weather App that allows the user to save the save to come back
              later to it. Built on react using BulmaCSS, and uses Nodejs for
              backend to allow using databases, APIs, full encrypted
              authentication.
            </p>
            <Link href="https://filmtherv2.netlify.app/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>
          <div className={styles.hoverClass}>
            <h1>Quick Movie</h1>
            <p>
              Quickly check trending movies and read the summary, Build on
              React, Nodejs, and uses axios for APIs.
            </p>
            <Link href="https://fimther-arqn.vercel.app/" passHref={true}>
              <button>Check it out ›</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
