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
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { MdDelete } from 'react-icons/md'

const NewRaffle = ({onClick}) => {
    const {createRaffle} = useRaffleStore()
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

    const handleFileChange = (event) => {
      setRaffleImage(event.target.files[0]);
    };

    const handleAddItem = (event) => {
        if (event.key === 'Enter' && rafflePrice.trim() !== '') {
          setItems([...items, rafflePrice.trim()]);
          setRafflePrice(''); // Clear the input after adding
        }
      };
    
      const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
      };


    const handleCreateRaffle = async () => {
      if (!raffleImage) {
        toast.error('Please selectraffle to upload.');
        return; 
      }

      const formData = new FormData();
    formData.append('file', raffleImage);

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
        await createRaffle({
          raffle_name: raffleName, 
          raffle_description: raffleDescription, 
          //raffle_image: "https://unsplash.com/photos/man-running-at-the-road-during-daytime-iP_e0k48g18", 
          raffle_image: response.data.fileId, 
          number_of_participant: raffleParticipants, 
          ticket_price: raffleTicketPrice, 
          raffle_price: items, 
          quantity: raffleQuantity, 
          start_date: raffleStartDate, 
          end_date: raffleEndDate, 
          release_date: raffleReleaseDate, 
          publish_time: rafflePublishTime
      })
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file.');
    } finally {
      //setUploading(false);
    }
        /* try {
            await createRaffle({
                raffle_name: raffleName, 
                raffle_description: raffleDescription, 
                raffle_image: "https://unsplash.com/photos/man-running-at-the-road-during-daytime-iP_e0k48g18", 
                number_of_participant: raffleParticipants, 
                ticket_price: raffleTicketPrice, 
                raffle_price: items, 
                quantity: raffleQuantity, 
                start_date: raffleStartDate, 
                end_date: raffleEndDate, 
                release_date: raffleReleaseDate, 
                publish_time: rafflePublishTime
            })
        } catch (error) {
            console.log(error)
        } */
    }


    console.log("raffle publish time", rafflePublishTime)
    console.log("RAFFLE PRICE", items)
  return (
        <div className="w-full h-full">
          
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                New raffle
              </p>
            </div>

        <div className='flex flex-col justify-between h-full p-5 overflow-y-auto '>
        <div className="space-y-2 ">
              <InputField title="Raffle name" placeholder="Enter title" value={raffleName} onChange={(e)=>setRaffleName(e.target.value)} />
              <TextField title="Raffle description" placeholder="Input Text" value={raffleDescription} onChange={(e)=>setRaffleDescription(e.target.value)} />
              <UploadField label="Upload raffle image" id="raffle_image" value={raffleImage} 
              //onChange={(e)=>setRaffleImage(e.target.value)}
              onChange={handleFileChange}
              />

              <div className="flex space-x-3 items-center">
              <InputField title="Ticet Price" placeholder="Ticket Price" value={raffleTicketPrice} onChange={(e)=>setRaffleTicketPrice(e.target.value)} />
              <InputField type="number" title="No of Participant" placeholder="No of Participant" value={raffleParticipants} onChange={(e)=>setRaffleParticipants(e.target.value)} />
              </div>
              <div className="flex flex-col">
              <InputField title={`Win Price (press enter to add more price to the input)`} placeholder="Prices" value={rafflePrice} onChange={(e)=>setRafflePrice(e.target.value)} onKeyDown={handleAddItem} />
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
              <ButtonComponent title="Cancel" 
              onClick={onClick}
              buttonStyle="flex-1"
              />
              <ButtonComponent title="Create and Publish" buttonStyle="flex-1" onClick={handleCreateRaffle} />
            </div>
        </div>
          
        </div>
  )
}

export default NewRaffle