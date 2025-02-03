import React from 'react'
import SideMenu from './SideMenu'


const DashboardLayout = ({
    children
}) => {
  return (
    <div className='w-full h-[100vh] flex overflow-hidden'>
        <div className='h-screen '><SideMenu /></div>
        <div className='h-screen flex-1 bg-[#FAFBFC] overflow-auto box-border'>{children}</div>
    </div>
  )
}

export default DashboardLayout