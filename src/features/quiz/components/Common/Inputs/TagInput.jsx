// src/features/quiz/components/Common/Inputs/TagInput.jsx
import { useState } from "react";
import Input from "./Input";
import styles from "./TagInput.module.css";

/**
 * Componente reutilizável de input com tags (chips).
 *
 * Regras:
 * - Não permite números, emojis nem caracteres especiais.
 * - Aceita letras com acentuação e espaços.
 */
function TagInput({ placeholder, initialTags = [], onChange, limit = 10 }) {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState("");
  const [limitReached, setLimitReached] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);

  // Regex que permite apenas letras e espaços (inclusive acentos)
  const validTagRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  const addTag = (value) => {
    const trimmed = value.trim();

    if (!trimmed) return;

    // ❌ Bloqueia tags inválidas
    if (!validTagRegex.test(trimmed)) {
      setInvalidInput(true);
      setTimeout(() => setInvalidInput(false), 2000);
      setInputValue("");
      return;
    }

    // Evita duplicados
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

      {invalidInput && (
        <span className={styles.limitText}>
          Somente letras e espaços são permitidos.
        </span>
      )}
    </div>
  );
}

export default TagInput;