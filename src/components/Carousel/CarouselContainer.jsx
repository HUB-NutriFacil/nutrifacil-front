// src/features/quiz/components/Common/Carousel/CarouselContainer.jsx
import { useState, useRef, useEffect } from "react";
import styles from "./CarouselContainer.module.css";

/**
 * 🎠 Componente genérico de carrossel horizontal com navegação por pontos e swipe.
 *
 * Props:
 * - items: array de objetos ou strings (slides)
 * - renderItem: função que recebe o item atual e retorna o JSX
 * - className: (opcional) estilos externos adicionais
 */
function CarouselContainer({ items = [], renderItem, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const total = items.length;

  // Funções de navegação
  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  const goToIndex = (index) => setCurrentIndex(index);

  // Eventos de arrastar (mouse + touch)
  const handleStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (translateX > 80) prev();
    else if (translateX < -80) next();
    setTranslateX(0);
  };

  // Adiciona e remove listeners
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    node.addEventListener("mousedown", handleStart);
    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseup", handleEnd);
    node.addEventListener("mouseleave", handleEnd);
    node.addEventListener("touchstart", handleStart);
    node.addEventListener("touchmove", handleMove);
    node.addEventListener("touchend", handleEnd);

    return () => {
      node.removeEventListener("mousedown", handleStart);
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseup", handleEnd);
      node.removeEventListener("mouseleave", handleEnd);
      node.removeEventListener("touchstart", handleStart);
      node.removeEventListener("touchmove", handleMove);
      node.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, translateX]);

  if (!items || total === 0) return null;

  return (
    <div className={`${styles.carousel} ${className}`}>
      <div
        className={styles.track}
        ref={containerRef}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
          transition: isDragging ? "none" : "transform 0.3s ease",
        }}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.slide}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselContainer;
