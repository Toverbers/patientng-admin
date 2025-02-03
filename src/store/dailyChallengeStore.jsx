import { create } from "zustand";
//import axios from "../lib/axios";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const useDailyChallengeStore = create((set, get) => ({
    challengeData: null,
	singleChallengeData: null,
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


 createChallenge: async ({ challenge_name, challenge_description, challenge_short_message, challenge_instructions, challenge_image, day_of_participation,reward_type,reward_value,challenge_end_date, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/admin/challenge", { challenge_name, challenge_description, challenge_short_message, challenge_instructions, challenge_image, day_of_participation,reward_type,reward_value,challenge_end_date, status });
			set({  loading: false,  });
			console.log("Challenge result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating challenge", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllChallenge: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/challenge/get", {
				params: { page, limit },
			  });
			set({  loading: false,  challengeData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit});
			//console.log("All appointments result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching challenge", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getChallenge: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/challenge/${id}`);
			set({  loading: false,  singleChallengeData: res.data.data});
			console.log("single application result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Application", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateChallenge: async ({id, challenge_name, challenge_description, challenge_short_message, challenge_instructions, challenge_image, day_of_participation,reward_type,reward_value,challenge_end_date, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/challenge/${id}`, {challenge_name, challenge_description, challenge_short_message, challenge_instructions, challenge_image, day_of_participation,reward_type,reward_value,challenge_end_date, status});
			set({  loading: false });
			console.log("update challeneg result",res.data.message)
			//toast.success(res.data.message);
			toast.success("challenge updated successfully");
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating testimonial", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    changeChallengeStatus: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/change-appointment-status/${id}`, {status});
			set({  loading: false });
			//console.log("update status result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating status", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}

    },

     deleteChallenge: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/admin/challenge/${id}`);
			set({  loading: false });
			console.log("deleted client")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting challenge", loading: false });
			console.log("DELETE ERROR",error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}))