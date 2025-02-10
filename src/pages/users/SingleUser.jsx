import BackButton from '@/components/BackButton'
import ButtonComponent from '@/components/ButtonComponent'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect, useState } from 'react'
import UserInformation from './UserInformation'
import UserAppointment from './UserAppointment'
import { useParams } from 'react-router-dom'
import { useUserStore } from '@/store/usersStore'

const SingleUser = () => {
 const {getUser, changeUserStatus, singleUserData} = useUserStore()
 const {id} = useParams()
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

 console.log("USER ID", id)

 useEffect(() => {
  getUser({id: id})
 },[])

 useEffect(() => {
  if(singleUserData){
    setSelectedPermissions(singleUserData?.userType)
  }
 },[singleUserData])

 const handleActivateUser = async () => {
  await changeUserStatus({id: singleUserData?._id})
  getUser({id: id})
}
 const handleDeactivateUser = async () => {
  await changeUserStatus({id: singleUserData?._id})
  getUser({id: id})
}


 console.log("SINGLE USER INFORMATION", singleUserData)

    const tabList = [
        {name: "User's Inormation"},
        {name: "Appointment"},
        /* {name: "Games"}, */
    ]
  return (

    <>
    <div className="bg-white border-b pb-10">
      <div className="bg-center bg-cover bg-[url(/assets/png/user_bg.png)] bg-no-repeat w-full h-[250px] p-5">
        <BackButton />
      </div>

      <div className="px-5 -mt-10 md:flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <img
            crossOrigin='anonymous' src={singleUserData?.image? `${import.meta.env.VITE_MAIN_URL}/${singleUserData?.image}` : '/assets/png/user.png'}
            alt="avatar"
            width={1000}
            height={1000}
            className="w-40 h-40 rounded-full"
          />
          <div className="">
            <p className="text-[#252525] text-[32px] font-semibold">
              {singleUserData?.firstName} {singleUserData?.lastName}
            </p>
            <p className="text-[#68727D] text-[16px] -mt-1">{singleUserData?.email}</p>
          </div>
        </div>
        <div className="mt-3 md:mt-0 flex items-center space-x-3">
          {singleUserData?.active && 
           <ButtonComponent title={`Deactivate User`}
           onClick={handleDeactivateUser}
            buttonStyle="bg-tranparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            
           />
          }
          
          {!singleUserData?.active && 
           <ButtonComponent title="Activate user" onClick={handleActivateUser} buttonStyle="bg-emerald-500" />
          }
          
        </div>
      </div>

      {/* <Tab /> */}
      <div className='p-5'>
      {/* <Tabs defaultValue="User's Inormation" className="">
        <TabsList className="bg-transparent" >
           
            {tabList.map((row, index) => (<TabsTrigger key={index} value={row.name} className="">{row.name}</TabsTrigger> ))}
        </TabsList>
        <TabsContent value="User's Inormation"><UserInformation userData={singleUserData} /></TabsContent>
        <TabsContent value="Appointment"><UserAppointment /></TabsContent>
        </Tabs> */}

    {singleUserData?.isAdmin && (
      <div className="rounded-lg border p-3 mx-5 mb-5 bg-white">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Permission List</h1>
              <div className="flex flex-row flex-wrap gap-x-6 gap-y-4 mb-6">
              {permissions?.map((permission, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <input
                    type="checkbox"
                    value={permission}
                    checked={selectedPermissions?.includes(permission)}
                    onChange={() => handleCheckboxChange(permission)}
                    className="w-4 h-4 text-lime-500 focus:ring-lime-500"
                  />
                  <span className="text-base capitalize">{permission}</span>
                </label>
              ))}
            </div>
          </div>
    )}
    
      <UserInformation userData={singleUserData} />
      </div>

    </div>
    </>
    
  )
}

export default SingleUser