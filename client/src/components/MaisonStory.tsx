import styles from '@/scss/section/maison-story.module.scss';

export default function MaisonStory() {
  return (
    <section>
      <div className={styles.story}>
        <img
          src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1400&auto=format&fit=crop"
          alt="Maison Story"
        />

        <div>
          <div style={{ color: '#d6b36a', textTransform: 'uppercase', letterSpacing: '6px', fontSize: '11px', marginBottom: '20px' }}>
            Maison Story
          </div>

          <h2 className={styles['story-title']}>
            Crafted With<br />
            <span>Emotion</span>
          </h2>

          <p className={styles['story-paragraph']}>
            AURUM은 단순한 주얼리 브랜드가 아닙니다.
            우리는 기억을 세공합니다.
          </p>

          <p className={styles['story-paragraph']}>
            서울의 아뜰리에에서 시작된 우리의 작업은
            한 조각의 다이아몬드가 예술 작품이 되기까지
            수백 번의 디테일과 장인의 손길을 거칩니다.
          </p>

          <p className={styles['story-paragraph']}>
            빛, 감정, 그리고 시간을 담아낸 디자인은
            당신의 가장 특별한 순간과 함께합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
