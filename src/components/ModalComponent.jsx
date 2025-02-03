import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

const ModalComponent = ({content, title, open, setOpen, sheetStyle}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} className="">
  {/* <DialogTrigger>Open</DialogTrigger> */}
  <DialogContent className="p-[0px] sm:max-w-[80%] h-[90vh]">
    {/* <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader> */}
    <div className=" bg-[#FAFBFC] h-full overflow-y-auto box-border">
          {content}
        </div>
  </DialogContent>
</Dialog>
  )
}

export default ModalComponent