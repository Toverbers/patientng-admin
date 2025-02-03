import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import SelectInput from '@/components/SelectInput'
import React from 'react'

const UserInformation = ({userData}) => {
  return (
    <div className="grow overflow-y-auto">
      <div className="mx-5 border bg-white rounded-xl p-3 flex flex-col space-y-3">
        <p className="text-[#252525] text-[20px] font-medium border-b pb-1">
          User Profile
        </p>

        <div className="space-x-3 flex items-center w-full">
          <InputField title="First Name" placeholder="Abayomi" value={userData?.firstName} />
          <InputField title="Last Name" placeholder="Olowu" value={userData?.lastName} />
        </div>

        <div className="space-x-3 flex items-center w-full">
          <InputField title="Email Address" placeholder="abayomi@gmail.com" value={userData?.email} />
          <InputField title="Phone Number" placeholder="0810 0000 000" value={userData?.phoneNumber} />
        </div>

        <div className="space-x-3 flex items-center w-full">
          <InputField title="Age" placeholder="12 years old" value={userData?.age} />
          <SelectInput
            label="Gender"
            value={userData?.gender}
            defaultValue={userData?.gender}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
          />
        </div>

        <div className="space-x-3 flex items-center w-full">
          <InputField title="Street Address" placeholder="234 ABC Screet" value={userData?.location} />
        </div>

        {/* <div className="space-x-3 flex items-center w-full">
          <SelectInput
            label="State"
            value={userData?.state}
            options={[
              { value: "abia", label: "Abia" },
              { value: "lagos", label: "Lagos" },
            ]}
          />
          <SelectInput
            label="LGA"
            options={[
              { value: "ikeja", label: "Ikeja" },
              { value: "surulere", label: "Surulere" },
            ]}
          />
        </div> */}

        {/* <ButtonComponent title="Save Changes" onClick={() => {}} /> */}
      </div>
    </div>
  )
}

export default UserInformation