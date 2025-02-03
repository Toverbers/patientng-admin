import ButtonComponent from "@/components/ButtonComponent"
import InputField from "@/components/InputField"
import PermissionsCard from "@/components/PermissionsCard"
import TextField from "@/components/TextField"
import { useAdminRoleStore } from "@/store/adminRoleStore"
import { useState } from "react"


const NewRole = ({onClick}) => {
  const {createRole,  getAllRole} = useAdminRoleStore()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')


  const handleCreateRole = async () =>{
   await createRole({name: name, description: description})
  }

  return (
    
        <div className="bg-[#FAFBFC] w-full h-screen ">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                New Role
              </p>
            </div>

            <div className=" p-3 space-y-2 overflow-y-auto  h-[90vh] w-full mb-20">
              <InputField title="Role Name" placeholder="admin" value={name} onChange={(e)=> setName(e.target.value)} />
              <TextField title="Role Description" placeholder="description" value={description} onChange={(e)=> setDescription(e.target.value)} />
              

              {/* <PermissionsCard />  */}

              <div className="bg-white flex flex-row space-x-2 w-full py-3 ">
              <ButtonComponent title="Cancel" onClick={()=> { getAllRole(); onClick()}} />
              <ButtonComponent title="Add Role" onClick={handleCreateRole} />
            </div>
            </div>
            
            

            
          </div>
    
  )
}

export default NewRole