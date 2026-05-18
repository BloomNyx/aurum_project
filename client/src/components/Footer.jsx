import styles from '@/scss/section/footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <div className={styles['footer-grid']}>
        <div>
          <div className={styles['footer-logo']}>AURUM</div>
        </div>

        <div>
          <div className={styles['footer-title']}>Collections</div>
          <ul className={styles['footer-links']}>
            <li>
              <a href="#">Rings</a>
            </li>
            <li>
              <a href="#">Necklaces</a>
            </li>
            <li>
              <a href="#">Bracelets</a>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles['footer-title']}>Maison</div>
          <ul className={styles['footer-links']}>
            <li>
              <a href="#">Atelier</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles['footer-title']}>Contact</div>
          <ul className={styles['footer-links']}>
            <li>
              <a href="#">Seoul Boutique</a>
            </li>
            <li>
              <a href="#">Private Care</a>
            </li>
            <li>
              <a href="#">02-123-4567</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <span>© 2026 AURUM Maison</span>
        <span>Cheongdam · Seoul</span>
      </div>
    </footer>
  );
}
