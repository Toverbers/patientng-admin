import React, { useEffect } from "react";
import SummaryItem from "./SummaryItem";
import { useUserStore } from "@/store/usersStore";
import { UseCampaignStore } from "@/store/campaignStore";
import { UseAdvocacyStore } from "@/store/advocacyStore";

const Summary = ({data}) => {
  const {getAllUser, userData} =useUserStore()
  const {getAllCampaigns, campaignData} = UseCampaignStore()
  const {getAllAdvocacy, advocacyData} = UseAdvocacyStore()

  useEffect(() =>{
    getAllUser()
    getAllCampaigns()
    getAllAdvocacy()
  },[])

  const adminUsers = userData?.filter(user => user?.isAdmin);
  return (
    <div>
      <div className="hidden p-4 border rounded-xl mt-4 md:flex items-center bg-white">
        <SummaryItem title="All users" value={userData?.length || 0} />
        <div className="h-16 w-0.5 bg-gray-200 mx-2"></div>
        <SummaryItem title="Admin users" value={adminUsers?.length || 0} />
        <div className="h-16 w-0.5 bg-gray-200 mx-2"></div>
        <SummaryItem title="Advocacies" value={advocacyData?.length || 0} />
        <div className="h-14 w-0.5 bg-gray-200 mx-2"></div>
        <SummaryItem title="All Campaigns" value={campaignData?.length || 0} />
        {/* <div className="h-16 w-0.5 bg-gray-200 mx-2"></div>
        <SummaryItem title="Products" value={userData?.length || 0} /> */}
      </div>

      {/* <div className="p-4 border rounded-xl mt-4 md:hidden items-center bg-white">
        <div className="grid grid-cols-2 gap-3">
          <SummaryItem title="Total Orders" value="2,000" />
          <SummaryItem title="Admin users" value="10" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SummaryItem title="All users" value="21,250" />
          <SummaryItem title="All appointments" value="21,250" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SummaryItem title="Products" value="21,250" />
        </div>
      </div> */}
      <div className="p-4 border rounded-xl mt-4 md:hidden items-center bg-white">
        <div className="flex flex-col space-y-3">
        <SummaryItem title="All users" value={userData?.length || 0} className="border-b border-b-1 border-b-[#f1f1f1] pb-2" />
        <SummaryItem title="Admin users" value={adminUsers?.length || 0} className="border-b border-b-1 border-b-[#f1f1f1] pb-2" />
        <SummaryItem title="Advocacies" value={advocacyData?.length || 0}  className="border-b border-b-1 border-b-[#f1f1f1] pb-2" />
        <SummaryItem title="All Campaigns" value={campaignData?.length || 0} className="border-b border-b-1 border-b-[#f1f1f1] pb-2" />
        </div>
       
      </div>
    </div>
  );
};

export default Summary;
