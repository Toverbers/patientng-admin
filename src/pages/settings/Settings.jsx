import BackButton from '@/components/BackButton'
import ButtonComponent from '@/components/ButtonComponent'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'
import Faq from './faq/Faq'
import Pages from './pages/Pages'
import MedicalService from './MedicalService'
import Contacts from './Contacts'
import SideMenuSheet from '@/components/SideMenuSheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import AdminHeader from '@/components/AdminHeader'
import Terms from './terms/Terms'

const Settings = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='bg-white'>
        <div className="p-5 bg-white border-b ">
      <AdminHeader
       title="Your website settings"
       hasBackButton
       />

      
    </div>

    {/* <Tab /> */}
    <div className='p-5'>
      <Tabs defaultValue="faq" className="">
        <TabsList className="bg-transparent" >
            {/* <TabsTrigger value="account" className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger> */}
        <TabsTrigger value="faq">FAQ</TabsTrigger>  
        <TabsTrigger value="pages">Pages</TabsTrigger>  
        <TabsTrigger value="terms">Terms & Condition</TabsTrigger> 
        </TabsList>
        <TabsContent value="faq"><Faq /></TabsContent>
        <TabsContent value="pages"><Pages /></TabsContent>
        <TabsContent value="terms"><Terms /></TabsContent>
        </Tabs>

      </div>

      <SideMenuSheet
      open={openMenu}
      setOpen={()=>setOpenMenu(false)}
      content
     />

    </div>
  )
}

export default Settings