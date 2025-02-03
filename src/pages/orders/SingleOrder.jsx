import ButtonComponent from '@/components/ButtonComponent';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useProductStore } from '@/store/productStore';
import React, { useState } from 'react'

const SingleOrder = ({orderDetails}) => {
    const {changeOrderStatus} = useProductStore()
    const [orderStatus, setOrderStatus] = useState('')

    const handleChangeStatus = async () => {
        await changeOrderStatus({id: orderDetails?._id, status: orderStatus})
    }
  return (
    <>
    <div className="bg-[#FAFBFC] flex flex-col h-full">
      <div className="bg-white flex justify-between w-full p-5 border-b">
        <p className="text-[#252525] text-[16px] font-semibold">
          Order Details
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
           <div className="border rounded-lg bg-white min-h-full">
          {/* <div className="w-full p-5 border-b">
              <p className="text-[#252525] text-[14px] font-medium">
              Challenge Name and Description
              </p>
          </div> */}

          <div className="w-full px-7 space-y-3 mt-3">
             
             <div className='flex justify-between mb-4'>
             <p className="text-[#252525] text-[16px] font-bold">Order Status</p>
             <Badge className="bg-[#3864FF12] text-[#3864FF]' rounded-xl text-[16px] font-medium">{orderDetails?.order_status?.at(-1)?.status}</Badge>
             </div>
             <div>
             
                <img  src={orderDetails?.product_id?.image ? orderDetails?.product_id?.image : '/assets/png/defaultImage.png'} alt="product image" className='h-auto w-[100px] border border-gray-100 rounded-sm'/>
              </div>

              <div className='flex flex-col space-y-5'>
              <div className="flex justify-between">
                <p className="text-[#252525] text-[16px] font-bold">Product name</p>
                <p className="text-[#252525] text-[16px] font-bold">{orderDetails?.product_id?.name}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#252525] text-[16px] font-bold">Quantity</p>
                <p className="text-[#252525] text-[16px] font-bold">{orderDetails?.quantity}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#252525] text-[16px] font-bold">Total Amount</p>
                <p className="text-[#252525] text-[16px] font-bold">{orderDetails?.total_amount}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#252525] text-[16px] font-bold">User's id</p>
                <p className="text-[#252525] text-[16px] font-bold">{orderDetails?.patient_id?._id} </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#252525] text-[16px] font-bold">User's name</p>
                <p className="text-[#252525] text-[16px] font-bold">{orderDetails?.patient_id?.firstname} {orderDetails?.patient_id?.lastname}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#252525] text-[16px] font-bold">User's Email</p>
                <p className="text-[#252525] text-[16px] font-bold">{orderDetails?.patient_id?.email}</p>
              </div>

              <div className=' my-6'>
                <p className='mt-[40px]'>Update status here</p>
                <Select className="" defaultValue={orderStatus}
                value={orderStatus}
                onValueChange={(value) => {setOrderStatus(value)}} 
                >
                <SelectTrigger className="h-[50px]">
                {/*  <SelectValue placeholder={stockStatus} /> */}
                     <SelectValue placeholder="select Status" />
                    {/* <SelectValue placeholder={orderDetails?.order_status?.at(-1)?.status}>{orderDetails?.order_status?.at(-1)?.status}</SelectValue> */}
                </SelectTrigger>
                <SelectContent>
                    <SelectItem  value='Order Placed'>Order Placed</SelectItem>
                    <SelectItem  value='Pending Confirmation'>Pending Confirmation</SelectItem>
                    <SelectItem  value='Waiting to be Shipped'>Waiting to be Shipped</SelectItem>
                    <SelectItem  value='Shipped'>Shipped</SelectItem>
                    <SelectItem  value='Available for Pickup'>Available for Pickup</SelectItem>
                    <SelectItem  value='Delivered'>Delivered</SelectItem>

                </SelectContent>
                </Select>
            </div>

              </div>
              

              
              
          </div>
          </div> 
      </div>

      <div className="bg-white flex space-x-2 justify-end w-full px-5 py-1 border-t">
        <ButtonComponent title="Update" buttonStyle="bg-[#004146] text-white" 
        onClick={handleChangeStatus} 
        //disable={uploading } 
        />
      </div>
    </div>
  

</>
  )
}

export default SingleOrder