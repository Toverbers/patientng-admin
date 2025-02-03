import React, { useEffect, useState } from 'react'
import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import TextField from '@/components/TextField'

import { MdAdd } from 'react-icons/md'

import { useDailyChallengeStore } from '@/store/dailyChallengeStore'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import DatePickerComponent from '@/components/DatePickerComponent'
import UploadField from '@/components/UploadField'

const SingleChallenge = ({onClick, challengeDetails}) => {
  const {createChallenge, getChallenge, singleChallengeData, updateChallenge} = useDailyChallengeStore()
  const [instructions, setInstructions] = useState(['', '', '']); // Initialize with three empty inputs
  const [challengeName, setChallengeName] = useState('')
  const [ChallengeDescription, setChallengeDescription] = useState('')
  const [ChallengeMessage, setChallengeMessage] = useState('')
  const [ChallengeImage, setChallengeImage] = useState('')
  const [ChallengeDays, setChallengeDays] = useState('')
  const [ChallengeRewardType, setChallengeRewardType] = useState('')
  const [ChallengeRewardValue, setChallengeRewardValue] = useState('')
  const [ChallengeEndDate, setChallengeEndDate] = useState('')
  const [ChallengeStatus, setChallengeStatus] = useState('')
  const [image, setImage] = useState(null); // For storing the selected image file
  const [imageUrl, setImageUrl] = useState(''); // For storing the image URL after upload
  const [imgPreview, setImgPreview] = useState('');
  const [newImage, setNewImage] = useState('');



  useEffect(() => {
   
    getChallenge({id: challengeDetails?._id})
   
  },[])

  console.log("SINGLE CHALLENEG DEATILS", singleChallengeData)

  const handleImageChange = async (event) => {
    
    setNewImage(event.target.files[0]);
     console.log("Image file", image)
     const url = await URL.createObjectURL(event.target.files[0] || image);
     setImgPreview(url);
   
 }

  useEffect(() => {
   if(singleChallengeData){
    setInstructions(singleChallengeData?.challenge_instructions)
    setChallengeName(singleChallengeData?.challenge_name)
    setChallengeDescription(singleChallengeData?.challenge_description)
    setChallengeMessage(singleChallengeData?.challenge_short_message)
    setChallengeDays(singleChallengeData?.day_of_participation)
    setChallengeRewardType(singleChallengeData?.reward_type)
    setChallengeRewardValue(singleChallengeData?.reward_value)

    setChallengeEndDate(singleChallengeData?.challenge_end_date)
    setChallengeStatus(singleChallengeData?.status)
    setImage(singleChallengeData?.challenge_image)
    /* setImage(`https://drive.google.com/thumbnail?id=${singleChallengeData?.challenge_image?.split('id=')[1]}&sz=w1000`) */
   }
  },[singleChallengeData])

  const handleChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']); // Add a new empty input
  };

  const handleCreateLearning = async () => {
    console.log('Saved Values:', instructions);

    await updateChallenge({
      id: singleChallengeData?._id,
      challenge_name: challengeName, 
      challenge_description: ChallengeDescription, 
      challenge_short_message: ChallengeMessage, 
      challenge_instructions: instructions, 
      challenge_image: "https://unsplash.com/photos/man-running-at-the-road-during-daytime-iP_e0k48g18", 
      day_of_participation: ChallengeDays,
      reward_type: ChallengeRewardType,
      reward_value: ChallengeRewardValue,
      challenge_end_date: ChallengeEndDate,
      status: ChallengeStatus,
      })
  };

  return (
   
      
        <div className="w-full h-full flex">
          
          <div className="bg-[#FAFBFC] w-[500px] flex flex-col h-full">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                Weekly Challenge
              </p>
            </div>

            <div className="p-3 space-y-3 grow overflow-y-auto">
               <UploadField id="product_image"
                value={newImage}
                onChange={handleImageChange}
                />
               {/* <ChallengeDescription /> */}
               {imgPreview ? <img crossOrigin='annonymous'  src={imgPreview } alt="raffleImage" className='h-auto w-[100px]'/> : 
               <>
               <iframe 
                  src={image ? image : '/assets/png/defaultImage.png'}
                ></iframe>
                      
                      <img src={image ? `https://drive.google.com/thumbnail?id=${image?.split('id=')[1]}&sz=w1000` : '/assets/png/defaultImage.png'} alt="product image" className='h-auto w-[100px]' /></>}

               {/* CHALLENGE Status */}
               <div className="border rounded-lg bg-white">
               <div className="w-full p-5 border-b">
                  <p className="text-[#252525] text-[14px] font-medium">Challenge Name</p>
                </div>
               <div className="p-5">
               <Select className="" defaultValue={ChallengeStatus}
                value={ChallengeStatus}
                onValueChange={(value) => {setChallengeStatus(value)}} >
              <SelectTrigger className="h-[50px]">
                {/*  <SelectValue placeholder={category?.name} /> */}
                <SelectValue placeholder="select Status"></SelectValue>
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Active">Active</SelectItem> 
              <SelectItem value="Inactive">Completed</SelectItem> 
              <SelectItem value="Scheduled">Scheduled</SelectItem> 
              <SelectItem value="Cancelled">Cancelled</SelectItem> 
              </SelectContent>
            </Select>
            </div>
            </div>

            {/* CHALLENGE DESCRIPTION */}
            <div className="border rounded-lg bg-white">
            <div className="w-full p-5 border-b">
                <p className="text-[#252525] text-[14px] font-medium">Challenge Name</p>
            </div>

            <div className="w-full px-7 space-y-3 mt-3">
                <InputField title="Challenge name" placeholder="3e.g 10,000 steps" value={challengeName} onChange={(e)=> setChallengeName(e.target.value)} />
                <InputField title="Challenge intro message" placeholder="Abayomi" value={ChallengeMessage} onChange={(e)=> setChallengeMessage(e.target.value)} />
                <TextField title="Challenge description" placeholder="Input Text" value={ChallengeDescription} onChange={(e)=> setChallengeDescription(e.target.value)} />
            </div>
            </div>

              {/* CHALLENGE INSTRUCTIONS */}


              <div className="border rounded-lg bg-white">
                <div className="w-full p-5 border-b">
                  <p className="text-[#252525] text-[14px] font-medium">
                    Challenge Instructions
                  </p>
                </div>

                <div className="w-full px-7 space-y-3 mt-3 pb-3">
                {instructions.map((input, index) => (
                  <div key={index}>
                    <InputField
                      type="text"
                      placeholder={`instruction ${index}`}
                      value={input}
                      onChange={(e) => handleChange(index, e.target.value)}
                    />
                  </div>
                ))}
                {/* <Button onClick={addInstruction}>Add More Input</Button> */}
                <ButtonComponent title="Add More Input" 
                onClick={addInstruction}
                buttonStyle="bg-transparent w-auto text-green-500 border border-green-500 rounded-base h-[40px]"
                append={
                  <MdAdd size={20} color="green" />
                } />

                </div>
              </div>


              {/* CHALLENGE DURATION */}
              <div className="border rounded-lg bg-white pb-5">
                <div className="w-full p-5 border-b">
                  <p className="text-[#252525] text-[14px] font-medium">Duration</p>
                </div>

                <div className="w-full px-7 space-y-3 mt-3">
                <InputField type="number" title="Number of days" placeholder="Number of days" value={ChallengeDays} onChange={(e)=> setChallengeDays(e.target.value)} />

                <DatePickerComponent date={ChallengeEndDate} setDate={setChallengeEndDate} />
                 
                </div>
              </div>

             {/* CHALLENEG REWARD */}

             <div className="border rounded-lg bg-white p-3 space-y-3">
                <div className="w-full p-5 border-b">
                  <p className="text-[#252525] text-[14px] font-medium">Reward</p>
                </div>
            
            <div className="p-5 space-y-6">
            <Select className="" defaultValue={ChallengeRewardType}
                value={ChallengeRewardType}
                onValueChange={(value) => {setChallengeRewardType(value)}} >
              <SelectTrigger className="h-[50px]">
                {/*  <SelectValue placeholder={category?.name} /> */}
                <SelectValue placeholder="select Reawrd Type"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="Points">Points</SelectItem> 
                <SelectItem value="Item">Item</SelectItem> 
              </SelectContent>
            </Select>

            <Select className="" defaultValue={ChallengeRewardValue}
                value={ChallengeRewardValue}
                onValueChange={(value) => {setChallengeRewardValue(value)}} >
              <SelectTrigger className="h-[50px]">
                {/*  <SelectValue placeholder={category?.name} /> */}
                <SelectValue placeholder="select Reawrd Value"></SelectValue>
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="Ball">Ball</SelectItem> 
              <SelectItem value="Viju milk pack">Viju milk pack</SelectItem> 
              </SelectContent>
            </Select>
            </div>
            </div>

            <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
              <ButtonComponent title="Save" onClick={handleCreateLearning} />
            </div>
            
          </div>
        </div>
      
    </div>
  )
}

export default SingleChallenge