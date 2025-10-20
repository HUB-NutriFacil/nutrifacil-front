// src/features/quiz/components/Common/Inputs/TagInput.jsx
import { useState } from "react";
import Input from "./Input";
import styles from "./TagInput.module.css";

/**
 * Componente reutilizável de input com tags (chips).
 *
 * Props:
 * - placeholder: string → texto exibido no input
 * - initialTags: array → lista inicial de tags
 * - onChange: function(tags[]) → callback quando a lista muda
 * - limit: number → limite máximo de tags (padrão: 10)
 */
function TagInput({ placeholder, initialTags = [], onChange, limit = 10 }) {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState("");
  const [limitReached, setLimitReached] = useState(false);

  const addTag = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    if (tags.includes(trimmed)) {
      setInputValue("");
      return;
    }

    // 🔒 Aplica o limite configurado via prop
    if (tags.length >= limit) {
      setLimitReached(true);
      setTimeout(() => setLimitReached(false), 2000);
      setInputValue("");
      return;
    }

    const newTags = [...tags, trimmed];
    setTags(newTags);
    onChange?.(newTags);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    onChange?.(newTags);
  };

  return (
    <div
      className={`${styles.container} ${
        limitReached ? styles.limitReached : ""
      }`}
    >
      

      {tags.length < limit && (
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      )}
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
          <button
            type="button"
            className={styles.removeBtn}
            onClick={() => removeTag(tag)}
          >
            ×
          </button>
        </span>
      ))}

      {limitReached && (
        <span className={styles.limitText}>
          Limite de {limit} itens atingido.
        </span>
      )}
    </div>
  );
}

export default TagInput;
