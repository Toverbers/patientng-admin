import React, { useCallback, useEffect, useState } from 'react'
import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import TextField from '@/components/TextField'
import UploadField from '@/components/UploadField'
import { useProductStore } from '@/store/productStore'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectItem } from '@radix-ui/react-select'
import axios from 'axios'
import toast from 'react-hot-toast'
import axiosInstance from '@/utils/axiosInstance'

const SingleProduct = ({onClick, productDetails}) => {

  const {getProduct, singleProduct,getAllCategory, categoryData, updateProduct, getAllProduct} = useProductStore();

  const [image, setImage] = useState(null); // For storing the selected image file
  const [imageUrl, setImageUrl] = useState(''); // For storing the image URL after upload
  const [imgPreview, setImgPreview] = useState('');
  const [newImage, setNewImage] = useState('');

  const [uploading, setUploading] = useState(false); // To handle the loading state
  const [trigger, setTrigger] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')
  const [stockStatus, setStockStatus] = useState('')
  const [id, setId] = useState('')


  useEffect(() => {
   getProduct({id:productDetails?._id})
   getAllCategory()
  },[])

  useEffect(() => {
   if(singleProduct){
    setName(singleProduct?.product?.name)
    setDescription(singleProduct?.product?.description)
    setAmount(singleProduct?.product?.amount)
    setQuantity(singleProduct?.product?.quantity)
    setCategory(singleProduct?.product?.product_category)
    setImage(singleProduct?.product?.image)
    setStockStatus(singleProduct?.product?.stock_status)
    setId(singleProduct?.product?._id)
    
   }
  },[singleProduct])

  /* const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log("Image file", image)
  }; */

  const handleImageChange = async (event) => {
    
     setNewImage(event.target.files[0]);
      console.log("Image file", image)
      const url = await URL.createObjectURL(event.target.files[0] || image);
      setImgPreview(url);
    
  }

  const handleUpdateProduct = async (event) => { 
    event.preventDefault()
    console.log("button works")
    /* if (!image) {
      toast('Please select an image first.');
      return;
    } */
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'zrqqioyv'); // Replace with your unsigned upload preset
    formData.append('cloud_name', 'dbb8fi3hj'); // Replace with your cloud name

    setUploading(true);

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dbb8fi3hj/image/upload', // Replace with your Cloudinary cloud name
        formData
      );

      console.log("Cloudinary Response", response.data)
      const imgUrl = response?.data?.secure_url
      console.log("images goten from url", imgUrl)

       if(imgUrl){
        setImageUrl(imgUrl); // Get the uploaded image URL from the response
        setTrigger(prev => !prev)
      //setImage(response.data.secure_url); // Get the uploaded image URL from the response
      setUploading(false);
      console.log("IMAGE URL for normal state", imageUrl)
      }
      
         await updateProduct ({
          id:id, name: name, image: imgUrl? imgUrl : null, description: description, amount: amount, quantity: quantity, product_category: category, stock_status: stockStatus
        })  



        onClick()
        getAllProduct()
      
         
    } catch (error) {
      console.error('Upload error:', error);
      
    } finally{
      setUploading(false);
    }
  }

  
  const handleUpdate = async (event) => { 
    event.preventDefault()
    if (!image ) {
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
        //console.log('File uploaded successfully:', raffleImage);
        if(imgUrl){
          await updateProduct ({
            id:id, name: name, image: imgUrl, description: description, amount: amount, quantity: quantity, product_category: category, stock_status: stockStatus
          })
          getProduct({id:productDetails?._id})
        }

      }
      else{
        await updateProduct ({
          id:id, name: name, image: image, description: description, amount: amount, quantity: quantity, product_category: category, stock_status: stockStatus
        })

      getProduct({id:productDetails?._id})
      }
      
  
  
      //alert('File uploaded successfully!');
      
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file.');
    } finally {
      //setUploading(false);
    }

  }

  useEffect(() =>{
    console.log("IMAGE URL that is uploaded", imageUrl)
  },[imageUrl, trigger])

  console.log("stock status is", stockStatus)
  return (
    <>
          <div className="bg-[#FAFBFC] flex flex-col h-full">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                Update product
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
                    Update Product details
                    </p>
                </div>

                <div className="w-full px-7 space-y-3 mt-3">
                <UploadField id="product_image"
                value={newImage}
                onChange={handleImageChange} 
                
                /* onChange={(event) => {
                  console.log(event.target.files[0]); // Log the selected file
                  setImage(event.target.files[0]); // Update the state with the selected file
                  }} */
                
                />
                   <div>
                      {imgPreview ? <img crossOrigin='annonymous'  src={imgPreview } alt="raffleImage" className='h-auto w-[100px]'/> : 
                      
                      <img src={image ? `https://drive.google.com/thumbnail?id=${image?.split('id=')[1]}&sz=w1000` : '/assets/png/defaultImage.png'} alt="product image" className='h-auto w-[100px]'/>}
                    </div>
                    <InputField title="Product name" placeholder="3e.g 10,000 steps" value={name} onChange={(e)=> setName(e.target.value)} />
                    <TextField title="description" placeholder="description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                    <InputField title="Amount" placeholder="0.00" type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} />
                    <InputField title="Quantity" placeholder="0.00" type="number" value={quantity} onChange={(e)=> setQuantity(e.target.value)} />

                    <Select className="" defaultValue={category?._id}
                     onValueChange={(value) => {setCategory(value)}} >
                    <SelectTrigger className="h-[50px]">
                     {/*  <SelectValue placeholder={category?.name} /> */}
                      <SelectValue placeholder={category?.name}>{category?.name}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                    {categoryData?.map((row) => (<SelectItem key={row?._id} value={row?._id}>{row?.name}</SelectItem> ))}
                      {/* <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem> */}
                    </SelectContent>
                  </Select>

                  <Select className="" defaultValue={stockStatus}
                     onValueChange={(value) => {setStockStatus(value)}} >
                    <SelectTrigger className="h-[50px]">
                     {/*  <SelectValue placeholder={stockStatus} /> */}
                      {/* <SelectValue placeholder="select Stock ststus" /> */}
                      <SelectValue placeholder={stockStatus}>{stockStatus}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem  value='Available'>Available</SelectItem>
                      <SelectItem  value='Unavailable'>Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                </div> 
            </div>

            <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
              <ButtonComponent title={uploading? 'loading...': "Save"} buttonStyle="bg-[#004146] text-white" onClick={handleUpdate} disable={uploading } />
            </div>
          </div>
        
    
    </>
  )
}

export default SingleProduct