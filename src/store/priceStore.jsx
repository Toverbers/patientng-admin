import { create } from "zustand";

import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";

export const usePriceStore = create((set, get) => ({
    priceData: null,
	singlePriceData: null,
	priceDetails: null,
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


 createPrice: async ({ type, product, category }) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/admin/prize", { type, product, category  });
			set({  loading: false, quizDetails: res.data.data  });
			console.log("Price result",res.data.data)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating price", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllPrice: async (page = 1, limit = 10) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/prize/get", {
				params: { page, limit },
			  });
			set({  loading: false,  priceData: res.data.data, totalPages: res.data.pagination?.totalPages, currentPage: page, itemsPerPage: limit});
			console.log("All quiz result",res)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getQuiz: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/quiz/${id}`);
			set({  loading: false,  singlecQuizData: res});
			console.log("single qiiz result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching Quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateQuiz: async ({id,title, description,number_of_questions, number_of_attempt}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/quiz/${id}`, {title, description,number_of_questions, number_of_attempt});
			set({  loading: false });
			console.log("update quiz result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    changeQuizStatus: async ({id, status}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/quiz/${id}`, {status});
			set({  loading: false });
			//console.log("update status result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating status", loading: false });
			//console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}

    },

     deleteQuiz: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/admin/quiz/${id}`);
			set({  loading: false });
			console.log("deleted quiz")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting quiz", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},
     




    /* QUESTIONS STORE */
    createQuestion: async ({ title, description,number_of_questions, number_of_attempt}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.post("/admin/question/create ", { title, description,number_of_questions, number_of_attempt });
			set({  loading: false,  });
			console.log("question result",res.data.message)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Creating question", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    getAllQuestion: async () => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get("/admin/question/get");
			set({  loading: false,  quizData: res.data.result});
			//console.log("All question result",res.data.result)
			//toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching question", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    getQuestion: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.get(`/admin/question/${id}`);
			set({  loading: false,  singlecQuizData: res});
			console.log("single question result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error Fetching question", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},

    updateQuestion: async ({id,title, description,number_of_questions, number_of_attempt}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.put(`/admin/question/${id}`, {title, description,number_of_questions, number_of_attempt});
			set({  loading: false });
			console.log("update question result",res.data.result)
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error updating question", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	}, 

    deleteQuestion: async ({id}) => {
		set({ loading: true });

		try {
			const res = await axiosInstance.delete(`/admin/question/${id}`);
			set({  loading: false });
			console.log("deleted question")
			toast.success(res.data.message);
		} catch (error) {
			set({ error: error.response?.data?.message || "Error deleting question", loading: false });
			console.log(error);
			toast.error(error.response.data.message || "An error occurred");
		}
	},



}))