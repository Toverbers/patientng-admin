import ButtonComponent from '@/components/ButtonComponent'
import cloudinaryConfig from '@/components/CloudinaryConfig'
//import { Cloudinary } from 'cloudinary-react';
import InputField from '@/components/InputField'
import TextField from '@/components/TextField'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import UploadField from '@/components/UploadField'
import { useProductStore } from '@/store/productStore'
import axiosInstance from '@/utils/axiosInstance'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const NewProduct = ({onClick}) => {
  const [image, setImage] = useState(null); // For storing the selected image file
  const [imageUrl, setImageUrl] = useState(''); // For storing the image URL after upload
  const [uploading, setUploading] = useState(false); // To handle the loading state

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')

  const {getAllCategory, categoryData, createProduct, getAllProduct} = useProductStore()

  useEffect(() => {
    getAllCategory()
  },[])


 const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
    console.log("Image file", image)
    const url = await URL.createObjectURL(e.target.files[0] || image);
    setImageUrl(url)
  };

  
  /* const handleUpload = async () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'zrqqioyv'); // Replace with your unsigned upload preset

    setUploading(true);

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dbb8fi3hj/image/upload', // Replace with your Cloudinary cloud name
        formData
      );
      setImageUrl(response.data.secure_url);
      let imgUrl = response.data.secure_url // Get the uploaded image URL from the response
      setUploading(false);
      console.log("IMAGE URL", imageUrl)

      await createProduct ({
        name: name, image: imgUrl, description: description, amount: amount, quantity: quantity, product_category: category
      })
      onClick()
      getAllProduct()
    } catch (error) {
      console.error('Upload error:', error);
      setUploading(false);
    }
  };
 */
  
  const handleUpload= async () => {
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
      await createProduct ({
        name: name, image: response.data.fileId, description: description, amount: amount, quantity: quantity, product_category: category
      })
      onClick()
      getAllProduct()
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    toast.error('Error uploading image.');
  } finally {
    //setUploading(false);
  }
    
  }



  return (
    <>
          <div className="bg-[#FAFBFC] flex flex-col h-full">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                New product
              </p>
              {/* <button onClick={onClick}>
                <img
                  src="/assets/svg/close.svg"
                  alt="close"
                  className="w-5 h-5"
                />
              </button> */}
            </div>

            <div className="p-3 space-y-3 grow overflow-y-auto">
                 <div className="border rounded-lg bg-white">
                <div className="w-full p-5 border-b">
                    <p className="text-[#252525] text-[14px] font-medium">
                    Challenge Name and Description
                    </p>
                </div>

                <div className="w-full px-7 space-y-3 mt-3 pb-4">
                    <UploadField id="product_image" value={image} onChange={handleImageChange} />
                    {imageUrl && <img crossOrigin='annonymous'  src={imageUrl } alt="raffleImage" className='h-auto w-full'/>}
                    
                    <InputField title="Product name" placeholder="3e.g 10,000 steps" value={name} onChange={(e)=> setName(e.target.value)} />
                    <TextField title="description" placeholder="description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                    <InputField title="Amount" placeholder="0.00" type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} />
                    <InputField title="Quantity" placeholder="0.00" type="number" value={quantity} onChange={(e)=> setQuantity(e.target.value)} />

                    <Select className="" defaultValue={category} 
             onValueChange={(value) => {setCategory(value)}} >
                    <SelectTrigger className="h-[50px]">
                      <SelectValue placeholder="Product Category" />
                    </SelectTrigger>
                    <SelectContent>
                    {categoryData?.map((row) => (<SelectItem key={row?._id} value={row?._id}>{row?.name}</SelectItem> ))}
                      {/* <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem> */}
                    </SelectContent>
                  </Select>

                  {/* <Select className="">
                    <SelectTrigger className="h-[50px]">
                      <SelectValue placeholder="Stock Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select> */}


                </div>
                </div> 
            </div>

            <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
              <ButtonComponent onClick={handleUpload} title="Save" buttonStyle="bg-[#004146] text-white" />
            </div>
          </div>
        
    
    </>
  )
}

export default NewProduct