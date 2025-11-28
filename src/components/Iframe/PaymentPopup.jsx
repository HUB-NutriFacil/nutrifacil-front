// src/components/PaymentPopup.jsx
import React from "react";
import styles from "./PaymentPopup.module.css";

export default function PaymentPopup({ link, onClose }) {
  if (!link) return null;

  return (
    <div className={styles.overlay}>
          <button className={styles.closeBtn} onClick={onClose}>✖</button>

      <div className={styles.modal}>
        <iframe
          src={link}
          title="Pagamento"
          className={styles.iframe}
          frameBorder="0"
        />
      </div>
    </div>
  );
}
