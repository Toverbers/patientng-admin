import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const UsePodcastStore = create((set, get) => ({
    podcastData: null,
    singlePodcast: null,
    podcastCategoryData: null,
	loading: false,
	error: null,
	message: null,




	createPodcast: async ({ title, category, summary, duration, producedBy, source, image, status, releaseDate}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	    }
		try {
			const res = await axiosInstance.post("/post-podcast", { title, category, summary, duration, producedBy, source, image, status, releaseDate }, config);
			set({  loading: false,  });
			//console.log("Podcast result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error creating Podcast", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getAllPodcast: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/get-podcasts");
			set({  loading: false,  podcastData: res.data.results});
			//console.log("All Blog result",res.data.results)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Podcasts", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

     getPodcast: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-single-podcast/${id}`);
			set({  loading: false,  singlePodcast: res.data.result});
			console.log("single podcast result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Podcast", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

	updatePodcast: async ({id, title, category, summary, duration, producedBy, source, image, status, releaseDate}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	    }

		try {
			const res = await axiosInstance.put(`/update-podcast/${id}`,{title, category, summary, duration, producedBy, source, image, status, releaseDate}, config);
			set({  loading: false });
			console.log("update podcast result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating podcast", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
	updatePodcastStatus: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/change-podcast-status/${id}`,{status});
			set({  loading: false });
			console.log("update podcast result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating podcast", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	deletePodcast: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/delete-podcast/${id}`);
			set({  loading: false });
			console.log("deleted podcast")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting podcast", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	createPodcastCategory: async ({ name}) => {
		set({ loading: true });
		
		try {
			const res = await axiosInstance.post("/post-podcast-category", { name });
			set({  loading: false,  });
			//console.log("Podcast result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error creating Podcast", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

     getPodcastCategory: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get-podcast-categories/`);
			set({  loading: false,  podcastCategoryData: res.data.results});
			console.log("single Podcast category",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Podcast Category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

	deletePodcastCategory: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/delete-podcast-category/${id}`);
			set({  loading: false });
			//console.log("deleted podcast category")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting podcast category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    


}))