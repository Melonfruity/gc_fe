import axios from 'axios';
const baseUrl = "http://localhost:8000"

export const getAllLeads = async () => {
	const res = await axios({
		url: `${baseUrl}/get-all`,
		methed: 'get',
	});
	return res;
}

export const getSummary = async () => {
	const res = await axios({
		url: `${baseUrl}/get-summary`,
		method: 'get',
	});
	return res;
}

export const addLead = async (entry) => {
	const res = await axios.post(`${baseUrl}/lead`, { entry });
	return res;
}

export const removeLead = async (index) => {
	const res = await axios.delete(`${baseUrl}/lead/${index}`);
	return res;
}

export const updateLead = async (entry) => {
	const res = await axios.put(`${baseUrl}/lead/${entry.index}`, { entry });
	return res;
}