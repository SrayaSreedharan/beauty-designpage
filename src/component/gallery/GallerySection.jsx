import React from "react";
import "./GallerySection.css";

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="gallery-item small">
        <img src="/images/hh.jpeg" alt="Nails" />
      </div>
      <div className="gallery-item large">
        <img src="/images/hh.jpeg" alt="Lashes" />
        <h2 className="gallery-title">SERENYA LASH</h2>
      </div>
      <div className="gallery-item small">
        <img src="/images/hh.jpeg" alt="Eyes" />
      </div>
    </section>
  );
}
