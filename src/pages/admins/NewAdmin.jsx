import ButtonComponent from '@/components/ButtonComponent'
import CheckBox from '@/components/CheckBox'
import InputField from '@/components/InputField'
import PasswordInputField from '@/components/PasswordInputField'
import SelectInput from '@/components/SelectInput'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAdminRoleStore } from '@/store/adminRoleStore'
import { useUserStore } from '@/store/usersStore'
import { ArrowDown, ChevronDown, ChevronUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const NewAdmin = ({onClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { createAdminUser } = useUserStore()

  const [role, setRole] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const permissions = ["admin", 'blogger', 'webinar', 'podcast', 'crowedfunding', 'advocacy', 'Website'];


  const handleCheckboxChange = (permission) => {
    setSelectedPermissions((prevSelected) => {
      // Toggle the selection
      if (prevSelected.includes(permission)) {
        return prevSelected.filter((item) => item !== permission); // Remove if already selected
      } else {
        return [...prevSelected, permission]; // Add if not selected
      }
    });
  };  
  

 const handleCreateAdmin = async() => {
   await createAdminUser({firstName: firstname, lastName: lastname, email: email,  userType: selectedPermissions})
 }

 const handleClose = async () => {
   onClick()
 }


 
  return (
    <>
        <div className="bg-[#FAFBFC] flex flex-col h-full">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                New User
              </p>
              
            </div>

            <div className="p-3 space-y-2 overflow-y-auto w-full">
              {/* <div className="flex space-x-3 items-center">
                <img
                  src="/assets/png/user_avatar.png"
                  
                  alt="avatar"
                  className="w-20 h-20"
                />
                <ButtonComponent title="Upload Avatar" icon="/assets/svg/upload.svg" />
              </div> */}

              <div className="md:flex md:space-x-3 items-center w-full">
                <InputField title="First Name" placeholder="John" value={firstname} onChange={(e)=> setFirstname(e.target.value)} />
                <InputField title="Last Name" placeholder="Doe" value={lastname} onChange={(e)=> setLastname(e.target.value)} />
              </div>

              <div className="md:flex md:space-x-3 items-center w-full">
                <InputField title="Email" placeholder="johndoe@gmail.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
                {/* <InputField title="Phone number" placeholder="0810 000 0000" value={phone} onChange={(e)=> setPhone(e.target.value)} /> */}
              </div>
             {/*  <div className="md:flex md:space-x-3 items-center w-full">
                <PasswordInputField title="Password" placeholder="password..." value={password} onChange={(e)=> setPassword(e.target.value)} />
              </div> */}

             {/* <div>
             <p className="text-[#252525] text-[14px] font-medium">Select Role</p>
             <Select className="" defaultValue={role}
                value={role}
                onValueChange={(value) => {setRole(value)}} >
              <SelectTrigger className="h-[50px]">
                <SelectValue placeholder="select Author"></SelectValue>
              </SelectTrigger>
              <SelectContent>
              {roleData?.map((row) => (<SelectItem key={row?._id} value={row?._id}>{row?.name}</SelectItem> ))}
              </SelectContent>
            </Select>
             </div> */}

<div className="rounded-lg border p-3 bg-white">
<h1 className="text-xl font-bold mb-4 text-gray-800">Permission List</h1>
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-4 mb-6">
        {permissions.map((permission, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 text-gray-700"
          >
            <input
              type="checkbox"
              value={permission}
              checked={selectedPermissions.includes(permission)}
              onChange={() => handleCheckboxChange(permission)}
              className="w-4 h-4 text-lime-500 focus:ring-lime-500"
            />
            <span className="text-base capitalize">{permission}</span>
          </label>
        ))}
      </div>
    </div>
            </div>

            <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
              <ButtonComponent title="Cancel" 
              onClick={onClick} 
              />
              <ButtonComponent title="Add user" onClick={handleCreateAdmin} />
            </div>
          </div>
    </>
  )
}

export default NewAdmin