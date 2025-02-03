import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'

const ModalComponent = ({content, title, open, setOpen, onClick}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} className="">
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[40%]">
        {/* <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
           <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> 
        </DialogHeader> */}
        <div className="grid gap-4 bg-[#FAFBFC]">
          {content}
        </div>
        {/* <DialogFooter>
          <Button type="submit" onClick={setOpen}>cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}

export default ModalComponent