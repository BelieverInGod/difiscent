import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Логотип */}
      <div className="logo">Difiscent</div>

      {/* Навігація */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Головна</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Хто ми</a></li>
          <li><a href="#catalog" onClick={() => setMenuOpen(false)}>Каталог</a></li>
          <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Контакти</a></li>
        </ul>
      </nav>

      {/* Права частина */}
      <div className="header-right">
        {/* Кнопка Замовити */}
        <button className="order-btn">Замовити</button>

        {/* Бургер (показується тільки на мобільному) */}
        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
