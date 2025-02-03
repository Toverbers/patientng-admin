import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useFaqStore } from "@/store/faqStore"
import { PenBoxIcon, PenIcon } from "lucide-react"
import { useEffect } from "react"
import { MdOutlineDelete, MdOutlineRemoveRedEye, MdOutlineUpdate } from "react-icons/md"


const AllFaq = () => {
    const {getAllFaq, faqData, deletefaq} = useFaqStore()

  useEffect(()=> {
    getAllFaq()
  },[])

  console.log("ALL FAQ", faqData)

  return (
    <div>
      <Accordion type="single" collapsible>

         {faqData?.map((item, index) => (
          <div key={item?._id}  className="flex justify-between space-x-4 items-center">
          <AccordionItem value={item?._id} className="w-full">
              <AccordionTrigger>{item?.question}</AccordionTrigger>
              <AccordionContent>
              {item?.answer}
              </AccordionContent>
              
          </AccordionItem>
          <div className="flex space-x-3 items-center">
                <span onClick={() => { console.log("hello")}} ><PenBoxIcon className='text-gray-500' size={18} /></span> 
                <span onClick={() => { console.log("hello")}} ><MdOutlineDelete className='text-red-500' size={22} /></span> 
            </div>
          
      </div>
        ))} 

       {/*  <div className="flex justify-between space-x-4 items-center">
            <AccordionItem value="item-1" className="w-full">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>

            <div className="flex space-x-3 items-center">
            <span onClick={() => { console.log("hello")}} ><MdOutlineUpdate className='text-gray-500' size={22} /></span> 
            <span onClick={() => { console.log("hello")}} ><MdOutlineDelete className='text-red-500' size={22} /></span> 
            </div>
        </div>
        <div className="flex justify-between space-x-4 items-center">
            <AccordionItem value="item-1" className="w-full">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>

            <div className="flex space-x-3 items-center">
            <span onClick={() => { console.log("hello")}} ><MdOutlineUpdate className='text-gray-500' size={22} /></span> 
            <span onClick={() => { console.log("hello")}} ><MdOutlineDelete className='text-red-500' size={22} /></span> 
            </div>
        </div>
        <div className="flex justify-between space-x-4 items-center">
            <AccordionItem value="item-1" className="w-full">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>

            <div className="flex space-x-3 items-center">
            <span onClick={() => { console.log("hello")}} ><MdOutlineUpdate className='text-gray-500' size={22} /></span> 
            <span onClick={() => { console.log("hello")}} ><MdOutlineDelete className='text-red-500' size={22} /></span> 
            </div>
        </div>  */}
        </Accordion>
    </div>
  )
}

export default AllFaq