import ButtonComponent from "@/components/ButtonComponent"
import InputField from "@/components/InputField"
import PermissionsCard from "@/components/PermissionsCard"
import TextField from "@/components/TextField"


const SingleRole = ({onClick}) => {
  return (
    
        <div className="bg-[#FAFBFC] w-full h-screen ">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                New Role
              </p>
            </div>

            <div className=" p-3 space-y-2 overflow-y-auto  h-[90vh] w-full mb-20">
              <InputField title="Role Name" placeholder="admin" />
              <TextField title="Role Description" placeholder="description" />
              

              <PermissionsCard />

              <div className="bg-white flex flex-row space-x-2 w-full py-3 ">
              <ButtonComponent title="Cancel" onClick={onClick} />
              <ButtonComponent title="Add user" />
            </div>
            </div>
            
            

            
          </div>
    
  )
}

export default SingleRole