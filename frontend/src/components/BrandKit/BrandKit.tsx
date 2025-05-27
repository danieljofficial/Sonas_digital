import React from "react";
import BrandColorSelect from "./BrandColorSelect";
import Header from "./Header";
import UploadLogo from "./UploadLogo";
import BrandFontSelect from "./BrandFontSelect";

const BrandKit = () => {
  return (
    <>
      {/* <div className="overflow-auto p-4 sm:p-6 lg:p-8 border border-black"> */}
      <div className="bg-white rounded-lg shadow-md p-3 max-md:mt-4">
        <Header />

        {/* Upload brand logo section */}
        <UploadLogo />

        <BrandColorSelect />
        <BrandFontSelect />
      </div>
      {/* </div> */}
    </>
  );
};

export default BrandKit;
