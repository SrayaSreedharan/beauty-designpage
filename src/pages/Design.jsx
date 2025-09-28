import React from "react";
import LandingPage from "../component/landing/LandingPage";
import GallerySection from "../component/gallery/GallerySection";
import Grid from "../component/grid/Grid";
import SignatureServices from "../component/signature/SignatureServices";


const DesignPage = () => {
  return (
    <div>
      {/* Landing / Hero */}
      <LandingPage />

      {/* Gallery Section */}
      <GallerySection />

      {/* Grid Section */}
      <Grid/>

      {/* Signature Services Section */}
      <SignatureServices/>
    </div>
  );
};

export default DesignPage;
