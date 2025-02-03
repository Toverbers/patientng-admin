import { create } from "zustand";

import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const useRaffleStore = create((set, get) => ({
    raffleData: null,
	singleRaffleData: null,
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


 createRaffle: async ({ raffle_name, raffle_description, raffle_image, number_of_participant, ticket_price, raffle_price, quantity, start_date, end_date, release_date, publish_time}) => {
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
	}, 

    getAllRaffle: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/raffle/get", {
				params: { page, limit },
			  });
			set({  loading: false,  raffleData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit});
			//console.log("All Raffle result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getRaffle: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/raffle/${id}`);
			set({  loading: false,  singlecRaffleData: res.data.data});
			console.log("single Raffle result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateRaffle: async ({id, raffle_name, raffle_description, raffle_image, number_of_participant, ticket_price, start_date, end_date, release_date, publish_time, raffle_price, quantity}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/raffle/${id}`, {raffle_name, raffle_description, raffle_image, number_of_participant, ticket_price, start_date, end_date, release_date, publish_time, raffle_price, quantity});
			set({  loading: false });
			console.log("update Raffle result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    changeRaffleStatus: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/raffle/${id}`, {status});
			set({  loading: false });
			//console.log("update status result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Raffle status", loading: false });
			//console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}

    },
    setRaffleFeatured: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.patch(`/admin/raffle/featured_raffle/${id}`, );
			set({  loading: false });
			//console.log("update status result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Raffle status", loading: false });
			//console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}

    },

     deleteRaffle: async ({id}) => {
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
	},



}))