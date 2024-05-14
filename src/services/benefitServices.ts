import { HTTP_CLIENT } from "../utils/axiosClient";


const createBenefit = async (data: any) => {
    return await HTTP_CLIENT.post("/benefit", data);
};
const getAllBenefit = async () => {
    return await HTTP_CLIENT.get("/benefit");
};

const updateBenefit = async (data: any, id: string) => {
    return await HTTP_CLIENT.put(`/benefit/${id}`, data);
};

const deleteBenefit = async (id: string) => {
    return await HTTP_CLIENT.delete(`/benefit/${id}`);
};

export {
    createBenefit,
    getAllBenefit,
    updateBenefit,
    deleteBenefit
};