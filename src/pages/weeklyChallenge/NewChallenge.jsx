import { useState } from 'react'
import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import TextField from '@/components/TextField'
import { MdAdd } from 'react-icons/md'
import { useDailyChallengeStore } from '@/store/dailyChallengeStore'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import DatePickerComponent from '@/components/DatePickerComponent'
import UploadField from '@/components/UploadField'
import axiosInstance from '@/utils/axiosInstance'
import toast from 'react-hot-toast'

const NewChallenge = ({onClick}) => {
  const {createChallenge} = useDailyChallengeStore()
  const [instructions, setInstructions] = useState(['', '', '']); // Initialize with three empty inputs
  const [challengeName, setChallengeName] = useState('')
  const [ChallengeDescription, setChallengeDescription] = useState('')
  const [ChallengeMessage, setChallengeMessage] = useState('')
  const [ChallengeImage, setChallengeImage] = useState('')
  const [ChallengeDays, setChallengeDays] = useState('')
  const [ChallengeRewardType, setChallengeRewardType] = useState('')
  const [ChallengeRewardValue, setChallengeRewardValue] = useState('')
  const [ChallengeEndDate, setChallengeEndDate] = useState('')
  const [image, setImage] = useState(null); // For storing the selected image file
  const [imageUrl, setImageUrl] = useState(''); // For storing the image URL after upload

  const handleChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']); // Add a new empty input
  };

  const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
    console.log("Image file", image)
    const url = await URL.createObjectURL(e.target.files[0] || image);
    setImageUrl(url)
  };

  const handleCreateLearning= async () => {
    if (!image) {
      toast.error('Please selectraffle to upload.');
      return; 
    }

    const formData = new FormData();
  formData.append('file', image);

  //setUploading(true);

  try {
    const response = await axiosInstance.post('/drive/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('File uploaded successfully:', response.data);
    //alert('File uploaded successfully!');
    if(response.data.fileId){
      await createChallenge({
        challenge_name: challengeName, 
        challenge_description: ChallengeDescription, 
        challenge_short_message: ChallengeMessage, 
        challenge_instructions: instructions, 
        challenge_image: response.data.fileId, 
        day_of_participation: ChallengeDays,
        reward_type: ChallengeRewardType,
        reward_value: ChallengeRewardValue,
        challenge_end_date: ChallengeEndDate, 
        })
      //onClick()
      
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    toast.error('Error uploading image.');
  } finally {
    //setUploading(false);
  }
    
  }

  /* const handleCreateLearning = async () => {
    console.log('Saved Values:', instructions);

    await createChallenge({
      challenge_name: challengeName, 
      challenge_description: ChallengeDescription, 
      challenge_short_message: ChallengeMessage, 
      challenge_instructions: instructions, 
      challenge_image: "https://unsplash.com/photos/man-running-at-the-road-during-daytime-iP_e0k48g18", 
      day_of_participation: ChallengeDays,
      reward_type: ChallengeRewardType,
      reward_value: ChallengeRewardValue,
      challenge_end_date: ChallengeEndDate, 
      })
  }; */

  console.log("CHALLENEGE DATE", ChallengeEndDate)

  return (
   
      
        <div className="w-full h-full flex">
          
          <div className="bg-[#FAFBFC] w-[500px] flex flex-col h-full">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                Weekly Challenge
              </p>
            </div>

            <div className="p-3 space-y-3 grow overflow-y-auto">
               {/* <ChallengeDescription /> */}
               <UploadField id="product_image" value={image} onChange={handleImageChange} />
                    {imageUrl && <img crossOrigin='annonymous'  src={imageUrl } alt="raffleImage" className='h-auto w-full'/>}

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
                      placeholder={`instruction ${index + 1}`}
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
              <div className="border rounded-lg bg-white">
                <div className="w-full p-5 border-b">
                  <p className="text-[#252525] text-[14px] font-medium">Duration</p>
                </div>

                <div className="w-full px-7 space-y-3 mt-3">
                <InputField type="number" title="Number of days" placeholder="Number of days" value={ChallengeDays} onChange={(e)=> setChallengeDays(e.target.value)} />

                <DatePickerComponent date={ChallengeEndDate} setDate={setChallengeEndDate} title="Challenge Date" label="Challenge Date" />
                 
                </div>
              </div>

             {/* CHALLENEG REWARD */}

             <div className="border rounded-lg bg-white p-3 space-y-3">
                <div className="w-full p-5 border-b">
                  <p className="text-[#252525] text-[14px] font-medium">Reward</p>
                </div>

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
              <SelectItem value="Points">Ball</SelectItem> 
              <SelectItem value="Item">Viju milk pack</SelectItem> 
              </SelectContent>
            </Select>

            </div>

            <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
              <ButtonComponent title="Save" onClick={handleCreateLearning} />
            </div>
            
          </div>
        </div>
      
    </div>
  )
}

export default NewChallenge