

import { Link, useNavigate } from "react-router-dom";
import ExitIcon from "../icons/Exiticon";
import useAuthStore from "@/store/authStore";




const BottomAction = ({data}) => {

  const {logout} = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-between px-5 my-3">
      <Link to="/profile">
      <div className="flex items-center space-x-3">
        <img crossOrigin='anonymous' src={data?.image? `${import.meta.env.VITE_MAIN_URL}/${data?.image}` : '/assets/png/user.png'} alt="user" width={20} height={20} />
        <div>
          <p className="text-[#252525] text-[15px] font-bold">{data?.lastName}</p>
          <p className="text-[#68727D] text-[14px]">{data?.email}</p>
        </div>
      </div>
      </Link>

     <span onClick={handleLogout}> <ExitIcon /></span>
    </div>
  );
};

export default BottomAction;
