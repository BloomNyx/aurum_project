import styles from '@/scss/section/skill.module.scss';

export default function Skill() {
  return (
    <section>
      <div style={{ textAlign: 'center', marginBottom: '130px' }}>
        <div style={{ color: '#d6b36a', textTransform: 'uppercase', letterSpacing: '6px', fontSize: '11px', marginBottom: '20px' }}>
          Editorial
        </div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(50px, 7vw, 100px)', fontWeight: 300, lineHeight: 1 }}>
          Luxury <span style={{ color: '#f5e7bf', fontStyle: 'italic' }}>Lookbook</span>
        </div>
      </div>

      <div className={styles.lookbook}>
        <div className={styles.left}>
          <div className={styles['look-item']}>
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1400&auto=format&fit=crop"
              alt="Lookbook 1"
            />
          </div>

          <div className={styles['look-item']}>
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop"
              alt="Lookbook 2"
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={`${styles['look-item']} ${styles['look-item-full']}`}>
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1400&auto=format&fit=crop"
              alt="Lookbook 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
