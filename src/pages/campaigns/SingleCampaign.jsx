import AdminHeader from '@/components/AdminHeader'
import ButtonComponent from '@/components/ButtonComponent'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { UseCampaignStore } from '@/store/campaignStore'
import { Calendar, Heart, MapPin } from 'lucide-react'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace('NGN', 'N')
  }

const SingleCampaign = () => {
    const {getCampaign, singleCampaign, ActivateCampaign, finishCampaign} = UseCampaignStore()
    const {id} = useParams()

    useEffect(() =>{
    getCampaign({id: id})
    },[])

    console.log("SINGLE CAMPAIGN DATA", singleCampaign)

    const handleActivateCampaign = async () => {
     await ActivateCampaign({id: id})
    }

    const handleFinishCampaign = async () => {
     await finishCampaign({id: id})
    }

    const progressPercentage = (singleCampaign?.amountRaised / singleCampaign?.amountNeeded) * 100



  return (
    <div className='px-5 '>
        <div>
        <AdminHeader
        title="Campaign Details" 
        hasBackButton
        content={
            <>
             <div className="mt-3 md:mt-0 flex items-center space-x-3">
          {/* {singleCampaign?.status === 'active' && 
           <ButtonComponent title={`Deactivate User`}
           //onClick={handleDeactivateUser}
            buttonStyle="bg-tranparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            
           />
          } */}
          
          {singleCampaign?.status === 'pending' &&
           <ButtonComponent title="Approve Campaign" 
           onClick={handleActivateCampaign} 
           buttonStyle="bg-emerald-500" />
          }
          {singleCampaign?.status === 'inactive' &&
           <ButtonComponent title="Approve Campaign" 
           onClick={handleActivateCampaign} 
           buttonStyle="bg-emerald-500" />
          }
          {singleCampaign?.status === 'active' && 
           <ButtonComponent title="Make as Done" 
           onClick={handleFinishCampaign} 
           buttonStyle="bg-emerald-500" />
          }
          
        </div>
            </>
        }
        />
        </div>

        <div className="w-full bg-white rounded-2xl border border-gray-100 overflow-x-auto overflow-y-auto box-border mt-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${singleCampaign?.image}`}
          alt="Campaign"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge 
            variant="secondary" 
            className={` border-none`}
          >
            Status {singleCampaign?.status}
          </Badge>
        </div>
        {/* <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={onDelete}
          >
            Delete campaign
          </Button>
        </div> */}
      </div>

      <div className="p-6 space-y-6">
      <h2 className='text-3xl'>{singleCampaign?.title}</h2>
        <div className="flex items-center gap-3">
       
          {/* <Avatar className="h-10 w-10">
            <AvatarImage src={organizer.avatar} />
            <AvatarFallback>{singleCampaign?.user?.firstName.slice(0,1)}</AvatarFallback>
          </Avatar> */}
          
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">{singleCampaign?.user?.firstName} {singleCampaign?.user?.lastName}</span>
            {' is organising a '}
            <span className="text-gray-900">fundraiser on behalf of </span>
            <span className="font-semibold text-gray-900">{singleCampaign?.fundraisingFor}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4" />
          {singleCampaign?.location?.state}, {singleCampaign?.location?.lga}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
        <Heart className="h-4 w-4 mr-2" color='#10b981' />
        {singleCampaign?.likes?.length} Likes
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
        <Calendar className="h-4 w-4 mr-2" color='#10b981' />
        {moment(singleCampaign?.createdAt).format('DD MMMM YYYY')}
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold">
              {formatCurrency(singleCampaign?.amountRaised)} raised
            </h3>
            <p className="text-sm text-gray-500">
              of {singleCampaign?.amountNeeded} goal
            </p>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-2 bg-gray-100 [&>div]:bg-emerald-500" />
          <p className="text-sm text-gray-500">{singleCampaign?.amountRaised} donations</p>
        </div> 

        <div>
           <p>{singleCampaign?.description}</p> 
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default SingleCampaign