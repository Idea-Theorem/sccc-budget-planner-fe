import { HTTP_CLIENT } from "../utils/axiosClient";





const createCenters = async (data: any) => {
    return await HTTP_CLIENT.post("/center", data);
};
const getAllCenters = async () => {
  return await HTTP_CLIENT.get("/center");
};
  
  const updateCenter = async (data: any, id: string) => {
    return await HTTP_CLIENT.put(`/center/${id}`, data);
  };

  const deleteCenter = async (id: string) => {
    return await HTTP_CLIENT.delete(`/center/${id}`);
  };

  


export {

    createCenters,
    getAllCenters,
  updateCenter,
  deleteCenter
};