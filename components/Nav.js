import Link from "next/link"
import styles from  "../styles/Home.module.scss"
function Home() {
  return (
    <ul className={styles.navlist}>
      <li className="nav-item active">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/contact">
          <a className="nav-link">Contact</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/blog">
          <a className="nav-link">Blog</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
