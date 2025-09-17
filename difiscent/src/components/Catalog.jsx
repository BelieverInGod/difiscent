import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

const products = [
  { id: 1, name: "Dior Sauvage", price: "2500 грн", img: p1 },
  { id: 2, name: "Chanel Chance", price: "3300 грн", img: p2 },
  { id: 3, name: "Dior Jadore", price: "2750 грн", img: p3 },
  { id: 4, name: "Creed Aventus", price: "6500 грн", img: p4 },
  { id: 5, name: "YSL Black Opium", price: "4250 грн", img: p5 },
  { id: 6, name: "Tom Ford Black Orchid", price: "4500 грн", img: p6 },
];

function Catalog() {
  return (
    <section className="catalog" id="catalog">
      <h2>Каталог</h2>
      <div className="catalog-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
      <button className="catalog-btn">Дивитись весь каталог</button>
    </section>
  );
}

export default Catalog;
