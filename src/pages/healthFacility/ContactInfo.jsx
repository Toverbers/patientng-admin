
import InputField from "@/components/InputField";
import SelectInput from "@/components/SelectInput";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl border p-3 mt-3 flex flex-col space-y-3">
      <p className="text-[#252525] text-[16px] font-medium border-b w-full pb-2">
        Contact person&apos;s info
      </p>

      <div className="px-2 w-full">
        <div className="w-full md:flex items-center md:space-x-4">
          <div className="w-full md:w-[300px]">
            <SelectInput
              id="salutation"
              label="Salutation"
              options={[
                { value: "mr", label: "Mr" },
                { value: "mrs", label: "Mrs" },
                { value: "miss", label: "Miss" },
              ]}
            />
          </div>
          <InputField title="First name" placeholder="Lara" />
          <InputField title="Last name" placeholder="Doe" />
        </div>
      </div>

      <div className="px-2 w-full">
        <div className="w-full md:flex items-center md:space-x-4">
          <InputField title="Phone number" placeholder="0810 000 0000" />
          <InputField title="Email" placeholder="User@ipatient.ng" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
