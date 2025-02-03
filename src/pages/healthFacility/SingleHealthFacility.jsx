import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TopSection from './TopSection'
import ContactInfo from './ContactInfo'
import FacilityInfo from './FacilityInfo'
import ServiceProvider from './ServiceProvider'
import ChangePassword from './ChangePassword'
import { useHealthcareStore } from '@/store/healthcareStore';
import BackButton from '@/components/BackButton';
import ButtonComponent from '@/components/ButtonComponent';
import InputField from '@/components/InputField';
import SelectInput from '@/components/SelectInput';
import Attachment from './Attachment';
import PasswordInputField from '@/components/PasswordInputField';

const SingleHealthFacility = () => {
  const {id} = useParams();
  const {getHealthcare, singlecHealthcareData, changeHealthcareStatus} = useHealthcareStore()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [rcNumber, setRcNumber] = useState('')
  const [facilityName, setFacilityName] = useState('')
  const [facilityType, setFacilityType] = useState('')
  const [facilityAddress, setFacilityAddress] = useState('')
  const [services, setServices] = useState([])
 

  useEffect(()=>{
    getHealthcare({id:id})
  },[])

  useEffect(()=>{
    if(singlecHealthcareData){
      setFirstName(singlecHealthcareData?.firstname)
      setLastName(singlecHealthcareData?.lastname)
      setEmail(singlecHealthcareData?.email)
      setPhone(singlecHealthcareData?.phone_number)
      setRcNumber(singlecHealthcareData?.facility?.rc_number)
      setFacilityType(singlecHealthcareData?.facility?.facility_type)
      setFacilityName(singlecHealthcareData?.facility?.facility_name)
      setFacilityAddress(singlecHealthcareData?.facility?.address)
      setServices(singlecHealthcareData?.facility?.service)
    }
  },[singlecHealthcareData])


  const handleApprove = async () => {
    await changeHealthcareStatus({id: id, status: 'Approved'})
  }
  const handleDeactivate = async () => {
    await changeHealthcareStatus({id: id, status: "Deactivated"})
  }
  const handleRejected = async () => {
    await changeHealthcareStatus({id: id, status: "Rejected"})
  }

  console.log("PERSONNEL ID", id)
  console.log("SINGLE PERSONEL DATA", singlecHealthcareData)
  console.log("SERVICES", services)

  return (
    <>
    <div className="bg-[#FAFBFC] grow overflow-x-auto flex flex-col pb-[80px]">
      <div className="p-5 bg-white border-b">
      <BackButton />

      <div className="md:flex space-x-2">
        <p className="text-[#252525] ml-2 md:ml-0 md:text-[28px] font-semibold grow">
          View facility information
        </p>
        {singlecHealthcareData?.status === 'Approved' && ( 
          <div className="flex flex-col mt-2 space-y-2 md:flex-row md:mt-0 md:space-y-0 space-x-0 md:space-x-2">
          <ButtonComponent title="Deactivate Facility" buttonStyle="text-[#E33B32] text-[14px] font-medium border border-[#E33B32] px-3 py-2 rounded-md bg-transparent hover:bg-[#E33B32] hover:text-white" onClick={handleDeactivate} />
          <ButtonComponent title="Reject Facility" buttonStyle="text-[#fff] text-[14px] font-medium border border-[#E33B32] px-3 py-2 rounded-md bg-[#E33B32] hover:bg-[#E33B32]" onClick={handleRejected} />
          </div>
          )}
        {singlecHealthcareData?.status === 'Pending' && ( 
          <div className="flex flex-col mt-2 space-y-2 md:flex-row md:mt-0 md:space-y-0 space-x-0 md:space-x-2">
          <ButtonComponent title="Reject Facility" buttonStyle="text-[#fff] text-[14px] font-medium border border-[#E33B32] px-3 py-2 rounded-md bg-[#E33B32] hover:bg-[#E33B32]" onClick={handleRejected} />
          <ButtonComponent title="Approve Facility" buttonStyle="text-white text-[14px] font-medium border bg-[#27B973] px-3 py-2 rounded-md hover:bg-none" onClick={handleApprove} />
          </div>
          )}

        {singlecHealthcareData?.status === 'Rejected' && ( 
          <div className="flex flex-col mt-2 space-y-2 md:flex-row md:mt-0 md:space-y-0 space-x-0 md:space-x-2">
          <ButtonComponent title="Deactivate Facility" buttonStyle="text-[#E33B32] text-[14px] font-medium border border-[#E33B32] px-3 py-2 rounded-md bg-transparent hover:bg-[#E33B32] hover:text-white" onClick={handleDeactivate} />
          <ButtonComponent title="Approve Facility" buttonStyle="text-white text-[14px] font-medium border bg-[#27B973] px-3 py-2 rounded-md hover:bg-none" onClick={handleApprove} />
          </div>
          )}


      </div>
    </div>


      <div className="px-5 grow overflow-y-auto">
         
         {/* CONTACT INFORMATION */}
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
          <InputField title="First name" placeholder="Firstname" value={firstName} onChange={(e)=>setFirstName(e.target.navue)} />
          <InputField title="Last name" placeholder="Lastname" value={lastName} onChange={(e)=>setLastName(e.target.navue)} />
        </div>
      </div>

      <div className="px-2 w-full">
        <div className="w-full md:flex items-center md:space-x-4">
          <InputField title="Phone number" placeholder="Phone no" value={phone} onChange={(e)=>setPhone(e.target.navue)} />
          <InputField title="Email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.navue)} />
        </div>
      </div>
    </div>
        

        {/* FACILITY INFORMATION */}
        <div className="bg-white rounded-xl border p-3 mt-3 flex flex-col space-y-3">
      <p className="text-[#252525] text-[16px] font-medium border-b w-full pb-2">
        Facility information
      </p>

      <div className="px-2 w-full">
        <div className="w-full md:flex md:space-x-4 items-center">
          <SelectInput
            id="facility_type"
            label="Facility type"
            value={facilityType}
            onChange={(e)=>setFacilityType(e.target.navue)}
            options={[
              { value: "hospital", label: "Hospital" },
              { value: "clinic", label: "Clinic" },
              { value: "pharmacy", label: "Pharmacy" },
            ]}
          />
          <InputField title="RC Number" placeholder="RC 11111111" value={rcNumber} onChange={(e)=>setRcNumber(e.target.navue)} />
        </div>
        <InputField title="Facility name" placeholder="ABC Health center" value={facilityName} onChange={(e)=>setFacilityName(e.target.navue)} />
        <InputField title="Address" placeholder="ABC Health center" value={facilityAddress} onChange={(e)=>setFacilityAddress(e.target.navue)} />
        <div className="w-full md:flex md:space-x-4 items-center">
          <SelectInput
            id="state"
            label="State"
            options={[
              { value: "abia", label: "Abia" },
              { value: "lagos", label: "Lagos" },
              { value: "benue", label: "Benue" },
            ]}
          />
          <SelectInput
            id="lga"
            label="LGA"
            options={[
              { value: "ikeja", label: "Ikeja" },
              { value: "surulere", label: "Surulere" },
              { value: "yaba", label: "Yaba" },
            ]}
          />
        </div>
      </div>

      <div className="p-2 w-full border bg-[#FAFBFC] rounded-xl">
        <p className="text-[#68727D] text-[12px] uppercase font-medium">
          Attached files
        </p>

        <div className="md:flex w-full space-y-2 md:space-y-0 md:space-x-4">
          <Attachment />
          <Attachment />
        </div>
      </div>
    </div>


      {/* SERVICE PROVIDER */}
      <div className="bg-white rounded-xl border p-3 mt-3 flex flex-col space-y-3">
      <p className="text-[#252525] text-[16px] font-medium border-b w-full pb-2">
        Services provider
      </p>


      <div className="w-full flex flex-wrap gap-x-3 gap-y-3">
      {services.map((row, index) => (
          
            <button key={index} className={`px-4 py-2 border border-[#004146] rounded-lg  'bg-transparent text-black'}`}>
            {row?.service_type} - ₦{row?.service_amount?.toFixed(2)}</button>
            
        ))}
          </div>

      {/* <div className="px-2 w-full">
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
      </div> */}

      <div className="px-2 w-full"></div>
    </div>


        {/* CHANGE PASSWORD */}

       {/*  <div className="bg-white rounded-xl border p-3 mt-3 flex flex-col space-y-3">
          <p className="text-[#252525] text-[16px] font-medium border-b w-full pb-2">
            Services provider
          </p>

          <div className="px-2 w-full md:flex md:space-x-4">
            <PasswordInputField title="Old Password" placeholder="Old Password" />
            <PasswordInputField title="New Password" placeholder="New Password" />
          </div>
        </div> */}

      </div>

      {/* <Footer /> */}
    </div>
    </>
  )
}

export default SingleHealthFacility