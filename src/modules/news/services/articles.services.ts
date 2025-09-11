import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Lấy danh sách articles có phân trang
export const getArticles = async (page = 1, limit = 10, search?: string): Promise<{ data: any[]; total: number }> => {
	console.log('Fetching articles from API:', `${API_URL}/articles?page=${page}&limit=${limit}${search ? `&search=${search}` : ''}`);
		const response = await axios.get(`${API_URL}/articles`, {
			params: { page, limit, ...(search ? { search } : {}) }
		});
		return response.data as { data: any[]; total: number };
};

// Lấy một article theo id
export const getArticleById = async (id: number | string): Promise<any> => {
	const response = await axios.get(`${API_URL}/articles/${id}`);
	return response.data;
};

// Lấy một article theo slug
export const getArticleBySlug = async (slug: string): Promise<any> => {
  const response = await axios.get(`${API_URL}/articles/slug/${slug}`);
  return response.data;
};

// Tạo mới một article
export const createArticle = async (article: Partial<any>): Promise<any> => {
	const response = await axios.post(`${API_URL}/articles`, article);
	return response.data;
};

// Cập nhật một article
export const updateArticle = async (id: number | string, article: Partial<any>): Promise<any> => {
	const response = await axios.put(`${API_URL}/articles/${id}`, article);
	return response.data;
};

// Xóa một article
export const deleteArticle = async (id: number | string): Promise<any> => {
	const response = await axios.delete(`${API_URL}/articles/${id}`);
	return response.data;
};

// Xóa tất cả articles
export const deleteAllArticles = async (): Promise<any> => {
	const response = await axios.delete(`${API_URL}/articles/delete-all`);
	return response.data;
};

// Tạo nhiều articles từ WordPress
export const createBulkFromWordPress = async (wordpressArticles: any[]): Promise<any> => {
	const response = await axios.post(`${API_URL}/articles/all-articles`, wordpressArticles);
	return response.data;
};
