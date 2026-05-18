import styles from '@/scss/section/header.module.scss';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>AURUM</div>

      <ul className={styles['nav-links']}>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Jewelry</a>
        </li>
        <li>
          <a href="#">Maison</a>
        </li>
        <li>
          <a href="#">Journal</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
