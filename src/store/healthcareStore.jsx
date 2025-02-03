import { create } from "zustand";

import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const useHealthcareStore = create((set, get) => ({
    healthcareData: null,
	singleHealthcareData: null,
	loading: false,
	error: null,
	message: null,
	data: [],
	currentPage: 1,
	itemsPerPage: 10,
	totalPages: 1,

	setPage: (page) => {
		console.log("setPage called with:", page);
		set({ currentPage: page });
		//console.log("New currentPage in state:", get().currentPage);
	  },



 /* createRaffle: async ({ raffle_name, raffle_description, raffle_image, number_of_participant, ticket_price, raffle_price, quantity, start_date, end_date, release_date, publish_time}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/admin/raffle", { raffle_name, raffle_description, raffle_image, number_of_participant, ticket_price, raffle_price, quantity, start_date, end_date, release_date, publish_time });
			set({  loading: false,  });
			console.log("Raffle result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},  */

    getAllHealthcare: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/personel/get", {
				params: { page, limit },
			  });
			set({  loading: false,  healthcareData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit});
			//console.log("All Raffle result",res.data.result)
			//toast.success(res.data.message);
			console.log("All Healthcare FULL",res)
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getHealthcare: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/personel/${id}`);
			set({  loading: false,  singlecHealthcareData: res.data.data});
			console.log("single Healthcare result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Raffle", loading: false });
			console.log(error);
			//toast.error(error.response.data.message || "An error occurred");
		}
	},

    /* updateHealthcare: async ({}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/raffle/${id}`, {});
			set({  loading: false });
			console.log("update Raffle result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */ 

    changeHealthcareStatus: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/personel/action/${id}`, {status});
			set({  loading: false });
			console.log("update status result",res.data.data)
			toast.success(res.data.data );
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Raffle status", loading: false });
			//console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}

    },
    healthcareStatusChange: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/personel/activate/${id}`, {status});
			set({  loading: false });
			//console.log("update status result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Raffle status", loading: false });
			//console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}

    },

     /* deleteRaffle: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/raffle/${id}`);
			set({  loading: false });
			console.log("deleted Raffle")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */



}))