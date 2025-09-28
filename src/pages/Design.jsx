import React from "react";
import LandingPage from "../component/landing/LandingPage";
import GallerySection from "../component/gallery/GallerySection";
import Grid from "../component/grid/Grid";
import SignatureServices from "../component/signature/SignatureServices";


const DesignPage = () => {
  return (
    <div>
      <LandingPage />
      <GallerySection />
      <Grid/>
      <SignatureServices/>
    </div>
  );
};

export default DesignPage;
