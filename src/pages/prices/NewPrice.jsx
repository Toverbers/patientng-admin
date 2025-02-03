import ButtonComponent from '@/components/ButtonComponent'
import InputField from '@/components/InputField'
import SelectInput from '@/components/SelectInput'
import TextField from '@/components/TextField'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePriceStore } from '@/store/priceStore'
import { useQuizStore } from '@/store/quizStore'
import React, { useState } from 'react'

const NewPrice = () => {

  const {createPrice} = usePriceStore()

  const [priceType, setPriceType] = useState('')
  const [priceProduct, setPriceProduct] = useState('')
  const [priceCategory, setPriceCategory] = useState('')

  const handleCreatePrice = async () => {
    await createPrice({type: priceType, product: priceProduct, category: priceCategory})
  }

  return (
    <div className="bg-[#FAFBFC] w-[500px] flex flex-col h-full ">
            <div className="bg-white flex justify-between w-full p-5 border-b">
              <p className="text-[#252525] text-[16px] font-semibold">
                Price Information
              </p>
              
            </div>

<div className="border rounded-xl p-3 bg-white h-full space-y-2 mt-5 mx-5">
    
    <div>
    <p className="text-[#252525] text-[14px] font-medium">Type</p>
      <Select className="" 
      defaultValue={priceType}
            value={priceType}
            onValueChange={(value) => {setPriceType(value)}} 
            >
          <SelectTrigger className="h-[50px]">
             <SelectValue placeholder="Select price type" /> 
           {/*  <SelectValue placeholder="select Price Type">{priceType}</SelectValue>*/}
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="Point">Point</SelectItem> 
          <SelectItem value="Product">Product</SelectItem> 
          </SelectContent>
        </Select>
        </div>

      <InputField title="Product" placeholder="Enter product" value={priceProduct} onChange={(e) => setPriceProduct(e.target.value)} />

      <div>
      <p className="text-[#252525] text-[14px] font-medium">Category</p>
      <Select className="" 
      defaultValue={priceCategory}
            value={priceCategory}
            onValueChange={(value) => {setPriceCategory(value)}} 
            >
          <SelectTrigger className="h-[50px]">
              <SelectValue placeholder="Select price category" />
            {/* <SelectValue placeholder="select Price Category"></SelectValue> */}
          </SelectTrigger>
          <SelectContent>
          <SelectItem value="Hunt">Hunt</SelectItem> 
          <SelectItem value="Spin">Spin</SelectItem> 
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
      <ButtonComponent title="Create Price" onClick={handleCreatePrice} />
    </div> 
           
    </div>
  )
}

export default NewPrice