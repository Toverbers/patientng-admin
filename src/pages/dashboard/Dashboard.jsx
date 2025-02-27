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
import { hasPermission } from '@/utils/roleAuthorization'
import { Link } from 'react-router-dom'


const Dashboard = () => {
const {getDashboard, dashboardData} = useDashboardStore()
//const {getMe, adminData} = useAuthStore()
const {getMe, myData} = useAuthStore()

  useEffect(()=>{
    getMe()
  },[])

useEffect(()=>{
  
  getMe()
},[])

const [openMenu, setOpenMenu] = useState(false)



//console.log("DASBOARD DATAS", dashboardData)
console.log("ADMIN INFORMATION",  myData)

  return (
  
  <div>
    {hasPermission( myData?.userType, ["admin", ]) && (
  <div className="bg-[#FAFBFC] h-screen grow p-5 overflow-x-auto">
    <AdminHeader
      title="Dashboard" 
    />
    <Summary data={dashboardData} />
   <div className='mt-5 bg-white rounded-xl min-h-[300px] py-3'>
       <Tabs defaultValue="campaign" className="">
        <TabsList className="bg-transparent" >
          <TabsTrigger  value='campaign' className="">Pending Campaign</TabsTrigger>
          <TabsTrigger  value='advocacy' className="">Pending Advocacy</TabsTrigger>
        </TabsList>
        <TabsContent value="campaign"><PendingCampaigns /></TabsContent>
        <TabsContent value="advocacy"><PendingAdvocacy /></TabsContent>
    </Tabs> 
    </div>
    </div>
    )}

    {hasPermission( myData?.userType, ["user", ]) && (
        <>
          <AdminHeader
          title="Dashboard" 
        />

      <div className="bg-[#FAFBFC] h-screen grow p-5 overflow-x-auto">
        <Link to="/profile">
          <div className="flex items-center space-x-3">
            <img crossOrigin='anonymous' src={myData?.image? `${import.meta.env.VITE_MAIN_URL}/${myData?.image}` : '/assets/png/user.png'} alt="user"  className="rounded-full w-28 h-28" />
            <div>
            <h2 className='text-3xl font-semi-bold'>Welcome {myData?.firstName} {myData?.lastName}</h2>
              <p className="text-[#68727D] text-[14px]">{myData?.email}</p>
            </div>
          </div>
          </Link>

          <div className="min-h-[300px] w-full bg-emerald-500 mt-10 p-10  flex flex-col md:flex-row space-x-5">
           <div className='space-y-5'>
           <h2 className='text-5xl text-white'>Empowering Patients,
            Transforming Healthcare.</h2>
            <p className="text-white text-base">Discover our advocacy-driven platform, where members can launch patient campaigns that transform passive community engagement into active patient support.</p>
           </div>

            <img src="/assets/png/health.png" alt="imaging" className="w-[280px] h-auto" />
          </div>
      </div>
        </>
    )}
    
    </div>
  )
}

export default Dashboard