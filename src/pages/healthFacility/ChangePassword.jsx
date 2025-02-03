
import PasswordInputField from "@/components/PasswordInputField";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="bg-white rounded-xl border p-3 mt-3 flex flex-col space-y-3">
      <p className="text-[#252525] text-[16px] font-medium border-b w-full pb-2">
        Services provider
      </p>

      <div className="px-2 w-full md:flex md:space-x-4">
        <PasswordInputField title="Old Password" placeholder="Old Password" />
        <PasswordInputField title="New Password" placeholder="New Password" />
      </div>
    </div>
  );
};

export default ChangePassword;
