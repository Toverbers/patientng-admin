import AdminHeader from '@/components/AdminHeader'
import ButtonComponent from '@/components/ButtonComponent'
import { CustomButton } from '@/components/CustomButton'
import { CustomSelect } from '@/components/CustomSelect'
import { FormInput } from '@/components/FormInput'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { nigeriaStates } from '@/lib/states'
import useAuthStore from '@/store/authStore'
import { Avatar } from '@radix-ui/react-avatar'
import { CameraIcon, LogOut } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const {getMe, myData, updateUserProfile} = useAuthStore()

  useEffect(()=> {
    getMe()
  },[])

  console.log("USER INFORMATION", myData)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    address: '',
    state: '',
    lga: '',
    image: ''
  })
  const [image, setImage] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(()=> {
  if(myData){
   setFormData({
    firstName: myData?.firstName,
    lastName: myData?.lastName,
    email: myData?.email,
    phone: myData?.phone,
    age: myData?.age,
    gender: myData?.gender,
    address: myData?.address,
    state: myData?.state,
    lga: myData?.lga,
    image: myData?.image,
  })
  }
  },[myData])


  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const nigerian = nigeriaStates

  const handleStateChange = (value) => {
    setFormData({ 
      ...formData,
      state: value,
      lga: '' // Reset LGA when state changes
    })
  }

  const handleLGAChange = (value) => {
    setFormData({...formData, lga: value })
  }

  const lgas = formData?.state && nigerian?.find((s) => s.state === formData?.state)?.lgas || [];

  const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
    console.log("Image file", image)
    const url = await URL.createObjectURL(e.target.files[0] || image);
    setImageUrl(url)
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData)
    // Here you would typically send the data to your backend
    await updateUserProfile({ 
      id: myData?._id,
      firstName: formData?.firstName, 
      lastName: formData?.lastName, 
      email: formData?.email, 
      phone: formData?.phone, 
      image: image, 
      age: formData?.age, 
      gender: formData?.gender, 
      address: formData?.address, 
      state: formData?.state, 
      lga: formData?.lga
    })
    getMe()
  }
  return (
    <div className="space-y-5 p-5 ">

        <AdminHeader
         title="Profile Details"
         hasBackButton
         //hasBackButton
         
         />
        <div className='bg-white p-5 rounded-xl'>
          <h3 className="text-xl font-semibold mb-4">Personal Info</h3>

          <div className="flex mb-6">
        
          {/* <div className="h-20 w-20 mb-2 relative">
          </div> */}
          
          <div className='flex space-x-4 items-center'>
          <Avatar className="h-16 w-16 mb-2  relative overflow-visible">
          <input
            type="file"
            accept="image/*"
            //value={image}
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
      <label
        htmlFor="image-upload"
        className=" absolute -right-1 top-4 w-[22px] h-[22px] z-999 cursor-pointer bg-green-500 text-white flex items-center justify-center rounded-full hover:bg-green-600"
      >
        <CameraIcon className='size-sm' size="14" color="#fff" />
      </label>
      {imageUrl ? <img crossOrigin='anonymous'  src={imageUrl} alt="profile" className="rounded-full " /> : 
      <>
       <img crossOrigin='anonymous'  src={formData?.image ? `${import.meta.env.VITE_MAIN_URL}/${formData?.image}` : '/assets/png/user.png'} alt="profile" className="rounded-full " />
      </>}
            
            {/* <AvatarFallback className="w-full" >{userData?.firstName?.slice(0,1)}</AvatarFallback> */} 
          </Avatar>
          
          <div>
          <h2 className="text-lg font-semibold">{formData?.firstName} {formData?.lastName}</h2>
          <p className="text-sm text-gray-500">{formData?.email}</p>
          </div>
          </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              id="firstName"
              placeholder="Abayomi"
              value={formData?.firstName}
              onChange={handleInputChange}
              //onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <FormInput
              label="Last Name"
              id="lastName"
              placeholder="Olowu"
              value={formData?.lastName}
              onChange={handleInputChange}
            />
            <FormInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="abayomi@patient.ng"
              value={formData?.email}
              onChange={handleInputChange}
            />
            <FormInput
              label="Phone Number"
              id="phoneNumber"
              placeholder="0810 044 1503"
              value={formData?.phone}
              onChange={handleInputChange}
            />
            <FormInput
              label="Age"
              id="age"
              placeholder="12 years old"
              value={formData?.age}
              onChange={handleInputChange}
            />
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <CustomSelect
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
              ]}
              placeholder="Male"
              value={formData?.gender}
              onChange={(value) => handleInputChange({ target: { id: 'gender', value } })}
            />
            </div>
            
             <FormInput
              inputClassName={'col-span-2'}
              label="Street Address"
              id="streetAddress"
              placeholder="234 ABC Street"
              value={formData?.address}
              onChange={handleInputChange}
            /> 
            <div className="space-y-2">
            <Label htmlFor="gender">State</Label>
            <Select value={formData.state} onValueChange={handleStateChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {nigerian?.map((state) => (
                  <SelectItem key={state?.alias} value={state?.state}>
                    {state?.state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            </div>
            
            <div className="space-y-2">
            <Label htmlFor="gender">LGA</Label>
            <Select 
              value={formData?.lga} 
              onValueChange={handleLGAChange}
              //onValueChange={(v) => setFormData({ ...formData, lga: v })}
              disabled={!formData?.state}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select LGA" />
              </SelectTrigger>
              <SelectContent>
                {lgas?.map((lga, index) => (
                  <SelectItem key={index} value={lga}>
                    {lga}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            </div>
          </div>

          <div className="w-full mt-5">
          <Button buttonVariant={"primary"} className="w-full" onClick={handleSubmit}>Apply Changes</Button>
          </div>

        </div>
      
        {/* <ChangeProfilePassword /> */}
       
      </div>
  )
}

export default Profile