import styles from '@/scss/section/signature-pieces.module.scss';

export default function SignaturePieces() {
  const pieces = [
    {
      id: 1,
      category: "Diamond Ring",
      title: "Lumière",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
      specs: "18K Gold · VS1",
      price: "₩ 4,800,000",
    },
    {
      id: 2,
      category: "Luxury Necklace",
      title: "Étoile",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      specs: "White Gold",
      price: "₩ 6,200,000",
    },
    {
      id: 3,
      category: "Bracelet",
      title: "Noir Gold",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      specs: "Rose Gold",
      price: "₩ 3,900,000",
    },
  ];

  return (
    <section>
      <div className={styles['section-top']}>
        <div className={styles.label}>Collections</div>
        <div className={styles.title}>
          Signature <span>Pieces</span>
        </div>
        <div className={styles['section-desc']}>
          세상에서 가장 아름다운 순간을 위해 제작된 하이엔드 주얼리 컬렉션.
        </div>
      </div>

      <div className={styles.grid}>
        {pieces.map((piece) => (
          <div key={piece.id} className={styles.card}>
            <img
              src={piece.image}
              alt={piece.title}
            />

            <div className={styles['card-content']}>
              <div className={styles['card-category']}>{piece.category}</div>
              <div className={styles['card-title']}>{piece.title}</div>
              <div className={styles.meta}>
                <span>{piece.specs}</span>
                <span>{piece.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
