"use client";

import PrimaryButton from "@components/PrimaryButton";
import SecondaryButton from "@components/SecondaryButton";

const Footer = () => {
  return (
    <div className="bg-white py-3 flex justify-end space-x-2 mx-5">
      <SecondaryButton label="Cancel" onClick={() => {}} />
      <PrimaryButton label="Save changes" onClick={() => {}} />
    </div>
  );
};

export default Footer;
