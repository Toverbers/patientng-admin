import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";


export const useWebsiteStore = create((set,get) => ({

	websiteData: null,
    singleWebsite: null,
	loading: false,
	error: null,
	message: null,


    createDocs: async ({ termsAndCondition, aboutUs, contactUs,}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/create-dedocs", { termsAndCondition, aboutUs, contactUs, });
			set({  loading: false,  });
			console.log("website result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Docs", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAllDOcs: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/get-dedocs");
			set({  loading: false,  websiteData: res.data.result});
			//console.log("All Blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blogs", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
/* 
    getNewsletter: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axios.get(`/get-single-newsletter/${id}`);
			set({  loading: false,  singleNewsletter: res});
			console.log("single blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */

    updatePage: async ({aboutUs, contactUs,}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/post-contact-about-us`, {aboutUs, contactUs});
			set({  loading: false });
			console.log("update Docs result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Docs", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    updateTerms: async ({content}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/post-t-and-c`, {content});
			set({  loading: false });
			console.log("update Docs result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Docs", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}));