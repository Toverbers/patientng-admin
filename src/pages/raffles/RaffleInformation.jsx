import ButtonComponent from '@/components/ButtonComponent'
import DatePickerComponent from '@/components/DatePickerComponent'
import InputField from '@/components/InputField'
import SelectInput from '@/components/SelectInput'
import TextField from '@/components/TextField'
import TimeSelectComponent from '@/components/TimeSelectComponent'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import UploadField from '@/components/UploadField'
import { useRaffleStore } from '@/store/raffleStore'
import axiosInstance from '@/utils/axiosInstance'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { MdDelete } from 'react-icons/md'

const RaffleInformation = ({raffleDetails}) => {
    const {updateRaffle, setRaffleFeatured, getRaffle} = useRaffleStore()
    //const {raffle_name,raffle_description, raffle_image, number_of_participant, ticket_price, raffle_price, quantity, start_date, end_date, release_date, publish_time} = useState()
    const [raffleName, setRaffleName] = useState('');
    const [raffleDescription, setRaffleDescription] = useState('');
    const [raffleImage, setRaffleImage] = useState('');
    const [raffleParticipants, setRaffleParticipants] = useState('');
    const [raffleTicketPrice, setRaffleTicketPrice] = useState('');
    const [rafflePrice, setRafflePrice] = useState('');
    const [items, setItems] = useState([]);
    const [raffleQuantity, setRaffleQuantity] = useState('');
    const [raffleStartDate, setRaffleStartDate] = useState('');
    const [raffleEndDate, setRaffleEndDate] = useState('');
    const [raffleReleaseDate, setRaffleReleaseDate] = useState('');
    const [rafflePublishTime, setRafflePublishTime] = useState()
    const [raffleStatus, setRaffleStatus] = useState('')
    const [newImage, setNewImage] = useState('')
    const [imgPreview, setImgPreview] = useState('')


    const handleAddItem = (event) => {
        if (event.key === 'Enter' && rafflePrice.trim() !== '') {
          setItems([...items, rafflePrice.trim()]);
          setRafflePrice(''); // Clear the input after adding
        }
      };

      useEffect(() => {
        if(raffleDetails){
          setRaffleName(raffleDetails?.raffle_name)
          setRaffleDescription(raffleDetails?.raffle_description)
          setRaffleTicketPrice(raffleDetails?.ticket_price)
          setRaffleParticipants(raffleDetails?.number_of_participant)
          //setRafflePrice(raffleDetails?.raffle_price)
          setItems(raffleDetails?.raffle_price)
          setRaffleQuantity(raffleDetails?.quantity)
          setRaffleStartDate(raffleDetails?.start_date)
          setRaffleEndDate(raffleDetails?.end_date)
          setRaffleReleaseDate(raffleDetails?.release_date)
          setRafflePublishTime(raffleDetails?.publish_time)
          setRaffleStatus(raffleDetails?.status)
          setRaffleImage(raffleDetails?.raffle_image)
        }
      },[raffleDetails])

      console.log("RAFFLE IMAGE", raffleImage)
    
      const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
      };


      const handleFileChange = async (event) => {
        setNewImage(event.target.files[0]);
        const url = await URL.createObjectURL(event.target.files[0] || newImage);
        setImgPreview(url);
      };

    const handleUpdateRaffle = async () => {
      if (!raffleImage ) {
        toast.error('Please select raffle image to upload.');
        return; 
      }

      const formData = new FormData();
      formData.append('file', newImage);

        try {
          if(newImage){
            const response = await axiosInstance.post('/drive/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });

            const imgUrl = response.data.fileId
            console.log('File uploaded successfully:', raffleImage);
            if(imgUrl){
              await updateRaffle({
                  id: raffleDetails?._id,
                  raffle_name: raffleName, 
                  raffle_description: raffleDescription, 
                  //raffle_image:response.data.fileId, 
                  raffle_image:imgUrl, number_of_participant: raffleParticipants, ticket_price: raffleTicketPrice, raffle_price: items, quantity: raffleQuantity, start_date: raffleStartDate, end_date: raffleEndDate, release_date: raffleReleaseDate, publish_time: rafflePublishTime,  status: raffleStatus
              })
              getRaffle({id: raffleDetails?._id})
            }

          }
          else{
            await updateRaffle({
              id: raffleDetails?._id,
              raffle_name: raffleName, 
              raffle_description: raffleDescription, 
              //raffle_image:response.data.fileId, 
              raffle_image:raffleImage, number_of_participant: raffleParticipants, ticket_price: raffleTicketPrice, raffle_price: items, quantity: raffleQuantity, start_date: raffleStartDate, end_date: raffleEndDate, release_date: raffleReleaseDate, publish_time: rafflePublishTime,  status: raffleStatus
          })

          getRaffle({id: raffleDetails?._id})
          }
          
      
      
          //alert('File uploaded successfully!');
          
        } catch (error) {
          console.error('Error uploading file:', error);
          toast.error('Error uploading file.');
        } finally {
          //setUploading(false);
        }

      }
    const handleFeaturedRaffle = async () => {
        try {
            await setRaffleFeatured({
                id: raffleDetails?._id,
                status: raffleStatus
            })
        } catch (error) {
            console.log(error)
        }
    }


    const [driveID, setDriveID] = useState('');

  useEffect(() => {
    const extractID = (url) => {
      const match = url?.match(/[-\w]{25,}/);
      setDriveID(match ? match[0] : '');
    };
    extractID(raffleDetails?.raffle_image);
  }, [raffleDetails?.raffle_image]);



  return (
        <div className="w-full h-full ">
          
            {/* <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                New raffle
              </p>
            </div> */}
            

        <div className='flex flex-col justify-between h-full p-5 overflow-y-auto '>
          
        <div className="space-y-2 ">
        <ButtonComponent title="Make Featured" buttonStyle="w-auto bg-green-500 hover:bg-600 mb-10" onClick={handleFeaturedRaffle} />
              <InputField title="Raffle name" placeholder="Enter title" value={raffleName} onChange={(e)=>setRaffleName(e.target.value)} />
              <TextField title="Raffle description" placeholder="Input Text" value={raffleDescription} onChange={(e)=>setRaffleDescription(e.target.value)} />
              
              <UploadField label="Upload raffle image" id="raffle_image" value={newImage} onChange={handleFileChange} />
              {/* <img crossOrigin='anonymous' src={raffleImage? raffleImage : '/assets/png/defaultImage.png'} alt="raffleImage" className='h-auto md:h-[150px] w-full md:w-[150px]'/> */}
              {imgPreview ? <img crossOrigin='annonymous'  src={imgPreview } alt="raffleImage" className='h-auto md:h-[150px] w-full md:w-[280px]'/> :
              <img  src={driveID? `https://drive.google.com/thumbnail?id=${raffleImage?.split('id=')[1]}&sz=w1000` : '/assets/png/defaultImage.png'} alt="raffleImage" className='h-auto md:h-[150px] w-full md:w-[280px]'/>
              }
              
              <div className="flex space-x-3 items-center">
              <InputField title="Ticet Price" placeholder="Ticket Price" value={raffleTicketPrice} onChange={(e)=>setRaffleTicketPrice(e.target.value)} />
              <InputField type="number" title="No of Participant" placeholder="No of Participant" value={raffleParticipants} onChange={(e)=>setRaffleParticipants(e.target.value)} />
              </div>
              <div className="flex flex-col">
              <InputField title={`Win Price (press enter to add more price to the input or click the button to remove)`} placeholder="Prices" value={rafflePrice} onChange={(e)=>setRafflePrice(e.target.value)} onKeyDown={handleAddItem} />
              <ul className='flex space-x-1.5 '>
                {items?.map((item, index) => (
                <li key={index} className=''>
                    <Badge className="p-2 shadow-none" onClick={() => handleRemoveItem(index)}>{item}</Badge> 
                </li>
                ))}
            </ul>
              </div>

              <div className="flex space-x-3 items-center">
              <InputField title="Quantity" placeholder="Quantity" value={raffleQuantity} onChange={(e)=>setRaffleQuantity(e.target.value)} />
              </div>
             

              <div className="flex space-x-3 items-center">
                <DatePickerComponent label="Start Date" title="Start Date" date={raffleStartDate} setDate={setRaffleStartDate} />
                <DatePickerComponent label="End Date" title="End Date" date={raffleEndDate} setDate={setRaffleEndDate} />
              </div>

             {/*  <p className="text-[#252525] text-[16px] font-semibold">
                Set Release Date
              </p> */}
              <div className="bg-white flex justify-between w-full p-3 border-b">
                 <p className="text-[#252525] text-[16px] font-semibold">Set Release Date</p>
              </div>
              <div className="flex space-x-3 items-center">
                
             <div className='flex-1'> <DatePickerComponent label="Release date" title="Release date" date={raffleReleaseDate} setDate={setRaffleReleaseDate} /></div>

              <div className='flex-1'>
              {/* <p className="text-[#252525] text-[14px] font-medium mt-0">Publish Time</p> */}
              {/* <TimeSelectComponent selectedTime={rafflePublishTime} onTimeChange={(time)=> setRafflePublishTime(time)} title="Publish Time" label="Select Publish Time" /> */}
              <DatePickerComponent label="Publish Date" title="End Date" date={rafflePublishTime} setDate={setRafflePublishTime} />
              </div>  
              </div>

              <div>
              <Select className="" defaultValue={raffleStatus}
                value={raffleStatus}
                onValueChange={(value) => {setRaffleStatus(value)}} >
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

            <div className="bg-white flex space-x-2 w-full mt-5 py-1 border-t mb-[60px]">
              
              <ButtonComponent title="Create and Publish" buttonStyle="flex-1" onClick={handleUpdateRaffle} />
              
            </div>
        </div>
          
        </div>
  )
}

export default RaffleInformation