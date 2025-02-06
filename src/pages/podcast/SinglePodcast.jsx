import AdminHeader from '@/components/AdminHeader'
import ButtonComponent from '@/components/ButtonComponent'
import DatePickerComponent from '@/components/DatePickerComponent'
import InputField from '@/components/InputField'
import TextEditor from '@/components/TextEditor'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import UploadField from '@/components/UploadField'
import { UsePodcastStore } from '@/store/podcastStore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePodcast = () => {
    const {getPodcastCategory, podcastCategoryData, createPodcast, getPodcast, singlePodcast, updatePodcast} = UsePodcastStore()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [producedBy, setProducedBy] = useState('')
    
    /* const [sourceData, setSourceData] = useState([
      { source: "", link: "" }
    ]); */
    const [releaseDate, setReleaseDate] = useState('')
    const [duration, setDuration] = useState('')
    const [summary, setSummary] = useState('')
    const [image, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const [source, setSource] = useState("");
  const [link, setLink] = useState("");
  const {id} = useParams()

  // Combine into sourceData
  const sourceData = [{ source, link }];

    useEffect(() => {
        getPodcastCategory()
        getPodcast({id: id})
      },[])

      console.log("SINGLE PODCAST", singlePodcast)

      useEffect(() =>{
       if(singlePodcast){
         setTitle(singlePodcast?.title)
         setCategory(singlePodcast?.category)
         setProducedBy(singlePodcast?.producedBy)
         setReleaseDate(singlePodcast?.releaseDate)
         setDuration(singlePodcast?.duration)
         setSummary(singlePodcast?.summary)
         setImage(singlePodcast?.image)
         setSource(singlePodcast?.channels[0].source)
         setLink(singlePodcast?.channels[0].link)
       }
      },[singlePodcast])

      const handleImageChange = async (e) => {
        setImage(e.target.files[0]);
        console.log("Image file", image)
        const url = await URL.createObjectURL(e.target.files[0] || image);
        setImageUrl(url)
      };

      const handleUpdatePodcast = async () => {
      await updatePodcast({id: id, title: title, category: category, summary: summary, duration: duration, producedBy: producedBy, source: JSON.stringify(sourceData), image: image, releaseDate: releaseDate, status: "published"})
      }

      console.log("SOURCE DATA", JSON.stringify(sourceData))

  return (
    <div className='px-5 '>
        <div>
        <AdminHeader
            title="Podcast Details" 
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
          
          
          
        </div>
            </>
        }
        />
        </div>

        <div className=''>
            <div className='my-5'>
            <InputField title="Blog Title" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <div className='flex space-x-3 items-center'>

             <Select className="" defaultValue={category}
                value={category}
                onValueChange={(value) => {setCategory(value)}} >
              <SelectTrigger className="h-[50px]">
                {/*  <SelectValue placeholder={category?.name} /> */}
                <SelectValue placeholder="select Category"></SelectValue>
              </SelectTrigger>
              <SelectContent>
              {podcastCategoryData?.map((row) => (<SelectItem key={row?._id} value={row?.name}>{row?.name}</SelectItem> ))}
              </SelectContent>
            </Select>


            <InputField title="Producer" placeholder="Enter Producer name" value={producedBy} onChange={(e) => setProducedBy(e.target.value)} />
          </div>

          <div className='flex space-x-3 items-center'>
          <InputField title="Source" placeholder="Enter source eg. Youtube" value={source} onChange={(e) => setSource( e.target.value )} />
          <InputField title="Source Link" placeholder="Enter source Link eg. https:youtube.com" value={link} onChange={(e) => setLink( e.target.value)} />
          </div>
          {/* <pre>{JSON.stringify(sourceData, null, 2)}</pre> */}
          

          <div className='flex space-x-3 items-center'>

          <InputField title="Duration" placeholder="Enter Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
          <DatePickerComponent date={releaseDate} setDate={setReleaseDate} title="Challenge Date" label="Challenge Date" />
          </div>
          <UploadField label="Upload Header Image" onChange={handleImageChange} />
          {imageUrl ? 
          <img crossOrigin='annonymous'  src={imageUrl } alt="raffleImage" className='h-[150px] max-w-[250px] object-cover'/> 
          :
          <img crossOrigin='annonymous' src={`${import.meta.env.VITE_MAIN_URL}/${image}`} alt="raffleImage" className='h-[150px] max-w-[250px] object-cover'/>
          }

          <div className='my-5'>
          <TextEditor
            value={summary}
            onChange={setSummary}
           />
          </div>

          <ButtonComponent title="Update Podcast" buttonStyle="bg-emerald-500 text-white" onClick={handleUpdatePodcast}/>
            </div>
        </div>

        </div>
  )
}

export default SinglePodcast