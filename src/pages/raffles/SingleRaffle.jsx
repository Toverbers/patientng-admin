import BackButton from '@/components/BackButton'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect, useState } from 'react'
import RaffleInformation from './RaffleInformation'
import RaffleParticipants from './RaffleParticipants'
import { useParams } from 'react-router-dom'
import { useRaffleStore } from '@/store/raffleStore'

const SingleRaffle = () => {

    const {id} = useParams()
    const {getRaffle, singlecRaffleData} = useRaffleStore()
    const [raffleName, setRaffleName] = useState('')

    useEffect(() => {
      getRaffle({id: id})
    },[])

    useEffect(() => {
      if(singlecRaffleData){
        setRaffleName(singlecRaffleData?.raffle_name)
      }
    },[singlecRaffleData])

    console.log("RAFLLE DATA", singlecRaffleData)


  return (
    <div>
        <div className=" pt-5 bg-white border-b">
        <BackButton />

        <div className="flex space-x-2 mb-2 px-5">
            <p className="text-[#252525] text-[28px] font-semibold grow">
            Raffle details
            </p>
        </div>

            <div>
                
            <Tabs defaultValue="raffle information" >
            <TabsList className="bg-transparent px-5 ">
                <TabsTrigger value="raffle information">Raffle Information</TabsTrigger>
                <TabsTrigger value="participants">Paticipants</TabsTrigger>
            </TabsList>
            <TabsContent value="raffle information"><RaffleInformation raffleDetails={singlecRaffleData} /></TabsContent>
            <TabsContent value="participants"><RaffleParticipants /></TabsContent>
            </Tabs>
            </div>
        </div>
    </div>
  )
}

export default SingleRaffle