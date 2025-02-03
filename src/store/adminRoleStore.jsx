import { create } from "zustand";

import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const useAdminRoleStore = create((set, get) => ({
    adminData: null,
    myData: null,
	roleData: null,
	singleAdminData: null,
	permissionData: null,
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

    getAllAdmin: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/all", {
				params: { page, limit },
			  });
			set({  loading: false,  adminData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit});
			//console.log("All Raffle result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Admins", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getMyAdmin: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/me");
			set({  loading: false,  myData: res.data.data});
			//console.log("All Raffle result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Admins", loading: false });
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
	},  

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
	*/

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


	createAdmin: async ({firstname, lastname, email, password, role, permissions }) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/admin/create", { firstname, lastname, email, password, role, permissions });
			set({  loading: false,  });
			//console.log("Raffle result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Admin user", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 
	createRole: async ({name, description }) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/roles", { name, description });
			set({  loading: false,  });
			//console.log("Raffle result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

	getAllRole: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/roles`);
			set({  loading: false,  roleData: res.data.data.data});
			console.log("Roll result",res.data.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Raffle", loading: false });
			console.log(error);
			//toast.error(error.response.data.message || "An error occurred");
		}
	},

	getAllPermission: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/permission`);
			set({  loading: false,  permissionData: res.data.data});
			console.log("Roll result",res.data.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Permission", loading: false });
			console.log(error);
			//toast.error(error.response.data.message || "An error occurred");
		}
	},

	getRole: async ({id}) => {
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

	deleteAdmin: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/admin/${id}`);
			set({  loading: false });
			console.log("deleted Raffle")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



	deleteRole: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/roles/${id}`);
			set({  loading: false });
			console.log("deleted Raffle")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting Raffle", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}

	

	

}))