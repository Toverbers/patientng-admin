import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import SideMenuSheet from './SideMenuSheet'
import BackButton from './BackButton'

const AdminHeader = ({title, content, hasBackButton}) => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
     <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:items-center my-5">
      <div className="flex-1 flex space-x-4 items-center">
        {hasBackButton && (<BackButton />)}
        <span className='md:hidden cursor-pointer' onClick={()=>setOpenMenu(true)}><HamburgerMenuIcon className='w-[22px] h-[22px]' /></span>
        <p className="text-[#252525] text-[28px] font-semibold">{title}</p>
      </div>

      <div className='flex-1 flex flex-wrap space-y-2 md:space-y-0 md:justify-end'>
        {content}
      </div>
    </div>

    <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />
    </>
  )
}

export default AdminHeader