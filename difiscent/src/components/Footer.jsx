import React from "react";

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer-logo">Difiscent</div>
      <div className="contacts">
        <p>Тел: +380 99 123 45 67</p>
        <p>Email: info@difiscent.com</p>
      </div>
      <div className="socials">
        <a href="https://instagram.com">Instagram</a> | 
        <a href="https://t.me">Telegram</a> | 
        <a href="viber://chat">Viber</a>
      </div>
      <small>© Difiscent 2025</small>
    </footer>
  );
}

export default Footer;

