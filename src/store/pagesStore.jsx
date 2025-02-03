import { create } from "zustand";

import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const usePagesStore = create((set, get) => ({
    pageData: null,
	singlePageData: null,
	loading: false,
	error: null,
	message: null,
	currentPage: 1,
	itemsPerPage: 10,
	totalPages: 1,

	setPage: (page) => {
		console.log("setPage called with:", page);
		set({ currentPage: page });
		//console.log("New currentPage in state:", get().currentPage);
	  },


 createPage: async ({ name, description, slug}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/admin/pages/create", { name, description, slug  });
			set({  loading: false,  });
			console.log("FAQ result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllPage: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/pages", {
				params: { page, limit },
			  });
			set({  loading: false,  pageData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit});
			//console.log("All quiz result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Page", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getPage: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/pages/${id}`);
			set({  loading: false,  singlecPageData: res});
			console.log("single qiiz result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updatePage: async ({id,name, description, slug}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/pages/${id}`, {name, description, slug});
			set({  loading: false });
			console.log("update Page result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Page", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    

     deletePage: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/admin/pages/${id}`);
			set({  loading: false });
			console.log("deleted Page")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting page", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
     


}))