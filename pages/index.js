import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
<meta name="msapplication-TileColor" content="#000000"/>
<meta name="theme-color" content="#000000"/>
      </Head>

      <main>
        <section className={styles.hero}>
          <h1 className={styles.h1}>Sifat Bhatia</h1>
          <p className={styles.p}>Web Designer & Developer</p>
          <div className={styles.stroked}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 200"
            >
              <defs>
                <marker
                  id="pointer"
                  markerWidth="10"
                  markerHeight="8"
                  refX="9.5"
                  refY="5.1"
                  orient="-45"
                  markerUnits="userSpaceOnUse"
                >
                  <polyline
                    className={styles.polyline}
                    points="1 1, 9 5, 1 7"
                  />
                </marker>
              </defs>
              <path
                className={styles.path}
                d="M16.7,178 c87.6-46.9,162.9-185.4,227-136.4C307.2,90.1,195,158.5,111,108.9C71,85.2,92.2,30.7,126,7"
                markerEnd="url(#pointer)"
              />
            </svg>
          </div>
        </section>
      </main>
      <section className={styles.Resume}>
        <h2 className={styles.h2}>
          Projects
        </h2>

        <div className={styles.work}>
          <div className={styles.hoverClass}>
           <h1>J Worra</h1>
            <p>Los Angeles-based DJ and producer Jamie Sitter, a.k.a. “J. Worra”. She has close
               700,000 monthly listeners on Spotify</p>
               <Link href="https://jworra.com/" passHref={true}>
            <button
            >Check it out ›</button></Link>
            
          </div>
          <div className={styles.hoverClass}>
            <h1>Wicked Paradise</h1>
            <p>Los Angeles-based DJ and producer Jamie Sitter, a.k.a. “J. Worra”. She has close
               700,000 monthly listeners on Spotify</p>
               <Link href="https://www.wckdparadise.com/" passHref={true}>
               <button>Check it out ›</button>
               </Link>

          </div>
          <div className={styles.hoverClass}>
            <h1>DJ Soda</h1>
            <p>DJ Soda{","} is a South Korean DJ under Highline Entertainment. Hwang has built her reputation on being a frequent headliner for several Asian music festivals, including {'"'}S20 Songkran Musical Festival{'"'}</p>
            <Link href="https://www.deejaysoda.com/" passHref={true}>
               <button>Check it out ›</button>
               </Link>

          </div>
          <div className={styles.hoverClass}>
            <h1>L{"'"}Affaire Musicale</h1>
            <p>L{"'"}Affaire Musicale is a independent events and artist management company.</p>
            <Link href="https://www.laffairemusicale.com/" passHref={true}>
               <button>Check it out ›</button>
               </Link>

          </div>
        </div>
        
      </section>
    </div>
  );
}
