import ButtonComponent from '@/components/ButtonComponent'
import { Button } from '@/components/ui/button'
import { UseAppointmentStore } from '@/store/appointmentStore'
import moment from 'moment'
import React, { useEffect } from 'react'

const SingleAppointment = ({appointmentDetails, onClick, }) => {

  const {getAppointment, singleAppointmentData, changeAppointmentStatus} = UseAppointmentStore()

  useEffect(() => {
    const getData = async () => {
    if(appointmentDetails){
      await getAppointment({id: appointmentDetails?._id})
    }
    }

    getData()
  },[])

  const handleCancelAppoinment = async () => {
    await changeAppointmentStatus({id: singleAppointmentData?._id, reason: "Cancelled"})
  }

  console.log('SINGLE APPOINTMENT DETAILS', singleAppointmentData)
  return (
    <div className=''>
        <div className="bg-white flex justify-between w-full p-5 border-b">
          <p className="text-[#252525] text-[16px] font-semibold">
            Appointment details
          </p>
          {/* <button onClick={closeModal}>
            <img
              src="/svg/close.svg"
              width={100}
              height={100}
              alt="close"
              className="w-5 h-5"
            />
          </button> */}
        </div>


        <div className='flex space-x-2 p-5'>
          <img src={`/assets/png/avatar2.png`} alt="Profile" className="rounded-full w-[48px] h-[48px]" />
          <div>
            <p className='text-base font-semibold #252525 text-[#252525]'>{singleAppointmentData?.patient?.firstname} {singleAppointmentData?.patient?.lastname}</p>
            <p className='text-base text-[#68727D]'>{appointmentDetails?.patient?.email}</p>
          </div>
        </div>

        <div className='flex flex-col space-y-3 mt-4 p-5'>
        <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 17.5H3.33333M17.5 17.5H16.6667M3.33333 17.5V5.16667C3.33333 4.23325 3.33333 3.76654 3.51499 3.41002C3.67478 3.09641 3.92975 2.84144 4.24335 2.68166C4.59987 2.5 5.06658 2.5 6 2.5H10.6667C11.6001 2.5 12.0668 2.5 12.4233 2.68166C12.7369 2.84144 12.9919 3.09641 13.1517 3.41002C13.3333 3.76654 13.3333 4.23325 13.3333 5.16667V6.66667M3.33333 17.5H13.3333M13.3333 17.5V6.66667M13.3333 17.5H16.6667M13.3333 6.66667H15.3333C15.8 6.66667 16.0334 6.66667 16.2117 6.75749C16.3685 6.83739 16.4959 6.96487 16.5758 7.12167C16.6667 7.29993 16.6667 7.53329 16.6667 8V17.5M8.33333 5.83333V9.16667M6.66667 7.5H10M10 11.6667V11.675M6.66667 11.6667V11.675M10 14.575V14.5833M6.66667 14.575V14.5833"
                  stroke="#68727D"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </svg>
              <p className="text-[#68727D] text-[14px]">Facility type</p>
            </div>
            <div className="bg-[#F2F6F7] text-[#004146] text-[14px] font-medium px-3 py-1.5 w-min rounded-full">
            {singleAppointmentData?.facility_type}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 17.5H3.33333M17.5 17.5H16.6667M3.33333 17.5V5.16667C3.33333 4.23325 3.33333 3.76654 3.51499 3.41002C3.67478 3.09641 3.92975 2.84144 4.24335 2.68166C4.59987 2.5 5.06658 2.5 6 2.5H10.6667C11.6001 2.5 12.0668 2.5 12.4233 2.68166C12.7369 2.84144 12.9919 3.09641 13.1517 3.41002C13.3333 3.76654 13.3333 4.23325 13.3333 5.16667V6.66667M3.33333 17.5H13.3333M13.3333 17.5V6.66667M13.3333 17.5H16.6667M13.3333 6.66667H15.3333C15.8 6.66667 16.0334 6.66667 16.2117 6.75749C16.3685 6.83739 16.4959 6.96487 16.5758 7.12167C16.6667 7.29993 16.6667 7.53329 16.6667 8V17.5M8.33333 5.83333V9.16667M6.66667 7.5H10M10 11.6667V11.675M6.66667 11.6667V11.675M10 14.575V14.5833M6.66667 14.575V14.5833"
                  stroke="#68727D"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </svg>
              <p className="text-[#68727D] text-[14px]">Facility name</p>
            </div>
            <p className="text-[#252525] text-[14px]">{singleAppointmentData?.facility_name}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66671 12.1124C4.67404 12.6888 3.33337 13.766 3.33337 14.9998C3.33337 16.8408 6.31814 18.3332 10 18.3332C13.6819 18.3332 16.6667 16.8408 16.6667 14.9998C16.6667 13.766 15.326 12.6888 13.3334 12.1124M15 6.99984C15 9.94536 11.25 14.9998 10 14.9998C8.75004 14.9998 5.00004 9.94536 5.00004 6.99984C5.00004 4.05432 7.23862 1.6665 10 1.6665C12.7615 1.6665 15 4.05432 15 6.99984ZM11.6667 6.6665C11.6667 7.58698 10.9205 8.33317 10 8.33317C9.07957 8.33317 8.33337 7.58698 8.33337 6.6665C8.33337 5.74603 9.07957 4.99984 10 4.99984C10.9205 4.99984 11.6667 5.74603 11.6667 6.6665Z"
                  stroke="#68727D"
                  stroke-width="1.4"
                />
              </svg>

              <p className="text-[#68727D] text-[14px]">Address</p>
            </div>
            <p className="text-[#252525] text-[14px]">
            {singleAppointmentData?.facility_address}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 8.33317H17.5M6.66667 4.99984V1.6665M13.3333 4.99984V1.6665M7.83333 18.3332H12.1667C14.0335 18.3332 14.9669 18.3332 15.68 17.9699C16.3072 17.6503 16.8171 17.1403 17.1367 16.5131C17.5 15.8001 17.5 14.8667 17.5 12.9998V8.6665C17.5 6.79966 17.5 5.86624 17.1367 5.1532C16.8171 4.526 16.3072 4.01606 15.68 3.69648C14.9669 3.33317 14.0335 3.33317 12.1667 3.33317H7.83333C5.96649 3.33317 5.03307 3.33317 4.32003 3.69648C3.69282 4.01606 3.18289 4.526 2.86331 5.1532C2.5 5.86624 2.5 6.79966 2.5 8.6665V12.9998C2.5 14.8667 2.5 15.8001 2.86331 16.5131C3.18289 17.1403 3.69282 17.6503 4.32003 17.9699C5.03307 18.3332 5.96649 18.3332 7.83333 18.3332Z"
                  stroke="#68727D"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </svg>

              <p className="text-[#68727D] text-[14px]">Date</p>
            </div>
            <p className="text-[#252525] text-[14px]"> { moment(singleAppointmentData?.appointment_date).format('DD MMMM YYYY')}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3.3335C5.85789 3.3335 2.50002 6.69136 2.50002 10.8335C2.50002 14.9756 5.85789 18.3335 10 18.3335C14.1422 18.3335 17.5 14.9756 17.5 10.8335C17.5 6.69136 14.1422 3.3335 10 3.3335ZM10 3.3335V0.833496M15 5.00016L16.6667 3.3335M5.00002 5.00016L3.33336 3.3335M8.33336 0.833496H11.6667M10 7.50016V10.8335M15.8334 2.15302C16.6336 2.71773 17.3472 3.39694 17.9504 4.16683M2.19775 4.16683C2.76348 3.44475 3.42635 2.80243 4.16669 2.25954"
                  stroke="#68727D"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </svg>

              <p className="text-[#68727D] text-[14px]">Time</p>
            </div>
            <p className="text-[#252525] text-[14px]">{singleAppointmentData?.appointment_time}</p>
          </div>
            
        </div>

        <div className="bg-white flex space-x-2 justify-end w-full p-5 border-t">
        <ButtonComponent title="close" onClick={onClick} buttonStyle="bg-transparent border border-gray-500 text-gray-500 w-auto" />
        <ButtonComponent title="Cancel Appointment" buttonStyle=" w-auto bg-red-500 border text-white" onClick={handleCancelAppoinment} />
        </div>
    </div>
  )
}

export default SingleAppointment