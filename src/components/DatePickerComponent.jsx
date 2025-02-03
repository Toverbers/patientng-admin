import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './ui/calendar'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

const DatePickerComponent = ({date, setDate, label, title}) => {
  return (
    <>
       <div className='w-full'>
       {label && (<p className="text-[#252525] text-[14px] font-medium mt-0">{label}</p>)} 
       <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full h-12 justify-start text-left font-normal rounded-lg bg-gray-50 border",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>{title}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
       </div>
    </>
  )
}

export default DatePickerComponent