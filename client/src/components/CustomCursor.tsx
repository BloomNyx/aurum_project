import { useEffect, useRef } from "react";
import styles from '@/scss/setting/cursor.module.scss';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = mx + "px";
        cursorRef.current.style.top = my + "px";
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }

      requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateRing();

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, .card, .look-item, .btn"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (ringRef.current) {
          ringRef.current.style.width = "60px";
          ringRef.current.style.height = "60px";
          ringRef.current.style.borderColor = "#f5e7bf";
        }
      });

      el.addEventListener("mouseleave", () => {
        if (ringRef.current) {
          ringRef.current.style.width = "36px";
          ringRef.current.style.height = "36px";
          ringRef.current.style.borderColor = "#d6b36a";
        }
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={ringRef} className={styles['cursor-ring']}></div>
    </>
  );
}
