
import SelectInput from "@/components/SelectInput";
import React from "react";

const ServiceProvider = () => {
  return (
    <div className="bg-white rounded-xl border p-3 mt-3 flex flex-col space-y-3">
      <p className="text-[#252525] text-[16px] font-medium border-b w-full pb-2">
        Services provider
      </p>

      <div className="px-2 w-full">
        <div className="w-full flex items-center space-x-4">
          <div className="w-full md:w-1/2">
            <SelectInput
              id="service"
              label="Select Services"
              options={[
                { value: "service 1", label: "Service 1" },
                { value: "service 2", label: "Service 2" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="px-2 w-full"></div>
    </div>
  );
};

export default ServiceProvider;
