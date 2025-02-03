import AdminHeader from '@/components/AdminHeader'
import Filter from '@/components/dashboard/Filter'
import LineChart from '@/components/dashboard/LineChart'
import Summary from '@/components/dashboard/Summary'
import Menu from '@/components/Menu'
import SideMenuSheet from '@/components/SideMenuSheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useAuthStore from '@/store/authStore'
import { useDashboardStore } from '@/store/dashboardStore'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import PendingAdvocacy from './PendingAdvocacy'
import PendingCampaigns from './PendingCampaign'

const Dashboard = () => {
const {getDashboard, dashboardData} = useDashboardStore()
const {getMe, adminData} = useAuthStore()

useEffect(()=>{
  
  getMe()
},[])

const [openMenu, setOpenMenu] = useState(false)



//console.log("DASBOARD DATAS", dashboardData)
console.log("ADMIN DATAS", adminData)

  return (
    <div className="bg-[#FAFBFC] h-screen grow p-5 overflow-x-auto">
    <AdminHeader
      title="Dashboard" 
    />
    <Summary data={dashboardData} />

    {/* <Filter />

    <div className="border rounded-xl mt-4">
      <p className="text-[#252525] text-[16px] font-semibold p-4">
        All users
      </p>
      <hr />
       <LineChart />
    </div> */}

    <div className='mt-5 bg-white rounded-xl min-h-[300px] py-3'>
    <Tabs defaultValue="campaign" className="">
        <TabsList className="bg-transparent" >
        <TabsTrigger  value='campaign' className="">Pending Campaign</TabsTrigger> 
        <TabsTrigger  value='advocacy' className="">Pending Advocacy</TabsTrigger> 
            {/* {tabList.map((row, index) => (<TabsTrigger key={index} value={row.name} className="">{row.name}</TabsTrigger> ))} */}
        </TabsList>
        <TabsContent value="campaign"><PendingCampaigns /></TabsContent>
        <TabsContent value="advocacy"><PendingAdvocacy /></TabsContent>
        </Tabs> 
    </div>
    
  </div>
  )
}

export default Dashboard