import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import MobileMenu from './MobileMenu'

const MobileSideSheet = ({content, title, open, setOpen, sheetStyle}) => {
  return (
    <>
     <Sheet open={open} onOpenChange={setOpen} >
    
    <SheetContent className={`w-[100%] md:w-[500px] md:max-w-[500px] p-0 ${sheetStyle}`} side="right">
        {/* <SheetHeader>
        <SheetTitle>Are you absolutely sure?</SheetTitle>
        <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
        </SheetDescription>
        </SheetHeader> */}
        <MobileMenu />
    </SheetContent>
    </Sheet>
    </>
  )
}

export default MobileSideSheet