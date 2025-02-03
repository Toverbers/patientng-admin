import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const UseAppointmentStore = create((set, get) => ({
    appointmentData: null,
	singleAppointmentData: null,
	appointmentPrice: null,
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


	/* createClient: async ({ firstName, lastName, phone, email, companyName, additionalInformation, dob}) => {
		set({ loading: true });

		try {
			const res = await axios.post("/create-client", { firstName, lastName, phone, email, companyName, additionalInformation, dob });
			set({  loading: false,  });
			console.log("Clients result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating clients", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */

    getAllAppointment: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/appointment/get", {
				params: { page, limit },
			  });
			set({  loading: false,  appointmentData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit});
			//console.log("All appointments result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching appointments", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getAppointment: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/appointment/${id}`);
			set({  loading: false,  singleAppointmentData: res.data.data});
			console.log("single application result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    /* updateAppointment: async ({}) => {
		set({ loading: true });

		try {
			const res = await axios.put(`/update-client/${id}`, {});
			set({  loading: false });
			console.log("update testimonial result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating testimonial", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */

    changeAppointmentStatus: async ({id, reason}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/appointment/cancel/${id}`, {reason});
			set({  loading: false });
			//console.log("update status result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating status", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}

    },


  /*   deleteAppointment: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axios.delete(`/delete-client/${id}`);
			set({  loading: false });
			console.log("deleted client")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting client", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */



}))