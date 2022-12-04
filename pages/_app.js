import Image from "next/image";
import Link from "next/link";
import CustomCursor from "../components/CustomCursor";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <header className={styles.header}>
        <nav className={styles.mobilenav}>
          <Link href="/">
            <div className={styles.blocicon}>
              <Image
                layout="fixed"
                width={25}
                height={25}
                src="https://i.ibb.co/Xz8k7Mx/home-1.png"
                alt=""
              />
            </div>
          </Link>

          <Link href="/about" className={styles.blocicon}>
            <div className={styles.blocicon}>
              <Image
                layout="fixed"
                width={25}
                height={25}
                src="https://i.ibb.co/bQ1y3py/user.png"
                alt=""
              />
            </div>
          </Link>
          <Link href="/contact" className={styles.blocicon}>
            <div className={styles.blocicon}>
              <Image
                layout="fixed"
                width={25}
                height={25}
                src="https://i.ibb.co/NKyTcx6/phone-call.png"
                alt=""
              />
            </div>
          </Link>
          <Link href="/blog" className={styles.blocicon}>
            <div className={styles.blocicon}>
              <Image
                layout="fixed"
                width={25}
                height={25}
                src="https://i.ibb.co/ZJbh4d7/edit.png"
                alt=""
              />
            </div>
          </Link>
        </nav>
      </header>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
