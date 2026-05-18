import styles from '@/scss/section/intro.module.scss';

export default function Intro() {
  return (
    <section className={styles.hero}>
      <video
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-woman-wearing-jewelry-1561914660970?download=1080p"
          type="video/mp4"
        />
      </video>

      <div className={styles.overlay}></div>
      <div className={styles['hero-light']}></div>

      <div className={styles['hero-content']}>
        <div className={styles.eyebrow}>High Jewelry Maison · Seoul</div>

        <h1 className={styles['hero-title']}>
          Eternal<br />
          <span>Radiance</span>
        </h1>

        <p className={styles['hero-description']}>
          시간을 초월한 아름다움.
          최고급 다이아몬드와 18K 골드, 그리고 장인의 손길이 만나
          단 하나의 예술 작품이 완성됩니다.
        </p>

        <div className={styles['hero-buttons']}>
          <a href="#" className={styles.btn}>
            Explore
          </a>
          <a href="#" className={styles.btn}>
            Maison Story
          </a>
        </div>
      </div>
    </section>
  );
}
