import { create } from "zustand";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";


export const useProductStore = create((set,get) => ({

	productData: null,
    singleProduct: null,
	orderData: null,
    categoryData: null,
	loading: false,
	error: null,
	message: null,
	data: [],
	currentPage: 1,
	itemsPerPage: 10,
	totalPages: 1,

	o_currentPage: 1,
	o_itemsPerPage: 10,
	o_totalPages: 1,

	setPage: (page) => {
		console.log("setPage called with:", page);
		set({ currentPage: page });
		//console.log("New currentPage in state:", get().currentPage);
	  },
	o_setPage: (page) => {
		console.log("setPage called with:", page);
		set({ o_currentPage: page });
	  },


    createProduct: async ({ name, image, description, amount, quantity, product_category}) => {
		set({ loading: true });
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
	       }

		try {
			const res = await axiosInstance.post("/admin/product/create", { name, image, description, amount, quantity, product_category });
			set({  loading: false,  });
			console.log("Product result",res.data.mesage)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating Product", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAllProduct: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/product/get", {
				params: { page, limit },
			  });
			set({  loading: false,  productData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit});
			console.log("All Product result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Product", loading: false });
			console.log("Product Error",error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getProduct: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/product/${id}`);
			set({  loading: false,  singleProduct: res.data.data});
			console.log("single Product result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Product", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateProduct: async ({id, name, image, description, amount, quantity, product_category, stock_status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/product//${id}`, {name, image, description, amount, quantity, product_category, stock_status});
			set({  loading: false });
			//console.log("Product result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating Product", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    changeProductStatus: async ({id, status, scheduledDate}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-newsletter-status/${id}`, { status, scheduledDate});
			set({  loading: false });
			console.log("update blog result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    deleteProduct: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/delete-newsletter/${id}`);
			set({  loading: false });
			console.log("deleted blog")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},


    /* BLOG CATEGORY HERE */
	createCategory: async ({ name}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/product_category", { name });
			set({  loading: false,  });
			console.log("product result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating product category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    getAllCategory: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/product_category");
			set({  loading: false,  categoryData: res?.data?.data});
			console.log("All category result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blogs", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

   /*  getCategory: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/get_single_hub_categories/${id}`);
			set({  loading: false,  singleCategory: res.data.result});
			//console.log("single blog result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Blog", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateCategory: async ({id, name}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/update-blog-category/${id}`, {name});
			set({  loading: false });
			console.log("update category result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating blog category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    deleteCategory: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/admin/hub_category//${id}`);
			set({  loading: false });
			console.log("deleted blog category")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting category", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, */

	getAllOrders: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/product/orders", {
				params: { page, limit },
			  });
			set({  loading: false,  orderData: res.data.data, o_totalPages: res.data.pagination?.totalPages, o_currentPage: page, o_itemsPerPage: limit});
			console.log("All Order result",res.data.data)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching orders", loading: false });
			console.log("orders Error",error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	changeOrderStatus: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/product/update_status/${id}`, { status});
			set({  loading: false });
			console.log("update order result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating order", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}));