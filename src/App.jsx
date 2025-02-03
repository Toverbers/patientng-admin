//import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button'
import Login from './pages/auth/Login'
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import SingleUser from './pages/users/SingleUser';
import Appointment from './pages/appointment/Appointment';
import HealthFacility from './pages/healthFacility/HealthFacility';
import SingleHealthFacility from './pages/healthFacility/SingleHealthFacility';
import WeeklyChallenge from './pages/weeklyChallenge/WeeklyChallenge';
import Products from './pages/products/Products';
import Learning from './pages/learning/Learning';
import NewLearning from './pages/learning/NewLearning';
import SingleLearning from './pages/learning/SingleLearning';
import Authors from './pages/learning/Authors';
import Categories from './pages/learning/Categories';
//import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import ProductCategories from './pages/products/ProductCategories';
import useAuthStore from './store/authStore';
import Raffles from './pages/raffles/Raffles';
import SingleRaffle from './pages/raffles/SingleRaffle';
import Quiz from './pages/quiz/Quiz';
import Prices from './pages/prices/Prices';
import Admins from './pages/admins/Admins';
import Roles from './pages/admins/roles/Roles';
import Settings from './pages/settings/Settings';
import Profile from './pages/profile/Profile';
import NewPage from './pages/settings/pages/NewPage';
import NewQuiz from './pages/quiz/NewQuiz';
import SingleQuiz from './pages/quiz/SingleQuiz';
import Orders from './pages/orders/Orders';
import Newsletter from './pages/newsletter/Newsletter';
import NewNewsletter from './pages/newsletter/NewNewsletter';
import Campaigns from './pages/campaigns/Campaigns';
import Advocacy from './pages/advocacy/Advocacy';
import Podcasts from './pages/podcast/Podcast';
import { useEffect } from 'react';
import SingleCampaign from './pages/campaigns/SingleCampaign';
import NewPodcast from './pages/podcast/NewPodcast';
import PodcastCategory from './pages/podcast/PodcastCategory';
import SingleAdvocacy from './pages/advocacy/SingleAdvocacy';
import SinglePodcast from './pages/podcast/SinglePodcast';



const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();
    
    //const token = localStorage.getItem('token')
	
	if (isAuthenticated) {
		return <Navigate to='/' replace />;
	}

	return children;
};


const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();
    
    //const token = localStorage.getItem('token')
	
	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

function App() {
 // const [count, setCount] = useState(0)
 const { checkAuth } = useAuthStore();

 useEffect(() =>{
  checkAuth()
 },[])

  return (
    <>
      {/* <div className='w-full h-[100vh] p-[80px] flex flex-col justify-center items-center'>
        
        <p className='text-3xl'>Hello</p>
        <Button className="bg-lime-500">Click me</Button>
        
       </div> */}
      

       <BrowserRouter>
          <Routes>
            <Route path='/login' element={<RedirectAuthenticatedUser><Login/></RedirectAuthenticatedUser> } /> 

            <Route path='/' element={<ProtectedRoute><DashboardLayout><Dashboard/> </DashboardLayout></ProtectedRoute>} /> 
            <Route path='/users' element={<DashboardLayout><Users/> </DashboardLayout>} /> 
            <Route path='/users/:id' element={<DashboardLayout><SingleUser/> </DashboardLayout>} /> 
            <Route path='/appointments' element={<DashboardLayout><Appointment/> </DashboardLayout>} /> 
            <Route path='/health-facilities' element={<DashboardLayout><HealthFacility/> </DashboardLayout>} /> 
            <Route path='/health-facilities/:id' element={<DashboardLayout><SingleHealthFacility/> </DashboardLayout>} /> 
            <Route path='/weekly-challenge' element={<DashboardLayout><WeeklyChallenge/> </DashboardLayout>} /> 
            <Route path='/products' element={<DashboardLayout><Products/> </DashboardLayout>} />
            <Route path='/campaigns' element={<DashboardLayout><Campaigns/> </DashboardLayout>} />
            <Route path='/campaigns/:id' element={<DashboardLayout><SingleCampaign/> </DashboardLayout>} /> 
            <Route path='/advocacy' element={<DashboardLayout><Advocacy/> </DashboardLayout>} />
            <Route path='/advocacy/:id' element={<DashboardLayout><SingleAdvocacy/> </DashboardLayout>} />
            <Route path='/podcasts' element={<DashboardLayout><Podcasts/> </DashboardLayout>} />
            <Route path='/podcast-category' element={<DashboardLayout><PodcastCategory/> </DashboardLayout>} />
            <Route path='/new-podcast' element={<DashboardLayout><NewPodcast/> </DashboardLayout>} />
            <Route path='/podcast/:id' element={<DashboardLayout><SinglePodcast/> </DashboardLayout>} />
            <Route path='/orders' element={<DashboardLayout><Orders/> </DashboardLayout>} /> 
            <Route path='/product-category' element={<DashboardLayout><ProductCategories/> </DashboardLayout>} /> 
            <Route path='/blogs' element={<DashboardLayout><Learning/> </DashboardLayout>} /> 
            <Route path='/new-blog' element={<DashboardLayout><NewLearning/> </DashboardLayout>} /> 
            <Route path='/blog/:id' element={<DashboardLayout><SingleLearning/> </DashboardLayout>} />
            <Route path='/authors' element={<DashboardLayout><Authors/> </DashboardLayout>} />
            <Route path='/categories' element={<DashboardLayout><Categories/> </DashboardLayout>} />
            <Route path='/raffles' element={<DashboardLayout><Raffles/> </DashboardLayout>} />
            <Route path='/raffles/:id' element={<DashboardLayout><SingleRaffle/> </DashboardLayout>} />
            <Route path='/quiz' element={<DashboardLayout><Quiz/> </DashboardLayout>} />
            <Route path='/new-quiz' element={<DashboardLayout><NewQuiz/> </DashboardLayout>} />
            <Route path='/quiz' element={<DashboardLayout><Quiz/> </DashboardLayout>} />
            <Route path='/single-quiz' element={<DashboardLayout><SingleQuiz/> </DashboardLayout>} />
            <Route path='/prices' element={<DashboardLayout><Prices/> </DashboardLayout>} />
            <Route path='/admins' element={<DashboardLayout><Admins/> </DashboardLayout>} />
            <Route path='/roles' element={<DashboardLayout><Roles/> </DashboardLayout>} />
            <Route path='/settings' element={<DashboardLayout><Settings/> </DashboardLayout>} />
            <Route path='/new-page' element={<DashboardLayout><NewPage/> </DashboardLayout>} />
            <Route path='/profile' element={<DashboardLayout><Profile/> </DashboardLayout>} />
            <Route path='/newsletter' element={<DashboardLayout><Newsletter/> </DashboardLayout>} />
            <Route path='/new-newsletter' element={<DashboardLayout><NewNewsletter/> </DashboardLayout>} />

          </Routes>
          <Toaster />
       </BrowserRouter>
       
    </>
  )
}

export default App
