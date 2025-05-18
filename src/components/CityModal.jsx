import React from "react";
import "./CityModal.css";

export default function CityModal({ onClose, onSelect }) {
  const cities = [
    "Владимир",
    "Москва",
    "Санкт-Петербург",
    "Нижний Новгород",
    "Казань",
    "Новосибирск",
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <article
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <header className="modal-header">
          <h3 id="modal-title">Выберите город</h3>
          <button
            className="modal-close"
            aria-label="Закрыть"
            onClick={onClose}
          >
            ✕
          </button>
        </header>

        <ul className="city-list">
          {cities.map((c) => (
            <li key={c}>
              <button
                className="city-btn"
                onClick={() => {
                  onSelect(c);
                  onClose();
                }}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
