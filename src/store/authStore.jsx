import { create } from "zustand";
import { toast } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import axiosInstance from '../utils/axiosInstance';

const useAuthStore = create((set) => ({
  user: null,
  myData: null,
  token: null,
  authenticated: false,
  adminData: null,
  loading: false,
  error: null,
  showErrorModal: false,


  checkAuth: async () => {
    set({ checkingAuth: true });
    const refreshToken = localStorage.getItem('refreshToken')
    console.log(" refresh token",refreshToken)
    console.log("Authorized")
    try {
      
      const response = await axiosInstance.post("/get-access-token", {refreshToken: refreshToken});
      set({ user: response.data, checkingAuth: false, isAuthenticated: true, });
      localStorage.setItem('accessToken', response.data.result);
      console.log('NEW ACCESS access-token',response.data.result)
    } catch (error) {
      console.log("ACCESS TOKEN ERROR",error);
      set({ checkingAuth: false, user: null });
    }
  },

  login: async ({email, password}) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/sign-in', { email, password });
      const token  = response.data?.tokens;
      const user = response.data?.result
      console.log("LOGIN User", response)
	  localStorage.setItem('accessToken', response.data.tokens.accessToken);
      localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
	  toast.success(response.data.message);
      set({ user: user, token: token, loading: false, isAuthenticated: true, });
    } catch (error) {
      console.error("Login failed", error);
      set({ loading: false, error: 'Login failed. Please check your credentials.', showErrorModal: true });
	  toast.error(error.response.data.message || "An error occurred");
    }
  },

  getMe: async () => {
		set({ loading: true });
        
		try {
			const token = localStorage.getItem('accessToken')
			const decodeToken = jwtDecode(token);
			console.log("DECODED DATA", decodeToken)
			 const res = await axiosInstance.get(`/get-single-user/${decodeToken?.userId}`);
			set({  loading: false,  myData: res.data.result});
			console.log("user result",res.data.data) 
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error fetching", loading: false });
			console.log("get user error",error);
			//toast.error(error.response.data.message || "An error occurred");
		}
	},

  updateUserProfile: async ({id, firstName, lastName, email, phone, image, age, gender, address, state, lga}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	}

		try {
			const res = await axiosInstance.put(`/update-user-profile/${id}`, {age, gender, address, state, lga, firstName, lastName, email, phone, image,}, config);
			set({  loading: false, onboardSuccess: true });
			toast.success(res.data.message);
			//toast.success("challenge updated successfully");
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Facility", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},


  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    set({ user: null, token: null, isAuthenticated: null, isLogout: true });
  },
  closeErrorModal: () => set({ showErrorModal: false, error: null }),
}));

export default useAuthStore;
